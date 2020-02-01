$(document).ready(function() {
console.log("i worrrrkkkk")
    const nameInputStorage = $("#storage-input")
      const storageList = $("#storage-append");
      const storageContainer = $(".storage-container")


$('.createStorageBtn').click(function(){
        console.log("yeeee")

        const dataId = $('#createStorageBtn').data('area')
               console.log(dataId)

         const storageData = {
                      name: nameInputStorage
                          .val()
                          .trim(),
        
                      areaId: dataId
        
                  }

                  upsertStorage({
                    name: nameInputStorage
                      .val()
                      .trim()
                  });

    
      $(document).on('click', '.new-storage', function(e){
              console.log($(this))
                          
    const areaId = $(this).parent().data("area")
                              
             $('#createStorageBtn').attr("data-area", areaId)
                    
                    
                 });


                })
    
    function upsertStorage(storageData) {
            $.post("/api/storages", storageData)
                 .then(getstorages);
                     }


     function getstorages() {
         $.get("/api/storages", function(data) {
            const rowsToAdd = [];
             console.log(data)
             for (let i = 0; i < data.length; i++) {
                 rowsToAdd.push(createStorageRow(data[i]));
                                        }
        
        
             renderStorageList(rowsToAdd);
             nameInputStorage.val("");
         });
             }

             function createStorageRow(storageData) {
                 const newTS = $("<div>");
                 newTS.attr("<div>" + storageData.id + "</div>");
                            //   newTr.attr("data-target", "#new-storages");
                              // newTr.attr("data-toggle", "modal");
                 newTS.append("<div>" + storageData.name + "</div>");
                 newTS.append("<a style='cursor:pointer; color:green;' class='new-item' data-toggle='modal' data-target='#new-storage' >Add Item</a>")
                            //   newTr.addClass("new-storage");
                 newTS.addClass("btn");
                      
                              return newTS
                            }
                        
     function renderStorageList(rows) {
        // areaList.children().not(":last").remove();
        storageContainer.children(".alert").remove();
        if (rows.length) {
                                              //   console.log(rows);
         storageList.prepend(rows);
         }
         else {
            renderEmpty();
             }
            }
      
     











});