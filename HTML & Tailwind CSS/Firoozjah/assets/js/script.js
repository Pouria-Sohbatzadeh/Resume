document.addEventListener('DOMContentLoaded', () => {
    const $ = document;
  
    const hamburgerMenu = $.getElementById('hamburgerMenu');
    const verticalMenu = $.getElementById('verticalMenu');
    const sections = $.querySelectorAll('section');
  
    const userIcon = $.getElementById('userIcon');
    const userVerticalMenu = $.getElementById('userVerticalMenu');
  

  
    // مدیریت منوی اصلی
    hamburgerMenu.addEventListener('click', () => {
      verticalMenu.classList.toggle('hidden');
      userVerticalMenu.classList.add('hidden');
  
      sections.forEach(section => {
        section.classList.toggle('blurred', !verticalMenu.classList.contains('hidden'));
      });
    });
  
    userIcon.addEventListener('click', () => {
      userVerticalMenu.classList.toggle('hidden');
      verticalMenu.classList.add('hidden');
  
      sections.forEach(section => {
        section.classList.remove('blurred');
      });
    });
  });
  