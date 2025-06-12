ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:20935").setExtent([704516.048391, 8765375.982636, 709865.848105, 8768085.253844]);
var wms_layers = [];


        var lyr_google_0 = new ol.layer.Tile({
            'title': 'google',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_New_Kasama_1 = new ol.format.GeoJSON();
var features_New_Kasama_1 = format_New_Kasama_1.readFeatures(json_New_Kasama_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:20935'});
var jsonSource_New_Kasama_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_New_Kasama_1.addFeatures(features_New_Kasama_1);
var lyr_New_Kasama_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_New_Kasama_1, 
                style: style_New_Kasama_1,
                popuplayertitle: 'New_Kasama',
                interactive: true,
                title: '<img src="styles/legend/New_Kasama_1.png" /> New_Kasama'
            });
var format_new_kasama_kml_2 = new ol.format.GeoJSON();
var features_new_kasama_kml_2 = format_new_kasama_kml_2.readFeatures(json_new_kasama_kml_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:20935'});
var jsonSource_new_kasama_kml_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_new_kasama_kml_2.addFeatures(features_new_kasama_kml_2);
var lyr_new_kasama_kml_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_new_kasama_kml_2, 
                style: style_new_kasama_kml_2,
                popuplayertitle: 'new_kasama_kml',
                interactive: true,
                title: 'new_kasama_kml'
            });
var group_newkasamakml = new ol.layer.Group({
                                layers: [lyr_new_kasama_kml_2,],
                                fold: 'open',
                                title: 'new kasama kml'});

lyr_google_0.setVisible(true);lyr_New_Kasama_1.setVisible(true);lyr_new_kasama_kml_2.setVisible(true);
var layersList = [lyr_google_0,lyr_New_Kasama_1,group_newkasamakml];
lyr_New_Kasama_1.set('fieldAliases', {});
lyr_new_kasama_kml_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_New_Kasama_1.set('fieldImages', {});
lyr_new_kasama_kml_2.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_New_Kasama_1.set('fieldLabels', {});
lyr_new_kasama_kml_2.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_new_kasama_kml_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});