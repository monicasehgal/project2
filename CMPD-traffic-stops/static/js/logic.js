// Creating map object
var map = L.map("map", {
  center: [35.2, -80.8],
  zoom: 9.5
});

// Adding tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?" +
  "access_token=pk.eyJ1IjoiYXJrZWdhcmlzZTAyMDkiLCJhIjoiY2ppMGh3NGMwMThjZjNxbzYzMjB5YjUzcCJ9.wXz2mBU55LS-P_rvb9kmlw").addTo(map);

var link = "https://clt-charlotte.opendata.arcgis.com/datasets/47167ee6d69248acbd825f2859c68dbf_5.geojson";

// Function that will determine the color of a division based on the DNAME
function chooseColor(DNAME) {
  switch (DNAME) {
  case "Central Division":
    return "yellow";
  case "Metro Division":
    return "navy";
  case "Eastway Division":
    return "orange";
  case "North Tryon Division":
    return "green";
  case "North Division":
    return "lime";
  case "Hickory Grove Division":
    return "blue";
  case "University City Division":
    return "teal";
  case "Providence Division":
    return "red";
  case "Independence Division":
    return "skyblue";
  case "Steele Creek Division":
    return "purple";
  case "South Division":
    return "salmon";
  case "Westover Division":
    return "gray";
  case "Freedom Division":
    return "brown";
  case "Airport Division":
    return "gold";
  default:
    return "black";
  }
}

// Grabbing our GeoJSON data..
d3.json(link, function(data) {
  // Creating a geoJSON layer with the retrieved data
  L.geoJson(data, {
    // Style each feature (in this case a division)
    style: function(features) {
      return {
        color: "black",
        // Call the chooseColor function to decide which color to color our division (color based on DNAME)
        fillColor: chooseColor(features.properties.DNAME),
        fillOpacity: 0.7,
        weight: 1.5
      };
    },
    // Called on each feature
    onEachFeature: function(features, layer) {
      // Set mouse events to change map styling
      layer.on({
        // When a user's mouse touches a map feature, the mouseover event calls this function, that feature's opacity changes to 90% so that it stands out
        mouseover: function(event) {
          layer = event.target;
          layer.setStyle({
          fillOpacity: 0.9
          });
        },
        // When the cursor no longer hovers over a map feature - when the mouseout event occurs - the feature's opacity reverts back to 50%
        mouseout: function(event) {
          layer = event.target;
          layer.setStyle({
            fillOpacity: 0.5
          });
        },
        // When a feature (division) is clicked, it is enlarged to fit the screen
        click: function(event) {
          map.fitBounds(event.target.getBounds());
        }
      });

      function putDivisionCountInLayer(json) {

        var dname = features.properties.DNAME
        var dcount = 0
        
        var division_data = json.division_data

        for(var i = 0; i < division_data.length; i++) {
          if(dname === division_data[i][0]) {
            dcount = division_data[i][1]
          }
        }
        // Giving each feature a pop-up with information pertinent to it
        layer.bindPopup("<h1>" + features.properties.DNAME + "</h1> <hr> <h2>" + "Number of Stops: " + dcount + "</h2>");

      }
      
      d3.json('/data' + parent.getCurrentFilterParams(), putDivisionCountInLayer)
      
    }
  }).addTo(map);
});
