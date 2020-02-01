$(document).ready(function () {
  console.log("i worrrrkkkk area")


  // Getting references to the name input and author container, as well as the table body
  const nameInput = $("#area-input");
  const areaList = $(".area-append");
  const areaContainer = $(".area-container");

  // Append the existing button to areaList 
  // Call the upsertArea 
  // Add a Post Route 
$(".area-append").

  $(".createAreaBtn").click(function () {


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
  })

  function upsertArea(areaData) {
    $.post("/api/areas", areaData)
      .then(getareas);
  }

  function getareas() {
    $.get("/api/areas", function (data) {
      const ToAdd = [];
      for (let i = 0; i < data.length; i++) {
        ToAdd.push(createAreaRow(data[i]));
      }
      renderAreaList(ToAdd);
      nameInput.val("");
    });
  }

  // Function for creating a new list row for areas
  function createAreaRow(areaData) {
    const newTr = $("<div>");
    newTr.attr("data-area", areaData.id);

    //   newTr.attr("data-target", "#new-storages");
    newTr.attr("data-toggle", "modal");
    newTr.append("<img src='assets/img/cabinet.jpg' alt='cabinet' class=' img-thumbnail img-area' style ='width: 20% '>")

    newTr.append("<div>" + areaData.name + "</div>");
    newTr.append("<a style='cursor:pointer; color:green;' class='new-storage' data-toggle='modal' data-target='#new-storages' >Add Storage</a>")
    //   newTr.addClass("new-storage");
    newTr.addClass("btn")
    newTr.append("<br> <a style='cursor:pointer;color:red' class='delete-Area'>Delete Area</a>");
    return newTr;
  }


  // A function for rendering the list of areas to the page
  function renderAreaList(arearows) {
    areaList.children().not(":last").remove();
    areaContainer.children(".alert").remove();
    if (arearows) {

      areaList.prepend(arearows);
    } else {
      renderEmpty();
    }
  }


  $(document).on('click', '.new-storage', function (e) {
    console.log($(this))

    const areaId = $(this).parent().data("area")

    $('#createStorageBtn').attr("data-area", areaId)

  });




});