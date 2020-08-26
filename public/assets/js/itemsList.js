$(document).ready(function() {
  const itemsArray = ["pen", "book", "plate", "movie colloction"];

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

function createItemBarcode() {
  for(let x = 12, y = "", i = 7; i < x; i++, y += Math.floor(Math.random()*9));
  randomBarcode = parseInt(y);



}

// You can apply an event listener to more than one element without a loop
// this will refer to the element being acted upon
// Can't attach events to items that don't exist on run time,
// have to attach the event to a parent element, then filter on the child element
$(itemList).on('dragstart', '.list-item', function(e) {
// consoles refactored to show in the black box for jFiddle
e.originalEvent.dataTransfer.setData("text", $(this).attr('id'));
  console.log('dragstart!!!!');
  draggedItem = $(this);
  console.log(draggedItem);
});
$(itemList).on('dragend', '.list-item', function(e) {
  e.preventDefault();
  console.log( e.preventDefault())
  console.log('DRAGEND!!!!');
});
$(itemArea).on('dragover', function(e) {
  e.preventDefault(); 
  console.log('<p>DRAG OVER!!!!</p>');
});
$(itemArea).on('dragenter', function(e) {
e.preventDefault(); 
console.log('<p> DRAG ENTER!!!!</p>');
$(this).css('background-color', 'rgba(0,0,0,.2)');
});
$(itemArea).on('dragleave', function(e) {
e.preventDefault(); 
console.log(' DRAG LEAVE!!!!');
$(this).css('background-color', 'transparent');
});
$(itemArea).on('drop', function(e) {
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


});

// const itemName = $('#item-name');
// const itemBody = $('#item-body');
// const itemForm = $('#new-item');
// const itemBarcode = $('#barcode');
// const savedListContainer = $('#items-view-drop');
// const itemsList = $('#items-list');
//   // Creates a flag set initially to true if item is being created.
//   let isUpdated = false;
//   let url = window.location.search;

//   // If we have this section in our url, we pull out the item id from the url
//   // In '?item_id=1', itemId is 1
//   if (url.indexOf("?item_id=") !== -1) {
//     itemId = url.split("=")[1];
//     getItemData(itemId, "item");
//   }
//   // Otherwise if we have an storage_id in our url, preset the storage select box to be our Storage
//   else if (url.indexOf("?storage_id=") !== -1) {
//     storageId = url.split("=")[1];
//   }

//   // $('#add-item-button').on('click', function() {
//   // //Add an event listener for submitting 
//   //   $('#create-item-modal').modal('toggle'); 
//   //   console.log('click')
//   // });

//   $('#new-item').on('submit', function(e){
//   // Define a function which creates a new Item in a stored list

//     e.preventDefault();

//     // Confirm that form is completely filled
//     if (!itemName.val().trim() || !itemBody.val().trim()) {
//       return; 
//     }

//     // Contruct a newItem that will be sent to database; 
//     const newItem = {
//       title: itemName.val().trim(),
//       body: itemBody.val().trim(),
//     }
    
//         // If the item is being updated then run updateItem
//     if (isUpdated) {
//       updateItem(newItem); 
//       console.log('updates')
//     } else { 
//       submitItem(newItem);
//       console.log('submits')
//     }
//   });

//   function submitItem(Item) {
//     $.post("/api/items", Item)
//     .then(getItems);
//   }

//   function updateItem(Item) {
//     $.ajax({
//       method: "PUT",
//       url: "/api/items",
//       data: Item
//     }).then(getItems);
//   };


//   // Get item data for the current storage container if we are updating the item data
//   function getItemData(id,type) {
//     const queryURL = ""; 
//     switch (type) {
//       case "item":
//         queryURL = "/api/items" + id;
//         break;
//       case "storage":
//         queryURL = "/api/storages" + id;
//         break;
//       default: 
//       return; 
//   }
// }

// //   $.get(queryURL, function(res) {
// //     if (res) {
// //       console.log(res); 
// //     //   JsBarcode('#barcode', res.newItem.id || res.id, {
// //     //     format: "pharmacode", 
// //     //     lineColor: "#0aa",
// //     //     width: 4,
// //     //     height: 40,
// //     //     displayValue: false
// //     // });
// //       // // If this post exists, prefill our cms forms with its data
// //       // title.val(res.title);
// //       // body.val(res.body);
// //       // storageId = data.AuthorId || data.id;
// //       // // If we have a post with this id, set a flag for us to know to update the post
// //       // // when we hit submit
// //       // updating = true;
// //   }
// //   });
// // };

//   // Function for creating a new list row for items
//   function createItemRow(itemData) {
//     console.log(itemData);
//     var newTr = $('<div class="row item-row">').addClass(' btn button-drag list-item')
//     newTr.data("item", itemData);
//     newTr.append(`<div class="md-col-6 row-title">${itemData.newItem.title} </div>`);  
//     if (itemData.item) {
//       newTr.append(`<div class="md-col-6"> ${itemData.item.length} "</div>" `);
//     } else {
//       newTr.append("<div>0<div>");
//     }
//     newTr.append("<div><a style='cursor:pointer;color:red' class='delete-item'>Delete Item</a></div>");
//     return newTr;
//   }

//    // Function for retrieving authors and getting them ready to be rendered to the page
//    function getItems() {
//     $.get("/api/items", function(data) {s
//       let rowsToAdd = [];
//       for (const i = 0; i < data.length; i++) {
//         rowsToAdd.push(createItemRow(data[i]));
//       }
//       renderItemList(rowsToAdd);
//       nameInput.val("");
//     });
//   }

// // A function for rendering the list of authors to the page
// function renderItemList(rows) {
//   itemsList.children().not(":last").remove();
//   savedListContainer.children(".alert").remove();
//   if (rows.length) {
//     console.log(rows);
//     itemsList.prepend(rows);
//   }
//   else {
//     renderEmpty();
//   }
// }

//   // Function for handling what to render when there are no storages
//   function renderEmpty() {
//     var alertDiv = $("<div>");
//     alertDiv.addClass("alert alert-danger");
//     alertDiv.text("You must create a Storage before you can create an Item.");
//     savedListContainer.append(alertDiv);
//   }

//   // Function for handling what happens when the delete button is pressed
//   function handleDeleteButtonPress() {
//     var listItemData = $(this).parent(".row-title").parent(".item-row").data("item");
//     var id = listItemData.id;
//     $.ajax({
//       method: "DELETE",
//       url: "/api/items/" + id
//     })
//       .then(getItems);
//   }

// $("#add-item-button").on("click", function(event){
//     event.preventDefault();

//     const newItem = $("#new-item-input").val().trim();
//     itemsArray.push(newItem);

//     renderItems();
// });


