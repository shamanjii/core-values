const VALUES = [
  { id: "familie", name: "Familie", category: "Beziehung & Zugehörigkeit", description: "Nähe und Verbindung zu den Menschen, die dein Zuhause sind." },
  { id: "freundschaft", name: "Freundschaft", category: "Beziehung & Zugehörigkeit", description: "Verlässliche Beziehungen, die dich tragen und begleiten." },
  { id: "liebe", name: "Liebe", category: "Beziehung & Zugehörigkeit", description: "Tiefe Zuneigung geben und empfangen." },
  { id: "gemeinschaft", name: "Gemeinschaft", category: "Beziehung & Zugehörigkeit", description: "Teil von etwas Größerem als dir selbst zu sein." },
  { id: "loyalitaet", name: "Loyalität", category: "Beziehung & Zugehörigkeit", description: "Treue zu den Menschen und Dingen, für die du einstehst." },
  { id: "fuersorge", name: "Fürsorge", category: "Beziehung & Zugehörigkeit", description: "Für andere da sein und sich um sie kümmern." },
  { id: "zugehoerigkeit", name: "Zugehörigkeit", category: "Beziehung & Zugehörigkeit", description: "Irgendwo dazuzugehören und angenommen zu sein." },
  { id: "partnerschaft", name: "Partnerschaft", category: "Beziehung & Zugehörigkeit", description: "Das Leben Seite an Seite mit einem Menschen teilen." },

  { id: "ehrlichkeit", name: "Ehrlichkeit", category: "Charakter & Integrität", description: "Aufrichtig sein, auch wenn es unbequem ist." },
  { id: "authentizitaet", name: "Authentizität", category: "Charakter & Integrität", description: "Treu zu dir selbst stehen, ohne Maske." },
  { id: "integritaet", name: "Integrität", category: "Charakter & Integrität", description: "Im Einklang mit deinen Überzeugungen handeln." },
  { id: "mut", name: "Mut", category: "Charakter & Integrität", description: "Auch dann handeln, wenn es Angst macht." },
  { id: "verantwortung", name: "Verantwortung", category: "Charakter & Integrität", description: "Für dein Tun und seine Folgen einstehen." },
  { id: "verlaesslichkeit", name: "Verlässlichkeit", category: "Charakter & Integrität", description: "Ein Mensch sein, auf den man zählen kann." },
  { id: "wuerde", name: "Würde", category: "Charakter & Integrität", description: "Dir und anderen mit Respekt begegnen." },
  { id: "demut", name: "Demut", category: "Charakter & Integrität", description: "Dich selbst nicht über andere stellen." },

  { id: "lernen", name: "Lernen", category: "Wachstum & Entfaltung", description: "Immer weiter wachsen und Neues verstehen." },
  { id: "neugier", name: "Neugier", category: "Wachstum & Entfaltung", description: "Offen und wissbegierig durch die Welt gehen." },
  { id: "kreativitaet", name: "Kreativität", category: "Wachstum & Entfaltung", description: "Eigenes erschaffen und Neues denken." },
  { id: "selbstentwicklung", name: "Selbstentwicklung", category: "Wachstum & Entfaltung", description: "An dir arbeiten und über dich hinauswachsen." },
  { id: "meisterschaft", name: "Meisterschaft", category: "Wachstum & Entfaltung", description: "Etwas wirklich gut beherrschen wollen." },
  { id: "offenheit", name: "Offenheit", category: "Wachstum & Entfaltung", description: "Bereit für neue Sichtweisen und Erfahrungen sein." },
  { id: "weisheit", name: "Weisheit", category: "Wachstum & Entfaltung", description: "Aus Erfahrung tiefere Einsicht gewinnen." },

  { id: "freiheit", name: "Freiheit", category: "Freiheit & Autonomie", description: "Dein Leben nach eigenen Vorstellungen führen." },
  { id: "unabhaengigkeit", name: "Unabhängigkeit", category: "Freiheit & Autonomie", description: "Auf eigenen Beinen stehen." },
  { id: "spontaneitaet", name: "Spontaneität", category: "Freiheit & Autonomie", description: "Dem Augenblick folgen, ohne festen Plan." },
  { id: "abenteuer", name: "Abenteuer", category: "Freiheit & Autonomie", description: "Aufbrechen und das Unbekannte suchen." },

  { id: "erfolg", name: "Erfolg", category: "Leistung & Wirkung", description: "Erreichen, was du dir vornimmst." },
  { id: "ambition", name: "Ambition", category: "Leistung & Wirkung", description: "Dir große Ziele setzen und sie verfolgen." },
  { id: "fuehrung", name: "Führung", category: "Leistung & Wirkung", description: "Andere leiten und Richtung geben." },
  { id: "einfluss", name: "Einfluss", category: "Leistung & Wirkung", description: "Etwas in der Welt bewegen können." },
  { id: "disziplin", name: "Disziplin", category: "Leistung & Wirkung", description: "Dranbleiben, auch wenn die Motivation fehlt." },

  { id: "sinn", name: "Sinn", category: "Sinn & Transzendenz", description: "In deinem Tun eine tiefere Bedeutung finden." },
  { id: "spiritualitaet", name: "Spiritualität", category: "Sinn & Transzendenz", description: "Eine Verbindung zu etwas Größerem spüren." },
  { id: "glaube", name: "Glaube", category: "Sinn & Transzendenz", description: "Aus einer inneren Überzeugung heraus leben." },
  { id: "dankbarkeit", name: "Dankbarkeit", category: "Sinn & Transzendenz", description: "Das Gute im Leben sehen und schätzen." },
  { id: "achtsamkeit", name: "Achtsamkeit", category: "Sinn & Transzendenz", description: "Bewusst im Hier und Jetzt sein." },
  { id: "naturverbundenheit", name: "Naturverbundenheit", category: "Sinn & Transzendenz", description: "Dich als Teil der Natur fühlen." },
  { id: "schoenheit", name: "Schönheit", category: "Sinn & Transzendenz", description: "Das Schöne wahrnehmen und in dein Leben holen." },

  { id: "sicherheit", name: "Sicherheit", category: "Sicherheit & Stabilität", description: "Dich geschützt und geborgen fühlen." },
  { id: "stabilitaet", name: "Stabilität", category: "Sicherheit & Stabilität", description: "Festen Boden unter den Füßen haben." },
  { id: "gesundheit", name: "Gesundheit", category: "Sicherheit & Stabilität", description: "Körperlich und seelisch im Gleichgewicht sein." },
  { id: "ordnung", name: "Ordnung", category: "Sicherheit & Stabilität", description: "Klarheit und Struktur in deinem Leben." },
  { id: "heimat", name: "Heimat", category: "Sicherheit & Stabilität", description: "Einen Ort haben, an den du gehörst." },

  { id: "gerechtigkeit", name: "Gerechtigkeit", category: "Gesellschaft & Werte", description: "Für das eintreten, was recht ist." },
  { id: "nachhaltigkeit", name: "Nachhaltigkeit", category: "Gesellschaft & Werte", description: "Verantwortungsvoll mit der Zukunft umgehen." },
  { id: "mitgefuehl", name: "Mitgefühl", category: "Gesellschaft & Werte", description: "Das Leid anderer spüren und darauf eingehen." },
  { id: "grosszuegigkeit", name: "Großzügigkeit", category: "Gesellschaft & Werte", description: "Gerne geben und teilen." },
  { id: "gleichheit", name: "Gleichheit", category: "Gesellschaft & Werte", description: "Allen Menschen denselben Wert zugestehen." },
  { id: "toleranz", name: "Toleranz", category: "Gesellschaft & Werte", description: "Das Andere und Fremde gelten lassen." },
  { id: "frieden", name: "Frieden", category: "Gesellschaft & Werte", description: "Harmonie suchen statt Konflikt." },
  { id: "vielfalt", name: "Vielfalt", category: "Gesellschaft & Werte", description: "Unterschiede als Bereicherung sehen." },

  { id: "humor", name: "Humor", category: "Weitere Nuancen", description: "Leichtigkeit bewahren und auch schwierige Momente mit Wärme betrachten." },
  { id: "gelassenheit", name: "Gelassenheit", category: "Weitere Nuancen", description: "Nicht alles kontrollieren müssen und auch unter Druck klar bleiben." },
  { id: "klarheit", name: "Klarheit", category: "Weitere Nuancen", description: "Eindeutigkeit suchen, Prioritäten erkennen und Nebel reduzieren." },
  { id: "freude", name: "Freude", category: "Weitere Nuancen", description: "Lebendigkeit, Genuss und helle Momente bewusst in den Mittelpunkt rücken." },
  { id: "vertrauen", name: "Vertrauen", category: "Weitere Nuancen", description: "Sich öffnen können und auf Verlässlichkeit in Beziehungen bauen." },
  { id: "einfachheit", name: "Einfachheit", category: "Weitere Nuancen", description: "Unnötiges weglassen und das Wesentliche leichter zugänglich machen." },
  { id: "leidenschaft", name: "Leidenschaft", category: "Weitere Nuancen", description: "Mit Intensität leben und sich von echter Begeisterung bewegen lassen." },
  { id: "zuversicht", name: "Zuversicht", category: "Weitere Nuancen", description: "An Möglichkeiten glauben und auch in Unsicherheit eine offene Zukunft sehen." }
];

const PROMPTS = [
  "Was würdest du eher verteidigen, wenn es unter Druck gerät?",
  "Worauf möchtest du weniger verzichten?",
  "Was fühlt sich mehr nach dir an?",
  "Was soll deine Entscheidungen stärker prägen?",
  "Was würde dich in einem schwierigen Jahr besser tragen?"
];

const STORAGE_KEY = "core-values-mvp";
const state = loadState();

const screens = {
  hero: document.getElementById("hero"),
  selection: document.getElementById("selectionScreen"),
  compare: document.getElementById("compareScreen"),
  result: document.getElementById("resultScreen")
};

const els = {
  brandButton: document.getElementById("brandButton"),
  backButton: document.getElementById("backButton"),
  resetButton: document.getElementById("resetButton"),
  startButton: document.getElementById("startButton"),
  targetCount: document.getElementById("targetCount"),
  valueGrid: document.getElementById("valueGrid"),
  selectionCounter: document.getElementById("selectionCounter"),
  selectionDoneButton: document.getElementById("selectionDoneButton"),
  compareLayout: document.getElementById("compareLayout"),
  comparePrompt: document.getElementById("comparePrompt"),
  undoCompareButton: document.getElementById("undoCompareButton"),
  bothButton: document.getElementById("bothButton"),
  skipButton: document.getElementById("skipButton"),
  finishButton: document.getElementById("finishButton"),
  resultList: document.getElementById("resultList"),
  reflectionCopy: document.getElementById("reflectionCopy"),
  refineButton: document.getElementById("refineButton"),
  progressFill: document.getElementById("progressFill"),
  progressText: document.getElementById("progressText"),
  stepLabel: document.getElementById("stepLabel")
};

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  }

  return {
    screen: "hero",
    targetCount: 5,
    selections: {},
    ranking: {},
    comparisons: [],
    currentPair: null,
    history: ["hero"]
  };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function resetState() {
  localStorage.removeItem(STORAGE_KEY);
  state.screen = "hero";
  state.targetCount = 5;
  state.selections = {};
  state.ranking = {};
  state.comparisons = [];
  state.currentPair = null;
  state.history = ["hero"];
  render();
}

function setScreen(screen) {
  state.screen = screen;
  const last = state.history[state.history.length - 1];
  if (last !== screen) state.history.push(screen);
  saveState();
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function goBack() {
  if (state.screen === "compare" && state.comparisons.length > 0) {
    undoLastComparison();
    return;
  }

  if (state.history.length <= 1) return;
  state.history.pop();
  state.screen = state.history[state.history.length - 1] || "hero";
  saveState();
  render();
}

function selectedValues() {
  return VALUES.filter((value) => state.selections[value.id] === "in");
}

function ensureRanking() {
  selectedValues().forEach((value) => {
    if (!state.ranking[value.id]) {
      state.ranking[value.id] = { score: 1000, comparisons: 0, wins: 0, losses: 0 };
    }
  });
}

function render() {
  Object.entries(screens).forEach(([name, node]) => {
    node.classList.toggle("hidden", name !== state.screen);
  });
  els.targetCount.value = String(state.targetCount);
  renderProgress();
  renderSelection();
  if (state.screen === "compare") renderComparison();
  if (state.screen === "result") renderResults();
}

function renderProgress() {
  const selectionCount = selectedValues().length;
  const compareCount = state.comparisons.length;
  let percent = 0;
  let label = "Start";

  if (state.screen === "selection") {
    percent = Math.min(35, Math.round((selectionCount / VALUES.length) * 45));
    label = "Vorauswahl";
  } else if (state.screen === "compare") {
    const target = comparisonTarget();
    percent = 35 + Math.min(55, Math.round((compareCount / target) * 55));
    label = "Vergleich";
  } else if (state.screen === "result") {
    percent = 100;
    label = "Ergebnis";
  }

  els.progressFill.style.width = `${percent}%`;
  els.progressText.textContent = `${percent}%`;
  els.stepLabel.textContent = label;
}

function renderSelection() {
  els.selectionCounter.textContent = `${selectedValues().length} im Rennen`;
  els.selectionDoneButton.disabled = selectedValues().length < 2;
  els.selectionDoneButton.textContent = selectedValues().length < 2 ? "Mindestens 2 Werte wählen" : "Weiter zum Vergleich";

  els.valueGrid.innerHTML = VALUES.map((value) => {
    const status = state.selections[value.id] === "in" ? "in"
      : state.selections[value.id] === "out" ? "out" : "";
    return `
      <article class="value-card" data-value-id="${value.id}" data-status="${status}">
        <div>
          <div class="tag">${value.category}</div>
          <h3>${value.name}</h3>
        </div>
        <p>${value.description}</p>
        <div class="select-actions" aria-label="${value.name} einordnen">
          <button type="button" class="sort-btn sort-in" data-status="in" aria-pressed="${status === "in"}">Auf jeden Fall</button>
          <button type="button" class="sort-btn sort-out" data-status="out" aria-pressed="${status === "out"}">Eher nicht</button>
        </div>
      </article>
    `;
  }).join("");
}

function comparisonTarget() {
  const count = selectedValues().length;
  return Math.max(12, Math.min(64, count * 2));
}

function renderComparison() {
  ensureRanking();
  if (!state.currentPair || !pairIsValid(state.currentPair)) {
    state.currentPair = choosePair();
    saveState();
  }

  const pair = state.currentPair;
  if (!pair) {
    setScreen("result");
    return;
  }

  const promptIndex = state.comparisons.length % PROMPTS.length;
  els.comparePrompt.textContent = PROMPTS[promptIndex];
  els.undoCompareButton.disabled = state.comparisons.length === 0;
  els.finishButton.classList.toggle("hidden", state.comparisons.length < Math.min(10, comparisonTarget()));

  const left = VALUES.find((value) => value.id === pair[0]);
  const right = VALUES.find((value) => value.id === pair[1]);

  els.compareLayout.innerHTML = [left, right].map((value) => `
    <button class="choice-card" type="button" data-choice="${value.id}">
      <div class="tag">${value.category}</div>
      <h3>${value.name}</h3>
      <p>${value.description}</p>
    </button>
  `).join("");
}

function pairIsValid(pair) {
  const ids = selectedValues().map((value) => value.id);
  return pair.length === 2 && ids.includes(pair[0]) && ids.includes(pair[1]) && pair[0] !== pair[1];
}

function choosePair() {
  const candidates = selectedValues();
  if (candidates.length < 2) return null;

  const comparedKeys = new Set(state.comparisons.slice(-12).map((item) => pairKey(item.leftId, item.rightId)));
  const pairs = [];

  candidates.forEach((left, index) => {
    candidates.slice(index + 1).forEach((right) => {
      const leftRank = state.ranking[left.id] || { score: 1000, comparisons: 0 };
      const rightRank = state.ranking[right.id] || { score: 1000, comparisons: 0 };
      const scoreGap = Math.abs(leftRank.score - rightRank.score);
      const dataNeed = 1 / (1 + leftRank.comparisons + rightRank.comparisons);
      const recentPenalty = comparedKeys.has(pairKey(left.id, right.id)) ? 300 : 0;
      pairs.push({
        ids: [left.id, right.id],
        priority: scoreGap + recentPenalty - dataNeed * 240
      });
    });
  });

  pairs.sort((a, b) => a.priority - b.priority);
  const pool = pairs.slice(0, Math.min(8, pairs.length));
  return pool[Math.floor(Math.random() * pool.length)]?.ids || pairs[0].ids;
}

function pairKey(leftId, rightId) {
  return [leftId, rightId].sort().join(":");
}

function recordChoice(winnerId, loserId, type = "choice") {
  ensureRanking();
  const previousRanking = snapshotRanking([winnerId, loserId]);

  if (type === "both") {
    updateEloDraw(winnerId, loserId);
  } else {
    updateElo(winnerId, loserId);
  }

  state.comparisons.push({
    leftId: state.currentPair[0],
    rightId: state.currentPair[1],
    winnerId,
    loserId,
    type,
    previousRanking,
    at: Date.now()
  });

  state.currentPair = choosePair();
  saveState();

  if (state.comparisons.length >= comparisonTarget()) {
    setScreen("result");
  } else {
    render();
  }
}

function snapshotRanking(ids) {
  return ids.reduce((snapshot, id) => {
    snapshot[id] = { ...state.ranking[id] };
    return snapshot;
  }, {});
}

function undoLastComparison() {
  const last = state.comparisons.pop();
  if (!last) return;

  if (last.previousRanking) {
    Object.entries(last.previousRanking).forEach(([id, ranking]) => {
      state.ranking[id] = { ...ranking };
    });
  } else {
    rebuildRankingFromComparisons();
  }

  state.currentPair = [last.leftId, last.rightId];
  state.screen = "compare";
  saveState();
  render();
}

function rebuildRankingFromComparisons() {
  state.ranking = {};
  ensureRanking();
  const replay = [...state.comparisons];
  state.comparisons = [];

  replay.forEach((comparison) => {
    const previousRanking = snapshotRanking([comparison.winnerId, comparison.loserId]);
    if (comparison.type === "both") {
      updateEloDraw(comparison.winnerId, comparison.loserId);
    } else {
      updateElo(comparison.winnerId, comparison.loserId);
    }
    state.comparisons.push({ ...comparison, previousRanking });
  });
}

// Hoher Einfluss bei den ersten Vergleichen, klingt mit Erfahrung gegen ~16 ab,
// damit sich das Ranking einpendelt statt dauerhaft zu zappeln.
function kFactor(player) {
  return 16 + 28 / (1 + player.comparisons * 0.5);
}

function updateElo(winnerId, loserId) {
  const winner = state.ranking[winnerId];
  const loser = state.ranking[loserId];
  const expectedWinner = 1 / (1 + 10 ** ((loser.score - winner.score) / 400));
  const expectedLoser = 1 - expectedWinner;

  winner.score = Math.round(winner.score + kFactor(winner) * (1 - expectedWinner));
  loser.score = Math.round(loser.score + kFactor(loser) * (0 - expectedLoser));
  winner.comparisons += 1;
  loser.comparisons += 1;
  winner.wins += 1;
  loser.losses += 1;
}

// "Beide behalten" = echtes Unentschieden: zieht zwei ähnlich starke Werte
// leicht zusammen, statt wie bisher fast wirkungslos zu verpuffen.
function updateEloDraw(aId, bId) {
  const a = state.ranking[aId];
  const b = state.ranking[bId];
  const expectedA = 1 / (1 + 10 ** ((b.score - a.score) / 400));
  const expectedB = 1 - expectedA;

  a.score = Math.round(a.score + kFactor(a) * (0.5 - expectedA));
  b.score = Math.round(b.score + kFactor(b) * (0.5 - expectedB));
  a.comparisons += 1;
  b.comparisons += 1;
}

function skipComparison() {
  state.currentPair = choosePair();
  saveState();
  render();
}

function rankedValues() {
  ensureRanking();
  return selectedValues()
    .map((value) => ({ ...value, rank: state.ranking[value.id] }))
    .sort((a, b) => b.rank.score - a.rank.score);
}

function renderResults() {
  const topValues = rankedValues().slice(0, state.targetCount);
  els.resultList.innerHTML = topValues.map((value) => `
    <li class="result-item">
      <div>
        <h3>${value.name}</h3>
        <div class="result-meta">
          ${value.description}<br />
          ${value.rank.wins} klare Wahl${value.rank.wins === 1 ? "" : "en"} · ${value.rank.comparisons} Vergleiche
        </div>
      </div>
    </li>
  `).join("");

  const names = topValues.map((value) => value.name);
  els.reflectionCopy.textContent = names.length
    ? `Schau dir ${names.slice(0, 3).join(", ")} an und frage dich, ob diese Werte dich in echten Entscheidungen wirklich tragen würden.`
    : "Wähle zuerst ein paar Werte aus, damit ein Ranking entstehen kann.";
}

els.startButton.addEventListener("click", () => {
  state.targetCount = Number(els.targetCount.value);
  setScreen("selection");
});

els.targetCount.addEventListener("change", () => {
  state.targetCount = Number(els.targetCount.value);
  saveState();
});

els.valueGrid.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-status]");
  if (!button) return;
  const card = button.closest(".value-card");
  const valueId = card.dataset.valueId;
  const status = button.dataset.status;
  state.selections[valueId] = state.selections[valueId] === status ? "" : status;
  delete state.ranking[valueId];
  state.currentPair = null;
  saveState();
  renderSelection();
  renderProgress();
});

els.selectionDoneButton.addEventListener("click", () => {
  if (selectedValues().length < 2) return;
  ensureRanking();
  state.currentPair = choosePair();
  saveState();
  setScreen("compare");
});

els.compareLayout.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-choice]");
  if (!button || !state.currentPair) return;
  const winnerId = button.dataset.choice;
  const loserId = state.currentPair.find((id) => id !== winnerId);
  recordChoice(winnerId, loserId);
});

els.bothButton.addEventListener("click", () => {
  if (!state.currentPair) return;
  recordChoice(state.currentPair[0], state.currentPair[1], "both");
});

els.undoCompareButton.addEventListener("click", undoLastComparison);
els.skipButton.addEventListener("click", skipComparison);
els.finishButton.addEventListener("click", () => setScreen("result"));
els.refineButton.addEventListener("click", () => setScreen("compare"));
els.backButton.addEventListener("click", goBack);
els.brandButton.addEventListener("click", () => setScreen("hero"));
els.resetButton.addEventListener("click", resetState);

render();
