document.addEventListener("DOMContentLoaded", function () {
  const categoryCards = document.querySelectorAll(".categorycard");
  const productList = document.querySelector(".product-list");
  const productTitle = document.querySelector(".products h2");

  if (!categoryCards.length || !productList || !productTitle) return;

  const productsByCategory = {
    skincare: [
      { name: "Velvet Touch Cleanser", price: "₱240", img: "/frontend/images/Skincare/cleanser.jpg" },
      { name: "HydraBloom Moisturizer", price: "₱300", img: "/frontend/images/Skincare/moisturizer.jpg" },
      { name: "Radiance Glow Serum", price: "₱360", img: "/frontend/images/Skincare/serum.jpg" },
      { name: "Crystal Dew Essence", price: "₱370", img: "/frontend/images/Skincare/essence.jpg" },
      { name: "Luminous Day Cream", price: "₱320", img: "/frontend/images/Skincare/daycream.jpg" }
    ],
    makeup: [
      { name: "Silky Matte Lipstick", price: "₱199", img: "/frontend/images/Makeup/lipstick.jpg" },
      { name: "Flawless Foundation", price: "₱280", img: "/frontend/images/Makeup/foundation.jpg" },
      { name: "Rosy Bloom Blush", price: "₱220", img: "/frontend/images/Makeup/blush(1).jpg" },
      { name: "Dazzle Eyeshadow", price: "₱250", img: "/frontend/images/Makeup/eyeshadow.jpg" },
      { name: "Perfect Line Eyeliner", price: "₱150", img: "/frontend/images/Makeup/eyeliner.jpg" }
    ],
    bodycare: [
      { name: "Aloe Body Lotion", price: "₱290", img: "/frontend/images/Bodycare/lotion.jpg" },
      { name: "Coconut Body Scrub", price: "₱310", img: "/frontend/images/Bodycare/scrub.jpg" },
      { name: "Rose Shower Gel", price: "₱330", img: "/frontend/images/Bodycare/showergel.jpg" },
      { name: "Milk Bath Soap", price: "₱180", img: "/frontend/images/Bodycare/soap.jpg" },
      { name: "Lavender Mist", price: "₱250", img: "/frontend/images/Bodycare/mist.jpg" }
    ]
  };

  function renderProducts(categoryKey) {
    const items = productsByCategory[categoryKey] || [];
    productTitle.textContent = categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1) + " Products";
    productList.innerHTML = items.map(p => `
      <div class="product">
        <a href="/frontend/html/Productpage.html"><div class="box">
          <img src="${p.img}" alt="${p.name}" style="width:100%; height:100%; object-fit:cover; border-radius:10px;">
        </div>
        <p>${p.name}<br>${p.price}</p>
      </div>
    `).join("");
  }

  categoryCards.forEach(card => {
    card.addEventListener("click", function () {
      categoryCards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");
      const category = card.getAttribute("data-category");
      renderProducts(category);
    });
  });

  // load first category by default
  if (categoryCards.length > 0) {
    const firstCategory = categoryCards[0].getAttribute("data-category");
    categoryCards[0].classList.add("active");
    renderProducts(firstCategory);
  }
});
