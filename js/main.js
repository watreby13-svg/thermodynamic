// Seed data
const PRODUCTS = [{
  id: 'bentobox-classic',
  name: 'Thermodynamic BentoBox',
  tagline: 'Classic',
  basePrice: 49,
  sizes: [
    { label: 'Standard (1.2L)', price: 49 },
    { label: 'Large (1.8L)', price: 59 },
    { label: 'Mini (0.8L)', price: 29 }
  ],
  colors: ['#1e293b', '#f97316', '#3b82f6', '#84cc16', '#f9fafb'],
  images: ['🥪', '🍱', '🧊', '🔥', '📐', '🎒', '🏔️', '🧰']
}];

const REVIEWS = [
  { name: 'Sarah M.', location: 'Auckland', stars: 5, date: '2026-03-12', badge: 'Parent', title: 'Game changer for school lunches', text: 'My daughter loves taking hot pasta and cold fruit together. No more lukewarm lunches! The compartments really work.', hasPhoto: true },
  { name: 'James T.', location: 'Wellington', stars: 5, date: '2026-02-28', badge: 'Commuter', title: 'Perfect for office lunches', text: 'I prep my lunch the night before — hot curry in one compartment, cold salad in another. Still perfect at midday.', hasPhoto: true },
  { name: 'Lisa W.', location: 'Christchurch', stars: 4, date: '2026-03-05', badge: 'Parent', title: 'Great concept, works well', text: 'Took it for a beach day. Mince pies stayed hot, ice blocks stayed frozen. Impressed with the insulation.', hasPhoto: false },
  { name: 'Tom H.', location: 'Dunedin', stars: 5, date: '2026-01-20', badge: 'Outdoor', title: 'Road trip essential', text: 'We drove from Dunedin to Nelson and had hot soup and cold drinks. Honestly incredible for a lunchbox.', hasPhoto: true },
  { name: 'Emma R.', location: 'Hamilton', stars: 5, date: '2026-02-14', badge: 'Parent', title: 'No more soggy sandwiches', text: 'Finally a lunchbox that keeps everything in its place — temperature-wise and physically. Easy to clean too.', hasPhoto: false },
  { name: 'Mike P.', location: 'Tauranga', stars: 4, date: '2026-01-08', badge: 'Commuter', title: 'Solid build, worth the price', text: 'Bit pricey but the build quality is obvious. Stainless feel, strong latch. My leftovers have never been better.', hasPhoto: true },
  { name: 'Rachel K.', location: 'Auckland', stars: 5, date: '2026-03-18', badge: 'Parent', title: 'We bought three for the family', text: 'One for each kid and one for us. No more fighting over who gets the hot lunch. Best school purchase this year.', hasPhoto: false },
  { name: 'Ben C.', location: 'Queenstown', stars: 5, date: '2026-02-22', badge: 'Outdoor', title: 'Took it hiking', text: 'Packed hot bacon rolls and cold grapes for a day on the Routeburn. Everyone else was jealous.', hasPhoto: true },
  { name: 'Priya S.', location: 'Wellington', stars: 4, date: '2026-03-01', badge: 'Commuter', title: 'Meal prep dream', text: 'I batch cook on Sundays and portion into compartments. Grab and go all week. Works brilliantly.', hasPhoto: false },
  { name: 'Dan L.', location: 'Napier', stars: 5, date: '2026-01-30', badge: 'Parent', title: 'Mince pie + ice cream = genius', text: 'Saw the ad and had to try it. Packed a hot mince pie and ice cream for lunch. Both perfect. Magic.', hasPhoto: true },
  { name: 'Olivia B.', location: 'Christchurch', stars: 4, date: '2026-02-05', badge: 'Commuter', title: 'Good for portion control', text: 'The compartments naturally portion my meals. I\'m eating better and my lunches taste better. Win-win.', hasPhoto: false },
  { name: 'Steve J.', location: 'Auckland', stars: 5, date: '2026-03-22', badge: 'Outdoor', title: 'Beach day hero', text: 'Kept our lunch cold for 6 hours in the sun. No leaks, no mess. Threw it in the bag and off we went.', hasPhoto: true },
  { name: 'Kate W.', location: 'Hamilton', stars: 3, date: '2026-01-15', badge: 'Parent', title: 'Good but heavy', text: 'Works as advertised but it\'s heavier than a regular lunchbox. Fine for older kids, maybe too heavy for tiny ones.', hasPhoto: false },
  { name: 'Alex N.', location: 'Dunedin', stars: 5, date: '2026-02-18', badge: 'Commuter', title: 'No more microwave queue', text: 'I eat hot lunch without queuing for the microwave. Coworkers keep asking where I got it.', hasPhoto: true },
  { name: 'Maya T.', location: 'Auckland', stars: 5, date: '2026-03-10', badge: 'Parent', title: 'Pickiest eater approved', text: 'My 7-year-old actually eats all his lunch now because the food is actually the right temperature. Worth every cent.', hasPhoto: true },
  { name: 'Craig D.', location: 'Tauranga', stars: 4, date: '2026-02-08', badge: 'Outdoor', title: 'Good for fishing trips', text: 'Takes a beating in my fishing bag. Keeps bait cold and lunch hot. Rugged little box.', hasPhoto: false },
  { name: 'Natalie F.', location: 'Wellington', stars: 5, date: '2026-03-28', badge: 'Commuter', title: 'Best lunchbox I\'ve owned', text: 'I\'ve tried so many "insulated" lunchboxes. This one actually delivers. Hot stays hot, cold stays cold.', hasPhoto: true },
  { name: 'Hemi R.', location: 'Rotorua', stars: 5, date: '2026-01-25', badge: 'Outdoor', title: 'Thermal springs test', text: 'Left it in the car on a hot Rotorua day. Contents were still perfectly separated temp-wise. Amazing.', hasPhoto: false }
];

const FAQS = [
  { q: 'Can it really keep hot and cold at the same time?', a: 'Yes. Each compartment is independently insulated with a thermal barrier between them. Heat transfer between compartments is minimised, so you can pack hot and cold food together without compromise.' },
  { q: 'Will flavours or smells transfer between compartments?', a: 'No. Each compartment is sealed independently with food-grade silicone gaskets. Strong smells like curry or fish won\'t leak into adjacent compartments.' },
  { q: 'Is it leak-proof?', a: 'Yes. The lid seals each compartment individually with silicone gaskets. It\'s designed to be leak-resistant for typical lunch foods. Very liquid contents (like soup) should be packed with care.' },
  { q: 'Is it dishwasher safe?', a: 'Yes, the compartments and lid are dishwasher safe on the top rack. We recommend hand-washing the outer shell to preserve its finish.' },
  { q: 'What sizes are available?', a: 'Three sizes: Standard (1.2L), Large (1.8L), and Mini (0.8L). Each has a 3-compartment layout suitable for main, side, and snack.' },
  { q: 'How long does it keep food hot/cold?', a: 'Hot food stays hot (above 50°C) for up to 4 hours. Cold food stays cold (below 5°C) for up to 6 hours. Performance depends on starting temperature, ambient conditions, and how often the box is opened.' },
  { q: 'Can I put soup or curry inside?', a: 'Yes, thicker soups and curries work well. Very thin/watery soups may be prone to leaking if the box is tilted. We recommend using a small thermos for fully liquid soups.' },
  { q: 'What materials is it made from?', a: 'Food-grade stainless steel inner compartments, BPA-free food-grade plastic outer shell, silicone gaskets. All materials are food-safe and comply with NZ food contact standards.' },
  { q: 'How do I clean it?', a: 'Compartments and lid are dishwasher safe (top rack). The outer shell can be wiped clean with a damp cloth. Silicone gaskets can be removed for thorough cleaning.' },
  { q: 'Shipping in New Zealand?', a: 'We ship nationwide. Standard shipping is free for orders over $79 NZD. Rural delivery adds $5. Typical delivery is 2–5 business days within NZ.' },
  { q: 'Warranty & returns?', a: 'One-year warranty against manufacturing defects. 30-day satisfaction guarantee — if you\'re not happy, return it for a full refund. Terms apply.' },
  { q: 'Can I pack hot and cold food directly next to each other?', a: 'Absolutely. The insulation barriers between compartments are designed specifically for this. Hot one side, cold the other — that\'s the whole idea.' }
];

// Cart
let cart = JSON.parse(localStorage.getItem('td_cart') || '[]');

function saveCart() {
  localStorage.setItem('td_cart', JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
}

function addToCart(productId, size, color, qty = 1) {
  const existing = cart.find(i => i.productId === productId && i.size === size && i.color === color);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ productId, size, color, qty });
  }
  saveCart();
  showToast('Added to cart ✓');
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  if (window.location.pathname.includes('cart') || window.location.pathname.includes('cart.html')) renderCartPage();
}

function updateQty(index, delta) {
  cart[index].qty = Math.max(1, cart[index].qty + delta);
  saveCart();
  if (window.location.pathname.includes('cart') || window.location.pathname.includes('cart.html')) renderCartPage();
}

function getPrice(label) {
  const p = PRODUCTS[0];
  const s = p.sizes.find(s => s.label === label);
  return s ? s.price : p.basePrice;
}

function showToast(msg) {
  const t = document.getElementById('toast') || (() => {
    const el = document.createElement('div');
    el.id = 'toast';
    el.className = 'toast';
    document.body.appendChild(el);
    return el;
  })();
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timeout);
  t._timeout = setTimeout(() => t.classList.remove('show'), 2500);
}

// Mobile nav
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const mobileNav = document.querySelector('.mobile-nav');
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
      menuBtn.textContent = mobileNav.classList.contains('open') ? '✕' : '☰';
    });
  }
  updateCartCount();
});

// FAQ accordion
document.addEventListener('click', (e) => {
  const q = e.target.closest('.faq-question');
  if (!q) return;
  const item = q.closest('.faq-item');
  if (!item) return;
  const open = item.classList.contains('open');
  // Close all
  document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
  if (!open) item.classList.add('open');
});

// Render cart page
function renderCartPage() {
  const container = document.getElementById('cart-container');
  if (!container) return;
  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <div class="icon">🛒</div>
        <h2>Your cart is empty</h2>
        <p>Looks like you haven't added anything yet.</p>
        <a href="shop.html" class="btn btn-primary">Shop lunchboxes</a>
      </div>`;
    return;
  }
  let html = `<table class="cart-table">
    <thead><tr><th>Product</th><th>Size</th><th>Qty</th><th>Price</th><th></th></tr></thead><tbody>`;
  let subtotal = 0;
  cart.forEach((item, i) => {
    const price = getPrice(item.size);
    const lineTotal = price * item.qty;
    subtotal += lineTotal;
    const product = PRODUCTS.find(p => p.id === item.productId);
    html += `<tr>
      <td><div style="display:flex;align-items:center;gap:.75rem"><div class="cart-item-img">🥪</div><div><div style="font-weight:600">${product?.name || 'Product'}</div><div style="font-size:.8125rem;color:var(--slate-500)">${item.color ? 'Colour selected' : ''}</div></div></div></td>
      <td>${item.size}</td>
      <td><div class="cart-qty"><button onclick="updateQty(${i},-1)">−</button><span>${item.qty}</span><button onclick="updateQty(${i},1)">+</button></div></td>
      <td style="font-weight:600">$${lineTotal}</td>
      <td><button class="cart-remove" onclick="removeFromCart(${i})">✕</button></td>
    </tr>`;
  });
  const shipping = subtotal >= 79 ? 0 : 9;
  const total = subtotal + shipping;
  html += `</tbody></table>
    <div class="cart-summary">
      <div class="row"><span>Subtotal</span><span>$${subtotal}</span></div>
      <div class="row"><span>Shipping</span><span>${shipping === 0 ? 'FREE' : '$' + shipping}</span></div>
      <div class="row total"><span>Total</span><span>$${total} NZD</span></div>
      <a href="checkout.html" class="btn btn-primary" style="width:100%;margin-top:1rem">Checkout →</a>
    </div>`;
  container.innerHTML = html;
}

// Render PDP
function renderPDP() {
  // Handled inline in shop.html
}

// Render reviews page
function renderReviews() {
  const grid = document.getElementById('reviews-grid');
  if (!grid) return;
  const reviewImages = ['standard_slate.png', 'standard_orange.png', 'standard_blue.png', 'standard_green.png', 'standard_white.png', 'large_slate.png'];
  let html = '';
  REVIEWS.forEach((r, i) => {
    const img = reviewImages[i % reviewImages.length];
    html += `<div class="review-full-card">
      ${r.hasPhoto ? `<div class="review-photo" style="position:relative;overflow:hidden;background:var(--slate-50);display:flex;align-items:center;justify-content:center"><img src="assets/${img}" alt="Review photo" style="width:70%;object-fit:contain"></div>` : ''}
      <div class="stars">${'★'.repeat(r.stars)}${'☆'.repeat(5 - r.stars)}</div>
      <div class="date">${new Date(r.date).toLocaleDateString('en-NZ', { day: 'numeric', month: 'long', year: 'numeric' })}</div>
      <h4>${r.title}</h4>
      <p>${r.text}</p>
      <div class="author"><span>${r.name}, ${r.location}</span><span class="badge">${r.badge}</span></div>
    </div>`;
  });
  grid.innerHTML = html;
}

// Checkout page
function renderCheckout() {
  const summary = document.getElementById('checkout-summary');
  const form = document.getElementById('checkout-form');
  if (!summary) return;
  if (cart.length === 0 && form) {
    form.innerHTML = '<div class="cart-empty"><div class="icon">🛒</div><h2>Your cart is empty</h2><p>Add something first!</p><a href="shop.html" class="btn btn-primary">Shop lunchboxes</a></div>';
    return;
  }
  let html = '<div class="order-summary"><h2>Order summary</h2>';
  let subtotal = 0;
  cart.forEach(item => {
    const price = getPrice(item.size);
    const lineTotal = price * item.qty;
    subtotal += lineTotal;
    html += `<div class="item"><span>${item.qty}× Thermodynamic BentoBox (${item.size})</span><span>$${lineTotal}</span></div>`;
  });
  const shipping = subtotal >= 79 ? 0 : 9;
  const total = subtotal + shipping;
  html += `<div class="item"><span>Shipping</span><span>${shipping === 0 ? 'FREE' : '$' + shipping}</span></div>`;
  html += `<div class="item total"><span>Total</span><span>$${total} NZD</span></div></div>`;
  summary.innerHTML = html;

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Order placed! (Prototype — no payment taken)');
      cart = [];
      saveCart();
      setTimeout(() => window.location.href = 'index.html', 1500);
    });
  }
}

// Email capture
document.addEventListener('submit', (e) => {
  if (e.target.classList.contains('email-form')) {
    e.preventDefault();
    const input = e.target.querySelector('input[type="email"]');
    if (input && input.value) {
      showToast('Thanks! You\'re on the list 🎉');
      input.value = '';
    }
  }
});
