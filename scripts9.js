$(function(){   
    
    //Button
    $(".button").click(function(){
	print("this worked!");
     });

    //Button
    $(".button7").click(function(){
	print("this worked!");
     });

    //Header Button
    $(".button2").click(function(){
	alert("Tree software");
     });

    //Header Button
    $(".button3").click(function(){
	alert("Help: Click a app to run it");
     });

    //Header Button
    $(".button4").click(function(){
	alert("Data: Calculator, Click-Box");
     });

});

function process(){
    var color=document.getElementById("color").value;
    document.body.style.backgroundColor=color;
}