// Propose using a persistent library to fetch, list, filter and search our product catalogue. Preferably sing a cached Json to display our featured categories and top items.
// jQuery and asynchroneous requests makes for a simple and fast experience to list, and get more items.
// Keeping a tidy frontend with sass, haml to build the initial structure plus a boilerplate library to have a rough starting point to build an initial prototype


// Prototype here

// Json Get

//  Variables in scope
var
    $header  =          $('header'),
    $nav =              $('#nav'),
    $siteMap =          $('#sitemap'),

    $navLabel =         $('.nav--categories--children li'),
    $navToggles =       $('.nav--search, .nav--sitemap'),
    $navItemSelectors = $('.nav--item--children li'),
    $breadCrumb =       $('.breadcrumb'),

    $cart =             $('#cart');


// Cart
$cart.load(function() {
  // Handler for .load() called.
});


// Nav Actions
$(function(){
    $navLabel.click(function(){
      $header.toggleClass("state--open");
      $(this).toggleClass("current").siblings().removeClass("current");
      $navToggles.slideToggle(200, function() {
          // Do json fetch of product-categories to build sitemap
        });
    });

    $navItemSelectors.click(function(){
      $header.toggleClass("state--open");
      $breadCrumb.text($(this).text());

       $navToggles.slideToggle(200, function() {
         // Do filtering of products, or fetch json object with chosen category and build feed
       });
    });
});

// Reload Feed
