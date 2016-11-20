;(function($){

/* Add Here Your Javascript Edits */
//menu scroll
$(".bind-scroll a").d_scroll_to("click", 1200, "easeOutQuart");
$(".bind-scroll a").d_active("click");
$(".dox-component").addClass('animated d_fadeInUp');
// Anchors corresponding to menu items
var m_items  = $(".bind-scroll a");

var scrollItems = m_items.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
});
var lastId;

//on scroll add class
$(window).scroll(function(){
	var fromTop = $(this).scrollTop() + 100;
	
	var cur = scrollItems.map(function(){
		if ($(this).offset().top < fromTop)
		return this;
	});
	
	// Get the id of the current element
	cur = cur[cur.length - 1];
	var id = cur && cur.length ? cur[0].id : "get_first";
	if (lastId !== id) {
		lastId = id;
	// Set/remove active class
	m_items.parent().removeClass("active")
		.end().filter("[href=#" + id + "]").parent().addClass("active");
	}
	//add class to first element offset-fix
	if(id == "get_first"){
		$(m_items[0]).parent().addClass("active");
	}
});
//end scroll items...




//decorator collections
$('.tabed').d_tabs('click');

/* grids */

//grids on click add code block
$('.row').each(function(){

	var ovo = $(this);
	var html = ovo.html();
	var content = html.replace('<div class="code"><pre class="synt prettyprint"></pre></div>', "");
	var wtRow = '<div class="row"><!-- row wrapper start -->' + content + '</div><!-- row wrapper end -->';
	var wtOff = '<div class="row offset-right"><!-- row wrapper start -->' + content + '</div><!-- row wrapper end -->';
	var inner = ovo.find('.inner');
	var close = $('<a class="close-grid" href="#">CLOSE</a>');

	//grids -------- blocks-----
	inner.bind("click",function(event){

		close.show();
		ovo.append(close);

		var code = ovo.find('.code');
		var synt = ovo.find('.synt');

		var isOpen = $('.code').hasClass('open');

		if(isOpen){
		    $('.code').slideUp("fast");
		    $('.code').removeClass('open');
		    $('.row').removeClass('row-active');
		}
		if(ovo.hasClass('offset-right')){
		    synt.text(wtOff);
		}else{
		    synt.text(wtRow);
		}

		code.addClass('open');
		ovo.addClass('row-active');
		code.slideDown("fast");
		prettyPrint();
		closeGrid();
		event.preventDefault();
	});


}); //end grids

//close grid
function closeGrid(){
        $('.close-grid').click(function(event){
                $('.row .open').slideUp("fast");
                $('.row .open').removeClass('open');
                $('.row').removeClass('row-active');
                $(this).hide();
                event.preventDefault();
        });
};

//display tabed source code
$('.element-conetnt').each(function(){
	
	var cdx = $(this).find("#code-dox");
	var exm = $(this).find('#code-example');
	if(cdx){
		cdx.remove();
	}
	if(exm){
		exm.remove();
	}
	
	var html  = $(this).html();
        var tabed = $(this).next('div');
        var code  = tabed.find('.synt');
	code.text(html);
        
	if(exm){
		$(this).prepend(exm);
	}
	if(cdx){
		$(this).prepend(cdx);
	}

});

prettyPrint();

//form buttons
$('.btn').click(function(){
        return false;
});

$(".select_icons ul li input").click(function() {
	this.select();
});

})(jQuery);