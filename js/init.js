$(document).ready(function () {
  $(".show_hide_password a").on("click", function (event) {
    event.preventDefault();
    if ($(".show_hide_password input").attr("type") == "text") {
      $(".show_hide_password input").attr("type", "password");
      $(".show_hide_password i").addClass("fa-eye-slash");
      $(".show_hide_password i").removeClass("fa-eye");
    } else if ($(".show_hide_password input").attr("type") == "password") {
      $(".show_hide_password input").attr("type", "text");
      $(".show_hide_password i").removeClass("fa-eye-slash");
      $(".show_hide_password i").addClass("fa-eye");
    }
  });
});

function openNav() {
  document.getElementById("sideNav").style.width = "415px";
  document.getElementById("sideNav").style.left = "0%";
  document.getElementById("overlay").style.width = "100%";
  document.getElementById("overlay").style.opacity = 0.8;
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("sideNav").style.width = "0";
  document.getElementById("sideNav").style.left = "-100%";
  document.getElementById("overlay").style.width = "0%";
  document.getElementById("overlay").style.opacity = 0;
}

function noBack() {
  window.parent.history.forward();
  window.parent.forward();
}
