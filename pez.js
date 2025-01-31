document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".menu-button");
    const navMenu = document.querySelector(".nav-menu");
  
    menuButton.addEventListener("click", () => {
      // "open" クラスをトグルしてメニューを開閉
      navMenu.classList.toggle("open");
    });
  });
  
  console.log('Hello World');
