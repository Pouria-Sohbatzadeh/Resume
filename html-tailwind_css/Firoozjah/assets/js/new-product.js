document.addEventListener('DOMContentLoaded', () => {
    const $ = document;
    const categoryBtn = $.getElementById('category');
    const categoryContent = $.getElementById('categoryContent');
    const attributesAndPriceBtn = $.getElementById('attributesAndPriceBtn');
    const attributesAndPriceContent = $.getElementById('attributesAndPriceContent');
    const uploadPicBtn = $.getElementById('uploadPic');
    const uploadPicContent = $.getElementById('uploadPicContent');                                                                           
 
    // مدیریت نمایش محتواها
    const buttons = [categoryBtn, attributesAndPriceBtn, uploadPicBtn];
    const contents = [categoryContent, attributesAndPriceContent, uploadPicContent];
  
    function showContent(index) {
      contents.forEach((content, i) => {
        if (i === index) {
          content.classList.remove('hidden'); // نمایش محتوا
        } else {
          content.classList.add('hidden'); // مخفی کردن سایر محتواها
        }
      });
  
      buttons.forEach((button, i) => {
        if (i === index) {
          button.classList.add('bg-headline-blue', 'text-[#fff]'); // استایل دکمه فعال
        } else {
          button.classList.remove('bg-headline-blue', 'text-[#fff]'); // حذف استایل از بقیه
        }
      });
    }
  
    categoryBtn.addEventListener('click', () => showContent(0));
    attributesAndPriceBtn.addEventListener('click', () => showContent(1));
    uploadPicBtn.addEventListener('click', () => showContent(2)); 


    // حذف دیو والد
const deleteIcons = $.querySelectorAll('.delete-icon');

deleteIcons.forEach((icon) => {
  icon.addEventListener('click', function () {

    const parentDiv = this.closest('.cursor-pointer');
    
    if (parentDiv) {
      parentDiv.remove();
    }
  });
});
  });
  