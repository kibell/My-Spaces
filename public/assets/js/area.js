$(document).ready(function() {
    
     
    // Getting references to the name input and author container, as well as the table body
    const nameInput = $("#area-input");
    const areaList = $(".area-append");
    const areaContainer = $(".area-container");
    // Adding event listeners to the form to create a new object, and the button to delete
    // an Author
    $(document).on("submit", ".area-form", handleAreaFormSubmit);
    $(document).on("click", ".delete-area", handleDeleteButtonPress);
  
    // Getting the initial list of areas
    getareas();
  
    // A function to handle what happens when the form is submitted to create a new Author
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

  
    // A function for creating an Area. Calls getareas upon completion
    function upsertArea(areaData) {
      $.post("/api/areas", areaData)
        .then(getareas);
    }
  
    // Function for creating a new list row for areas
    function createAreaRow(areaData) {
      const newTr = $("<div>");
    //   newTr.attr("data-area", areaData.id);
    //   newTr.attr("data-target", "#new-storages");
      newTr.attr("data-toggle", "modal");
      newTr.append("<div>" + areaData.name + "</div>");
      newTr.append("<a style='cursor:pointer; color:green;' class='new-storage' data-toggle='modal' data-target='#new-storages' >Add Storage</a>")
    //   newTr.addClass("new-storage");
      newTr.addClass("btn");
      
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
      const listItemData = $(this).parent("td").parent("tr").data("area");
      const id = listItemData.id;
      $.ajax({
        method: "DELETE",
        url: "/api/areas/" + id
      })
        .then(getareas);
    }
   

  });