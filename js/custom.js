console.log("---")
var currentImage;
var intMod = 0;
var intWidth;

$('#question1').click(function() {
  				$('#answer1').toggle("fast", function(){
  					$('.morecontent').hide();	
  				});
			});

$('.readmore').click(function() {
	$('.morecontent').toggle("fast");
})


$(".panel").click(function(e) {
	currentImage = e.target;
	
	if (intWidth != "70%") {
		$(currentImage)
			.css("position", "fixed")
			.css("z-index","1")
			// intWidth=currentImage.clientwidth
			var intWidth = $(currentImage).width()

			.animate({
				width:"70%",
				height:"100%",
				margin:0,
				top: 0,
				left: "15%"
			})
	}  else {
		$(currentImage)
		.css("position", "fixed")
		.animate({
			width:"30%",
			height:"100%",
			margin:0,
			top:0,
			left: "5%"
		})
		}


})