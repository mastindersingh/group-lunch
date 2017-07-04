var chipContainer = document.getElementById('chip-container');


var chipData = [
	{ 
		cuisine: "Diners",
		voteCount: 0
	},
	{ 
		cuisine: "Greek",
		voteCount: 0
	},
	{ 
		cuisine: "Indian",
		voteCount: 0
	},
	{ 
		cuisine: "Italian",
		voteCount: 0
	},
	{ 
		cuisine: "Korean",
		voteCount: 0
	},
	{ 
		cuisine: "Mexican",
		voteCount: 0
	},
	{ 
		cuisine: "Middle Eastern",
		voteCount: 3
	},
	{ 
		cuisine: "Pizza",
		voteCount: 0
	},
	{ 
		cuisine: "Japanese",
		voteCount: 0
	},
	{ 
		cuisine: "Thai",
		voteCount: 2
	},
]

for (i = 0; i < chipData.length; i++) {

	var cuisine = chipData[i].cuisine;
	var voteCount = chipData[i].voteCount;

	var chipTemplate = `<div class="chip"><span class="vote-count">${voteCount}</span>${cuisine}</div>`;

	chipContainer.innerHTML += chipTemplate;
}





$('.chip').click(function(e) {
  // var el = parseInt($('.vote-count').text());

  var targetCount = $(this).children('.vote-count');

  targetCount.text(parseInt($(targetCount).text()) + 1);

  // $(this).children('.vote-count').text(parseInt($('.vote-count').text()) +1);
  console.log(e);
});