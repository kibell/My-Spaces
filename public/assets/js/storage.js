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
  
    // A function to handle what happens when the form is submitted to create a new Area
    function handleAreaFormSubmit(event) {
      event.preventDefault();
      // Don't do anything if the name fields hasn't been filled out
      if (!nameInput.val().trim().trim()) {
        return;
      }
      // Calling the upsertArea function and passing in the value of the name input
      upsertArea({
        name: nameInput
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
  
    // A function for creating an author. Calls getareas upon completion
    function upsertArea(areaData) {
      $.post("/api/areas", areaData)
        .then(getareas);
    }
  
    // Function for creating a new list row for areas
    function createAreaRow(areaData) {
      const newTr = $("<div>");
      newTr.attr("data-area", areaData);
      newTr.attr("data-target", "#new-storages");
      newTr.attr("data-toggle", "modal");
      newTr.append("<div>" + areaData.name + "</div>");
      newTr.addClass("new-storage");
      newTr.addClass("btn");
      
      if (areaData.user) {
        // newTr.append("<div> " + areaData.user.id + "</div>");
      } else {
        newTr.append("<td>0</td>");
      }
      
      newTr.append("<td><a style='cursor:pointer;color:red' class='delete-Area'>Delete Area</a></td>");
      return newTr;
    }  

  
    // Function for retrieving areas and getting them ready to be rendered to the page
    function getareas() {
      $.get("/api/areas", function(data) {
        const rowsToAdd = [];
        for (let i = 0; i < data.length; i++) {
          rowsToAdd.push(createAreaRow(data[i]));
        }
        renderAreaList(rowsToAdd);
        nameInput.val("");
      });
    }
  
    // A function for rendering the list of areas to the page
    function renderAreaList(rows) {
      // areaList.children().not(":last").remove();
      areaContainer.children(".alert").remove();
      if (rows.length) {
        console.log(rows);
        areaList.prepend(rows);
      }
      else {
        renderEmpty();
      }
    }
  
    // Function for handling what to render when there are no areas
    function renderEmpty() {
      const alertDiv = $("<div>");
      alertDiv.addClass("alert alert-danger");
      alertDiv.text("Create an Area By Clicking the + sign .")
      areaContainer.append(alertDiv);
    }
  
    // Function for handling what happens when the delete button is pressed
    function handleDeleteButtonPress() {
      console.log(`Delete area button pressed`); 
      const listItemData = $(this).parent("td").parent("tr").data("area");
      console.log(`List item data for delete area ${listItemData}`); 
      const id = listItemData.id;
      console.log(id); 
      $.ajax({
        method: "DELETE",
        url: "/api/areas/" + id
      })
        .then(getareas);
    }

    $(document).on("click", ".new-storage", function () {
      // console.log("click")
      // $('#new-storages').on('shown.bs.modal', function () {
      //   $('#myInput').trigger('focus')
      // })
      createAreaRow()
    })
  });