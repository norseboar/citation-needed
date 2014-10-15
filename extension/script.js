jQuery(document).ready(function($) {
	
	// This generates the HTML for a citation
	var generate_citation = function(article_index, citation_index){
		var article = articles[article_index];
		var citation = article.citations[citation_index];

		var html = '<a href="' + citation.citation_url + '" target="_blank"><strong><big>' + citation.citation_name +
			'</big></strong></a><br/><a href="' + citation.source_url + '" target="_blank"><strong>' +
			citation.source_name + '</strong></a><br/><br/><strong>Relevant quotes:</strong>';
		$.each(citation.relevant_quotes, function(index, value){
			html += '<br/><em>' + value + '</em><br/>';
		});

		return html;
	};

	// gets the host and pathname, without the protocol or query parameters
	var current_url = window.location.host + window.location.pathname;

	// Iterate through the list of articles and citations (found in citations.js)
	$.each(articles, function(article_index, value){
		if(this.article_url === current_url){
			$.each(this.citations, function(citation_index, value){
				var repeat = 0;
				var citation_url = this.citation_url;
				var repeat_number = this.repeat_number;
				$('a').each(function(index, value){
					var link = $(this).attr('href');
					if(link === citation_url && repeat === repeat_number){
						repeat++;
						Tipped.create(this, generate_citation(article_index, citation_index), {
							maxWidth: 400,
							spinner: {
								radius: 7,
					  			height: 1,
					 			width: 2.5,
					 			dashes: 30,
					 			opacity: 1,
					 			padding: 10,
					 			rotation: 700,
					 			color: '#000000'
							}
						});
					}
				})
			});
			return false;
		}
	});

	// Iterate through every link, checking to see if it's the right one
	// This should be re-done so that every page has it's own set of links. Maybe it should pull
	// from a database?

	
});