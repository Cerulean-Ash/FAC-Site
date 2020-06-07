const toggleNavbar = () => {
  document.getElementById("navbar").classList.toggle("active");
};

// When the user scrolls the page, execute myFunction

window.onscroll = () => {
  scrollFunction();
};

function scrollFunction() {
  // position of scroll bar in pixels
  let winScroll = document.documentElement.scrollTop; // document.body.scrollTop; ||
  //get height excluding first page
  let height =
    document.documentElement.scrollHeight - // total page height
    document.documentElement.clientHeight; // how tall the client window is
  let scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.height = scrolled + "%";
}

// adapted from https://www.w3schools.com/howto/howto_js_scroll_indicator.asp
