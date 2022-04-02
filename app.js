const navBar = document.getElementById('navbar');
const barIcon = document.querySelector('.ham-menu')
const links = document.querySelector('#links')

function checkMediaQuery() {
    // If the inner width of the window is greater then 768px
    if (window.innerWidth > 768) {
      // Then navBar is shown
        navBar.style.display= 'block';
    }else{
        navBar.style.display= 'none';  
    }
  }
  
  // Add a listener for when the window resizes
  window.addEventListener('resize', checkMediaQuery);


 // Nav shown up after icon clicked
 barIcon.addEventListener('click',showNav());

 function showNav(){
        
    if(navBar.style.display === 'block'){
        navBar.style.display= 'none';
    }else{
        navBar.style.display= 'block';
    }
}


// Nav hidden after items clicked
links.addEventListener('click',hideNav());

function hideNav(){
    if(navBar.style.display === 'block' && window.innerWidth < 768){
        navBar.style.display= 'none';
    }else{
        navBar.style.display= 'block';
    }
}
