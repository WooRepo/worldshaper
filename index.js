import OpenSeadragon from "https://cdn.jsdelivr.net/npm/openseadragon@4.1.0/+esm";
import { newStory } from "./history.js";
function startCanvas() {
  ctx = document.getElementById("myCanvas").getContext("2d");
}

document.addEventListener("DOMContentLoaded", () => {
  const viewer = OpenSeadragon({
    id: "openseadragon-viewer",
    prefixUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/openseadragon/4.1.0/images/",
    tileSources: "worldmap.dzi",
    maxZoomLevel: 80,
  });
});
console.log(newStory);
