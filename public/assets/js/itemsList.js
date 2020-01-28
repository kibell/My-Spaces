$(document).ready(function() {
  const itemsArray = [];
  const itemName = $('#item-name');
  const itemBody = $('#item-body');
  const itemForm = $('#new-item');
  const itemBarcode = $('#barcode');
  const savedListContainer = $('#items-view-drop');

  // Creates a flag set initially to true if item is being created.
  let isUpdated = false;
  
  // If we have this section in our url, we pull out the item id from the url
  // In '?item_id=1', itemId is 1
  if (url.indexOf("?item_id=") !== -1) {
    itemId = url.split("=")[1];
    getItemData(itemId, "item");
  }
  // Otherwise if we have an storage_id in our url, preset the storage select box to be our Storage
  else if (url.indexOf("?storage_id=") !== -1) {
    authorId = url.split("=")[1];
  }

  $('#add-item-button').on('click', function() {
  //Add an event listener for submitting 
    $('#create-item-modal').modal('toggle'); 
    console.log('click')
  });

  $('#new-item').on('submit', function(e){
  // Define a function which creates a new Item in a stored list

    e.preventDefault();

    // Confirm that form is completely filled
    if (!itemName.val().trim() || !itemBody.val().trim()) {
      return; 
    }

    // Contruct a newItem that will be sent to database; 
    const newItem = {
      title: itemName.val().trim(),
      body: itemBody.val().trim(),
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
      console.log(res); 
    //   JsBarcode('#barcode', res.newItem.id || res.id, {
    //     format: "pharmacode", 
    //     lineColor: "#0aa",
    //     width: 4,
    //     height: 40,
    //     displayValue: false
    // });
      // // If this post exists, prefill our cms forms with its data
      // title.val(res.title);
      // body.val(res.body);
      // storageId = data.AuthorId || data.id;
      // // If we have a post with this id, set a flag for us to know to update the post
      // // when we hit submit
      // updating = true;
  }
  });
};

  // Function for creating a new list row for authors
  function createItemRow(itemData) {
    var newTr = $("<tr>");
    newTr.data("author", itemData);
    newTr.append("<td>" + itemData.name + "</td>");
    if (itemData.Posts) {
      newTr.append("<td> " + itemData.Posts.length + "</td>");
    } else {
      newTr.append("<td>0</td>");
    }
    newTr.append("<td><a href='/blog?author_id=" + itemData.id + "'>Go to Posts</a></td>");
    newTr.append("<td><a href='/cms?author_id=" + itemData.id + "'>Create a Post</a></td>");
    newTr.append("<td><a style='cursor:pointer;color:red' class='delete-author'>Delete Author</a></td>");
    return newTr;
  }

  // Function for retrieving authors and getting them ready to be rendered to the page
  function getItems() {
    $.get("/api/items", function(res) {
      var rowsToAdd = [];
      for (var i = 0; i < res.length; i++) {
        rowsToAdd.push(createItemRow(res[i]));
      }
      renderItems(rowsToAdd);
      nameInput.val("");
    });
  }

  // A function for rendering the list of authors to the page
  function renderAuthorList(rows) {
    authorList.children().not(":last").remove();
    savedListContainer.children(".alert").remove();
    if (rows.length) {
      console.log(rows);
      authorList.prepend(rows);
    }
    else {
      renderEmpty();
    }
  }

//define a function which render new button for items
function renderItems (rows) {

  $("#items-view").empty();

  for (let i=0; i<itemsArray.length; i++) {
      const bt = $('<div>').addClass(' btn button-drag list-item').attr('id',`more-items${i}`);
      bt.attr("draggable","true")
      bt.text(itemsArray[i]);
      $("#items-view").append(bt);
  }
}

  // Function for handling what to render when there are no authors
  function renderEmpty() {
    var alertDiv = $("<div>");
    alertDiv.addClass("alert alert-danger");
    alertDiv.text("You must create an Author before you can create a Post.");
    authorContainer.append(alertDiv);
  }

  // Function for handling what happens when the delete button is pressed
  function handleDeleteButtonPress() {
    var listItemData = $(this).parent("td").parent("tr").data("author");
    var id = listItemData.id;
    $.ajax({
      method: "DELETE",
      url: "/api/authors/" + id
    })
      .then(getAuthors);
  }


$("#add-item-button").on("click", function(event){
    event.preventDefault();

    const newItem = $("#new-item-input").val().trim();
    itemsArray.push(newItem);

    renderItems();
});


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
  savedItem = $(this).append(draggedItem);

  $(this).css('background-color', 'transparent');
  draggedItem = null;
}); 

renderItems();
;
});