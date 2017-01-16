console.log("---")

$('#question1').click(function() {
  				$('#answer1').toggle("fast", function(){
  					$('.morecontent').hide();	
  				});
			});

$('.readmore').click(function() {
	$('.morecontent').toggle("fast");
})
