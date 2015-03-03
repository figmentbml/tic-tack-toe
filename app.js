'use strict';

var winner = function(el) {
  var spot1 = el.parent().hasClass('spot1');
  var spot2 = el.parent().hasClass('spot2');
  var spot3 = el.parent().hasClass('spot3');
  var spot4 = el.parent().hasClass('spot4');
  var spot5 = el.parent().hasClass('spot5');
  var spot6 = el.parent().hasClass('spot6');
  var spot7 = el.parent().hasClass('spot7');
  var spot8 = el.parent().hasClass('spot8');
  var spot9 = el.parent().hasClass('spot9');

  if (spot1 && spot2 && spot3)  {
    el.parent().addClass('winner');
    return true;
  } else if (spot4 && spot5 && spot6) {
    el.parent().addClass('winner');
    return true;
  } else if (spot7 && spot8 && spot9) {
    el.parent().addClass('winner');
    return true;
  } else if (spot1 && spot5 && spot9) {
    el.parent().addClass('winner');
    return true;
  } else if (spot3 && spot5 && spot7) {
    el.parent().addClass('winner');
    return true;
  } else if (spot1 && spot4 && spot7) {
    el.parent().addClass('winner');
    return true;
  } else if (spot2 && spot5 && spot8) {
    el.parent().addClass('winner');
    return true;
  } else if (spot3 && spot6 && spot9) {
    el.parent().addClass('winner');
    return true;
  }
};

$( document ).ready(function() {
  $('.unclicked').on('click', function() {
    var cell = $(this);
    var game = cell.parent().parent();

    game.toggleClass('O');
    if (game.hasClass('O') && cell.hasClass('unclicked')) {
      cell.append('<div class="element">O</div>');
    } else if ("game:not('O')" && cell.hasClass('unclicked')){
      cell.append('<div class="element">X</div>');
    }
    cell.addClass('clicked').removeClass('unclicked');
    var elO = $('.element:contains("O")');
    var elX = $('.element:contains("X")');

    if ((winner(elO) == true) || (winner(elX) == true)) {
      game.children().addClass('loser');
      game.children().children().removeClass('unclicked');
    }

  });

});
