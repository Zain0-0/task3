/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  function navBarOpen(){
    const sideBar = document.querySelector(".nav-bar2")
    if (sideBar.style.display==="none"){
      sideBar.style.display = "flex"
      
    }else {
      sideBar.style.display = "none"
    }
}
function navBarclose(){
    const sideBar = document.querySelector(".nav-bar2")
    sideBar.style.display = "none"
}