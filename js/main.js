function getGIF() {
	
	$('#txtGIFSearch').val('');
	$('#txtNoOfGif').val('');

	$('#btnSearch').click(function () {
		$('#giphy-Holder').empty();
		var inputKeywords = $('#txtKeywords').val().trim();

		$('#txtGIFSearch').val(inputKeywords);
		$('#txtNoOfGif').val('12');

		var URLAPI = 'https://api.giphy.com/v1/gifs/search?api_key=OXTGexsbHE5OVgrtEYNv3WEwKUn4qEmg&q=' + inputKeywords + '&limit=12&offset=0&rating=G&lang=en';

		$.ajax({ url: URLAPI }).done(function (response) {

			for (var x = 0; x < response.data.length; x++) {

				var imageURL = response.data[x].images.fixed_height.url;

				$('#giphy-Holder').append('<img src="' + imageURL + '" ></img>');
			}

		});

		$('#txtKeywords').val('Enter keywords');

	});
}


