// Chapter Preview Event Handler

const chapters = $('#previews').children()

for (let i=1; i<chapters.length+1; i++) {
  let chapterID = $(`#chap${i}Preview`)
  $(`#chap${i}`).on('click', function(){

    $(chapterID).toggle({"display": "block"})
  })
}
