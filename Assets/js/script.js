$('#currentDay').text(moment().format("MMM Do YY"))

$(".saveBtn").on("click", function(){
    var textvalue = $(this).siblings('.description').val(); 
    var divKey = $(this).parent().attr('id');
    window.localStorage.setItem(divKey, textvalue);
})

$('#9 .description').val(localStorage.getItem('9'));

//hours and coloring

