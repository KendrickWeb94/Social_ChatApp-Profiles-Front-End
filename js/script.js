
  var swiper = new Swiper(".swiper", {
     // Optional parameters
     direction: 'horizontal',
     loop: true,
     GrabCursor:true,  
    
   
    breakpoints: {
      640: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
     
    },
  });

  