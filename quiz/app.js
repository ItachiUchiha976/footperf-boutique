/* ============================================================
   Quelle Légende du Foot es-tu ? — FootStats — logique
   ============================================================ */
(function () {
  "use strict";

  var SITE_URL = "https://footperf.fr/quiz/";
  var QUIZ_LEN = 10; // questions tirées par partie

  // --- état ---
  var deck = [];       // questions tirées pour la partie
  var idx = 0;         // index question courante
  var scores = {};     // cumul des poids par légende
  var resultId = null; // légende résultat

  // --- helpers ---
  function $(id) { return document.getElementById(id); }
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function show(screenId) {
    var screens = document.querySelectorAll(".screen");
    for (var i = 0; i < screens.length; i++) screens[i].classList.remove("screen--active");
    $(screenId).classList.add("screen--active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // --- démarrage du test ---
  function startQuiz() {
    deck = shuffle(QUESTIONS).slice(0, Math.min(QUIZ_LEN, QUESTIONS.length));
    idx = 0;
    scores = {};
    for (var i = 0; i < LEGEND_IDS.length; i++) scores[LEGEND_IDS[i]] = 0;
    show("screen-quiz");
    renderQuestion();
  }

  function renderQuestion() {
    var q = deck[idx];
    $("q-counter").textContent = "Question " + (idx + 1) + " / " + deck.length;
    $("progress-bar").style.width = ((idx) / deck.length * 100) + "%";
    $("q-text").textContent = q.q;

    var wrap = $("answers");
    wrap.innerHTML = "";
    var letters = ["A", "B", "C", "D", "E"];
    // on présente les options dans un ordre aléatoire (fraîcheur), mapping conservé
    var opts = shuffle(q.a);
    opts.forEach(function (opt, k) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "answer";
      b.innerHTML = '<span class="dot">' + letters[k] + '</span><span>' + opt.t + '</span>';
      b.addEventListener("click", function () { chooseAnswer(opt, b); });
      wrap.appendChild(b);
    });
  }

  function chooseAnswer(opt, btn) {
    // empêcher double-clic
    var all = document.querySelectorAll("#answers .answer");
    for (var i = 0; i < all.length; i++) all[i].style.pointerEvents = "none";
    btn.classList.add("sel");

    // cumul des poids
    var w = opt.w || {};
    for (var key in w) { if (w.hasOwnProperty(key)) scores[key] = (scores[key] || 0) + w[key]; }

    $("progress-bar").style.width = ((idx + 1) / deck.length * 100) + "%";

    setTimeout(function () {
      idx++;
      if (idx >= deck.length) finish();
      else renderQuestion();
    }, 260);
  }

  function finish() {
    // trouver le(s) max
    var max = -1, winners = [];
    for (var id in scores) {
      if (!scores.hasOwnProperty(id)) continue;
      if (scores[id] > max) { max = scores[id]; winners = [id]; }
      else if (scores[id] === max) { winners.push(id); }
    }
    // tie-break : choix aléatoire parmi les ex æquo (un peu de variété)
    resultId = winners[Math.floor(Math.random() * winners.length)];
    renderResult(resultId);
    show("screen-result");
  }

  function renderResult(id) {
    var L = LEGENDS[id];
    $("res-flag").textContent = L.flag;
    $("res-name").textContent = L.name;
    $("res-archetype").textContent = "« " + L.archetype + " »";
    $("res-meta").textContent = L.country + " · " + L.era;
    $("res-desc").textContent = L.desc;

    var tagsWrap = $("res-tags");
    tagsWrap.innerHTML = "";
    L.tags.forEach(function (t) {
      var s = document.createElement("span");
      s.className = "tag";
      s.textContent = t;
      tagsWrap.appendChild(s);
    });

    var facts = $("res-facts");
    facts.innerHTML = "";
    L.facts.forEach(function (f) {
      var li = document.createElement("li");
      li.textContent = f;
      facts.appendChild(li);
    });
  }

  /* ---------- Image de partage (canvas) ---------- */
  function drawShareCard() {
    var L = LEGENDS[resultId];
    var c = $("share-canvas");
    var ctx = c.getContext("2d");
    var W = c.width, H = c.height;

    // fond dégradé pelouse
    var g = ctx.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, "#10472a");
    g.addColorStop(1, "#08230f");
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);

    // cercle central (terrain)
    ctx.strokeStyle = "rgba(255,255,255,0.06)";
    ctx.lineWidth = 6;
    ctx.beginPath(); ctx.arc(W / 2, H / 2, 300, 0, Math.PI * 2); ctx.stroke();

    // cadre
    ctx.strokeStyle = "rgba(245,197,66,0.55)";
    ctx.lineWidth = 8;
    ctx.strokeRect(40, 40, W - 80, H - 80);

    ctx.textAlign = "center";

    // bandeau marque
    ctx.fillStyle = "#f5c542";
    ctx.font = "600 34px Oswald, sans-serif";
    ctx.fillText("⚽ FOOTSTATS · LE TEST DES LÉGENDES", W / 2, 130);

    // "JE SUIS"
    ctx.fillStyle = "#bcd2c4";
    ctx.font = "500 46px Inter, sans-serif";
    ctx.fillText("Je suis", W / 2, 360);

    // NOM (auto-fit)
    ctx.fillStyle = "#f5c542";
    var name = L.name.toUpperCase();
    var size = 120;
    ctx.font = "700 " + size + "px Oswald, sans-serif";
    while (ctx.measureText(name).width > W - 160 && size > 50) {
      size -= 4; ctx.font = "700 " + size + "px Oswald, sans-serif";
    }
    ctx.fillText(name, W / 2, 500);

    // archétype
    ctx.fillStyle = "#ffffff";
    ctx.font = "600 52px Oswald, sans-serif";
    ctx.fillText("« " + L.archetype + " »", W / 2, 580);

    // pays / ère
    ctx.fillStyle = "#bcd2c4";
    ctx.font = "500 34px Inter, sans-serif";
    ctx.fillText(L.country + " · " + L.era, W / 2, 632);

    // tags
    ctx.fillStyle = "#9fc7ad";
    ctx.font = "600 32px Inter, sans-serif";
    ctx.fillText(L.tags.join("  ·  "), W / 2, 760);

    // call to action bas
    ctx.fillStyle = "#27c46a";
    ctx.font = "700 40px Oswald, sans-serif";
    ctx.fillText("Et toi, quelle légende es-tu ?", W / 2, 930);
    ctx.fillStyle = "#bcd2c4";
    ctx.font = "500 30px Inter, sans-serif";
    ctx.fillText("footperf.fr/quiz", W / 2, 985);

    return c;
  }

  function canvasToBlob(canvas) {
    return new Promise(function (resolve) {
      if (canvas.toBlob) canvas.toBlob(function (b) { resolve(b); }, "image/png");
      else resolve(null);
    });
  }

  function shareResult() {
    var L = LEGENDS[resultId];
    var canvas = drawShareCard();
    var text = "Je suis " + L.name + " (« " + L.archetype + " ») 🏆 Et toi, quelle légende du foot es-tu ?";
    canvasToBlob(canvas).then(function (blob) {
      var file = blob ? new File([blob], "ma-legende-foot.png", { type: "image/png" }) : null;
      if (file && navigator.canShare && navigator.canShare({ files: [file] })) {
        navigator.share({ files: [file], title: "Quelle Légende du Foot es-tu ?", text: text, url: SITE_URL })
          .catch(function () { });
      } else if (navigator.share) {
        navigator.share({ title: "Quelle Légende du Foot es-tu ?", text: text, url: SITE_URL })
          .catch(function () { downloadCard(blob); });
      } else {
        downloadCard(blob);
      }
    });
  }

  function downloadCard(blob) {
    if (!blob) { drawAndDownload(); return; }
    var url = URL.createObjectURL(blob);
    triggerDl(url);
    setTimeout(function () { URL.revokeObjectURL(url); }, 4000);
  }
  function drawAndDownload() {
    var canvas = drawShareCard();
    triggerDl(canvas.toDataURL("image/png"));
  }
  function triggerDl(href) {
    var a = document.createElement("a");
    a.href = href;
    a.download = "ma-legende-foot.png";
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  }

  function downloadResult() {
    var canvas = drawShareCard();
    canvasToBlob(canvas).then(function (blob) { downloadCard(blob); });
  }

  /* ---------- Email (Web3Forms — AJAX) ---------- */
  function handleEmail(e) {
    e.preventDefault();
    var form = e.target;
    var input = $("email-input");
    var msg = $("email-msg");
    var btn = form.querySelector("button[type=submit]");
    var val = (input.value || "").trim();
    var ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
    if (!ok) {
      msg.hidden = false; msg.style.color = "#ff8a8a";
      msg.textContent = "Oups, vérifie ton adresse email 🙂";
      return;
    }

    // on joint la légende obtenue au lead (contexte utile)
    var data = new FormData(form);
    if (resultId && LEGENDS[resultId]) data.append("legende", LEGENDS[resultId].name);

    if (btn) { btn.disabled = true; btn.textContent = "Envoi…"; }

    fetch(form.action, {
      method: "POST",
      headers: { "Accept": "application/json" },
      body: data
    }).then(function (r) {
      return r.json().catch(function () { return {}; });
    }).then(function (json) {
      if (json && json.success) {
        form.querySelector(".email-row").style.display = "none";
        var t = form.querySelector(".email-title"); if (t) t.style.display = "none";
        var s = form.querySelector(".email-sub"); if (s) s.style.display = "none";
        msg.hidden = false; msg.style.color = "#27c46a";
        msg.innerHTML = "Merci, tu es sur la liste 🎉 En attendant le Mondial : " +
          "<a href=\"https://ko-fi.com/s/a60bdc1106\" target=\"_blank\" rel=\"noopener\">" +
          "l'Almanach &amp; le Grand Quiz CdM 2026</a> → " +
          "https://ko-fi.com/s/a60bdc1106";
      } else {
        throw new Error("submit failed");
      }
    }).catch(function () {
      if (btn) { btn.disabled = false; btn.textContent = "Je veux le -10 %"; }
      msg.hidden = false; msg.style.color = "#ff8a8a";
      msg.textContent = "Petit souci d'envoi. Réessaie dans un instant 🙏";
    });
  }

  /* ---------- init ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    $("btn-start").addEventListener("click", startQuiz);
    $("btn-replay").addEventListener("click", startQuiz);
    $("btn-restart-mini").addEventListener("click", function () { show("screen-intro"); });
    $("btn-share").addEventListener("click", shareResult);
    $("btn-download").addEventListener("click", downloadResult);
    $("email-form").addEventListener("submit", handleEmail);
  });
})();
