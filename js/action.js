$(document).ready(function(){
    $("#search").click(function(){
	$("#texty").show();
	$("#search").hide();
	$("#texty").keypress(function(event){
	    var keycode = (event.keycode ? event.keyCode : event.which);
	    if (keycode == '13'){
		var name = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=";
		var rest = "&format=json&formatversion=2&callback=?"
		var middle = $("#texty").val();
		var puttogether = name + middle + rest;
		puttogether = puttogether.replace(/(\r\n|\n|\r)/gm,"");
		$.ajax({
		    url :puttogether,
		    dataType: "jsonp",
		    success : function(data){
			var poo = data.query.search;
			for (var ii = 0; ii < poo.length;ii++){ 
			    var toadd = poo[ii].snippet;
			    var morbo = poo[ii].title.replace(/ /g, "_");
			    toadd = "<a href=\"https://en.wikipedia.org/wiki/"+morbo+"\">"+toadd+"</a>";
			    $(".mongogg").append(toadd);
			    $(".mongogg").append("<br><br>");
			console.log(poo[ii]);

			}

		    },
		    error : function (e){
			alert("didn't");
		    }
		});
			
			
	    }
	});
    });
});


