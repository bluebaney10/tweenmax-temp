console.log('This is the Main.js file. It should be the 3rd and final file');




addButton();

function addButton(){

	
    // Loop button all
       $(".box-hover").each(function(index, element) {
           var num = parseInt(index + 1);
           setBtnHover($("#box"+num),num);
           console.log('addButton'+num);
       });

TweenMax.to($('.box-fade'), 1, {alpha:0.5, ease:Expo.easeOut}) ;
TweenMax.to($('.desc'), 1.2, {y:0,alpha:0, ease:Expo.easeOut}) ;

}


function setBtnHover(element,num) {

           console.log("element : "+element);
           
           var Target = element;
           
           //set hover button
               Target.bind( "click", function() {
                    //showPopup('pop_'+num);
               });
               
           Target.unbind('hover').hover(
                   function() {
                       
                       $(this).css({
                           'cursor': 'pointer'
                       });
                       TweenMax.to(Target.find(".box-fade"), 1, {alpha:1, ease:Expo.easeOut}) ;
                       TweenMax.to(Target.find(".desc"), 1, {y:-20,alpha:1, ease:Expo.easeOut}) ;
                       TweenMax.to(Target.find(".topic"), 1, {y:-20,alpha:1, ease:Expo.easeOut}) ;
                     

                   },
                   function() {
                       
                       $(this).css({
                           'cursor': 'pointer'
                       });
                        TweenMax.to(Target.find(".box-fade"), 1, {alpha:0.5, ease:Expo.easeOut}) ;
                        TweenMax.to(Target.find(".desc"), 1, {y:0,alpha:0, ease:Expo.easeOut}) ;
                        TweenMax.to(Target.find(".topic"), 1, {y:0,alpha:1, ease:Expo.easeOut}) ;
                  }
               );
               
               
       
          
           
       }
