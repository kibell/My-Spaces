
// define one array for items
const itemsArray = ["sessoir", "book", "plate", "movie colloction"]


//define a function which render new button for items
function renderItems () {

    $("#items-view").empty();

    for (let i=0; i<itemsArray.length; i++) {
        const bt = $("<div class = list-item id=more-items>");
        bt.attr("draggable","true")
        // bt.addClass("btn-warning")
        // bt.addClass("list-item")
        bt.text(itemsArray[i]);
        $("#items-view").append(bt)
    }
}


$("#add-item-button").on("click", function(event){
    console.log("hello")
    event.preventDefault();

    const newItem = $("#new-item-input").val().trim();
    itemsArray.push(newItem);
    // $.ajax("/api/item", {
    //     type: "POST",
    //     data: newItem
    // }).then(
    //     function(){
    //         console.log("let see new item");
    //         location.reload();
    //     }
    // );
    renderItems();
})

const itemList = $(".list-item")
const itemArea = $(".list")

let draggedItem = null;

for (let i = 0; i < itemList.length; i++) {
	const item = itemList[i];

	item.addEventListener('dragstart', function () {
        console.log("dragstart!!!")
		draggedItem = item;
		// setTimeout(function () {
		// 	item.style.display = 'none';
		// }, 0)
	});

	item.addEventListener('dragend', function () {
        console.log("dragend!!!")
        draggedItem = null;
		// setTimeout(function () {
		// 	draggedItem.style.display = 'block';
		// 	draggedItem = null;
		// }, 0);
	})

	for (let j = 0; j < itemArea; j ++) {
		const list = itemArea[j];

		list.addEventListener('dragover', function (e) {
			e.preventDefault();
		});
		
		list.addEventListener('dragenter', function (e) {
			e.preventDefault();
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
		});

		list.addEventListener('dragleave', function (e) {
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
		});

		list.addEventListener('drop', function (e) {
			console.log('drop');
			this.append(draggedItem);
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
		});
	}
}

 renderItems();