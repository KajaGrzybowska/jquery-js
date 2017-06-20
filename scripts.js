//scripts.js

// var span = $("span");
//     span.each(function(index, element) {
// });

// span.each(function(index, element) { 
// 	if(index % 2 == 0) {
// 		$(element).css('color', 'red');
// 	};
// });

$("span:even").css('color', 'red');

var paragraphs = $('p'); // wybieramy elementy <p>
paragraphs.each(function(index, element) { // do każdego <p> przypisujemy funkcję...

    var button = '<button class="btn" data-tmp="' + index + '">Click me</button>'; //... która dodaje button 
    $(element).append(button) 

});

$("button").click(function(){
	alert($(this).attr("data-tmp"));
});