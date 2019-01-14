
$('aside input[name="filter"]').click(function() {
  $('aside section').slideDown();
});

$('aside button').click(function() {
  $('aside section').toggle();
});

$('button').click(function(){
  if ($(this).children('i').text() === "favorite_border") {
    $(this).children('i').text('favorite');
  } else if ($(this).children('i').text() === "favorite") {
    $(this).children('i').text('favorite_border');
  }
});

