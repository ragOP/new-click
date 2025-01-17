function sortListDir() {
  var list, i, switching, b, shouldSwitch, dir, switchcount = 0;
  list = document.getElementById("id01");
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc"; 
  // Make a loop that will continue until no switching has been done:
  while (switching) {
    // start by saying: no switching is done:
    switching = false;
    b = list.getElementsByTagName("LI");
    // Loop through all list-items:
    for (i = 0; i < (b.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /* check if the next item should switch place with the current item,
      based on the sorting direction (asc or desc): */
      if (dir == "asc") {
        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
          /* if next item is alphabetically lower than current item,
          mark as a switch and break the loop: */
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {
          /* if next item is alphabetically higher than current item,
          mark as a switch and break the loop: */
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
      // Each time a switch is done, increase switchcount by 1:
      switchcount ++;
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

/*function setbg() {
       $(".setbg").each(function(){
            var theBg = $(this).find(".bg-img").attr("src"); 
            $(this).css('background-image', 'url(' + theBg + ')');
            $(this).find("img").hide();
         //alert("HI");
       });
}
 $(window).bind("load",function(){
     setbg();
     new WOW().init();
 })*/
 

/*jQuery(document).ready(function(){
  jQuery('.searchicon').on('click', function(e) {
      jQuery(".searchbox").toggle();
  });
});*/

/*jQuery(document).ready(function(){
  jQuery('.owl-carousel').owlCarousel({
      loop:false,
      margin:10,
     responsive:{
          0:{
              items:1,
              nav:false,
          },
          600:{
              items:1,
              nav:false
          },
           768:{
              items:2,
              nav:false
          },
          1000:{
              items:3,
              nav:true,
              loop:false
          }
      }
  })
});*/

