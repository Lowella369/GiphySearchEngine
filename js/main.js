$(document).ready(function() {

	function displayGIF(keywords) {
		var urLAPI = `https://api.giphy.com/v1/gifs/search?api_key=OXTGexsbHE5OVgrtEYNv3WEwKUn4qEmg&q='${keywords}'&offset=0&rating=G&lang=en`;
		$.ajax({url: urLAPI}).done(function(response) {
			results = response.data.length;
			if(results > 0) {
				for (var x = 0; x < results; x++)
				{
					var imageURL = response.data[x].images.fixed_height.url;
					var title = response.data[x].title;
					$('#giphy-Holder').append(`<div class="giphy1"><img class="gif" src=" ${imageURL}" alt="${title}" ></img></div>`);
				}
			}
			else {
				alert("No results found! Enter a valid keywords!");
			}
		});
	}

	$('#btnSearch').click(getGIF);

	function getGIF(event) {
		event.preventDefault();
		$('#giphy-Holder').empty();
		var results = 0;
		var inputKeywords = encodeURIComponent($('#txtKeywords').val().trim())  

		if(inputKeywords == null || inputKeywords == "") {
			alert("Please enter a valid keywords to search!");
		}
		else {
			displayGIF(inputKeywords);
		}
	}
	displayGIF('butterfly')
});
