;(function($){

//---------- Decorator.js jQuery collections by Uloga -------------

var decorator = {

//check if value is not null return true...
hasval: function(value){

    if(value != null){

        return true;

    }else{

        return false;
    }
},
//check if type of callback is method
isfunc: function(value, callback){

    if(typeof(value) === "function" && this.isfun(callback)){

        return callback();

    }else if(typeof(value) === "function" && !this.hasval(callback)){

        return true;

    }else{

        return false;
    }

},
//check if is object
isobj : function(value, callback){

    if(typeof(value) === 'object' && this.isfun(callback)){

    	return callback(); //working

    }else if(typeof(value) === 'object' && !this.hasval(callback)){

    	return true;

    }else{

        return false;
    }
}
};

//-----------DECORATOR EXTENDING jQuery PLUGINS --------------

//decorator add active class on click
$.fn.d_active = function(event){

    var elem = $(this);
    var parent = elem.parent().parent();
       if(event == 'click'){

			elem.click(function(e){

               var selected = $(this).closest(parent).find('.active');
               selected.removeClass('active');
               $(this).parent().addClass('active');

               e.preventDefault();

			});

	   }else{
	       console.log('ups,what happened? check your code...');
	   }
};

//decorator scroll to function
$.fn.d_scroll_to = function(action, speed, efx){

    var elem = $(this);

    elem.bind(action, function(e){
    
    var a = $(this), a = parseInt( $(a.attr("href")).position().top - 25 );

      $("html, body").stop().animate({

           scrollTop: a

       }, speed, efx);

       e.preventDefault();
	   
    });
};

//decorator tabs
$.fn.d_tabs_new = function(option){

	var tabed = $(this);
	var action_menu = tabed.find(".action-menu");
	var link, parent, class_name, tab_open;

	console.log(decorator.isobj(option));

	tabed.each(function(){

		link  =  $(this).find("li a");

		link.bind(option, function(e){

			parent = $(this).closest('.tabed');
			class_name = $(this).attr("id");
			tab_open = parent.find('.tab-open');
			tab_open.removeClass('tab-open');
			parent.find('.'+class_name).addClass('tab-open');
			parent.find('.active').removeClass('active');
			$(this).addClass('active');
			e.preventDefault();

		});
	});
};

//old tabs...
$.fn.d_tabs = function(stt){

	var tabed = $(this);
	var action_menu = tabed.find(".action-menu");
	var link, parent, class_name, tab_open;



	tabed.each(function(){

		link  =  $(this).find("li a");

		link.bind(stt, function(e){

			parent = $(this).closest('.tabed');
			class_name = $(this).attr("id");
			tab_open = parent.find('.tab-open');
			tab_open.removeClass('tab-open');
			parent.find('.'+class_name).addClass('tab-open');
			parent.find('.active').removeClass('active');
			$(this).addClass('active');
			e.preventDefault();

		});
	});
};

})(jQuery);