const fabrics = [
  {
    id: 1,
    name: "Premium Printed Lawn",
    audience: "Ladies",
    type: "Lawn",
    price: 1850,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=85",
    description: "Lightweight summer fabric with colourful prints. Suitable for casual wear, everyday outfits and warm weather.",
    details: ["Lightweight seasonal style", "Colourful printed designs", "Ask about available colours"]
  },
  {
    id: 2,
    name: "Embroidered Collection",
    audience: "Ladies",
    type: "Embroidered",
    price: 2950,
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=900&q=85",
    description: "An elegant decorative fabric option for festive gatherings, celebrations and special occasions.",
    details: ["Decorative appearance", "Festive styling", "Confirm design availability"]
  },
  {
    id: 3,
    name: "Classic Cotton",
    audience: "Gents",
    type: "Cotton",
    price: 1650,
    image: "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=900&q=85",
    description: "A versatile fabric choice for traditional tailoring and everyday wear. Ask about the material and available shades.",
    details: ["Everyday fabric option", "Classic style", "Confirm fabric length"]
  },
  {
    id: 4,
    name: "Wash & Wear",
    audience: "Gents",
    type: "Wash & Wear",
    price: 2750,
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=900&q=85",
    description: "A popular easy-care style for customers looking for a neat, versatile look for daily use or formal tailoring.",
    details: ["Easy-care style", "Traditional tailoring", "Confirm colour and stock"]
  },
  {
    id: 5,
    name: "Seasonal Khaddar",
    audience: "Ladies",
    type: "Khaddar",
    price: 2250,
    image: "https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?auto=format&fit=crop&w=900&q=85",
    description: "A textured fabric option often chosen for cooler weather and traditional seasonal outfits.",
    details: ["Textured appearance", "Cooler-season styling", "Ask about prints and colours"]
  },
  {
    id: 6,
    name: "Elegant Linen",
    audience: "Gents",
    type: "Linen",
    price: 2550,
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=85",
    description: "A fabric with a relaxed, refined appearance that can work well for smart-casual and warm-weather outfits.",
    details: ["Natural-looking texture", "Refined appearance", "Confirm material composition"]
  },
  {
    id: 7,
    name: "Cambric Cotton",
    audience: "Ladies",
    type: "Cotton",
    price: 1950,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=85",
    description: "A versatile cotton option for unstitched outfits. Ask us about available designs, shades and fabric length.",
    details: ["Versatile fabric choice", "Everyday styling", "Check available prints"]
  },
  {
    id: 8,
    name: "Premium Boski",
    audience: "Gents",
    type: "Boski",
    price: 3200,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
    description: "A classic, polished-looking fabric option for traditional outfits. Contact us to confirm the exact material and shades.",
    details: ["Classic appearance", "Traditional tailoring", "Confirm material and length"]
  },
  {
    id: 9,
    name: "Printed Cotton",
    audience: "Ladies",
    type: "Cotton",
    price: 1750,
    image: "https://images.unsplash.com/photo-1604176354204-9268737828e4?auto=format&fit=crop&w=900&q=85",
    description: "Printed cotton offers versatile patterns for everyday unstitched clothing and personal styling.",
    details: ["Printed style", "Everyday use", "Availability depends on design"]
  },
  {
    id: 10,
    name: "Lawn Embroidery",
    audience: "Ladies",
    type: "Lawn",
    price: 2650,
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=85",
    description: "A decorative lawn option for customers looking for a dressed-up summer outfit.",
    details: ["Light seasonal option", "Decorative styling", "Ask about matching pieces"]
  },
  {
    id: 11,
    name: "Gents Cotton Blend",
    audience: "Gents",
    type: "Cotton",
    price: 2100,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=85",
    description: "A versatile fabric selection for tailoring into a personal traditional style. Confirm the exact blend before purchasing.",
    details: ["Versatile styling", "Traditional tailoring", "Ask for composition details"]
  },
  {
    id: 12,
    name: "Winter Fabric",
    audience: "Gents",
    type: "Khaddar",
    price: 2800,
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85",
    description: "A seasonal fabric option for cooler days. Ask about available textures, colours and fabric length.",
    details: ["Seasonal style", "Traditional outfits", "Confirm current stock"]
  }
];

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const audienceFilter = document.getElementById("audienceFilter");
const resultsCount = document.getElementById("resultsCount");
const emptyState = document.getElementById("emptyState");
const fabricDialog = document.getElementById("fabricDialog");
const dialogBody = document.getElementById("dialogBody");

let activeFilter = "All";

function priceText(price) {
  return "Rs. " + price.toLocaleString("en-PK");
}

function productCard(item) {
  return `
    <article class="product-card">
      <img
        class="product-image"
        src="${item.image}"
        alt="${item.name}"
        loading="lazy"
        data-details="${item.id}"
        onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80';"
      >

      <div class="product-info">
        <span class="product-type">
          ${item.audience} · ${item.type}
        </span>
        <h3>${item.name}</h3>
        <p>${item.description}</p>

        <div class="product-bottom">
          <span class="price">${priceText(item.price)}</span>
          <button class="details-btn" data-details="${item.id}">
            View Details ↗
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderFabrics() {
  const query = searchInput.value.trim().toLowerCase();
  const audience = audienceFilter.value;

  const filtered = fabrics.filter(item => {
    const categoryMatch =
      activeFilter === "All" ||
      item.type === activeFilter ||
      item.audience === activeFilter;

    const audienceMatch =
      audience === "All" || item.audience === audience;

    const searchableText = (
      item.name + " " +
      item.type + " " +
      item.audience + " " +
      item.description
    ).toLowerCase();

    return categoryMatch &&
      audienceMatch &&
      searchableText.includes(query);
  });

  productGrid.innerHTML = filtered.map(productCard).join("");
  emptyState.hidden = filtered.length > 0;
  resultsCount.textContent = `${filtered.length} fabric options available`;

  document.querySelectorAll(".filter-chip").forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.filter === activeFilter
    );
  });
}

function openFabricDetails(id) {
  const item = fabrics.find(fabric => fabric.id === Number(id));
  if (!item) return;

  const message = encodeURIComponent(
    `Assalam-o-alaikum! I want to ask about ${item.name}. The website shows ${priceText(item.price)}. Please confirm actual price, fabric length and availability.`
  );

  dialogBody.innerHTML = `
    <div class="dialog-layout">
      <img src="${item.image}" alt="${item.name}">

      <div class="dialog-copy">
        <span class="product-type">${item.audience} · ${item.type}</span>
        <h2>${item.name}</h2>
        <p>${item.description}</p>

        <ul>
          ${item.details.map(detail => `<li>${detail}</li>`).join("")}
        </ul>

        <span class="price">${priceText(item.price)}</span>

        <p>
          Price is a sample. Please confirm the actual price,
          fabric length, colour and availability before ordering.
        </p>

        <a
          class="gold-button"
          href="https://wa.me/923157540218?text=${message}"
          target="_blank"
          rel="noopener"
        >Ask / Order on WhatsApp →</a>
      </div>
    </div>
  `;

  fabricDialog.showModal();
}

document.addEventListener("click", event => {
  const details = event.target.closest("[data-details]");

  if (details) {
    openFabricDetails(details.dataset.details);
  }

  const filterButton = event.target.closest("[data-filter]");

  if (filterButton) {
    activeFilter = filterButton.dataset.filter;
    renderFabrics();
  }

  const jumpButton = event.target.closest("[data-jump]");

  if (jumpButton) {
    activeFilter = jumpButton.dataset.jump;
    renderFabrics();
    document.getElementById("shop").scrollIntoView({
      behavior: "smooth"
    });
  }
});

searchInput.addEventListener("input", renderFabrics);
audienceFilter.addEventListener("change", renderFabrics);

document.getElementById("dialogClose").addEventListener("click", () => {
  fabricDialog.close();
});

fabricDialog.addEventListener("click", event => {
  if (event.target === fabricDialog) {
    fabricDialog.close();
  }
});

document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("navMenu").classList.toggle("open");
});

document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("navMenu").classList.remove("open");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

renderFabrics();
