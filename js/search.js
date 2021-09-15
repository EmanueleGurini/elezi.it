const storeSearchBarInputValue = () => {
	let searchBarInputValue = document.getElementById("searchBar__input").value;
	return searchBarInputValue.toLowerCase();
}

const sendToSearchPage = () => {
	let path = window.location.pathname;
	let page = path.split("/").pop();
	let destinationUrl =  page + "/" + storeSearchBarInputValue().replace(/\s+/g, '');
	window.open( destinationUrl, "_self" )
    
}

document.addEventListener('keydown', enterKeyBoardDown);
function enterKeyBoardDown(e) {
	if (e.keyCode === 13) {
		//alert('Enter button clicked');
		sendToSearchPage();
        e.preventDefault();
	}
	  
}