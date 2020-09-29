//require을 통해 다른 모듈을 import.
const export_module= require('./exports'); 
var id = export_module.id;
console.log(id);
export_module.hello();