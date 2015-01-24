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
	var beer = 1;
	if (el.hasAttribute('data-beer')) {
		beer = el.getAttribute('data-beer');
	};
	paperkit.fab.hide();
	var page = 'cerve'+beer+'.html';
	transition.morph(el,false,function(beer){
		paperkit.ajaxInsert(page,beer,function(response,parent){
			paperkit.initElement(parent);
			var cerve = document.getElementById('transition-cerve');
			cerve.style.opacity = 0;
			setTimeout(function(){
				cerve.style.display = 'none';
			},500)
		});
	});
}


function hideBeer(){
	paperkit.fab.show();
	transition.morphBack();
}

function sendOrder(amount, beer){

    num_beers = amount;
    beer_price = beer;
    total_amount = num_beers * beer_price;
    orderJson = {
        'total_amount' : total_amount,
        'goods' : 'beer'
    }

    $.post("/pagar",{suggest:orderJson},function(result){
        alert(result.status);
    });
}

function payBeer(){
	var q = document.getElementById('quantity').value;
	sendOrder(q, 2);
}