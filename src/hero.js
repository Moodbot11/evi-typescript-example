const slides = [
  'http://kfkit.rometheme.pro/besort/wp-content/uploads/sites/40/2022/11/beach-party-dj-set-K9SHFY4.jpg',
  'http://kfkit.rometheme.pro/besort/wp-content/uploads/sites/40/2022/11/happy-girls-having-fun-cheering-with-cocktails-at-5V9ZUL7.jpg',
  'http://kfkit.rometheme.pro/besort/wp-content/uploads/sites/40/2022/11/happy-girls-having-fun-drinking-cocktails-at-bar-o-9ZJAQLJ.jpg'
];

function HeroSection() {
  let currentSlide = 0;
  let isVideoModalOpen = false;

  function nextSlide() {
    const slideElements = document.querySelectorAll('.hero-slide');
    slideElements[currentSlide].style.opacity = '0';
    slideElements[currentSlide].style.zIndex = '0';
    currentSlide = (currentSlide + 1) % slides.length;
    slideElements[currentSlide].style.opacity = '1';
    slideElements[currentSlide].style.zIndex = '1';
  }

  function openVideoModal() {
    document.getElementById('videoModal').style.display = 'flex';
    isVideoModalOpen = true;
  }

  function closeVideoModal() {
    document.getElementById('videoModal').style.display = 'none';
    isVideoModalOpen = false;
  }

  setInterval(nextSlide, 5000);

  return `
    <section class="relative h-screen overflow-hidden">
      ${slides.map((slide, index) => `
        <div 
          class="hero-slide absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style="opacity: ${index === 0 ? 1 : 0}; z-index: ${index === 0 ? 1 : 0}"
        >
          <img
            src="${slide}"
            alt="Beach resort slide ${index + 1}"
            class="absolute inset-0 w-full h-full object-cover"
            style="transform: scale(${index === 0 ? 1.1 : 1}); transition: transform 10s ease-in-out"
          />
        </div>
      `).join('')}
      <div class="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
      <div class="absolute inset-0 flex items-center z-20">
        <div class="container mx-auto px-4">
          <div class="max-w-3xl">
            <h2 class="text-xl md:text-2xl text-white mb-4 font-light animate-fade-in-up">Artificial Intelligence With Feelings</h2>
            <h1 class="text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-6 animate-fade-in-up animation-delay-300">
              Outsells humans on average by 50%!
            </h1>
            <p class="text-white text-lg mb-8 animate-fade-in-up animation-delay-600">
              The future is here imagine 50% more sales at a fraction of the cost you're paying now for your sales team. You never have to pay commissions!!!
            </p>
            <div class="flex space-x-4 animate-fade-in-up animation-delay-900">
              <a href="/booking" class="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 cursor-pointer">
                Make an appointment now to speak with Enternet-Entity and a Human rep.
              </a>
              <button 
                class="border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-blue-600 transition duration-300 flex items-center"
                onclick="openVideoModal()"
              >
                Play Video <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2 h-4 w-4"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div id="videoModal" class="fixed inset-0 bg-black bg-opacity-75 items-center justify-center z-50" style="display: none;">
      <div class="bg-white p-4 rounded-lg">
        <iframe 
          width="560" 
          height="315" 
          src="https://myidecide.net/XVI8RE" 
          title="Resort Video" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
        ></iframe>
        <button 
          class="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
          onclick="closeVideoModal()"
        >
          Close
        </button>
      </div>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  const heroContainer = document.createElement('div');
  heroContainer.innerHTML = HeroSection();
  document.body.insertBefore(heroContainer, document.body.firstChild);
});
