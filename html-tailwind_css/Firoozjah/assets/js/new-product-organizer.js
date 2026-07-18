document.addEventListener('DOMContentLoaded', () => {
    const $ = document;
  

    // مدیریت مدال‌ها
    const removeModal = $.getElementById('removeModal');
    const removeModal1 = $.getElementById('removeModal1');
    const unaciveProduct = $.getElementById('unaciveProduct');
    const unaciveProduct1 = $.getElementById('unaciveProduct1');
    const closeIcon = $.getElementById('closeIcon');
    const closeModal2 = $.getElementById('closeModal2');
    const closeModal1 = $.getElementById('closeModal1');
    const closeModal12 = $.getElementById('closeModal12');


    unaciveProduct.addEventListener('click', () => {
      removeModal.classList.remove('hidden');
    });
  
    closeIcon.addEventListener('click', () => {
      removeModal.classList.add('hidden');
    });

    closeModal2.addEventListener('click', () => {
      removeModal.classList.add('hidden');
    });
  
    unaciveProduct1.addEventListener('click', () => {
      removeModal1.classList.remove('hidden');
    });
  
    closeModal1.addEventListener('click', () => {
      removeModal1.classList.add('hidden');
    });
  
    closeModal12.addEventListener('click', () => {
      removeModal1.classList.add('hidden');
    });
  

  //   باز شدن صفحه اصلاحات
  const hiddenContent = $.getElementById('hiddenContent');
  const openHiddenContent = $.getElementById('openHiddenContent');
  const openHiddenContent1 = $.getElementById('openHiddenContent1');
  const mainContent = $.getElementById('mainContent');
  const submitBtn = $.getElementById('submit');

  openHiddenContent.addEventListener('click', () => {
    hiddenContent.classList.remove('hidden');
    mainContent.classList.add('hidden');
    removeModal.classList.add('hidden');
  });

  openHiddenContent1.addEventListener('click', () => {
    hiddenContent.classList.remove('hidden');
    mainContent.classList.add('hidden');
    removeModal1.classList.add('hidden');
  });

  submitBtn.addEventListener('click', () => {
    mainContent.classList.remove('hidden');
    hiddenContent.classList.add('hidden');
  });


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