document.addEventListener("DOMContentLoaded", () => {

  const reject = document.getElementById('reject')
  const rejectContent = document.getElementById('rejectContent')
  const mainContent = document.getElementById('mainContent')
    

  reject.addEventListener('click', () => {
    mainContent.classList.toggle('hidden');
    rejectContent.classList.toggle('hidden');
  });
    
  });
  
  
  