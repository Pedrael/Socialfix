import jQuery from 'jquery';

export default function TeaserCarousel() {

  jQuery(document).ready(function (jQuery) {

    var offset = jQuery('#s-slide1').width();
    var i = 0;
    var slides = 1;

    function moveLeft() {
      if(i==slides) i = -1;
      i++;
      jQuery('#s-slide1').css('margin-left', -1*offset*i);
      for(var c = 1; c <=3; c++) jQuery('#c'+(c)).removeClass('green');
      jQuery('#c'+(i+1)).addClass('green');
      console.log(i);
    }

    function moveRight() {
      i--;
      if(i==-1) i = slides;
      jQuery('#1').css('margin-left', -1*offset*i);
      for(var c = 1; c <=3; c++) jQuery('#c'+(c)).removeClass('green');
      jQuery('#c'+(i+1)).addClass('green');
      console.log(i);
    }

    setInterval(function () {
        //moveLeft();
    }, 3000);

    jQuery('.button').click(function () {
      moveLeft();
    });

    jQuery('.control_prev').click(function () {
      moveRight();
    });

  });

}
