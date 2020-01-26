//This file handles controller actions on storage 

$(document).ready(function() {
    console.log("hey I WORK!!!!")
     //const areaArray = ["kitchen", "bathroom", "living room", "bedroom"];
    // Getting references to the storage input as well as the table body
   // const nameInput = $("#area-input");
    const storageInput = $("#storage-input")
    const storageList = $("tbody");
    const storageContainer = $(".area-container");
    // Adding event listeners to the form to create a new object, and the button to delete
    // a storage
    $(document).on("submit", ".storage-form", handleAreaFormSubmit);
    $(document).on("click", ".delete-storage", handleDeleteButtonPress);
  
    // Getting the initial list of storages
    getStorages();
  
    // A function to handle what happens when the form is submitted to create a new Storage
    function handleStorageFormSubmit(event) {
      event.preventDefault();
      // Don't do anything if the name fields hasn't been filled out
      if (!storageInput.val().trim().trim()) {
        return;
      }
      // Calling the upsertStorage function and passing in the value of the name input
      upsertStorage({
        name: storageInput
          .val()
          .trim()
      });
    }

  //   function renderAreas () {

  //     $(".area-part").empty();
  
  //     for (let i=0; i<areaArray.length; i++) {
  //         const btArea = $('<img>').addClass("img-thumbnail").attr("src", );

          
  //         $(".area-part").append(btArea);
  //     }
  // }
  
    // A function for creating a storage. Calls getStorages function upon completion
    function upsertStorage(storageData) {
      $.post("/api/storages", storageData)
        .then(getStorages);
    }
  
    // Function for creating a new list row for storage
    function createAreaRow(storageData) {
      const newTr = $("<div>");
      newTr.attr("data-area", storageData);
     // newTr.attr("data-target", "#new-storages");
      //newTr.attr("data-toggle", "modal");
      newTr.append("<div>" + areaData.name + "</div>");
      newTr.addClass("new-storage");
      newTr.addClass("btn");
      
      if (storageData.user) {
        // newTr.append("<div> " + areaData.user.id + "</div>");
      } else {
        newTr.append("<td>0</td>");
      }
      
      newTr.append("<td><a style='cursor:pointer;color:red' class='delete-Area'>Delete Area</a></td>");
      return newTr;
    }  

  
    // Function for retrieving storages and getting them ready to be rendered to the page
    function getStorages() {
      $.get("/api/storages", function(data) {
        const rowsToAdd = [];
        for (let i = 0; i < data.length; i++) {
          rowsToAdd.push(createStorageRow(data[i]));
        }
        renderStorageList(rowsToAdd);
        storageInput.val("");
      });
    }
  
    // A function for rendering the list of areas to the page
    function renderStorageList(rows) {
      // areaList.children().not(":last").remove();
      storageContainer.children(".alert").remove();
      if (rows.length) {
        console.log(rows);
        storageList.prepend(rows);
      }
      else {
        renderEmpty();
      }
    }
  
    // Function for handling what to render when there are no Storages
    function renderEmpty() {
      const alertDiv = $("<div>");
      alertDiv.addClass("alert alert-danger");
      alertDiv.text("Create a new Storage By Clicking the + sign .")
      storageContainer.append(alertDiv);
    }
  
    // Function for handling what happens when the delete button is pressed
    function handleDeleteButtonPress() {
      console.log(`Delete storage button pressed`); 
      const listItemData = $(this).parent("td").parent("tr").data("area");
      console.log(`List item data for delete area ${listItemData}`); 
      const id = listItemData.id;
      console.log(id); 
      $.ajax({
        method: "DELETE",
        url: "/api/storages/" + id
      })
        .then(getStorages);
    }

    $(document).on("click", ".new-storage", function () {
      // console.log("click")
      // $('#new-storages').on('shown.bs.modal', function () {
      //   $('#myInput').trigger('focus')
      // })
      createStorageRow()
    })
  });