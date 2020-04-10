function getGIF() {
	$('#txtGIFSearch').val('');
	$('#txtNoOfGif').val('');

	$('#btnSearch').click(function() {
		$('#giphy-Holder').empty();
		var results = 0;
		var inputKeywords = $('#txtKeywords').val().trim();

		if(inputKeywords == null || inputKeywords == "") {
			alert("Please enter a valid keywords to search!");
			$('#txtGIFSearch').val(inputKeywords);
			$('#txtNoOfGif').val(0);
		}
		else {
			$('#txtGIFSearch').val(inputKeywords);
			var urlAPI = 'https://api.giphy.com/v1/gifs/search?api_key=OXTGexsbHE5OVgrtEYNv3WEwKUn4qEmg&q=' + inputKeywords + '&offset=0&rating=G&lang=en';

			$.ajax({ url: urlAPI}).done(function (response) {
				results = response.data.length;
				if (results > 0) {
					$('#txtNoOfGif').val(results);

					for (var x = 0; x < results; x++)
					{
						var imageURL = response.data[x].images.fixed_height.url;
						$('#giphy-Holder').append('<div class="giphy1"><img class="gif" src="' + imageURL + '" ></img></div>');
					}
				}
				else {
					alert("No results found! Enter a valid keywords!");
					$('#txtNoOfGif').val(0);
				}
			});
		}
	});
}