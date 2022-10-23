"use strict";

$(document).ready(function () {
  ShowLightBox();
});

function CloseLightBox() {
  $('.lightbox-shadow').hide();
  $('.lightbox-wrapper').hide();
}

function ShowLightBox() {
  $('.lightbox-wrapper').css({
    display: 'flex'
  });
  $('.lightbox-shadow').show();
  $('.lightbox-wrapper').show();
}
/*
function ShowLightBox() {
    document.querySelector('.lightbox-shadow').style.display = "flex";
    document.querySelector('.lightbox-wrapper').style.display = "flex";
}
*/
//# sourceMappingURL=MyTravelHistory.dev.js.map
