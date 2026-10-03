
const WHATSAPP = "923157540218";

const fabrics = [
  {id:1,name:"Printed Lawn",audience:"Ladies",type:"Lawn",price:1850,oldPrice:2200,badge:"Seasonal Edit",colours:["Ivory","Pink","Blue"],hex:["#f1e3cf","#d78b9e","#718fb3"],image:"https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=85",description:"A light, colourful summer-inspired fabric option for everyday and casual outfits.",details:"Ask us to confirm fabric length, composition, available prints and current stock."},
  {id:2,name:"Embroidered Lawn",audience:"Ladies",type:"Embroidered",price:2950,oldPrice:3400,badge:"Special Occasion",colours:["Gold","Rose","Green"],hex:["#c6a25c","#bb7781","#617e62"],image:"https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=900&q=85",description:"An elegant decorative style for festive gatherings and special occasions.",details:"Embroidery, matching pieces and exact fabric details must be confirmed before purchase."},
  {id:3,name:"Classic Cotton",audience:"Gents",type:"Cotton",price:1650,oldPrice:1900,badge:"Everyday Essential",colours:["White","Navy","Beige"],hex:["#f3eee1","#23324a","#b5a083"],image:"https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=900&q=85",description:"A classic fabric category for traditional tailoring and daily wear.",details:"Confirm the actual cotton composition, fabric length and available shades."},
  {id:4,name:"Wash & Wear",audience:"Gents",type:"Wash & Wear",price:2750,oldPrice:3100,badge:"Classic Choice",colours:["Black","Grey","Blue"],hex:["#171717","#8b8b88","#667d9e"],image:"https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=900&q=85",description:"A smart, versatile fabric option for traditional and formal tailoring.",details:"Please confirm the material, fabric length, shade and care instructions."},
  {id:5,name:"Seasonal Khaddar",audience:"Ladies",type:"Khaddar",price:2250,oldPrice:2600,badge:"Seasonal",colours:["Rust","Cream","Olive"],hex:["#a65c3a","#eee0c6","#68734c"],image:"https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?auto=format&fit=crop&w=900&q=85",description:"A textured seasonal fabric category for traditional and cooler-weather outfits.",details:"Confirm the exact weave, warmth, length and available designs with the seller."},
  {id:6,name:"Elegant Linen",audience:"Gents",type:"Linen",price:2550,oldPrice:2900,badge:"Refined Style",colours:["Sand","White","Olive"],hex:["#c8b494","#f1eee4","#697354"],image:"https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=85",description:"A relaxed, refined fabric category suited to smart-casual styling.",details:"Check whether the item is pure linen or a blend before ordering."},
  {id:7,name:"Cambric Cotton",audience:"Ladies",type:"Cambric",price:1950,oldPrice:2250,badge:"Everyday Style",colours:["Lilac","Blue","White"],hex:["#b5a5cc","#819fca","#f0eee5"],image:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=85",description:"A versatile cotton-style category for printed and everyday unstitched outfits.",details:"Designs and fabric composition can vary; confirm the specific item with us."},
  {id:8,name:"Premium Boski",audience:"Gents",type:"Boski",price:3200,oldPrice:3600,badge:"Classic Edit",colours:["Champagne","Brown","Black"],hex:["#d5c09b","#77543b","#171717"],image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",description:"A polished-looking category for classic traditional outfits.",details:"The word Boski is used here as a catalogue category; confirm exact material and quality before buying."},
  {id:9,name:"Printed Cotton",audience:"Ladies",type:"Cotton",price:1750,oldPrice:2050,badge:"Print Collection",colours:["Peach","Teal","Mustard"],hex:["#e7aa96","#438c85","#c5a342"],image:"https://images.unsplash.com/photo-1604176354204-9268737828e4?auto=format&fit=crop&w=900&q=85",description:"A colourful print-inspired option for personal everyday styling.",details:"The displayed image is illustrative. Confirm the exact print, colour and fabric length."},
  {id:10,name:"Lawn Embroidery",audience:"Ladies",type:"Lawn",price:2650,oldPrice:3000,badge:"Festive Style",colours:["Pink","Ivory","Blue"],hex:["#d69bad","#eee0c9","#7897bd"],image:"https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=85",description:"A decorative summer-style category for a dressed-up seasonal look.",details:"Confirm embroidery placement, included pieces and availability before ordering."},
  {id:11,name:"Cotton Blend",audience:"Gents",type:"Cotton",price:2100,oldPrice:2400,badge:"Versatile Edit",colours:["Charcoal","Cream","Blue"],hex:["#44413e","#e9dfcb","#7388a6"],image:"https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=85",description:"A versatile fabric category for traditional and modern tailoring.",details:"Confirm exact fibre composition and fabric length with the seller."},
  {id:12,name:"Winter Khaddar",audience:"Gents",type:"Khaddar",price:2800,oldPrice:3200,badge:"Seasonal Edit",colours:["Brown","Grey","Olive"],hex:["#8c684d","#92918c","#737750"],image:"https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85",description:"A seasonal fabric category for traditional outfits in cooler weather.",details:"Actual warmth, weave and material vary. Ask us to confirm the item details."}
];

const $ = id => document.getElementById(id);
let category = "All";
let selectedProduct = null;
let selectedColour = "";
let cart = [];
let wishlist = [];

const money = value => "Rs. " + value.toLocaleString("en-PK");
const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({
  "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
})[char]);

function imageFallback(img) {
  img.onerror = null;
  img.src = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80";
}

function visibleProducts() {
  const search = $("searchInput").value.trim().toLowerCase();
  const audience = $("audienceFilter").value;
  const sort = $("sortFilter").value;

  let list = fabrics.filter(item => {
    const categoryMatch = category === "All" || item.type === category;
    const audienceMatch = audience === "All" || item.audience === audience;
    const searchMatch = [
      item.name,item.type,item.audience,item.description,...item.colours
    ].join(" ").toLowerCase().includes(search);
    return categoryMatch && audienceMatch && searchMatch;
  });

  if (sort === "low") list.sort((a,b) => a.price-b.price);
  if (sort === "high") list.sort((a,b) => b.price-a.price);
  return list;
}

function renderProducts() {
  const list = visibleProducts();
  $("resultCount").textContent = `${list.length} styles`;

  $("productGrid").innerHTML = list.map(item => `
    <article class="product-card">
      <div class="product-photo-wrap">
        <img class="product-photo" src="${item.image}" alt="${escapeHTML(item.name)} fabric example" loading="lazy" data-open="${item.id}" onerror="imageFallback(this)">
        <span class="product-badge">${escapeHTML(item.badge)}</span>
        <button class="wish-btn ${wishlist.includes(item.id)?"saved":""}" data-wish="${item.id}" aria-label="Toggle wishlist">${wishlist.includes(item.id)?"♥":"♡"}</button>
      </div>
      <div class="product-info">
        <span class="product-meta">${escapeHTML(item.audience)} · ${escapeHTML(item.type)}</span>
        <h3>${escapeHTML(item.name)}</h3>
        <p>${escapeHTML(item.description)}</p>
        <div class="product-price-row"><span class="price">${money(item.price)}</span><span class="old-price">${money(item.oldPrice)}</span><span class="discount">SALE</span></div>
        <div class="product-actions">
          <button data-open="${item.id}">Details</button>
          <button class="add-btn" data-add="${item.id}">Add to Bag +</button>
        </div>
      </div>
    </article>
  `).join("");

  $("emptyState").hidden = list.length !== 0;
  document.querySelectorAll("[data-category]").forEach(button => {
    button.classList.toggle("active", button.dataset.category === category);
  });
  $("wishCount").textContent = wishlist.length;
  $("cartCount").textContent = cart.reduce((sum,item) => sum+item.qty,0);
}

function openDetails(id) {
  selectedProduct = fabrics.find(item => item.id === Number(id));
  if (!selectedProduct) return;
  selectedColour = selectedProduct.colours[0];

  const item = selectedProduct;
  $("dialogContent").innerHTML = `
    <div class="dialog-layout">
      <img src="${item.image}" alt="${escapeHTML(item.name)}" onerror="imageFallback(this)">
      <div class="dialog-copy">
        <span class="product-meta">${escapeHTML(item.audience)} · ${escapeHTML(item.type)}</span>
        <h2>${escapeHTML(item.name)}</h2>
        <p>${escapeHTML(item.description)}</p>
        <p>${escapeHTML(item.details)}</p>
        <span class="price">${money(item.price)}</span>
        <p class="small-note">Sample price only. Confirm actual price, stock and fabric length.</p>
        <label for="colourSelect">Choose colour</label>
        <select id="colourSelect">
          ${item.colours.map((colour,i)=>`<option value="${escapeHTML(colour)}">${escapeHTML(colour)}</option>`).join("")}
        </select>
        <div class="dialog-colours">
          ${item.hex.map((hex,i)=>`<button class="colour-dot" data-colour="${escapeHTML(item.colours[i])}" title="${escapeHTML(item.colours[i])}" style="background:${hex}" aria-label="${escapeHTML(item.colours[i])}"></button>`).join("")}
        </div>
        <label for="fabricLength">Fabric length</label>
        <select id="fabricLength">
          <option value="Please advise">Please advise me</option>
          <option value="3 metres">3 metres</option>
          <option value="4 metres">4 metres</option>
          <option value="5 metres">5 metres</option>
          <option value="As listed by seller">As listed by seller</option>
        </select>
        <div class="product-actions">
          <button class="add-btn" id="dialogAdd">Add to Bag +</button>
          <button id="dialogBuy">Buy via WhatsApp ↗</button>
        </div>
      </div>
    </div>`;

  $("colourSelect").addEventListener("change", event => selectedColour = event.target.value);
  $("dialogContent").querySelectorAll("[data-colour]").forEach(button => {
    button.addEventListener("click", () => {
      selectedColour = button.dataset.colour;
      $("colourSelect").value = selectedColour;
    });
  });

  $("dialogAdd").addEventListener("click", () => {
    addToCart(item.id, selectedColour);
    $("productDialog").close();
    $("cart").scrollIntoView({behavior:"smooth"});
  });

  $("dialogBuy").addEventListener("click", () => {
    const length = $("fabricLength").value;
    sendWhatsApp(`Assalam-o-alaikum! I want to order ${item.name}. Colour: ${selectedColour}. Fabric length: ${length}. Listed sample price: ${money(item.price)}. Please confirm actual price, stock, delivery and payment options.`);
  });

  $("productDialog").showModal();
}

function addToCart(id, colour) {
  const item = fabrics.find(product => product.id === Number(id));
  if (!item) return;
  const key = `${item.id}-${colour}`;
  const existing = cart.find(entry => entry.key === key);

  if (existing) existing.qty++;
  else cart.push({key,id:item.id,colour,qty:1});

  renderProducts();
  renderCart();
}

function renderCart() {
  const target = $("cartItems");

  if (!cart.length) {
    target.innerHTML = '<p class="muted">Your bag is empty. Add a fabric to begin.</p>';
  } else {
    target.innerHTML = cart.map(entry => {
      const item = fabrics.find(product => product.id === entry.id);
      return `<div class="cart-item">
        <img src="${item.image}" alt="" onerror="imageFallback(this)">
        <div class="cart-item-info"><b>${escapeHTML(item.name)}</b><small>${escapeHTML(entry.colour)} · ${money(item.price)} each</small>
          <div class="quantity-control"><button data-qty="-1" data-key="${escapeHTML(entry.key)}">−</button><span>${entry.qty}</span><button data-qty="1" data-key="${escapeHTML(entry.key)}">+</button></div>
        </div>
        <button class="remove-btn" data-remove="${escapeHTML(entry.key)}">Remove</button>
      </div>`;
    }).join("");
  }

  const total = cart.reduce((sum,entry) => {
    const item = fabrics.find(product => product.id === entry.id);
    return sum + item.price*entry.qty;
  },0);

  $("cartTotal").textContent = money(total);
  $("cartCount").textContent = cart.reduce((sum,entry)=>sum+entry.qty,0);
}

function renderWishlist() {
  $("wishCount").textContent = wishlist.length;

  if (!wishlist.length) {
    $("wishlistItems").innerHTML = '<p class="muted">Your wishlist is empty.</p>';
    return;
  }

  $("wishlistItems").innerHTML = wishlist.map(id => {
    const item = fabrics.find(product => product.id === id);
    return `<div class="wishlist-item">
      <img src="${item.image}" alt="" onerror="imageFallback(this)">
      <div class="wishlist-item-info"><b>${escapeHTML(item.name)}</b><small>${money(item.price)}</small></div>
      <button class="remove-btn" data-wish="${item.id}">Remove</button>
      <button class="remove-btn" data-add="${item.id}">Add</button>
    </div>`;
  }).join("");
}

function sendWhatsApp(message) {
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`,"_blank","noopener");
}

document.addEventListener("click", event => {
  const open = event.target.closest("[data-open]");
  const add = event.target.closest("[data-add]");
  const wish = event.target.closest("[data-wish]");
  const quantity = event.target.closest("[data-qty]");
  const remove = event.target.closest("[data-remove]");
  const filter = event.target.closest("[data-category]");
  const storyFilter = event.target.closest("[data-story-filter]");

  if (open) openDetails(open.dataset.open);

  if (add) {
    const item = fabrics.find(product => product.id === Number(add.dataset.add));
    addToCart(item.id,item.colours[0]);
  }

  if (wish) {
    const id = Number(wish.dataset.wish);
    wishlist = wishlist.includes(id)
      ? wishlist.filter(value => value !== id)
      : [...wishlist,id];
    renderProducts();
    renderWishlist();
  }

  if (quantity) {
    const entry = cart.find(item => item.key === quantity.dataset.key);
    if (entry) {
      entry.qty += Number(quantity.dataset.qty);
      if (entry.qty <= 0) cart = cart.filter(item => item.key !== entry.key);
      renderCart();
      renderProducts();
    }
  }

  if (remove) {
    cart = cart.filter(item => item.key !== remove.dataset.remove);
    renderCart();
    renderProducts();
  }

  if (filter) {
    category = filter.dataset.category;
    renderProducts();
  }

  if (storyFilter) {
    $("audienceFilter").value = storyFilter.dataset.storyFilter;
    category = "All";
    renderProducts();
    $("shop").scrollIntoView({behavior:"smooth"});
  }
});

$("searchInput").addEventListener("input",renderProducts);
$("audienceFilter").addEventListener("change",renderProducts);
$("sortFilter").addEventListener("change",renderProducts);

$("dialogClose").addEventListener("click",()=>$("productDialog").close());
$("productDialog").addEventListener("click",event=>{
  if(event.target === $("productDialog")) $("productDialog").close();
});

$("menuToggle").addEventListener("click",()=>$("mainNav").classList.toggle("open"));
document.querySelectorAll("#mainNav a").forEach(link=>{
  link.addEventListener("click",()=>$("mainNav").classList.remove("open"));
});

$("cartTop").addEventListener("click",()=>$("cart").scrollIntoView({behavior:"smooth"}));
$("wishlistTop").addEventListener("click",()=>$("wishlist").scrollIntoView({behavior:"smooth"}));

$("checkoutButton").addEventListener("click",()=>{
  if (!cart.length) {
    alert("Your shopping bag is empty. Add a fabric first.");
    return;
  }

  const lines = cart.map(entry=>{
    const item = fabrics.find(product=>product.id===entry.id);
    return `${item.name} | Colour: ${entry.colour} | Qty: ${entry.qty} | ${money(item.price*entry.qty)}`;
  });

  const total = cart.reduce((sum,entry)=>{
    return sum + fabrics.find(item=>item.id===entry.id).price*entry.qty;
  },0);

  sendWhatsApp(`Assalam-o-alaikum! I would like to place an order request from ZARIN Fabrics.\n\n${lines.join("\n")}\n\nEstimated sample total: ${money(total)}\nPlease confirm final prices, stock, delivery charges, payment methods and order details.`);
});

$("reviewForm").addEventListener("submit",event=>{
  event.preventDefault();
  const name = $("reviewName").value.trim();
  const comment = $("reviewText").value.trim();
  const rating = Number($("reviewRating").value);
  if (!name || !comment) return;

  const card = document.createElement("article");
  card.className = "review-item";

  const title = document.createElement("b");
  title.textContent = name;

  const stars = document.createElement("div");
  stars.className = "stars";
  stars.textContent = "★".repeat(rating) + "☆".repeat(5-rating);

  const text = document.createElement("p");
  text.textContent = comment;

  card.append(title,stars,text);
  $("reviewList").prepend(card);
  $("reviewForm").reset();
});

$("trackingForm").addEventListener("submit",event=>{
  event.preventDefault();
  const ref = $("trackingNumber").value.trim();
  if (!ref) return;
  sendWhatsApp(`Assalam-o-alaikum! Please help me check the status of my order. Order reference: ${ref}.`);
});

$("year").textContent = new Date().getFullYear();
renderProducts();
renderCart();
renderWishlist();
  
