//code to be packed inside object
/**
 * function require(fileName){
 * 
 *    var exports={}
 *    return exports;
 * }
 * 
 * function require(fileName){
 *    var exports={}
 *    exports.firstName='subramanian'
 *    return exports;
 * }
 */
//Object augmentation.
/**
 * Runtime layout of object in javascript is "map/hashtable ds"
 * since js object is just map , we can do curd operation -  add,delete,update,iterate : augmentation 
 * 
 * let demo={};
 * demo.a =10 ;  we add new property into object
 * demo.b =20
 * let demo = {};
//add
console.log(demo)
demo.a = 10;
console.log(demo)
demo.b = 20
console.log(demo)

//update - if prop exits ,update,else add.
demo.a = 90;
console.log(demo)
//delete
delete demo.b
console.log(demo)
demo.b = 20
console.log(demo)
//iterate
for (const key in demo) {
   console.log(key , demo[key])
}
 * 
 */
//private to this module
const add = (a,b)=> a + b;

exports.firstName = 'Subramanian';
exports.lastName = 'Murugan';
exports.salary =1000;
exports.isValid =true;
exports.calculate = ()=> add(1,2);
exports.skills = ["java","javascript"];