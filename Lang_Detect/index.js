const Lang = require("languagedetect");
const lngDetector = new Lang();

console.log(lngDetector.detect("Es macht gut")[0]);
console.log(lngDetector.detect("Dobrá práce")[0]);
console.log(lngDetector.detect("Gwaith da")[0]);
