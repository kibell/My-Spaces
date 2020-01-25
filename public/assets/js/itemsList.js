$(document).ready(function() {
  const itemsArray = [];
  const itemName = $('#item-name');
  const itemId = $('#item-id');
  const itemBody = $('#item-body');
  const itemForm = $('#new-item');
  const itemBarcode = $('#barcode');
  // Creates a flag set initially to true if item is being created.
  let isUpdated = false;
  
  $('#add-item-button').on('click', function() {
  //Add an event listener for submitting 
    $('#create-item-modal').modal('toggle'); 
    console.log('click')
  });

  $('#new-item').on('submit', function(e){
  // Define a function which creates a new Item in a stored list

    e.preventDefault();

    // Confirm that form is completely filled
    if (!itemName.val().trim() || !itemBody.val().trim() || !itemId.val().trim()) {
      return;
    }

    // Contruct a newItem that will be sent to database; 
    const newItem = {
      title: itemName.val().trim(),
      body: itemBody.val().trim(),
      barcode_id: itemId.val().trim(),
    }
    
        // If the item is being updated then run updateItem
    if (isUpdated ) {
      newItem.id = itemId;
      updateItem(newItem); 
    } else { 
      submitItem(newItem);
    }
  });

  function submitItem(item) {
    $.post("/api/items", item, function() {
      window.location.href = "/item";
    });
  }

  function updateItem(item) {
    $.ajax({
      method: "PUT",
      url: "/api/items",
      data: item
    }).then(function() {
      window.location.href = "/item"
    });
  };

  // Get item data for the current storage container if we are updating the item data
  function getItemData(id,type) {
    const queryURL = ""; 
    switch (type) {
      case "item":
        queryURL = "/api/items" + id;
        break;
      case "storage":
        queryURL = "/api/storages" + id;
        break;
      default: 
      return; 
  }

  $.get(queryURL, function(res) {
    if (res) {
      console.log(res.newItem.id || res.id); 
    //   JsBarcode('#barcode', res.newItem.id || res.id, {
    //     format: "pharmacode", 
    //     lineColor: "#0aa",
    //     width: 4,
    //     height: 40,
    //     displayValue: false
    // });
  }
  });
};

// //define a function which render new button for items
// function renderItems () {

//     $("#items-view").empty();

//     for (let i=0; i<itemsArray.length; i++) {
//         const bt = $('<div>').addClass(' btn button-drag list-item').attr('id',`more-items${i}`);
//         bt.attr("draggable","true")
//         bt.text(itemsArray[i]);
//         $("#items-view").append(bt);
//     }
// }


// $("#add-item-button").on("click", function(event){
//     event.preventDefault();

//     const newItem = $("#new-item-input").val().trim();
//     itemsArray.push(newItem);

//     renderItems();
// });


// const itemList = $(".items-list");
// const itemArea = $(".list");

// let draggedItem = null;

// // You can apply an event listener to more than one element without a loop
// // this will refer to the element being acted upon
// // Can't attach events to items that don't exist on run time,
// // have to attach the event to a parent element, then filter on the child element
// $('.items-list').on('dragstart', '.list-item', function(e) {
//   // consoles refactored to show in the black box for jFiddle
//   e.originalEvent.dataTransfer.setData("text", $(this).attr('id'));
//     console.log('dragstart!!!!');

//     draggedItem = $(this);
//     console.log(draggedItem);
// });
// $('.items-list').on('dragend', '.list-item', function(e) {
//     e.preventDefault();
//     console.log( e.preventDefault())
//     console.log('DRAGEND!!!!');

// });
// $('.list').on('dragover', function(e) {
//     e.preventDefault(); 
//     console.log('<p>DRAG OVER!!!!</p>');
// });
// $('.list').on('dragenter', function(e) {
//   e.preventDefault(); 
//   console.log('<p> DRAG ENTER!!!!</p>');
//   $(this).css('background-color', 'rgba(0,0,0,.2)');
// });
// $('.list').on('dragleave', function(e) {
//   e.preventDefault(); 
//   console.log(' DRAG LEAVE!!!!');
//   $(this).css('background-color', 'transparent');
// });
// $('.list').on('drop', function(e) {
//   console.log(e);
//   e.preventDefault(); 
//   savedItem = $(this).append(draggedItem);

//   $(this).css('background-color', 'transparent');
//   draggedItem = null;
// }); 

// renderItems();
});
