const slides = [
  'http://kfkit.rometheme.pro/besort/wp-content/uploads/sites/40/2022/11/beach-party-dj-set-K9SHFY4.jpg',
  'http://kfkit.rometheme.pro/besort/wp-content/uploads/sites/40/2022/11/happy-girls-having-fun-cheering-with-cocktails-at-5V9ZUL7.jpg',
  'http://kfkit.rometheme.pro/besort/wp-content/uploads/sites/40/2022/11/happy-girls-having-fun-drinking-cocktails-at-bar-o-9ZJAQLJ.jpg'
];

export function initializeHero() {
  const heroSection = document.getElementById('hero');
  let currentSlide = 0;

  function createSlide(src, index) {
    const slide = document.createElement('div');
    slide.className = 'hero-slide';
    slide.style.backgroundImage = `url(${src})`;
    slide.style.opacity = index === 0 ? '1' : '0';
    heroSection.appendChild(slide);
  }

  slides.forEach((slide, index) => createSlide(slide, index));

  function nextSlide() {
    const slides = heroSection.querySelectorAll('.hero-slide');
    slides[currentSlide].style.opacity = '0';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.opacity = '1';
  }

  setInterval(nextSlide, 5000);

  const content = `
    <div class="hero-content">
      <h2>Artificial Intelligence With Feelings</h2>
      <h1>Outsells humans on average by 50%!</h1>
      <p>The future is here. Imagine 50% more sales at a fraction of the cost you're paying now for your sales team. You never have to pay commissions!</p>
      <div class="hero-buttons">
        <a href="/booking" class="btn btn-primary">Make an appointment now to speak with Internet-Entity and a Human rep.</a>
        <button class="btn btn-secondary" id="play-video">Play Video</button>
      </div>
    </div>
  `;

  heroSection.insertAdjacentHTML('beforeend', content);

  document.getElementById('play-video').addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.className = 'video-modal';
    modal.innerHTML = `
      <div class="modal-content">
        <iframe width="560" height="315" src="https://myidecide.net/XVI8RE" frameborder="0" allowfullscreen></iframe>
        <button class="close-modal">Close</button>
      </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector('.close-modal').addEventListener('click', () => {
      document.body.removeChild(modal);
    });
  });
}
