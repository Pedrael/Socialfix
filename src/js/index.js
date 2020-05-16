import jQuery from 'jquery';
import $ from 'jquery';
import Header from './header.js';
import Carousel from './carousel.js';
import TeaserCarousel from './carousel-teaser.js';
import Mail from './mail.js';

//import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

Header();
Carousel();
TeaserCarousel();
Mail();

$(document).ready(function(){
  $('#photos-carousel').owlCarousel({
    loop: true,
    items: 1,
    margin: 1,
    dotsContainer: '#photos-dots'
  });

  $('#behind-carousel').owlCarousel({
    loop: true,
    items: 1,
    stagePadding: 0,
    lazyLoad: true,
    dotsContainer: '#behind-dots'
  });

  $('#videos-carousel').owlCarousel({
    loop: true,
    items: 1,
    stagePadding: 0,
    lazyLoad: true,
    dotsContainer: '#videos-dots'
  });

  $('#teaser-carousel').owlCarousel({
    loop: true,
    items: 1,
    stagePadding: 0,
    lazyLoad: true,
      dotsContainer: '#teaser-dots'
  });

  $('#tags-carousel').owlCarousel({
    loop: true,
    items: 2,
    stagePadding: -20,
    lazyLoad: true
  });
});
