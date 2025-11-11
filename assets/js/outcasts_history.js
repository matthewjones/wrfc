var dataSet = [
    ["04/19/2025", "L","Outcasts",17,56, "Louisville", "Louisville, KY", "Tri-State Cup", "Westside/Columbus combined", ""],
	["04/26/2025", "W","Outcasts",36,19, "White River", "Columbus", "Tri-State Cup", "Westside/Columbus combined", ""],
	["05/03/2025", "W","Outcasts",32,9, "Northwest Indy Reapers", "Oak Forest, IL", "Gaelic Park", "Westside/Columbus combined", ""],
	["05/03/2025", "W","Outcasts",15,12, "Chicago Lawyers", "Oak Forest, IL", "Gaelic Park", "Westside/Columbus combined", ""],
	["05/10/2025", "","Outcasts","","", "Cincinnati Kelts", "Cincinnati, OH", "Tri-State Cup", "Westside/Columbus combined", ""],
	["05/17/2025", "","Outcasts","","", "TBD", "Carmel", "Tri-State Cup - Championship", "Westside/Columbus combined", ""],
	["08/24/2024", "W","Outcasts",48,0, "Dayton", "Dayton, OH", "Midwest Rugby Union D4", "", ""],
	["09/07/2024", "L","Outcasts",20,22, "Indy Implas", "Indianapolis", "Midwest Rugby Union D4", "friendly", ""],
	["09/21/2024", "W","Outcasts",34,10, "Columbus Rhinos", "Avon", "Midwest Rugby Union D4", "", ""],
	["10/05/2024", "W","Outcasts",66,10, "Ypsilanti", "Avon", "Midwest Rugby Union D4", "", ""],
	["10/19/2024", "W","Outcasts",47,19, "Columbus Rhinos", "Avon", "Midwest Rugby Union D4", "Play In", "https://www.youtube.com/watch?v=ioUg62n7bFk"],
	["10/26/2024", "W","Outcasts",20,12, "Findlay Scars", "Findlay, OH", "Midwest Rugby Union D4", "Quarterfinals", ""],
	["11/02/2024", "L","Outcasts",20,30, "Indy Implas", "Marian University", "Midwest Rugby Union D4", "Semifinals", ""]
];

new DataTable('#outstory', {
    columns: [
        { title: "Date", type: "date", responsivePriority: 1 },
        { title: "W/L", responsivePriority: 2 },
        { title: "Team", className: "never" },
        { title: "PF", responsivePriority: 1 },
        { title: "PA", responsivePriority: 1 },
        { title: 'Opponent', responsivePriority: 1 },
        { title: 'Location' },
        { title: 'Competition', responsivePriority: 3 },
        { title: 'Note', responsivePriority: 4 },
        { title: 'Video', type: "html", responsivePriority: 2,
			render: function ( data, type, row ) {
				if ( data.trim() != '' ) {
					return '<a href="'+data+'" target="_blank">Watch</a>';
				}
				return '';
			} }
    ],
    data: dataSet,
	responsive: true,
	order: [[0, "desc"]]
});