var swiper = new Swiper(".mySwiper", {

  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 5000,
  },
  });

function openMenu(){

    document.getElementById("toggleMenu").classList.remove("close");
    document.getElementById("toggleMenu").classList.add("mobile-items");

    document.getElementById("openMenu").classList.remove("open");
    document.getElementById("openMenu").classList.add("close");

    document.getElementById("closeMenu").classList.add("open");
    document.getElementById("closeMenu").classList.remove("close");

   
      
  }

function closeMenu(){


    document.getElementById("toggleMenu").classList.add("close");
    document.getElementById("toggleMenu").classList.remove("mobile-items");
    
    document.getElementById("openMenu").classList.add("open");
    document.getElementById("openMenu").classList.remove("close");

    document.getElementById("closeMenu").classList.remove("open");
    document.getElementById("closeMenu").classList.add("close");
   
      
  }

  function toggleServices() {
    
    let element = document.getElementById("toggleMobile");
    element.classList.toggle('mobile-on');

  }