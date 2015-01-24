var paperkit = new Materializer();
window.addEventListener('load', function(){
	paperkit.init();

	// Ading event listeners to offers
	[].forEach.call(document.querySelectorAll('.offer'), function(offer){
		offer.addEventListener('click', function(e){
			var el = e.currentTarget;
			showBeer(el);
		});
	});
});

function goTo(el){
	var id = el.getAttribute('data-page');
	var page = document.getElementById(id);
	page.scrollIntoView();
	document.body.scrollIntoView();
	paperkit.sidemenu.close();
}

function searchBeer(el){
	var paper = document.getElementById('search-paper');
	showBeer(paper);
}

function showBeer(el){
	var page = 'cerve.html';
	transition.morph(el,false,function(beer){
		paperkit.ajaxInsert(page,beer,function(response,parent){
			paperkit.initElement(parent);
		});
	});
}

function hideBeer(){
	transition.morphBack();
}

function payBeer(){
	var q = document.getElementById('quantity').value;
	sendOrder(q, 2);
}