# FootPerf — Système de design (référence)

> **À LIRE AVANT TOUTE ÉDITION DU SITE.** Ce fichier est la source de vérité du design de
> `footperf.fr` (repo `ItachiUchiha976/footperf-boutique`, GitHub Pages + CNAME).
> Tout ce qui suit est **extrait des fichiers réels** (`index.html`, `bos-modern.css`,
> `bos-promo.js`, `bos-reveal.js`, `bos-trust.js`, `bos-retractation.js`,
> `coupe-du-monde-2026/index.html`) — rien n'est inventé. Si tu modifies le design,
> mets ce fichier à jour dans le même commit.
>
> Dernière mise à jour : 17/07/2026.

## 1. Identité

- **Marque** : FootPerf — équipements d'entraînement football + guide numérique Coupe du Monde 2026.
- **Âme visuelle** : terrain de foot la nuit sous projecteurs. Vert profond + lime fluo, énergie, sport.
- **Logo** : texte pur `Foot<span>Perf</span>` — « Foot » en blanc, « Perf » en `--lime`. Poids 900, letter-spacing -0.5px. Favicon = émoji ⚽ en SVG inline (data URI).
- **Architecture** : boutique **catalogue mono-page** (`index.html` : fiche produit phare + grille de 7 produits générée en JS depuis le tableau `products`). Sous-pages : `coupe-du-monde-2026/` (guide PDF 4,90 €), `s-entrainer-au-foot-a-la-maison.html` (guide SEO), `quiz/`, `legende-foot/` (jeu), pages légales. **Il n'existe pas de fiche produit dédiée par article** — plusieurs comportements des scripts partagés en découlent (voir §6).

## 2. Palette (valeurs exactes, définies dans `:root` d'`index.html`)

### Couleurs de marque
| Token | Hex | Rôle |
|---|---|---|
| `--green` | `#0d3b2a` | Vert profond signature. Fond nav, hero, section newsletter, boutons `.add-to-cart`/`.checkout-btn`, texte sur fond lime. |
| `--green-light` | `#1a5c3f` | Vert clair. Hover des boutons verts, coches ✓ des features, accents texte, couleur du texte des descriptions produit. |
| `--lime` | `#c8f000` | **Accent signature.** CTA primaires, « Perf » du logo, badges, `em` du h1, liserets, chiffres des hero-stats. Toujours avec texte `--green` dessus. |
| `--white` | `#ffffff` | Fond des pages et cartes. |
| `--red` | `#e03131` | Uniquement la pastille compteur du panier (`.cart-count`). |

### Gris (échelle Bootstrap-like)
| Token | Hex | Rôle |
|---|---|---|
| `--gray-50` | `#f8f9fa` | Fonds de section alternés (`#pourquoi`, `#faq`), trust-bar, résumé de commande. |
| `--gray-100` | `#f1f3f5` | Fond placeholder images, séparateurs internes de carte. |
| `--gray-200` | `#e9ecef` | Bordures (cartes, inputs, séparateurs). |
| `--gray-600` | `#6c757d` | Texte secondaire (sous-titres, descriptions, notes). |
| `--gray-800` | `#343a40` | Texte courant appuyé (features, labels). |
| `--gray-900` | `#212529` | Texte principal (couleur du `body`), fond du footer. |

### Couleurs ponctuelles hors variables (à réutiliser telles quelles)
- **PayPal / carte** : `#003087` (fond `.fiche-paypal`, `.buy-now-btn`), hover `#001c64`.
- **Badge bundle** : `#ff6b00` (orange, texte blanc).
- **Fond « bénéfice »** : `#f7ffd6` (blocs `.bos-kit-benefit` / `.card-benefit`, liseret gauche lime).
- **Fond descriptions produit** : `#F0F7F2` (vert très pâle — voir §3 typo Titillium).
- **Alerte photo en attente** : fond `#fff3cd`, texte `#7a4d00`, bordure `#f0ad4e` (aussi `.shopify-note` : texte `#856404`, bordure `#ffc107`).
- **Reflet animé du h1** : dégradé `#E4FF66 → #F7FFD1 → #8FB800` (bos-modern.css).

### Ombres et rayons
- `--radius: 12px` (cartes, modales). Gros CTA : `10px`. Petits boutons/inputs/vignettes : `8px`. Pills/chips : `100px`.
- `--shadow: 0 4px 20px rgba(0,0,0,0.10)` · `--shadow-lg: 0 8px 40px rgba(0,0,0,0.14)`.
- Hover carte produit (bos-modern.css) : `0 24px 50px rgba(13,59,42,.20), 0 4px 14px rgba(200,240,0,.18)`.

## 3. Typographies

Chargées via Google Fonts (`preconnect` + un seul `<link>`) :
`Inter:wght@400;500;600;700;800;900` + `Titillium+Web:wght@400;600`.

| Famille | Rôle |
|---|---|
| **Inter** | Police de base de TOUT le site. `body { font-family:'Inter',sans-serif; font-size:16px; line-height:1.6 }`. Titres en 800-900, boutons en 700-800, texte courant 400-600. |
| **Titillium Web** | **Typo distinctive des descriptions produit** (ajoutée le 17/07/2026, commit `803febc`). Appliquée UNIQUEMENT via `bos-modern.css` sur `#productsGrid .product-desc, .product-card .product-desc` : 400, `0.97rem`, `line-height:1.68`, couleur `var(--green-light)`, fond `#F0F7F2`, `border-left:3px solid var(--lime)`, radius 7px, padding `0.6rem 0.9rem`. Âme « terrain / énergie » (police sport/technique). Ne pas l'étendre à d'autres blocs sans raison. |

Échelle des titres (fluid type via `clamp`) :
- `h1` hero : `clamp(1.9rem, 5vw, 3rem)`, 900, `line-height:1.15` — mot-clé dans `<em>` (lime, `font-style:normal`).
- `.fiche-title` : `clamp(1.5rem, 3.2vw, 2.1rem)`, 900.
- `.section-title` : `clamp(1.4rem, 3vw, 1.9rem)`, 800 + `.section-sub` en `--gray-600`.
- `.fiche-price` : `2rem`, 900, `--green`. `.price` (cartes) : `1.3rem`, 800.
- Micro-textes : notes `0.78rem`, features `0.82rem`, badges `0.7-0.78rem` uppercase + letter-spacing.

⚠️ La page `coupe-du-monde-2026/` ne charge QUE Inter (pas de Titillium — elle n'a pas de `.product-desc`).

## 4. Layout & espacement

- **Conteneur** : `max-width:1100px; margin:0 auto` (`.container`, `.nav-inner`, `.trust-inner`, `.footer-inner`). Hero inner : 700px. FAQ : 800px.
- **Sections** : `padding: 4rem 1.5rem` (hero : `4rem 1.5rem 5rem`). Fonds alternés blanc / `--gray-50` — jamais de `:nth-child(even)` global.
- **Nav** : hauteur 60px, sticky top, `z-index:100`.
- **Grilles** : produits `repeat(auto-fill, minmax(300px,1fr))` gap 1.5rem · pourquoi `minmax(240px,1fr)` · fiche phare 2 colonnes gap 2.5rem · footer `2fr 1fr 1fr`.
- **Breakpoints réels** : `900px` (fiche-grid → 1 col), `768px` (nav-links masqués, footer 1 col, email-form en colonne), `560px` (bos-trust 2→4 col), `480px` (modales → bottom-sheet plein écran).
- **Mobile** : PAS de menu burger sur FootPerf. À ≤768px les liens de nav disparaissent et un CTA `.mobile-cta-nav` « Commander → » (lime) apparaît, plus le bouton panier. C'est voulu — ne pas « réparer » en ajoutant un burger.
- **Z-index en usage** : nav 100, modales 200, sticky ATC 900, pastille rétractation 9998, barre promo 9999, modal rétractation 10050.

## 5. Composants récurrents

- **Nav sticky auto-masquante** : fond `--green`, se cache en descendant (`nav.bos-nav-hidden { transform:translateY(-110%) }`, transition .28s, géré par `bos-reveal.js`) et réapparaît dès qu'on remonte.
- **Hero** : fond `--green` + photo Pexels terrain en `::before` à 15 % d'opacité + étoiles lime scintillantes en `::after` (bos-modern.css). Badge pill lime uppercase, h1 avec `<em>` lime animé (reflet), 2 CTA (`.btn-primary` lime / `.btn-outline` bordure blanche), rangée `.hero-stats` (chiffre lime 900 + libellé).
- **Trust bar** : bande `--gray-50` sous le hero, 4 items émoji (🚚 livraison 12-20 j · 🔒 paiement sécurisé · ↩️ retours 14 j · 🏆 testé).
- **Fiche produit phare** (`#hero-produit`) : grid image/achat. Eyebrow lime pill, prix 2rem, **bloc bénéfice** `.bos-kit-benefit` (fond `#f7ffd6`, liseret 4px lime, storytelling), bullets émojis, boutons empilés `.fiche-add` (vert) + `.fiche-paypal` (`#003087`), `.cta-micro-note`, bloc réassurance (mount `#bos-trust-mount`), encart « 📦 Ce que vous recevez » + phrase de transparence en italique.
- **Carte produit** `.product-card` : image 200px cover, badge coin haut-gauche (`.hero-badge-card` lime ou `.bundle-badge` orange), nom 700, description (Titillium, voir §3), `.card-benefit`, features en liste ✓ vert, FAQ `<details class="card-faq">`, footer prix + bouton `.add-to-cart` (vert). Produit phare : `border:2px solid var(--lime)`. Hover : levée -8px + double ombre + léger filtre sur l'image.
- **Chips « bientôt au catalogue »** `.coming-soon-chip` : pills grises compactes — jamais de grandes cartes grises pour du non-achetable.
- **Newsletter** : section fond `--green`, input + bouton lime accolés (arrondis fusionnés), note RGPD `0.8rem`.
- **Footer** : fond `--gray-900`, 3 colonnes, liens hover lime, lien FootStats en lime.
- **Modales panier/checkout** : overlay `rgba(0,0,0,0.55)`, panneau blanc aligné à droite (desktop), bottom-sheet ≤480px. Checkout : PayPal `.buy-now-btn` bleu + note honnête.
- **Barre promo −10 %** (`bos-promo.js`, partagée 5 boutiques) : bandeau sticky top, dégradé violet `#6366f1→#8b5cf6→#a855f7` (identité BOS commune, PAS aux couleurs FootPerf — ne pas la re-thémer seul). Remise **permanente**, appliquée auto sur l'article le plus cher. Source de vérité unique : `window.BOS_PROMO.discount(cart)` — utilisée par l'affichage panier ET la facturation PayPal/Stripe.
- **Pastille rétractation** (`bos-retractation.js`) : « ↩ Droit de rétractation » flottante bas-gauche, fond indigo `rgba(30,27,75,.82)`, UNIQUEMENT sur les pages d'achat ; se masque en descendant au scroll. Obligation légale (ordonnance 2026-2) — API `api.tonargentexplique.fr/retractation`.
- **Bloc réassurance** (`bos-trust.js`) : 4 items (🔒 🚚 ↩️ 💬) + badges paiement. ⚠️ FootPerf annonce **14 jours** de rétractation (CGV art. 6) — jamais « 30 jours ».
- **Badge animé produit** `.bos-anim-produit` : médaillon circulaire 68px (84px sur la fiche phare), coin bas-droit de la photo, fond radial vert + anneau lime, SVG inline animé. Jamais sur boutons/prix/texte.

## 6. Animation & mouvement

- **Reveal au scroll** (`bos-reveal.js` + `[data-reveal]` dans bos-modern.css) : fade-up 26px, `.7s`, cascade `.08/.16/.24s` dans les grilles. IntersectionObserver (threshold .01, rootMargin bas -40px) + pass synchrone anti-flash (tout élément au-dessus de 88 % du viewport est révélé avant le premier repaint) + filet au scroll + **backstop dur à 5 s** (tout élément encore masqué est révélé coûte que coûte). En cas d'erreur JS : tout est révélé (fail-safe). **Toute nouvelle section doit rester lisible même si le JS échoue.**
- **Animations SVG produit** (index.html, `<style>` inline) : 7 vignettes thématiques — but (ballon + filet qui tremble), échelle (pas qui s'allument), balle (rebonds), gants (arrêt), cônes (slalom), tibias (bouclier + impact), parachute (coureur + lignes de vitesse) — + trophée CDM. Durées 4.4-5.5 s, `ease-in-out infinite`, CSS keyframes uniquement (pas de lib), `transform-box:fill-box`.
- **Boutons premium** : reflet lumineux traversant (`skewX(-18deg)`, .6s) au hover des `.btn-primary`/`.btn-buy` ; micro-translations/scale ≤ .2s sur le reste.
- **Hero vivant** : `bosTwinkle` (étoiles, 5s alternate), `bosGlow`/`bosFloat` (halo + flottement de la couverture du guide), `bosShine` (reflet du h1, 6.5s).
- **`prefers-reduced-motion: reduce` = OBLIGATOIRE** : chaque bloc d'animation a sa media query qui coupe tout (`animation:none`, `[data-reveal]` visible, `bos-reveal.js` sort immédiatement). Toute nouvelle animation DOIT être couverte.

## 7. Ton de voix (FR)

- **Tutoiement énergique**, langage de terrain : « Prêt pour le coup d'envoi », « la balle décide — toi, tu suis ».
- **Cible double** : le parent (produit phare : « ton enfant installe son terrain tout seul… et lâche l'écran ») et le jeune joueur (réflexes, explosivité).
- **Honnêteté radicale, gravée dans le copy** : livraison « estimée 12 à 20 jours ouvrés » affichée partout, blocs « Transparence : … » et « Honnêtement : … » (ex. : les piquets d'ancrage non garantis dans le colis, le but à lester par vent fort). On préfère le dire AVANT l'achat.
- **Émojis fonctionnels** (⚽🥅⚡🎯🪶🔒🚚↩️💬) en tête de bullet/badge — jamais en pluie décorative.
- **Urgence uniquement RÉELLE** : le compte à rebours de `coupe-du-monde-2026/` est lié à un événement réel (fin du Mondial le 19 juillet) et libellé comme tel (« Offre liée à l'événement »). C'est la seule urgence admise.
- Specs produit = fiche fournisseur du SKU réellement expédié (CJ `CJJT126614301AZ`) — aucune promesse inventée.

## 8. INTERDITS (bloquants — à vérifier avant tout commit)

1. ⛔ **Jamais de compte à rebours factice, de fausse urgence ni de prix barré** (DGCCRF, pratique trompeuse — art. L121-2 Code conso). La remise −10 % de `bos-promo.js` est PERMANENTE : ne jamais y réintroduire un chrono, un « stock limité » inventé ou un faux prix de référence. Seule exception : un décompte vers un **événement réel** (fin du Mondial), libellé honnêtement.
2. ⛔ **Ne jamais casser la chaîne de paiement** : `bos-stripe.js`, `bos-paypal.js`, `bos-paypal-cart.js`, et leurs accroches HTML — `data-bos-key`, `data-bos-price`, `data-bos-cb`, `data-stripe-product`, `data-bos-product-id`, `onclick="addToCart('<id>')"`, `bosProductCB(this)`. Les `id` du tableau `products` (ex. `buts-pop-up`) sont les clés de mapping Stripe : ne jamais les renommer. Le montant affiché doit TOUJOURS égaler le montant facturé (`window.BOS_PROMO.discount(cart)` = source unique).
3. ⛔ **Jamais de lien `github.io` brut en public** : tout lien affiché/partagé = `https://footperf.fr/…` (CLAUDE.md §12.28). Ne pas supprimer `CNAME` ni `.nojekyll`.
4. ⛔ **Contraste AA minimum** : texte `--lime` sur blanc = interdit (illisible) ; le lime ne porte du texte que sur `--green`/fonds sombres. Texte gris ≤ `--gray-600` réservé aux notes ≥ 0.78rem.
5. ⛔ **Français irréprochable** : accents corrects partout (attention aux pipelines qui les détruisent — §12.17 V3), genre **masculin** pour Fred (V5), pas de texte étranger dans les visuels.
6. ⛔ **Visuels produit = vraies photos du SKU CJ expédié** (§12.23) — jamais d'image IA générique montrant le produit. Le client reçoit exactement ce qu'il voit.
7. ⛔ **Livraison honnête** : « 12 à 20 jours ouvrés » — ne jamais promettre mieux. Rétractation = **14 jours** (pas 30).
8. ⛔ **Aucune animation sur/à la place des boutons, prix ou texte** ; toute animation nouvelle doit respecter `prefers-reduced-motion` et ne jamais masquer du contenu (le reveal a son backstop 5 s : le garder).
9. ⛔ Ne pas « réparer » les comportements volontaires : absence de menu burger (§4), barre sticky ATC qui ne se construit pas sur le catalogue mono-page (§5 de bos-modern.css), bandeau promo violet commun aux 5 boutiques.

## 9. Checklist avant push

- [ ] Rendu vérifié en RENDANT la page (Playwright/screenshot, jamais un grep) — desktop ET ~360px.
- [ ] Parcours d'achat testé : ajouter au panier → total (remise −10 % appliquée) → PayPal/Stripe s'ouvrent.
- [ ] `bos-modern.css?v=N` / `bos-promo.js?v=N` : incrémenter le cache-buster si modifiés.
- [ ] Accents, masculin, prix et délais inchangés ou corrects.
- [ ] `prefers-reduced-motion` couvert pour toute nouvelle animation.
- [ ] Vérif live après push : `curl -s https://footperf.fr/…` (build Pages ~20-40 s).
