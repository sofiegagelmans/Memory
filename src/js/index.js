import "../../icons/svgxuse";

//import Memory
import Memory from "./Memory.js";

new Memory();

window.addEventListener("flipped", (item) => console.log(item.detail._icon));
