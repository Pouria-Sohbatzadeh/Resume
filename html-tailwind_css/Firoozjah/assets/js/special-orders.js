document.addEventListener("DOMContentLoaded", () => {
    const specialDiv = document.getElementById("special-div");
  
    // افزودن رویداد کلیک به دیو
    specialDiv.addEventListener("click", (event) => {
      event.stopPropagation(); // جلوگیری از اجرای رویداد کلیک روی `document`
      specialDiv.classList.toggle("bg-custom-gradient-green");
      specialDiv.querySelectorAll("span").forEach((span) => {
        span.classList.toggle("text-[#fff]");
      });
    });
  
    // رویداد کلیک خارج از دیو
    document.addEventListener("click", () => {
      specialDiv.classList.remove("bg-custom-gradient-green");
      specialDiv.classList.add("text-[#64DA93]");
      specialDiv.querySelectorAll("span").forEach((span) => {
        span.classList.remove("text-[#fff]");
      });
    });

      
    
      const specialDiv1 = document.getElementById("special-div1");
      const spans = specialDiv.querySelectorAll("span");
    
      // افزودن کلاس‌ها هنگام کلیک روی دیو
      specialDiv1.addEventListener("click", (event) => {
        event.stopPropagation(); // جلوگیری از اجرای رویداد کلیک روی document
    
        specialDiv1.classList.add("bg-custom-gradient-purple");
        spans.forEach((span) => span.classList.add("text-[#fff]"));
      });
    
      // حذف کلاس‌ها هنگام کلیک خارج از دیو
      document.addEventListener("click", () => {
        specialDiv1.classList.remove("bg-custom-gradient-purple");
        spans.forEach((span) => span.classList.remove("text-[#fff]"));
      });
    
  });
  
