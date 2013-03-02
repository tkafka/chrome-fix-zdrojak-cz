chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		// console.log("Hello. This message was sent from scripts/main.js");

		// ----------------------------------------------------------

		if (document.location.hostname == "www.zdrojak.cz") {
			$('.entry-social').hide();
			$('.entry-meta').hide();

			var $allComments = $('a.all-comments');
			if ($allComments) {
				var documentUrl = document.URL;
				var commentsUrl = documentUrl + $allComments.attr('href');

				console.log('commentsUrl:', commentsUrl);

				$.get(commentsUrl, function(data, textStatus, jqXHR) {
					var $data = $(data);
					var $fullComments = $data.find('#comments');

					$('#comments').html($fullComments.html());
				});
			}
		}

	}
	}, 10);
});
