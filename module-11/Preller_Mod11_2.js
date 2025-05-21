const listItems = [];/* Creates a new array for the to-do list */

function addListItem() {/* Adds items to the list */
	event.preventDefault();/* Prevents page from refreshing and resetting array */
	let newListItem = document.getElementById("newItem").value;/* Gets user input */
	document.getElementById("newItem").value = "";/* Clears text box */
	
	listItems.push(newListItem);
	window.alert(newListItem + " was added as item " + listItems.length + ".");
	/* Adds item to list and notifies user */
}

function deleteListItem(target) {/* Deletes the specified item from the list and refreshes the displayed list */
	listItems.splice(target, 1);
	displayList();
}

function displayList() {/* Displays the list */
	event.preventDefault();/* Prevents page from refreshing and resetting array */
	let toDoList = "";/* Initializes a new string that will contain the HTML for the list */
	listItems.forEach(assembleList);/* Adds each list item to the to-do list HTML */
	document.getElementById("listArea").innerHTML = toDoList;/* Displays output */
	
	function assembleList(value, index) {/*Adds each item to the list HTML, alongside a delete button */
		toDoList += `</li><button onclick = deleteListItem(${index})>Delete</button>
		Item ${zeroPad(index + 1)}: ${value}</li></br>`;
	}
}

function zeroPad(number) {/* Dynamically adds leading zeros to keep list items in line */
	number = number.toString();/* Casts number to a string */
	padding = listItems.length.toString().length; /* Gets the number of digits for the length of the list */
	number = number.padStart(padding, "0");/* Pads number with zeros until it reaches the required length */
	return number;
}