// Check off specific todos by clicking
// we use ul on() because when we create new li doesn't work if we use the event click on lis
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

// Click on X to delete todo
// we use ul on() because when we remove the li we need to call from the ul when we have new lis
$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(500,function() {
    $(this).remove();
  });
  event.stopPropagation();
});

// Add new todo in the list
$("input[type='text']").keypress(function (event) {
  if(event.which ===  13){
    // grab new todoText from input
    var todoText = $(this).val();
    // clear input
    $(this).val("");
    // create new li and add in ul
    $("ul").append("<li><span><i class='fa fa-trash'></i></span>"+" "+todoText+"</li>");
  }
});

// Toggle the imput with the button +
$(".fa-plus").click(function() {
  $("input[type='text']").fadeToggle(200);
});
