$('.chip').click(function(e) {
  // var el = parseInt($('.vote-count').text());

  var targetCount = $(this).children('.vote-count');

  targetCount.text(parseInt($(targetCount).text()) + 1);

  // $(this).children('.vote-count').text(parseInt($('.vote-count').text()) +1);
  console.log(e);
});
