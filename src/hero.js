import { initializeHero } from './hero.js';

// Initialize the hero section
initializeHero();
const slides = [
  'https://kfkit.rometheme.pro/besort/wp-content/uploads/sites/40/2022/11/beach-party-dj-set-K9SHFY4.jpg',
  'https://kfkit.rometheme.pro/besort/wp-content/uploads/sites/40/2022/11/happy-girls-having-fun-cheering-with-cocktails-at-5V9ZUL7.jpg',
  'https://kfkit.rometheme.pro/besort/wp-content/uploads/sites/40/2022/11/happy-girls-having-fun-drinking-cocktails-at-bar-o-9ZJAQLJ.jpg'
];

let currentSlide = 0;

function createHeroSection() {
  const heroContainer = document.createElement('div');
  heroContainer.id = 'hero-container';
  heroContainer.innerHTML = `
    <section class="relative h-screen overflow-hidden">
      ${slides.map((slide, index) => `
        <div 
          class="hero-slide absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style="opacity: ${index === 0 ? 1 : 0}; z-index: ${index === 0 ? 1 : 0}"
        >
          <img
            src="${slide}"
            alt="AI Sales Assistant slide ${index + 1}"
            class="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      `).join('')}
      <div class="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
      <div class="absolute inset-0 flex items-center z-20">
        <div class="container mx-auto px-4">
          <div class="max-w-3xl">
            <h2 class="text-xl md:text-2xl text-white mb-4 font-light">Artificial Intelligence With Feelings</h2>
            <h1 class="text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-6">
              Outsells humans on average by 50%!
            </h1>
            <p class="text-white text-lg mb-8">
              The future is here. Imagine 50% more sales at a fraction of the cost you're paying now for your sales team. You never have to pay commissions!
            </p>
            <div class="flex space-x-4">
              <a href="/booking" class="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 cursor-pointer">
                Make an appointment now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  document.body.insertBefore(heroContainer, document.body.firstChild);

  setInterval(() => {
    const slideElements = document.querySelectorAll('.hero-slide');
    slideElements[currentSlide].style.opacity = '0';
    slideElements[currentSlide].style.zIndex = '0';
    currentSlide = (currentSlide + 1) % slides.length;
    slideElements[currentSlide].style.opacity = '1';
    slideElements[currentSlide].style.zIndex = '1';
  }, 5000);
}

createHeroSection();
