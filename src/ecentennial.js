// targeting all tab name variations when multiple tabs used per page
// targets id's starting with "tabs" - use sequential numbering "tab1", "tab2", etc
// documentation: http://api.jqueryui.com/tabs/
$( "[id^='tabs']" ).tabs();


// tooltip anytime a title attribute is used in the document
// titles can be added to any object either manually written/coded or 
// via the insert quicklinks dropdown menu > insert attribute menu 
// documentation: http://api.jqueryui.com/tooltip/
$( document ).tooltip();



// Accordion 
// documentation: http://api.jqueryui.com/accordion/

  $( function() {
    var icons = {
      header: "ui-icon-circle-plus",
      activeHeader: "ui-icon-circle-minus"
    };

    // // targets id's starting with "accordion" - use sequential numbering "accordion1", "accordion2", etc
    $( "[id^='accordion']" ).accordion({
    	// all panels are automatically closed 
		active: false,
		// panels can be closed when heading is clicked
		collapsible: true,
		// height determined by content
		heightStyle: "content",

		// custom icons - plus sign and minus sign
		icons: icons

    });
    $( "#toggle" ).button().on( "click", function() {
      if ( $( "[id^='accordion']" ).accordion( "option", "icons" ) ) {
        $( "[id^='accordion']" ).accordion( "option", "icons", null );
      } else {
        $( "[id^='accordion']" ).accordion( "option", "icons", icons );
      }
    });
  } );


$(".AccordionPanelContent span").click(function() {
  $(".AccordionPanelContent span").css("background-color", "white");
  $(this).css("background-color", "red");
  
});



// simple interactive 

$("[id='incorrect']").on("click", function() {
    $(this).css("background", "#9F2824").append("<p>Incorrect</p>");
}); 

$("[id='correct']").on("click", function() {
    $(this).css("background", "#00B050").append("<p>Correct</p>");
}); 




// // Timeline plugin modification

//    $("#timeline").verticalTimeline();

//     $("#timeline-right").verticalTimeline({
//         startLeft: false
//     });


//     $("#timeline-left").verticalTimeline({
//         startLeft: false,
//         arrows: false,
//         alternate: false
//     });



//     $('#timeline-fade').verticalTimeline({
//         animate: 'fade'
//     });
//     $('#timeline-slide').verticalTimeline({
//         animate: 'slide'
//     });
