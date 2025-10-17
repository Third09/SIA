document.addEventListener("DOMContentLoaded", () => {
  const discoverList = document.querySelector('.discover-list');
  const nextBtn = document.querySelector('.next-btn');
  const prevBtn = document.querySelector('.prev-btn');

  const cardWidth = 380; // width + gap

  function updateButtons() {
    const maxScroll = discoverList.scrollWidth - discoverList.clientWidth;
    prevBtn.classList.toggle('hidden', discoverList.scrollLeft <= 0);
    nextBtn.classList.toggle('hidden', discoverList.scrollLeft >= maxScroll - 5);
  }

  nextBtn.addEventListener('click', () => {
    discoverList.scrollBy({ left: cardWidth, behavior: 'smooth' });
    setTimeout(updateButtons, 500);
  });

  prevBtn.addEventListener('click', () => {
    discoverList.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    setTimeout(updateButtons, 500);
  });

  discoverList.addEventListener('scroll', updateButtons);

  // Run once when page loads
  updateButtons();
});
