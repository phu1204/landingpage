$('.slick-container').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
});
function menuScroll(){
window.addEventListener('scroll',function(){
  var headerBot = document.querySelector(".header-bottom");
  headerBot.classList.toggle("fixed",window.scrollY>35)
});
}
 
function reveal(){
    var reveals = document.querySelectorAll(".reveal");
    for(var i = 0 ; i < reveals.length ; i++){
        var windowheight = window.innerHeight;
        var revealtop =  reveals[i].getBoundingClientRect().top;
        var revealpoint = 30;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add("active");
        }
        
    }
}
window.addEventListener('scroll', reveal); 
menuScroll();



function menuBar(){
  const navMenu = document.querySelector(".header-bar")
  const headerSubNav = document.querySelector(".header-menu-bar")
  const headerRight = document.querySelector(".header-detail")
  const navClose = document.querySelector(".header-close")

  headerSubNav.addEventListener("click", function(e){
    if (e.target.hasAttribute("data-toggle")){
      const menuNav = e.target.parentElement;
      if(menuNav.classList.contains("active")){
        closeMenu();
      }
      else{
        if(headerSubNav.querySelector(".header-item.active")){
          closeMenu();
        }
        menuNav.classList.add("active")
        const subMenu = menuNav.querySelector(".header-nav-menu");
        subMenu.style.maxHeight = subMenu.scrollHeight + "px";
      }  
    }
  })
  
  function closeMenu(){
    headerSubNav.querySelector(".header-item.active .header-nav-menu").removeAttribute("style")
    headerSubNav.querySelector(".header-item.active").classList.remove("active")
  }

  navMenu.addEventListener("click",function(){
    headerSubNav.classList.add("active");
  })
  navClose.addEventListener("click",function(){
    headerSubNav.classList.remove("active");
  }) 

  document.addEventListener("click",function(e){
    if(!headerRight.contains(e.target) ){
      headerSubNav.classList.remove("active")
    }
  });
  
  
}
menuBar();

function detailMenu(){
  const headerDetail = document.querySelector('.header-detail')
  const headerSearch  = document.querySelector('.header-search')
  const headerSearchInput  = document.querySelector('.header-search-input')
  const headerCart  = document.querySelector('.header-cart')
  const headerCartDetail  = document.querySelector('.header-cart-detail')

  /*JS Search Input*/
  headerSearch.addEventListener('click',function(e){
    if(headerSearch.classList.contains("active") && !headerSearchInput.contains(e.target)){
      closeDetail();
    }
    else{
      headerSearch.classList.add("active");  
      headerSearchInput.style.maxHeight = headerSearchInput.scrollHeight + "px";
    }
  });
  document.addEventListener('click',function(e){  
    if(!headerDetail.contains(e.target)){
      closeDetail();
    }
  })
  function closeDetail(){
    headerSearch.querySelector(".header-search-input").removeAttribute("style")
    headerSearch.classList.remove("active")
  }

  //------------------------------------//

  /*JS Cart Details */
  headerCart.addEventListener('click',function(e){
    if(headerCart.classList.contains("active") && !headerCartDetail.contains(e.target)){
      closeCart();
    }
    else{ 
      headerCart.classList.add('active');
    }
  });
  document.addEventListener('click',function(e){  
    if(!headerDetail.contains(e.target)){
      headerCart.classList.remove('active')
    }
  })
  function closeCart(){
    headerCart.classList.remove('active')
  }

}
detailMenu()

//-------------------------------------//

$(document).ready(function(){
  $(window).scroll(function(){
      if($(this).scrollTop()>2000){
        $('.backtop').fadeIn();
      }
      else{
        $('.backtop').fadeOut();
      }
  });
  $('.backtop').click(function(){
    $('html, body').animate({
      scrollTop: 0
    }, 400)
  })
})


