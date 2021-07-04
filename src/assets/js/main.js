$(document).ready(function () {
  if (null != Cookies.get("gpdr")){
  } else {
    $("#modalGPDR").css('display', 'block');
  }
  $('#aceptarGPDR').click(function() {
    $('#modalGPDR').fadeOut(300)
    Cookies.set("gpdr", !0);
  })

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

  // if (($(window).width() > 992) && ($(this).scrollTop() > 200)) {
  //   $('.main-header-logo .img-fluid').css({'padding-top':'5px', 'padding-bottom':'5px', 'height':'65px'})
  // } else if (($(window).width() > 992) && ($(this).scrollTop() <= 200)) {
  //   $('.main-header-logo .img-fluid').css({'padding-top':'20px', 'padding-bottom':'20px', 'height':'100px'})
  // }
  // $(window).scroll(function() {
  //   if (($(window).width() > 992) && ($(this).scrollTop() > 200)) {
  //     $('.main-header-logo .img-fluid').css({'padding-top':'5px', 'padding-bottom':'5px', 'height':'65px'})
  //   } else if (($(window).width() > 992) && ($(this).scrollTop() <= 200)) {
  //     $('.main-header-logo .img-fluid').css({'padding-top':'20px', 'padding-bottom':'20px', 'height':'100px'})
  //   }
  // })

});

function openNav() {
  // document.getElementById("sideNav").style.width = "100%";
  // document.getElementById("sideNav").style.display = "block";
  document.getElementById("sideNav").style.left = "0%";
  document.getElementById("overlay").style.width = "100%";
  document.getElementById("overlay").style.opacity = 0.8;
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  // document.getElementById("sideNav").style.width = "0%";
  // document.getElementById("sideNav").style.display = "none";
  document.getElementById("sideNav").style.left = "-100%";
  document.getElementById("overlay").style.width = "0%";
  document.getElementById("overlay").style.opacity = 0;
}

// /* The latest entry in the web browser's history is now "modal.html#modalOpen".
//  * The entry before this is "modal.html#modalClosed". */
var modalShow = "";
$(".modal").on("show.bs.modal", function (e) {
  modalShow = e.target.id;
});

var modalHide = [];
$(".modal").on("hide.bs.modal", function (e) {
  modalHide.push(e.target.id);
});

function backModal() {
  $(".modal").modal("hide");

  modalHideTmp = modalHide[modalHide.length - 2];

  $(`#${modalHideTmp}`).modal("show");
  modalHide = [];
}

$(window).ready(function() {
  let searchParams = new URLSearchParams(window.location.search);
  console.log(searchParams)
  let param = searchParams.get('val');
  if (searchParams.has('val') && param == 'pass') {
    $("#new-pass").modal("show");
  } else if (searchParams.has('val') && param == 'register') {
    $("#register-msg").modal("show");
  }
})
  