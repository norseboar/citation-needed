// JavaScript Document

// This is a list of all articles that are in the system. For now, there's just one: Moms leaving the workforce
var articles = [
	{
		// This is the list of all citations within a given article. For now, there's just the first one.
		// Each citation will get a tooltip placed over the matching link.
		// Article url should not have protocol (e.g. https://, http://, etc) or query parameters at the end (e.g. ?search=foo)
		"article_url" : "www.slate.com/blogs/xx_factor/2014/07/29/study_on_why_mothers_leave_the_workforce_it_s_a_rational_choice_not_a_maternal.html",
		"citations" : [
			{
				// URL of the link being used for the citation. This is used to identify where the tooltip should go
				"citation_url" : "http://abcnews.go.com/blogs/politics/2013/05/investor-paul-tudor-jones-says-mothers-cant-be-top-traders/",
				
				// Number of times the same URL has been used before. This is used to distinguish between two links to the same page,
				// used at two different page positions. Default is 0.
				"repeat_number" : 0,
				"citation_name" : "Investor Paul Tudor Jones Says Mothers Can't be Top Traders",
				"source_url" : "http://abcnews.go.com",
				"source_name" : "ABC News",
				"source_type" : "For-profit news organization",
				
				// Quotes to be displayed
				// These must be formatted in HTML. This means that double quotes must be replaced with &quot; and line breaks
				// must be replaced with <br/>
				// If you want to put in line breaks for readibility in the code, you need to do a new quote every line,
				// attaching them with a + sign (done below)
				"relevant_quotes" : [
					"Jones described his experience working with two women in the 1970s, both of whom got married and, he said,"
					+ " stopped focusing on their careers after they had children.<br/>&quot;As soon as that baby’s lips touched"
					+" that girl’s bosom, forget it,&quot; Jones said. &quot;Every single investment idea, every desire to "
					+ "understand what’s going to make this go up or go down is going to be overwhelmed by the most beautiful"
					+ " experience which a man will never share about a mode of connection between that mother and that baby."
					+ "&quot;"
					 // New relevant quotes go here, be sure to place a comma after the previous one so the list continues
					 // E.g. "relevant quotes" : [
					 // 	"foo",
					 //		"bar",
					 //		"baz" (note the last item in a list doesn't get a comma)
					 // 	]
				],
				"further_citations" : "none"
			},

			{
				"citation_url" : "http://dealbook.nytimes.com/2013/05/24/when-a-billionaire-speaks-off-the-cuff/?_php=true&_type=blogs&_r=0",
				"repeat_number": 0,
				"citation_name": "When a Billionaire Speaks Off the Cuff on Motherhood",
				"source_url": "http://dealbook.nytimes.com",
				"source_name": "The New York Times -- DealBook",
				"source_type" : "For-profit news organization",
				
				// Because this is in the early prototype stage, I haven't implemented chaining (relevant since this cites
				// another article in Bloomberg)
				"relevant_quotes" : [
					"In an e-mail sent to news outlets, Mr. Jones said he was speaking &quot;off the cuff&quot; and referring "
					+ "in particular to &quot;global macro traders,&quot; who work across multiple markets."
				]
			},

			{
				// New citation goes here
			}
		]
	},

	{
		"article_url": "www.vox.com/2014/7/15/5881947/myers-briggs-personality-test-meaningless",
		"citations" : [
			{
				"citation_url" : "http://seattletimes.com/html/businesstechnology/2020769531_myersbriggspersonalitytestxml.html",
				"repeat_number": 0,
				"citation_name": "Myers-Briggs personality test embraced by employers, not all psychologists",
				"source_url": "http://seattletimes.com",
				"source_name": "The Seattle Times",
				"source_type": "For-profit news org",
				"relevant_quotes": [
					"Chances are you’ve taken the Myers-Briggs Type Indicator, or will. Roughly 2 million people a year do it"
				]
			}
		]
	},

	{
		// New article goes here
	}

];