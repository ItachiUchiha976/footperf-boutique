/* ============================================================
   Quelle Légende du Foot es-tu ?  —  FootStats
   Données : 16 légendes (faits EVERGREEN vérifiés) + banque de questions.
   Chaque fait a été vérifié sur le web (FIFA, UEFA, Guinness, Wikipédia,
   Britannica) — voir Output/Business_WebApp_quelle-legende-foot_Plan.md
   ============================================================ */

const LEGENDS = {
  pele: {
    name: "Pelé",
    archetype: "Le Roi",
    country: "Brésil",
    flag: "🇧🇷",
    era: "1956 – 1977",
    tags: ["Instinct du but", "Joie", "Légende absolue"],
    devise: "Un champion se mesure à sa capacité à se relever.",
    desc: "Tu es le foot à l'état pur : l'instinct du buteur, le sens du grand match et une joie communicative. Né pour briller sur la plus grande scène, tu transformes la pression en chefs-d'œuvre. On ne te discute pas, on t'admire.",
    facts: [
      "Seul joueur de l'histoire à avoir remporté 3 Coupes du Monde (1958, 1962, 1970).",
      "Surnommé « O Rei » (Le Roi), icône éternelle du Brésil et du football mondial."
    ]
  },
  maradona: {
    name: "Diego Maradona",
    archetype: "Le Génie Rebelle",
    country: "Argentine",
    flag: "🇦🇷",
    era: "1976 – 1997",
    tags: ["Dribble", "Cœur", "Leadership"],
    devise: "Je joue avec le cœur, pas seulement avec les pieds.",
    desc: "Tu es pur génie et pure passion. Indomptable, charismatique, tu portes une équipe entière sur tes épaules et tu défies l'autorité. Tes coups d'éclat restent gravés à jamais — pour le meilleur, et parfois le sulfureux.",
    facts: [
      "Champion du monde 1986, tournoi qu'il a illuminé presque à lui seul.",
      "Auteur du « But du Siècle » et de la « Main de Dieu » contre l'Angleterre en 1986."
    ]
  },
  zidane: {
    name: "Zinédine Zidane",
    archetype: "Le Maestro",
    country: "France",
    flag: "🇫🇷",
    era: "1989 – 2006",
    tags: ["Élégance", "Sang-froid", "Technique"],
    devise: "La classe, c'est de rester calme quand tout s'emballe.",
    desc: "Tu es l'élégance faite joueur : un toucher de balle soyeux, une sérénité de chef et des gestes qui semblent ralentir le temps. Sous ton calme couve un feu qui se réveille dans les très grands rendez-vous.",
    facts: [
      "Double buteur de la tête en finale de la Coupe du Monde 1998.",
      "Ballon d'Or 1998 ; auteur de la légendaire « volée de Glasgow » en finale de C1 2002 avec le Real Madrid."
    ]
  },
  messi: {
    name: "Lionel Messi",
    archetype: "Le Magicien",
    country: "Argentine",
    flag: "🇦🇷",
    era: "2004 – aujourd'hui",
    tags: ["Dribble", "Génie discret", "Régularité"],
    devise: "Tu peux tout réussir si tu y crois et si tu travailles.",
    desc: "Tu es un génie discret : pas de bruit, juste des merveilles répétées. Balle au pied, tu sembles téléguidé, et ta constance défie l'imagination. L'humilité comme signature, l'extraordinaire comme habitude.",
    facts: [
      "Recordman absolu avec 8 Ballons d'Or.",
      "Champion du monde 2022 avec l'Argentine."
    ]
  },
  cr7: {
    name: "Cristiano Ronaldo",
    archetype: "La Machine",
    country: "Portugal",
    flag: "🇵🇹",
    era: "2002 – aujourd'hui",
    tags: ["Travail", "Ambition", "Mental d'acier"],
    devise: "Le talent sans travail n'est rien.",
    desc: "Tu es l'obsession de la gagne incarnée : discipline de fer, physique sculpté, mental d'acier. Tu repousses tes limites chaque jour et tu transformes l'ambition en buts. Rien ne t'est offert : tout est conquis.",
    facts: [
      "5 Ballons d'Or et meilleur buteur de l'histoire en équipe nationale.",
      "Champion d'Europe avec le Portugal à l'Euro 2016."
    ]
  },
  cruyff: {
    name: "Johan Cruyff",
    archetype: "Le Visionnaire",
    country: "Pays-Bas",
    flag: "🇳🇱",
    era: "1964 – 1984",
    tags: ["Intelligence", "Vision", "Innovation"],
    devise: "Jouer au foot est simple, mais jouer simple est le plus dur.",
    desc: "Tu es un cerveau avant d'être un joueur : tu vois le jeu deux temps d'avance et tu inventes des solutions que personne n'imagine. Philosophe du ballon, tu changes la manière même de jouer.",
    facts: [
      "Triple Ballon d'Or, maître du « football total ».",
      "Inventeur du geste mythique, la « Cruyff turn », au Mondial 1974."
    ]
  },
  beckenbauer: {
    name: "Franz Beckenbauer",
    archetype: "Le Kaiser",
    country: "Allemagne",
    flag: "🇩🇪",
    era: "1964 – 1983",
    tags: ["Leadership", "Sang-froid", "Organisation"],
    devise: "Un grand joueur dirige le jeu sans jamais s'affoler.",
    desc: "Tu es un leader-né, élégant et impérial. Tu lis le jeu de derrière, tu organises tout et tu relances avec une classe folle. « L'Empereur » : on te suit naturellement, sur le terrain comme en dehors.",
    facts: [
      "« Der Kaiser » : champion du monde comme joueur (1974) ET comme sélectionneur (1990).",
      "Pionnier du rôle de libéro moderne."
    ]
  },
  r9: {
    name: "Ronaldo (R9)",
    archetype: "Le Phénomène",
    country: "Brésil",
    flag: "🇧🇷",
    era: "1993 – 2011",
    tags: ["Explosivité", "Instinct", "Résilience"],
    devise: "On tombe, on se relève, on marque.",
    desc: "Tu es l'explosion incarnée : vitesse, puissance et instinct dévastateur devant le but. Frappé par les blessures, tu reviens toujours plus fort. Un « Phénomène » qui rend l'impossible naturel.",
    facts: [
      "« Le Phénomène » : 2 Ballons d'Or (1997, 2002).",
      "Meilleur buteur du Mondial 2002 (8 buts) et champion du monde."
    ]
  },
  ronaldinho: {
    name: "Ronaldinho",
    archetype: "Le Showman",
    country: "Brésil",
    flag: "🇧🇷",
    era: "1998 – 2015",
    tags: ["Fantaisie", "Sourire", "Spectacle"],
    devise: "Le foot, c'est avant tout du plaisir.",
    desc: "Tu es le sourire du football : tu joues pour t'amuser et amuser les autres. Dribbles improbables, gestes magiques, bonne humeur contagieuse — avec toi, chaque match devient un spectacle.",
    facts: [
      "Ballon d'Or 2005 et double meilleur joueur FIFA (2004, 2005).",
      "Champion du monde 2002, magicien du FC Barcelone."
    ]
  },
  platini: {
    name: "Michel Platini",
    archetype: "Le Stratège",
    country: "France",
    flag: "🇫🇷",
    era: "1972 – 1987",
    tags: ["Vista", "Coups francs", "Meneur"],
    devise: "Le bon joueur joue où le ballon va arriver.",
    desc: "Tu es le chef d'orchestre : vision, intelligence et une frappe chirurgicale sur coup franc. Tu décides du rythme et tu fais gagner les tiens. Un meneur de jeu qui transforme la stratégie en titres.",
    facts: [
      "Premier joueur à remporter 3 Ballons d'Or de suite (1983, 1984, 1985).",
      "Champion d'Europe 1984 avec la France (9 buts, record pour une seule édition)."
    ]
  },
  maldini: {
    name: "Paolo Maldini",
    archetype: "Le Roc",
    country: "Italie",
    flag: "🇮🇹",
    era: "1985 – 2009",
    tags: ["Loyauté", "Longévité", "Classe"],
    devise: "La fidélité et la régularité forgent les légendes.",
    desc: "Tu es la fiabilité absolue : un roc en défense, une classe naturelle et une loyauté sans faille. Toute une carrière au même maillot, au plus haut niveau, pendant deux décennies. L'élégance et la constance.",
    facts: [
      "Toute sa carrière (25 saisons) à l'AC Milan, surnommé « Il Capitano ».",
      "5 fois vainqueur de la Coupe d'Europe / Ligue des Champions."
    ]
  },
  baggio: {
    name: "Roberto Baggio",
    archetype: "L'Artiste",
    country: "Italie",
    flag: "🇮🇹",
    era: "1982 – 2004",
    tags: ["Panache", "Sensibilité", "Résilience"],
    devise: "Le talent, c'est aussi savoir se relever des chutes.",
    desc: "Tu es un artiste sensible, capable du geste sublime comme du moment de doute. Tu portes une équipe avec panache et élégance, et tu rebondis toujours après l'épreuve. La beauté du jeu, avec une touche de mélancolie.",
    facts: [
      "« Il Divin Codino » (la divine queue-de-cheval), Ballon d'Or 1993.",
      "Star de l'Italie au Mondial 1994, malgré son penalty manqué en finale."
    ]
  },
  henry: {
    name: "Thierry Henry",
    archetype: "La Foudre",
    country: "France",
    flag: "🇫🇷",
    era: "1994 – 2014",
    tags: ["Vitesse", "Finition froide", "Élégance"],
    devise: "Garder la tête froide quand le but s'ouvre.",
    desc: "Tu es la vitesse alliée au sang-froid : tu prends la profondeur, tu élimines et tu conclus avec une froideur de tueur. Élégant balle au pied, dévastateur devant le but — un attaquant total.",
    facts: [
      "Meilleur buteur de l'histoire d'Arsenal (228 buts).",
      "« Invincible » lors de la saison 2003-04 (championnat invaincu) ; champion du monde 1998 et d'Europe 2000."
    ]
  },
  iniesta: {
    name: "Andrés Iniesta",
    archetype: "Le Cerveau Discret",
    country: "Espagne",
    flag: "🇪🇸",
    era: "2002 – 2024",
    tags: ["Humilité", "Décisif", "Intelligence"],
    devise: "Le collectif d'abord, l'ego jamais.",
    desc: "Tu es le joueur de l'ombre qui décide tout : discret, humble, mais décisif dans les plus grands moments. Tu fais briller le collectif et tu surgis quand l'Histoire l'exige. La modestie au service du génie.",
    facts: [
      "Buteur décisif en finale de la Coupe du Monde 2010 (116e minute) contre les Pays-Bas.",
      "Maître du milieu de terrain du Barça et de l'Espagne (champion d'Europe 2008 & 2012)."
    ]
  },
  garrincha: {
    name: "Garrincha",
    archetype: "La Joie du Peuple",
    country: "Brésil",
    flag: "🇧🇷",
    era: "1953 – 1972",
    tags: ["Dribble joyeux", "Insouciance", "Instinct"],
    devise: "Jouer comme dans la rue, pour le plaisir.",
    desc: "Tu es l'insouciance et la joie pure du jeu de rue. Dribbleur de génie, imprévisible et facétieux, tu enchantes les foules sans calcul. Le bonheur de jouer avant tout — et ça change tout.",
    facts: [
      "« La joie du peuple » (Alegria do Povo), dribbleur de génie.",
      "Star et champion du Mondial 1962, en l'absence de Pelé blessé."
    ]
  },
  vanbasten: {
    name: "Marco van Basten",
    archetype: "Le Maître-Buteur",
    country: "Pays-Bas",
    flag: "🇳🇱",
    era: "1981 – 1995",
    tags: ["Technique pure", "Élégance", "Frappe"],
    devise: "La perfection technique, jusque dans le moindre geste.",
    desc: "Tu es le buteur d'exception : technique parfaite, gestes d'orfèvre et frappes de légende. Élégant et précis, tu transformes l'occasion la plus folle en évidence. La beauté au service de l'efficacité.",
    facts: [
      "Triple Ballon d'Or (1988, 1989, 1992).",
      "Auteur d'une volée légendaire en finale de l'Euro 1988, remporté par les Pays-Bas."
    ]
  }
};

/* Ordre d'affichage / de référence des 16 légendes */
const LEGEND_IDS = Object.keys(LEGENDS);

/* ---------- Banque de questions (14, on en tire 10 au hasard) ----------
   Chaque option pointe (poids) vers des légendes. Le test additionne les
   poids ; la légende au plus haut score est le résultat. */
const QUESTIONS = [
  {
    q: "Sur le terrain, tu te vois plutôt…",
    a: [
      { t: "Planté devant le but, à l'affût du moindre ballon", w: { pele: 1, cr7: 1, r9: 2, vanbasten: 2, henry: 2 } },
      { t: "Au cœur du jeu, à distribuer les caviars", w: { zidane: 2, cruyff: 2, platini: 2, iniesta: 2, maradona: 1 } },
      { t: "Sur l'aile, balle au pied, prêt à éliminer", w: { messi: 2, ronaldinho: 2, garrincha: 2, maradona: 1, henry: 1 } },
      { t: "Derrière, à tout lire et relancer proprement", w: { beckenbauer: 3, maldini: 3 } }
    ]
  },
  {
    q: "Ton arme secrète, c'est…",
    a: [
      { t: "Le dribble qui rend l'adversaire fou", w: { maradona: 2, ronaldinho: 2, garrincha: 2, messi: 2 } },
      { t: "Une frappe pure, lourde et précise", w: { platini: 2, vanbasten: 2, henry: 1, zidane: 1 } },
      { t: "La vista : voir la passe avant tout le monde", w: { cruyff: 2, iniesta: 2, platini: 1, zidane: 1 } },
      { t: "Le sang-froid : être au niveau match après match", w: { maldini: 2, henry: 2, cr7: 1, pele: 1 } }
    ]
  },
  {
    q: "Ton tempérament ?",
    a: [
      { t: "Calme et élégant, rien ne te fait perdre la tête", w: { zidane: 2, beckenbauer: 2, maldini: 2, iniesta: 1 } },
      { t: "Bouillant, passionné, un vrai feu intérieur", w: { maradona: 2, baggio: 2, zidane: 1 } },
      { t: "Joyeux, tu joues d'abord pour le plaisir", w: { ronaldinho: 2, garrincha: 2, pele: 1 } },
      { t: "Discret, mais redoutablement déterminé", w: { messi: 2, iniesta: 2, henry: 1, vanbasten: 1 } }
    ]
  },
  {
    q: "Ce qui te fait vibrer dans le foot ?",
    a: [
      { t: "Gagner, encore et encore — les titres avant tout", w: { cr7: 2, beckenbauer: 2, platini: 1, pele: 1 } },
      { t: "Le beau jeu, le geste parfait", w: { cruyff: 2, zidane: 2, vanbasten: 1, ronaldinho: 1 } },
      { t: "Le grand moment, le but qui entre dans l'Histoire", w: { maradona: 2, iniesta: 2, zidane: 1, vanbasten: 1 } },
      { t: "Le plaisir de jouer et le spectacle", w: { ronaldinho: 2, garrincha: 2, baggio: 1 } }
    ]
  },
  {
    q: "Face à l'adversité (blessure, échec, critique), tu…",
    a: [
      { t: "Reviens plus fort, encore et encore", w: { r9: 3, baggio: 2 } },
      { t: "Restes fidèle à toi-même, sans jamais lâcher", w: { maldini: 2, henry: 1, iniesta: 1, pele: 1 } },
      { t: "Réponds sur le terrain, par un geste de génie", w: { maradona: 2, zidane: 1, baggio: 1 } },
      { t: "Encaisses en silence et tu avances", w: { messi: 2, vanbasten: 1, iniesta: 1 } }
    ]
  },
  {
    q: "Ton moment de gloire idéal ?",
    a: [
      { t: "Soulever la Coupe du Monde", w: { pele: 2, maradona: 2, beckenbauer: 1, iniesta: 1, r9: 1 } },
      { t: "Marquer un but d'anthologie en finale", w: { zidane: 2, vanbasten: 2, iniesta: 2, maradona: 1 } },
      { t: "Recevoir le Ballon d'Or", w: { cruyff: 2, platini: 2, cr7: 2, messi: 2, ronaldinho: 1 } },
      { t: "Être adoré par tout un peuple", w: { garrincha: 2, ronaldinho: 1, maradona: 1, pele: 1 } }
    ]
  },
  {
    q: "Ton rapport au talent et au travail ?",
    a: [
      { t: "Le talent ne suffit pas : je bosse plus que tout le monde", w: { cr7: 3, henry: 1 } },
      { t: "Je suis né avec quelque chose en plus, c'est naturel", w: { garrincha: 2, ronaldinho: 2, pele: 1, maradona: 1 } },
      { t: "Génie ET rigueur : je peaufine chaque détail", w: { vanbasten: 2, zidane: 1, platini: 1, messi: 1 } },
      { t: "L'intelligence d'abord : je joue avec ma tête", w: { cruyff: 2, beckenbauer: 2, iniesta: 1 } }
    ]
  },
  {
    q: "Le club de ta vie, ce serait…",
    a: [
      { t: "Un seul maillot, toute ma carrière", w: { maldini: 3, pele: 1 } },
      { t: "Conquérir l'Europe avec un grand club", w: { cr7: 1, r9: 2, beckenbauer: 1, vanbasten: 1, zidane: 1 } },
      { t: "Faire briller un club par mon jeu", w: { ronaldinho: 2, henry: 3, baggio: 1 } },
      { t: "Là où on me laisse créer en liberté", w: { cruyff: 2, maradona: 1, platini: 1, iniesta: 1 } }
    ]
  },
  {
    q: "On te décrit surtout comme…",
    a: [
      { t: "Un leader, un capitaine né", w: { beckenbauer: 2, maldini: 2, platini: 1, cr7: 1 } },
      { t: "Un artiste, un magicien du ballon", w: { ronaldinho: 2, messi: 2, baggio: 2, maradona: 1 } },
      { t: "Un finisseur, une machine à buts", w: { r9: 3, vanbasten: 2, henry: 2 } },
      { t: "Un cerveau, un chef d'orchestre", w: { cruyff: 2, zidane: 2, iniesta: 1, platini: 1 } }
    ]
  },
  {
    q: "Ton image, ton style en dehors du terrain ?",
    a: [
      { t: "Classe, sobre, élégant", w: { zidane: 2, maldini: 2, beckenbauer: 1 } },
      { t: "Décontracté, souriant, sympa", w: { ronaldinho: 2, garrincha: 2, pele: 1 } },
      { t: "Soigné, ambitieux, image léchée", w: { cr7: 3, henry: 1 } },
      { t: "Discret, simple, je laisse parler le jeu", w: { messi: 2, iniesta: 2, vanbasten: 1 } }
    ]
  },
  {
    q: "Si tu devais marquer l'Histoire d'un seul geste ?",
    a: [
      { t: "Un dribble impossible qui fait le tour du monde", w: { maradona: 2, ronaldinho: 1, garrincha: 1, messi: 1 } },
      { t: "Une reprise de volée parfaite", w: { zidane: 2, vanbasten: 2 } },
      { t: "Un coup franc en pleine lucarne", w: { platini: 3, baggio: 1 } },
      { t: "Une passe décisive de génie", w: { iniesta: 2, cruyff: 1, messi: 1, zidane: 1 } }
    ]
  },
  {
    q: "Ta plus grande qualité humaine sur le terrain ?",
    a: [
      { t: "Le courage : je prends le jeu à mon compte", w: { maradona: 2, baggio: 2, platini: 1 } },
      { t: "L'humilité : le collectif avant l'ego", w: { iniesta: 2, maldini: 1, messi: 1, pele: 1 } },
      { t: "La constance : toujours au rendez-vous", w: { maldini: 2, henry: 1, cr7: 1, pele: 1 } },
      { t: "La créativité : surprendre, toujours", w: { ronaldinho: 2, cruyff: 1, garrincha: 1, baggio: 1 } }
    ]
  },
  {
    q: "Quel surnom te plairait le plus ?",
    a: [
      { t: "« Le Roi » / « Le Phénomène »", w: { pele: 2, r9: 2 } },
      { t: "« Le Maestro » / « Le Kaiser »", w: { zidane: 2, beckenbauer: 2, platini: 1 } },
      { t: "« El Mago » / « Le Sorcier »", w: { messi: 2, ronaldinho: 2, maradona: 1 } },
      { t: "« La Joie du peuple » / « Le Divin »", w: { garrincha: 2, baggio: 2, ronaldinho: 1 } }
    ]
  },
  {
    q: "En une phrase, ta devise ?",
    a: [
      { t: "« Le travail bat le talent quand le talent ne travaille pas. »", w: { cr7: 2, henry: 1, maldini: 1 } },
      { t: "« Jouer simple, c'est le plus difficile. »", w: { cruyff: 3, iniesta: 1 } },
      { t: "« Le foot, c'est de la joie, pas une corvée. »", w: { ronaldinho: 2, garrincha: 2, pele: 1 } },
      { t: "« Le génie, c'est de rendre le difficile facile. »", w: { messi: 2, baggio: 2, zidane: 1 } }
    ]
  }
];
