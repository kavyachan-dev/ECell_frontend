function toggleNavbarOpacity() {
    // Get the navbar element
    var navbar = document.getElementById("navbar");
  
    // Get the current scroll position
    var scrollPos = window.scrollY;
  
    // If the user has scrolled past the navbar height, add the "scrolled" class
    if (scrollPos > window.innerHeight-navbar.offsetHeight) {
      navbar.classList.add("scrolled");
    }
    // Otherwise, remove the "scrolled" class
    else {
      navbar.classList.remove("scrolled");
    }
  }
  
  // Add an event listener to the window to listen for scroll events
  window.addEventListener("scroll", toggleNavbarOpacity);