var paperkit = new Materializer();
window.addEventListener('load', function(){
	paperkit.init();
});

function goTo(el){
	var id = el.getAttribute('data-page');
	var page = document.getElementById(id);
	page.scrollIntoViewIfNeeded();
	document.body.scrollIntoView();
	paperkit.sidemenu.close();
}