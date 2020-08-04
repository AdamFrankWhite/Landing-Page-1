"use strict";

// Chapter Preview Event Handler
$.fn.extend({
  toggleText: function toggleText(a, b) {
    return this.text(this.text() == b ? a : b);
  },
});
var chapters = $("#previews").children();

var _loop = function _loop(i) {
  var chapterID = $("#chap".concat(i, "Preview"));
  $("#chap".concat(i)).on("click", function () {
    $(chapterID).toggle({
      display: "block",
    });
    $(chapterID).prev().children().toggleText("˄", "˅");
  });
};

for (var i = 1; i < chapters.length + 1; i++) {
  _loop(i);
}

function previewOpen(chap) {
  $(chap).toggle({
    display: "block",
  }); // $(chap).prev().children().toggleText('˄', '˅')

  $(chap).prev().children().toggleText(chevronChange, chevronChange);
}

function chevronChange() {
  if ($(this).text() == "˄") {
    return "˅";
  } else {
    return "˄";
  }
}

$(document).ready(function () {
  // Get the current top location of the nav bar.
  var stickyTop = $("#stickyCTA").offset().top; // Set the header's height to its current height in CSS
  // If we don't do this, the content will jump suddenly when passing through stickyNavTop.

  $("header").height($("header").height());
  $(window).scroll(function () {
    if ($(window).scrollTop() >= stickyTop + 300) {
      $("#stickyCTA").addClass("fixed-header");
      $("#stickyCTA").removeClass("sticky-format");
      $("#share")
        .css({
          display: "inline",
        })
        .addClass("sidebar");
      $(".share-link").css({
        display: "block",
      });
    } else {
      $("#stickyCTA").removeClass("fixed-header");
      $("#stickyCTA").addClass("sticky-format");
      $(".share-link").css({
        display: "none",
      });
    }
  });
});
