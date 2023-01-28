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


  function toggleServices() {
    
    var x = document.getElementById("toggleMobile");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }

  }