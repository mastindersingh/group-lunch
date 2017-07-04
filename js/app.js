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

function displayChips() {
	chipContainer.innerHTML = "";

	chipData.sort(function(a, b) {
		console.log(parseFloat(a.voteCount) - parseFloat(b.voteCount))
		return parseFloat(b.voteCount) - parseFloat(a.voteCount);
	});

	for (i = 0; i < chipData.length; i++) {
		var cuisine = chipData[i].cuisine;
		var voteCount = chipData[i].voteCount;

		var chipTemplate = `<div class="chip"><span class="vote-count">${voteCount}</span><span class="cuisine-name">${cuisine}</span></div>`;

		chipContainer.innerHTML += chipTemplate;
	}

	chipClick();
}

displayChips();


function chipClick() {
$('.chip').click(function(e) {
	cuisineName = $(this).children('.cuisine-name').html();

	currentCuisine = chipData.filter(function(obj) {
		return obj.cuisine == cuisineName;
	});

	// console.log(cuisineName);
	// console.log(currentCuisine);

	currentCuisine[0].voteCount += 1;

	displayChips();
});
};

chipData.sort(function(a, b) {
	console.log(parseFloat(a.voteCount) - parseFloat(b.voteCount))
	return parseFloat(a.voteCount) - parseFloat(b.voteCount);
});
