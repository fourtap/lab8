function initMap() {
	// add your code here
	L.mapquest.key ='8DrlB9a514FxvX3xgNAwAHvxeV2DSyMx';
	var map=L.mapquest.map('map',{
		center: [32.878966, -117.235927],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomcontrol: false
	});
	L.marker([32.88, -117.236]).addTo(map);
}