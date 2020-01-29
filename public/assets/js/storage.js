// $(document).ready(function() {


//     const nameInputStorage = $("#storage-input")
//     const storageList = $("#storage-append");
//     const storageContainer = $(".storage-container")

//     $(document).on("submit", ".storage-form", handleStorageFormSubmit) 

   

//     getstorages();


//     function handleStorageFormSubmit(event) {
//         event.preventDefault();
//         // Don't do anything if the name fields hasn't been filled out
//         if (!nameInputStorage.val().trim().trim()) {
//           return;
//         }
//         // Calling the upsertArea function and passing in the value of the name input
//         upsertStorage({
//           name: nameInputStorage
//             .val()
//             .trim()
//         });
//         console.log("click")
//       }

//     // A function for creating an Storage. Calls getStorage upon completion
//       function upsertStorage(storageData) {
//         $.post("/api/storages", storageData)
//           .then(getstorages);
//       }


//       function createStorageRow(storageData) {
//         const newTS = $("<div>");
//         newTS.attr("<div>" + storageData.id + " </div>");
//         newTS.append("<div>" + storageData.name + "</div>");
//         newTS.append("<a style='cursor:pointer; color:green;' class='new-item' data-toggle='modal' data-target='#new-items' >Add Item</a>")
//       //   newTr.addClass("new-storage");
//         newTS.addClass("btn");
//         newTS.append(".show-data")
//         return newTS
        
//       }

  

//  // Function for retrieving Storages and getting them ready to be rendered to the page
//  function getstorages() {
//     $.get("/api/storages", function(data) {
//       const rowsToAdd = [];
//       for (let i = 0; i < data.length; i++) {
//         rowsToAdd.push(createStorageRow(data[i]));
//       }
//       renderStorageList(rowsToAdd);
//       nameInputStorage.val("");
//     });
//   }

//   function renderStorageList(rows) {
//     // areaList.children().not(":last").remove();
//     storageContainer.children(".alert").remove();
//     if (rows.length) {
//       //console.log(rows);
//       storageList.prepend(rows);
//      // storageContainer.append(rows);
//     }
//     else {
//     //   renderEmpty();
//     }
//   }


// //   function renderEmpty() {
// //     const alertDiv = $("<div>");
// //     alertDiv.addClass("alert alert-danger");
// //     alertDiv.text("Create an Area By Clicking the + sign .")
// //     storageContainer.append(alertDiv);
// //   }
// })
