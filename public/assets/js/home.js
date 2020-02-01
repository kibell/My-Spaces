
$(document).ready(function() {

    //onclick event for area part 
    $(".area-div").on("click", ".area-btn",  function (e) {
        
             e.preventDefault()
            console.log("i clicked!! ");

            // $(".area-display").append(this);
            creatToggle()  

            const newArea = {

                name: $(this).children('.btn').text()
                
           };

           console.log(newArea)
           $.ajax("/api/areas", {
               type: "POST",
               data: newArea
           }).then(
               function(){
                   console.log("i am grabing buttons !! yeaaa");
                   
               }
           );


    })


  
    //onclick event for kitchen part 
    $(".storage-kitchen").on("click",".storage-btn" , function (e){
        e.preventDefault()
      console.log("i clicked!! ");
      $(".kitchen-display").append(this);

      const newStorage = {

        name: $(this).children('.btn').text()
        
   };

   console.log(newStorage)
   $.ajax("/api/storages", {
       type: "POST",
       data: newStorage
   }).then(
       function(){
           console.log("i am grabing buttons !! yeaaa");
           
       }
   );
   
  })
      //onclick event for bedroom part 
    $(".storage-bedroom").on("click",".storage-btn" , function (e){
        e.preventDefault()
        console.log("i clicked!! ");
        $(".bedroom-display").append(this);

        const newStorage = {

            name: $(this).children('.btn').text()
            
       };
    
       console.log(newStorage)
       $.ajax("/api/storages", {
           type: "POST",
           data: newStorage
       }).then(
           function(){
               console.log("i am grabing buttons !! yeaaa");
               
           }
       );
     
    })

          //onclick event for livingroom part 
    $(".storage-livingroom").on("click",".storage-btn" , function (e){
            e.preventDefault()
        console.log("i clicked!! ");
        $(".livingroom-display").append(this);

        const newStorage = {

            name: $(this).children('.btn').text()
            
       };
    
       console.log(newStorage)
       $.ajax("/api/storages", {
           type: "POST",
           data: newStorage
       }).then(
           function(){
               console.log("i am grabing buttons !! yeaaa");
               
           }
       );
        
    })

        //onclick event for bathroom part 
    $(".storage-bathroom").on("click",".storage-btn" , function (e){
        e.preventDefault()
        console.log("i clicked!! ");
        const bathroom_storage = $(".bathroom-display").append(this);
        

        const newStorage = {

            name: $(this).children('.btn').text()
            
       };
    
       console.log(newStorage)
       $.ajax("/api/storages", {
           type: "POST",
           data: newStorage
       }).then(
           function(){
               console.log("i am grabing buttons !! yeaaa");
               
           }
       );
        
    })
    

    
    
    function creatToggle () {
    
     
        $('.toggle').click(function(){
        //get collapse content selector
        var collapse_content_selector = $(this).attr('data-list');
    
        //make the collapse content to be shown or hide
        var toggle_switch = $(this);
        // $(collapse_content_selector).toggle()
        $(".storage-div").addClass("d-none");
        switch (collapse_content_selector) {
            case "#kitchen-storage":
                {
                    $("#kitchen-storage").toggleClass("d-none");
    
                }
                break;
                case "#livinroom-storage":
                {
                    $("#livinroom-storage").toggleClass("d-none");
    
                }
                break;
                case "#bathroom-storage":
                {
                    $("#bathroom-storage").toggleClass("d-none");
    
                }
                break;
                case "#bedroom-storage":
                    {
                        $("#bedroom-storage").toggleClass("d-none");
        
                    }
                break;
        
            default:
                break;
        }

    
    
      });
    
    }
    
    });
  
  
  
  
  
  
  
  
