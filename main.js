


var View = 'map';
var Status = 'open';


$(document).on('ready', function() {


$( "#view" ).draggable();






$(".sidebarHeader").click(function(){

  if(Status === 'open'){
    $('.sidebar').addClass('nodisplay')    
    Status = 'closed';
  }else{
    $('.sidebar').removeClass('nodisplay')
    Status = 'open'
  }
})




  
$("#view1").on('click', function(){
  if(View === 'map'){
    
    console.log('do nothing');
  } else {
    $(this).removeClass('off');
    $(this).addClass('on');
    
    $(".left-box").removeClass('col-md-12')
    $(".left-box").addClass('col-md-9')

    $(".sidebarHeader").show()
    $("#sideList").show()
    $("#map").show()
    $(".right-box").addClass('col-md-3')
    $(".sidebar").addClass('col-md-11');
    $(".sidebarHeader").addClass('col-md-1');
    $("#tbList").addClass('nodisplay')

    
    
    $("#view2").addClass('off');
    $("#view2").removeClass('on');

    View = 'map';
  }
});



$("#view2").on('click', function(){
  if(View === 'list'){
   console.log('do nothing');
  } else {
    $(this).removeClass('off');
    $(this).addClass('on');


    $(".left-box").removeClass('col-md-9');
    $(".right-box").removeClass('col-md-3');
    $(".sidebar").removeClass('col-md-11');
    $(".sidebarHeader").removeClass('col-md-1');


    $("#sideList").hide()
    $(".sidebarHeader").hide()
    $("#map").hide()
    $(".left-box").addClass('col-md-12')
    $("#tbList").removeClass('nodisplay')
    

    
    
    $("#view1").addClass('off');
    $("#view1").removeClass('on');

    View = 'list';
  }
});





});