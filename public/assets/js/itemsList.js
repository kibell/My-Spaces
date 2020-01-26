

// define one array for items
const itemsArray = ["pen", "book", "plate", "movie colloction"]


//define a function which render new button for items
function renderItems () {

    $("#items-view").empty();

    for (let i=0; i<itemsArray.length; i++) {
        const bt = $('<div>').addClass(' btn button-drag list-item').attr('id',`more-items${i}`);
        bt.attr("draggable","true")
        bt.text(itemsArray[i]);
        $("#items-view").append(bt);
    }
}


$("#add-item-button").on("click", function(event){
    console.log("hello")
    event.preventDefault();

    const newItem = $("#new-item-input").val().trim();
    itemsArray.push(newItem);

    renderItems();
})


const itemList = $(".items-list");
const itemArea = $(".list");

let draggedItem = null;

// You can apply an event listener to more than one element without a loop
// this will refer to the element being acted upon
// Can't attach events to items that don't exist on run time,
// have to attach the event to a parent element, then filter on the child element
$('.items-list').on('dragstart', '.list-item', function(e) {
  // consoles refactored to show in the black box for jFiddle
  e.originalEvent.dataTransfer.setData("text", $(this).attr('id'));
    console.log('dragstart!!!!');

    draggedItem = $(this);
    console.log(draggedItem);
});
$('.items-list').on('dragend', '.list-item', function(e) {
    e.preventDefault();
    console.log( e.preventDefault())
    console.log('DRAGEND!!!!');

});
$('.list').on('dragover', function(e) {
    e.preventDefault(); 
    console.log('<p>DRAG OVER!!!!</p>');
});
$('.list').on('dragenter', function(e) {
  e.preventDefault(); 
  console.log('<p> DRAG ENTER!!!!</p>');
  $(this).css('background-color', 'rgba(0,0,0,.2)');
});
$('.list').on('dragleave', function(e) {
  e.preventDefault(); 
  console.log(' DRAG LEAVE!!!!');
  $(this).css('background-color', 'transparent');
});
$('.list').on('drop', function(e) {
  console.log(e);
  e.preventDefault(); 
  console.log('drop');
  $('.console').append('<p> DROP </p>');
  $(this).append(draggedItem);
  console.log(draggedItem);
  $(this).css('background-color', 'transparent');
  draggedItem = null;
}); 

renderItems();
