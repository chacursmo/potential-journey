$(document).ready(function(){
    $("#search").click(function(){
	$("#texty").show();
	$("#search").hide();
	$("#texty").keypress(function(event){
	    var keycode = (event.keycode ? event.keyCode : event.which);
	    if (keycode == '13'){
		var name = "https://en.wikipedia.org/w/api.php?action=query&titles=";
		var rest = "&prop=revisions&rvprop=content&format=json"
		var middle = $("#texty").val();
		var puttogether = name + middle + rest;
		puttogether = puttogether.replace(/(\r\n|\n|\r)/gm,"");
		$.ajax({
		    url :puttogether,
		    dataType: "jsonp",
		    success : function(data){
			var newhtml = "<div>"+data.query+"</div>";
			$(".theAction").append(newhtml);
			console.log(data.query);
			console.log(puttogether);

		    },
		    error : function (e){
			alert("didn't");
		    }
		});
			
			
	    }
	});
    });
});
