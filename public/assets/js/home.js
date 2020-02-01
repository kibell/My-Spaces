
$(document).ready(function() {

    // declaring variables for displaying areas button on your areas 
    // const areaBtn = $(".area-btn");
    // const areaDisplay = $(".area-display");
    // declaring variables for displaying storage button on your areas 
    // const storageBtn = $(".storage-btn")
    // const storageDisplay = $(".storage-display")
   
    
    //onclick event for area part 
    $(".area-div").on("click", ".area-btn",  function () {
        
            console.log("i clicked!! ");
            $(".area-display").append(this);
            creatToggle()  
    })
  
    //onclick event for area part 
    $(".storage-kitchen").on("click",".storage-btn" , function (e){
        e.preventDefault()
      console.log("i clicked!! ");
      $(".kitchen-display").append(this);
   
  })
      //onclick event for area part 
      $(".storage-bedroom").on("click",".storage-btn" , function (e){
        e.preventDefault()
        console.log("i clicked!! ");
        $(".bedroom-display").append(this);
     
    })

          //onclick event for area part 
        $(".storage-livingroom").on("click",".storage-btn" , function (e){
            e.preventDefault()
        console.log("i clicked!! ");
        $(".livingroom-display").append(this);
        
    })

    $(".storage-bathroom").on("click",".storage-btn" , function (e){
        e.preventDefault()
        console.log("i clicked!! ");
        $(".bathroom-display").append(this);
        
    })
    

    
    
    function creatToggle () {
    
     
        $('.toggle').click(function(){
        //get collapse content selector
        var collapse_content_selector = $(this).attr('data-list');
    
        //make the collapse content to be shown or hide
        var toggle_switch = $(this);
        // $(collapse_content_selector).toggle()
        $(".storage-div").addClass("d-none  ");
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
  
  
  
  
  
  
  // const areaBtn = $(".area-btn");
  // // const areaSection = $(".area-section")
  // const areaDisplay = $(".area-display");
  // // const storageKitchen = $(".storage-kitchen")
  
  // let action = 1;
  
  // $(areaBtn).on("click", function (){
  
  //   if (action === 1) {
  
  //     console.log("i clicked!! ");
  //     $(areaDisplay).append(this);
  //       action = 2;
  //     console.log(action)
  
  //     return;
  //   } if (action === 2 ) {
  
  //     creatToggle();
  
  // }
  
  
  // })
  
  
  // function creatToggle () {
  
  //   $('.toggle').click(function(){
  //       //get collapse content selector
  //       const collapse_content_selector = $(this).attr('href');
    
  //       //make the collapse content to be shown or hide
  //       const toggle_switch = $(this);
  //       $(collapse_content_selector).toggle(function(){
  // 			  if(areaDisplay.css('display')=='block'){
  //                                 //change the button label to be 'Show'
  //           areaDisplay.css('display')=='none'
  // 			  }else{
  //                                 //change the button label to be 'Hide'
  //           areaDisplay.css('display')=='block';
  // 			  }
  // 			});
  //     });
  // }
  
  
  
  
  // const areaBtn = $(".area-btn");
  // const areaSection = $(".area-section")
  // const storageKitchen = $(".storage-kitchen")
  //let action = 1;
  
  
  
  
  
  //  const areaBtn = $(".area-btn");
  //  const areaDisplay = $(".area-display");
  //  let clickItem ;
  
  //  const buttonArray = [
  
  //    kitchen = {
  
  //     id : "kitchen-storage",
  //     click: false
  
  //    },
  
  //   bedroom = {
  //     id : "bedroom-storage",
  //     click: false
  //   },
   
  //   livingroom = {
  
  //     id: "livinroom-storage",
  //     click: false
  //    },
    
  //   bathroom = {
  //     id: "bathroom-storage",
  //     click: false
  //   }  
   
  // ]
  
  
  // $(areaBtn).on("click", function (){
  
      
  //         console.log("i clicked!! ");
  //         $(areaDisplay).append(this);
  //         manageButton();
  
  // })
  
  
  
  
  // function manageButton () {
  
  //   for (let i=0; i<buttonArray.legnth; i++) {
     
  //     targetItem = $(this).attr("id");
  
  //     if(targetItem === buttonArray[i].id) {
       
  //       if($(this).css('display') ==='none'){
  
  //         $(this).css("display", "block")
  
  //         buttonArray[i].click === true;
  
  //       //clickItem.show();
  //       return;
  
  //       }
        
  //     } else {
  
  //     }
      
  //   }
  
  
  // }
  
  

  
  
  
  // $(areaBtn).on("click", function (){
  //     if(action === 1) {
  
  //         console.log("i clicked!! ");
  //         $(areaDisplay).append(this);
  //         action = 2;
  //         console.log(action)
  
  //         return;
  
  //     } if(action === 2) {
  
  //         creatToggle ()
      
  //         action = 1;
  //         console.log(action)
      
  
  //     };
  
  
  // })
  