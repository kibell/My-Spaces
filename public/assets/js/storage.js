
$(document).ready(function() {

    // declaring variables for displaying areas button on your areas 
    const areaBtn = $(".area-btn");
    const areaDisplay = $(".area-display");
    // declaring variables for displaying storage button on your areas 
    const storageBtn = $(".storage-btn")
    const storageDisplay = $(".storage-display")
   
    
    //onclick event for area part 
    $(areaBtn).on("click", function (){
        
            console.log("i clicked!! ");
            $(areaDisplay).append(this);
            creatToggle()  
    })
  
    //onclick event for area part 
    $(storageBtn).on("click", function (){
        
      console.log("i clicked!! ");
      $(storageDisplay).append(this);
      creatToggle()  
  })
    
    
    function creatToggle () {
    
     
        $('.toggle').click(function(){
        //get collapse content selector
        var collapse_content_selector = $(this).attr('href');
    
        //make the collapse content to be shown or hide
        var toggle_switch = $(this);
        $(collapse_content_selector).toggle()
    
    
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
  