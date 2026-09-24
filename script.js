
Elijah Ramirez <elijahramirez2010@icloud.com>
7:22 AM (0 minutes ago)
to me

// Add or remove games here.
// "url" can point to another page on your site, such as "games/flappy/index.html".
const games = [
  {
    title: "Space Clicker",
    description: "Click your way through a tiny space adventure.",
    emoji: "🚀",
    url: "games/space-clicker/index.html"
  },
  {
    title: "Snake",
    description: "Classic snake gameplay with a simple modern look.",
    emoji: "🐍",
    url: "games/snake/index.html"
  },
  {
    title: "Memory",
    description: "Match the cards and test your memory.",
    emoji: "🧠",
    url: "games/memory/index.html"
  },
  {
    title: "Coming Soon",
    description: "Add your next game to script.js.",
    emoji: "🎮",
    url: "#"
  }
];

const grid = document.getElementById("gameGrid");
const search = document.getElementById("search");
const noResults = document.getElementById("noResults");

function renderGames(filter = "") {
  const term = filter.trim().toLowerCase();

  const filtered = games.filter(game =>
    game.title.toLowerCase().includes(term) ||
    game.description.toLowerCase().includes(term)
  );

  grid.innerHTML = filtered.map(game => `
    <article class="game-card">
      <div class="game-image">${game.emoji}</div>
      <div class="game-info">
        <h3>${escapeHtml(game.title)}</h3>
        <p>${escapeHtml(game.description)}</p>
        <a class="play-button" href="${game.url}">Play</a>
      </div>
    </article>
  `).join("");

  noResults.hidden = filtered.length !== 0;
}

function escapeHtml(text) {
  return text.replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[char]));
}

search.addEventListener("input", e => renderGames(e.target.value));
renderGames();
