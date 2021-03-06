Enter file contents here

<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-539822462192dcdf" async="async"></script>
    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=true"></script>
    <script>
		var map;

		function initialize() {
			var mapOptions = {
			zoom: 15,
			mapTypeId: google.maps.MapTypeId.ROADMAP
			};
			map = new google.maps.Map(document.getElementById('map-canvas'),
			  mapOptions);
			
			// Try HTML5 geolocation
			if(navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(position) {
			  var pos = new google.maps.LatLng(position.coords.latitude,
			                                   position.coords.longitude);
			
			  /*var infowindow = new google.maps.InfoWindow({
			    map: map,
			    position: pos
			    content: 'Location found using HTML5.'
			  });*/
			
			  var marker=new google.maps.Marker({position:pos,map:map,title:"You are here!"});
			  
			  map.setCenter(pos);
			}, function() {
			  handleNoGeolocation(true);
			});
			} else {
			// Browser doesn't support Geolocation
			handleNoGeolocation(false);
			}
		}

		function handleNoGeolocation(errorFlag) {
			if (errorFlag) {
			var content = 'Error: The Geolocation service failed.';
			} else {
			var content = 'Error: Your browser doesn\'t support geolocation.';
			}
			
			var options = {
			map: map,
			position: new google.maps.LatLng(60, 105),
			//content: content
			};
			
			var infowindow = new google.maps.InfoWindow(options);
			map.setCenter(options.position);
		}

		google.maps.event.addDomListener(window, 'load', initialize);
	</script>
