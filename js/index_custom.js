$("#dance img").hover( function() {
			$(".square.red").css("height","190px");
		}, function(){
			$(".square.red").css("height","255px");
		});
		$("#ayur img").hover( function() {
			$(".square.yellow").css("height","190px");
		}, function(){
			$(".square.yellow").css("height","255px");
		});
		$("#explore1 img").hover( function() {
			$(".square.green").css("height","190px");
		}, function(){
			$(".square.green").css("height","255px");
		});
		/**/
		$("#culture li").hover( function() {
			$(".square.red").css("height","190px");
		}, function(){
			$(".square.red").css("height","255px");
		});
		$("#ayurveda li").hover( function() {
			$(".square.yellow").css("height","190px");
		}, function(){
			$(".square.yellow").css("height","255px");
		});
		$("#explore li").hover( function() {
			$(".square.green").css("height","190px");
		}, function(){
			$(".square.green").css("height","255px");
		});
		/**/
		$("#dance img").hover(function(e) {
			e.preventDefault();
			$.backstretch("pot-holder.jpg", {
				fade : 50
			});
		}, function() {
			$.backstretch("img/index_back.jpg", {
				fade : 50
			});
		});
		$("#ayur img").hover(function(e) {
			e.preventDefault();
			$.backstretch("coffee.jpg", {
				fade : 50
			});
		}, function() {
			$.backstretch("img/index_back.jpg", {
				fade : 50
			});
		});
		$("#explore1 img").hover(function(e) {
			e.preventDefault();
			$.backstretch("coffee.jpg", {
				fade : 50
			});
		}, function() {
			$.backstretch("img/index_back.jpg", {
				fade : 50
			});
		});
		/**/
		$("#culture").hover(function(e) {
			e.preventDefault();
			$.backstretch("pot-holder.jpg", {
				fade : 50
			});
		}, function() {
			$.backstretch("img/index_back.jpg", {
				fade : 50
			});
		});
		$("#ayurveda").hover(function(e) {
			e.preventDefault();
			$.backstretch("coffee.jpg", {
				fade : 50
			});
		}, function() {
			$.backstretch("img/index_back.jpg", {
				fade : 50
			});
		});
		$("#explore").hover(function(e) {
			e.preventDefault();
			$.backstretch("coffee.jpg", {
				fade : 50
			});
		}, function() {
			$.backstretch("img/index_back.jpg", {
				fade : 50
			});
		});