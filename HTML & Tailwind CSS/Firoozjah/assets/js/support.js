document.addEventListener('DOMContentLoaded', () => {
    const $ = document;
  
  // انتخاب سکشن‌ها و دکمه‌ها
const sendMessageContent = document.getElementById('sendMessageContent');
const messagesList = document.getElementById('messagesList');
const sendMessageButton = document.getElementById('sendMessageButton');
const viewMessageButton = document.getElementById('viewMessageButton');
const modal = document.getElementById('modal');


// رویداد کلیک برای دکمه ارسال در سکشن اول
sendMessageButton.addEventListener('click', () => {
  sendMessageContent.classList.add('hidden'); // مخفی کردن سکشن اول
  messagesList.classList.remove('hidden');   // نمایش سکشن دوم
});

// رویداد کلیک برای دکمه ارسال در سکشن دوم
viewMessageButton.addEventListener('click', () => {
  messagesList.classList.add('hidden');      // مخفی کردن سکشن دوم
  sendMessageContent.classList.remove('hidden'); // نمایش سکشن اول
});

sendMessageButton.addEventListener("click", () => {
  // نمایش مدال
  modal.classList.remove("hidden");

  setTimeout(() => {
    modal.classList.add("hidden");
  }, 4000);
});

  });
  