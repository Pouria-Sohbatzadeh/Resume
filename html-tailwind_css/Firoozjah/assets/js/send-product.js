document.addEventListener('DOMContentLoaded', () => {
    const $ = document;
    
    const select = $.getElementById('select')
    const selectMenu = $.getElementById('selectMenu')
    const select1 = $.getElementById('select1')
    const select1Menu = $.getElementById('select1Menu')
    
    // نمایش select option
    select.addEventListener('click', () => {
        selectMenu.classList.toggle('hidden');
      });

    select1.addEventListener('click', () => {
        select1Menu.classList.toggle('hidden');
      });


//        // انتخاب تمام دکمه‌ها
  const buttons = document.querySelectorAll('.tab-button');

  // تعریف رنگ‌های هر دکمه
  const gradients = [
    'linear-gradient(to bottom right, #FAB953 0%, #FD9931 73%)', // پست پیشتاز
    'linear-gradient(to bottom right, #18CA5F 26%, #64DA93 100%)', // تیپاکس
    'linear-gradient(to bottom right, #22C3F0 0%, #29A0E3 100%)', // باربری
    'linear-gradient(to bottom right, #EA2548 5%, #FF5775 100%)'  // پیک موتوری
  ];

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      // حذف استایل از تمامی دکمه‌ها
      buttons.forEach(btn => {
        btn.style.background = ''; // پاک کردن گرادینت
        btn.style.color = '#6B6B6B'; // تنظیم رنگ متن به پیش‌فرض
      });

      // افزودن گرادینت و رنگ متن به دکمه کلیک‌شده
      button.style.background = gradients[index];
      button.style.color = '#fff'; // تغییر رنگ متن به سفید
    });
  });
      


// انتخاب تمام دکمه‌ها و سکشن‌ها
const tabs = document.querySelectorAll('.hidden_tabs');

// افزودن رویداد کلیک به دکمه‌ها
buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // پنهان کردن همه سکشن‌ها
    tabs.forEach(tab => tab.classList.add('hidden'));

    // نمایش سکشن مرتبط
    tabs[index].classList.remove('hidden');

  });
});



  });
  