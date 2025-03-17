// Show content after splash screen
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      const splashScreen = document.getElementById('splash-screen');
      const mainContent = document.getElementById('main-content');
      
      splashScreen.style.display = 'none';
      mainContent.classList.remove('hidden');
    }, 1300);
  });