// directional effect using transition effect
function mouse_enters_obj(e){

  var w = $(this).width();
  var h = $(this).height();
  var speed = 400;
  
  var x = (e.pageX - this.offsetLeft - (w/2)) * ( w > h ? (h/w) : 1 );
  var y = (e.pageY - this.offsetTop  - (h/2)) * ( h > w ? (w/h) : 1 );
  
  var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180 ) / 90 ) + 3 )  % 4;
  var el_height = $(this).height();
  var el_width = $(this).width();
  
  switch(direction) {
    case 0:
      $(this).find('.hover-content')
      .show()
      .css({'top': '-'+el_height+'px', 'left': '0px'})
      .animate({ top: 0 }, speed);
      break;
    case 1:
      $(this).find('.hover-content')
      .show()
      .css({'left': el_width+'px', 'top': '0px'})
      .animate({ left: 0 }, speed);
      break;
    case 2:
      $(this).find('.hover-content')
      .show()
      .css({'top': el_height+'px', 'left': '0px'})
      .animate({ top: 0 }, speed);
      break;
    case 3:
      $(this).find('.hover-content')
      .show()
      .css({'left': '-'+el_width+'px', 'top': '0px'})
      .animate({ left: 0 }, speed);
      break;
  }
}

function mouse_leaves_obj(e){
  var w = $(this).width();
  var h = $(this).height();
  var speed = 100;
  
  var x = (e.pageX - this.offsetLeft - (w/2)) * ( w > h ? (h/w) : 1 );
  var y = (e.pageY - this.offsetTop  - (h/2)) * ( h > w ? (w/h) : 1 );
  
  var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180 ) / 90 ) + 3 )  % 4;
  var el_height = $(this).height();
  var el_width = $(this).width();
  
  switch(direction) {
    case 0:
      $(this).find('.hover-content')
      .animate({ top: '-'+el_height+'px' }, speed);
      break;
    case 1:
      $(this).find('.hover-content')
      .animate({ left: el_width+'px' }, speed);
      break;
    case 2:
      $(this).find('.hover-content')
      .animate({ top: el_height+'px' }, speed);
      break;
    case 3:
      $(this).find('.hover-content')
      .animate({ left: '-'+el_width+'px' }, speed);
      break;
  }
}

$(".overlay-link").on("mouseenter", mouse_enters_obj);
$(".overlay-link").on("mouseleave", mouse_leaves_obj);