$(document).ready (function() {
    var $switch = $('div[id^=role]'),
       i=0,
       len =$switch.length;
    $switch.slice (1).hide();
    setInterval(function(){
      $switch.eq (i).fadeOut(function() {
        i=(i+1)% len
        $switch.eq(i).fadeIn();

      })
    }, 2000)


})
