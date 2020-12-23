

$('.font-div').click(function(){
  		$('.collapse').collapse('hide');

  	});




function stickyMenu(){
  var sticky = document.getElementById('sticky');
  if(window.pageYOFFset > 220){
    sticky.classList.add('sticky');
  }
  else{
    sticky.classList.remove('sticky');
  }
}
window.onscroll = function(){
  stickyMenu();
}






   var push = document.getElementById("push");
    var html = document.getElementById("html");
      var css = document.getElementById("css");
        var bootstrap = document.getElementById("bootstrap");
          var javascript = document.getElementById("javascript");
    document.getElementById("btnHtml").addEventListener("click", function(){


        html.style.display="block";
        css.style.display="none";
        bootstrap.style.display="none";
    javascript.style.display="none";

    })


 document.getElementById("btnCss").addEventListener("click", function(){


   html.style.display="none";
   css.style.display="block";
   bootstrap.style.display="none";
   javascript.style.display="none";

} )

 document.getElementById("btnBootsrap").addEventListener("click", function(){


   html.style.display="none";
 css.style.display="none";
   bootstrap.style.display="block";
   javascript.style.display="none";

} )

 document.getElementById("btnJavascript").addEventListener("click", function(){


   html.style.display="none";
   css.style.display="none";
  bootstrap.style.display="none";
   javascript.style.display="block";

} )

 document.getElementById("btnpush").addEventListener("click", function(){


  html.style.display="block";
  css.style.display="block";
  bootstrap.style.display="block";
  javascript.style.display="block";
  
} )



