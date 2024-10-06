var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_LouthBoundary_1 = new ol.format.GeoJSON();
var features_LouthBoundary_1 = format_LouthBoundary_1.readFeatures(json_LouthBoundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LouthBoundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LouthBoundary_1.addFeatures(features_LouthBoundary_1);
var lyr_LouthBoundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LouthBoundary_1, 
                style: style_LouthBoundary_1,
                popuplayertitle: "Louth Boundary",
                interactive: true,
                title: '<img src="styles/legend/LouthBoundary_1.png" /> Louth Boundary'
            });
var format_BreastfeedingFriendlyLocations_2 = new ol.format.GeoJSON();
var features_BreastfeedingFriendlyLocations_2 = format_BreastfeedingFriendlyLocations_2.readFeatures(json_BreastfeedingFriendlyLocations_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BreastfeedingFriendlyLocations_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BreastfeedingFriendlyLocations_2.addFeatures(features_BreastfeedingFriendlyLocations_2);
var lyr_BreastfeedingFriendlyLocations_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BreastfeedingFriendlyLocations_2, 
                style: style_BreastfeedingFriendlyLocations_2,
                popuplayertitle: "Breastfeeding Friendly Locations",
                interactive: true,
                title: '<img src="styles/legend/BreastfeedingFriendlyLocations_2.png" /> Breastfeeding Friendly Locations'
            });

lyr_OSMStandard_0.setVisible(true);lyr_LouthBoundary_1.setVisible(true);lyr_BreastfeedingFriendlyLocations_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_LouthBoundary_1,lyr_BreastfeedingFriendlyLocations_2];
lyr_LouthBoundary_1.set('fieldAliases', {'fid': 'fid', 'GUID': 'GUID', 'GMS_JOB_ID': 'GMS_JOB_ID', 'CAPTURE_SP': 'CAPTURE_SP', 'CAPTURE__1': 'CAPTURE__1', 'URI': 'URI', 'POLY_GEOM_': 'POLY_GEOM_', 'POLY_GEO_1': 'POLY_GEO_1', 'POLY_GEO_2': 'POLY_GEO_2', 'POLY_GEO_3': 'POLY_GEO_3', 'POLY_GEO_4': 'POLY_GEO_4', 'POLY_GEO_5': 'POLY_GEO_5', 'POLY_GEO_6': 'POLY_GEO_6', 'POLY_GEO_7': 'POLY_GEO_7', 'POLY_GEO_8': 'POLY_GEO_8', 'POLY_GEO_9': 'POLY_GEO_9', 'POLY_GEO10': 'POLY_GEO10', 'POLY_GEO11': 'POLY_GEO11', 'POLY_GEO12': 'POLY_GEO12', 'POLY_GEO13': 'POLY_GEO13', 'BDY_TYPE_I': 'BDY_TYPE_I', 'BDY_TYPE_V': 'BDY_TYPE_V', 'BDY_TYPE_C': 'BDY_TYPE_C', 'BDY_TYPE_1': 'BDY_TYPE_1', 'BDY_TYPE_2': 'BDY_TYPE_2', 'BDY_TYPE_3': 'BDY_TYPE_3', 'BDY_TYPE_4': 'BDY_TYPE_4', 'BDY_TYPE_5': 'BDY_TYPE_5', 'BDY_TYPE_6': 'BDY_TYPE_6', 'BDY_TYPE_7': 'BDY_TYPE_7', 'BDY_TYPE_8': 'BDY_TYPE_8', 'BDY_ID': 'BDY_ID', 'BDY_ID_CAP': 'BDY_ID_CAP', 'BDY_ID_C_1': 'BDY_ID_C_1', 'BDY_ID_C_2': 'BDY_ID_C_2', 'BDY_ID_CHA': 'BDY_ID_CHA', 'BDY_ID_C_3': 'BDY_ID_C_3', 'BDY_ID_C_4': 'BDY_ID_C_4', 'BDY_ID_VAL': 'BDY_ID_VAL', 'BDY_ID_V_1': 'BDY_ID_V_1', 'BDY_ID_V_2': 'BDY_ID_V_2', 'ENG_NAME_V': 'ENG_NAME_V', 'ENG_NAME_C': 'ENG_NAME_C', 'ENG_NAME_1': 'ENG_NAME_1', 'ENG_NAME_2': 'ENG_NAME_2', 'ENG_NAME_3': 'ENG_NAME_3', 'ENG_NAME_4': 'ENG_NAME_4', 'ENG_NAME_5': 'ENG_NAME_5', 'ENG_NAME_6': 'ENG_NAME_6', 'ENG_NAME_7': 'ENG_NAME_7', 'ENG_NAME_8': 'ENG_NAME_8', 'GLE_NAME_V': 'GLE_NAME_V', 'GLE_NAME_C': 'GLE_NAME_C', 'GLE_NAME_1': 'GLE_NAME_1', 'GLE_NAME_2': 'GLE_NAME_2', 'GLE_NAME_3': 'GLE_NAME_3', 'GLE_NAME_4': 'GLE_NAME_4', 'GLE_NAME_5': 'GLE_NAME_5', 'GLE_NAME_6': 'GLE_NAME_6', 'GLE_NAME_7': 'GLE_NAME_7', 'GLE_NAME_8': 'GLE_NAME_8', 'GAELTACHT_': 'GAELTACHT_', 'OBJECTID': 'OBJECTID', 'SE_ANNO_CA': 'SE_ANNO_CA', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_BreastfeedingFriendlyLocations_2.set('fieldAliases', {'Name': 'Name', 'Type': 'Type', 'Address': 'Address', 'Town': 'Town', 'Eircode': 'Eircode', 'Website': 'Website', });
lyr_LouthBoundary_1.set('fieldImages', {'fid': 'TextEdit', 'GUID': 'TextEdit', 'GMS_JOB_ID': 'Range', 'CAPTURE_SP': 'Range', 'CAPTURE__1': 'TextEdit', 'URI': 'TextEdit', 'POLY_GEOM_': 'DateTime', 'POLY_GEO_1': 'Range', 'POLY_GEO_2': 'TextEdit', 'POLY_GEO_3': 'Range', 'POLY_GEO_4': 'TextEdit', 'POLY_GEO_5': 'DateTime', 'POLY_GEO_6': 'Range', 'POLY_GEO_7': 'TextEdit', 'POLY_GEO_8': 'Range', 'POLY_GEO_9': 'TextEdit', 'POLY_GEO10': 'TextEdit', 'POLY_GEO11': 'Range', 'POLY_GEO12': 'TextEdit', 'POLY_GEO13': 'DateTime', 'BDY_TYPE_I': 'Range', 'BDY_TYPE_V': 'TextEdit', 'BDY_TYPE_C': 'DateTime', 'BDY_TYPE_1': 'Range', 'BDY_TYPE_2': 'TextEdit', 'BDY_TYPE_3': 'Range', 'BDY_TYPE_4': 'TextEdit', 'BDY_TYPE_5': 'DateTime', 'BDY_TYPE_6': 'Range', 'BDY_TYPE_7': 'TextEdit', 'BDY_TYPE_8': 'DateTime', 'BDY_ID': 'Range', 'BDY_ID_CAP': 'DateTime', 'BDY_ID_C_1': 'Range', 'BDY_ID_C_2': 'TextEdit', 'BDY_ID_CHA': 'Range', 'BDY_ID_C_3': 'TextEdit', 'BDY_ID_C_4': 'DateTime', 'BDY_ID_VAL': 'Range', 'BDY_ID_V_1': 'TextEdit', 'BDY_ID_V_2': 'DateTime', 'ENG_NAME_V': 'TextEdit', 'ENG_NAME_C': 'DateTime', 'ENG_NAME_1': 'Range', 'ENG_NAME_2': 'TextEdit', 'ENG_NAME_3': 'Range', 'ENG_NAME_4': 'TextEdit', 'ENG_NAME_5': 'DateTime', 'ENG_NAME_6': 'Range', 'ENG_NAME_7': 'TextEdit', 'ENG_NAME_8': 'DateTime', 'GLE_NAME_V': 'TextEdit', 'GLE_NAME_C': 'DateTime', 'GLE_NAME_1': 'Range', 'GLE_NAME_2': 'TextEdit', 'GLE_NAME_3': 'Range', 'GLE_NAME_4': 'TextEdit', 'GLE_NAME_5': 'DateTime', 'GLE_NAME_6': 'Range', 'GLE_NAME_7': 'TextEdit', 'GLE_NAME_8': 'DateTime', 'GAELTACHT_': 'TextEdit', 'OBJECTID': 'Range', 'SE_ANNO_CA': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_BreastfeedingFriendlyLocations_2.set('fieldImages', {'Name': 'TextEdit', 'Type': 'TextEdit', 'Address': 'TextEdit', 'Town': 'TextEdit', 'Eircode': 'TextEdit', 'Website': 'TextEdit', });
lyr_LouthBoundary_1.set('fieldLabels', {'fid': 'no label', 'GUID': 'no label', 'GMS_JOB_ID': 'no label', 'CAPTURE_SP': 'no label', 'CAPTURE__1': 'no label', 'URI': 'no label', 'POLY_GEOM_': 'no label', 'POLY_GEO_1': 'no label', 'POLY_GEO_2': 'no label', 'POLY_GEO_3': 'no label', 'POLY_GEO_4': 'no label', 'POLY_GEO_5': 'no label', 'POLY_GEO_6': 'no label', 'POLY_GEO_7': 'no label', 'POLY_GEO_8': 'no label', 'POLY_GEO_9': 'no label', 'POLY_GEO10': 'no label', 'POLY_GEO11': 'no label', 'POLY_GEO12': 'no label', 'POLY_GEO13': 'no label', 'BDY_TYPE_I': 'no label', 'BDY_TYPE_V': 'no label', 'BDY_TYPE_C': 'no label', 'BDY_TYPE_1': 'no label', 'BDY_TYPE_2': 'no label', 'BDY_TYPE_3': 'no label', 'BDY_TYPE_4': 'no label', 'BDY_TYPE_5': 'no label', 'BDY_TYPE_6': 'no label', 'BDY_TYPE_7': 'no label', 'BDY_TYPE_8': 'no label', 'BDY_ID': 'no label', 'BDY_ID_CAP': 'no label', 'BDY_ID_C_1': 'no label', 'BDY_ID_C_2': 'no label', 'BDY_ID_CHA': 'no label', 'BDY_ID_C_3': 'no label', 'BDY_ID_C_4': 'no label', 'BDY_ID_VAL': 'no label', 'BDY_ID_V_1': 'no label', 'BDY_ID_V_2': 'no label', 'ENG_NAME_V': 'no label', 'ENG_NAME_C': 'no label', 'ENG_NAME_1': 'no label', 'ENG_NAME_2': 'no label', 'ENG_NAME_3': 'no label', 'ENG_NAME_4': 'no label', 'ENG_NAME_5': 'no label', 'ENG_NAME_6': 'no label', 'ENG_NAME_7': 'no label', 'ENG_NAME_8': 'no label', 'GLE_NAME_V': 'no label', 'GLE_NAME_C': 'no label', 'GLE_NAME_1': 'no label', 'GLE_NAME_2': 'no label', 'GLE_NAME_3': 'no label', 'GLE_NAME_4': 'no label', 'GLE_NAME_5': 'no label', 'GLE_NAME_6': 'no label', 'GLE_NAME_7': 'no label', 'GLE_NAME_8': 'no label', 'GAELTACHT_': 'no label', 'OBJECTID': 'no label', 'SE_ANNO_CA': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', });
lyr_BreastfeedingFriendlyLocations_2.set('fieldLabels', {'Name': 'no label', 'Type': 'no label', 'Address': 'no label', 'Town': 'no label', 'Eircode': 'no label', 'Website': 'no label', });
lyr_BreastfeedingFriendlyLocations_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});