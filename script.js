// Chapter Preview Event Handler
$.fn.extend({
    toggleText: function(a, b){
        return this.text(this.text() == b ? a : b);
    }
});

const chapters = $('#previews').children()

for (let i=1; i<chapters.length+1; i++) {
  let chapterID = $(`#chap${i}Preview`)
  $(`#chap${i}`).on('click', function(){

    $(chapterID).toggle({"display": "block"})
    $(chapterID).prev().children().toggleText('˄', '˅')
  })
}

function previewOpen(chap) {
  $(chap).toggle({"display": "block"})
  // $(chap).prev().children().toggleText('˄', '˅')
  $(chap).prev().children().toggleText(chevronChange,chevronChange)


}
function chevronChange() {
  if ($(this).text()=="˄") {
    return "˅"
  } else {
    return "˄"
  }
}

$(document).ready(function() {
    // Get the current top location of the nav bar.
    var stickyTop = $('#sticky').offset().top;

    // Set the header's height to its current height in CSS
    // If we don't do this, the content will jump suddenly when passing through stickyNavTop.
    $('header').height($('header').height());

    $(window).scroll(function(){
        if ($(window).scrollTop() >= stickyTop+300) {
            $('#sticky').addClass('fixed-header');
            $('#sticky').removeClass('sticky');
            $('#share').css({"display": "inline"}).addClass('sidebar')

        } else {
            $('#sticky').removeClass('fixed-header');
  
        }
    });
});
