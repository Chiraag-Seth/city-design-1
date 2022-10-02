AFRAME.registerComponent("city", {
  init: async function () {

    //Get the compund details of the element
    var compounds = await this.getCompounds();

    var barcodes = Object.keys(compounds);

    barcodes.map(barcode => {
      var element = compounds[barcode];

      //Call the function
      this.createAtoms(element);
    });

  },
 createModel: function(model){
  var barcodeValue = model.barcode_value;
  var modelURL = model.model_url;
  var modelName = model.model_name;

var scene = document.querySelector("a-scene");
var marker = document.createElement("a-marker");
marker.setAttribute("id",`marker-${modelName}`);
marker.setAttribute ("type", "barcode");
marker.setAttribute ("model_ name", modelName);
marker.setAttribute ("value", barcodeValue);
marker.setAttribute("markerhandler",{});
scene.appendChild(marker);
if (barcodeValue === 0) {
var modelEl = document.createElement ("a-entity");
modelEl.setAttribute("id",`${modelName}`);
modelEl.setAttribute("geometry",{
primitive: "box",
width: model.width,
height: model.height
})
modelEl.setAttribute("position", model.position);
modelEl.setAttribute("rotation", model.rotation);
modelE1.setAttribute("material",{
color: model.color 
});
marker.appendChild(modelE1);
} else {
var modelEl = document.createElement ("a-entity");
modelEl.setAttribute("id",`${modelName}`);
modelE1.setAttribute("gltf-model",`url(${modelar1}`);
modelEl.setAttribute("scale", model.scale);
modelEl.setAttribute("position", model.position);
modelE1.setAttribute("rotation", model.rotation);
marker.appendchild(modelEl);
  }
}
