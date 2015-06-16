
/*!
 * Styleguide
 */

var body = $(document).find('body');
var chapters = body.find('.Chapter');
var headings = chapters.find('.Chapter__Headline');
var list = body.find('#Navigation ol');
var item = $('<li/>');
var anchor = $('<a/>');

// find words per chapter
var words = headings.map(function(i, h){
  return (h.textContent).trim();
});

// create and append a list of links per chapter
words.each(function(i, word){
  var a = anchor.clone().text(word).attr('href', ['#', i].join(''));
  var li = item.clone();
  a.appendTo(li);
  list.append(li);
});

// equip headings with numerical id.
headings.each(function(id, heading){
  heading.id = id;
});
