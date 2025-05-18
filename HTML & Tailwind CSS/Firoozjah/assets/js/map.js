document.addEventListener('DOMContentLoaded', () => {
    const $ = document;
  
    // انتخاب همه اسپن‌های بازکننده مدال
const triggerModals = document.querySelectorAll('.trigger-modal');
// انتخاب همه مدال‌ها
const modals = document.querySelectorAll('.modal');

// افزودن رویداد کلیک به اسپن‌ها
triggerModals.forEach((span) => {
  span.addEventListener('click', () => {
    // گرفتن آیدی مدال مربوطه از data-modal
    const modalId = span.getAttribute('data-modal');
    const modal = document.getElementById(modalId);

    // نمایش مدال
    modal.classList.remove('hidden');
  });
});

// بستن مدال با کلیک روی دکمه بستن یا بیرون از مدال
modals.forEach((modal) => {
  const closeButton = modal.querySelector('.close');

  // بستن با کلیک روی دکمه بستن
  closeButton.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  // بستن با کلیک روی فضای بیرون
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.add('hidden');
    }
  });
}); 

modals.forEach((modal) => {
    const closeButton = modal.querySelector('.close'); // آیکون حذف را انتخاب کن
  
    // افزودن رویداد کلیک به آیکون حذف
    closeButton.addEventListener('click', () => {
      modal.classList.add('hidden'); // مدال را هیدن کن
    });
  });


  });
  