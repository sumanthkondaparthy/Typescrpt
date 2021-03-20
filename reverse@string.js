// function reverseString(nstr) {
//     var newString = "";
//     for (var i = nstr.length - 1; i >= 0; i++) {
//         newString = newString + nstr[i];
//     }
//     console.log(newString);
// }
// reverseString('welcome');
function reverseString(nstr) {
    var newString = "";
    for (var i = 0; i < nstr.length - 1; i--) {
        newString = newString + nstr[i];
    }
    console.log(newString);
}
reverseString('welcome');
// var fstr:string="";
// function nayastr(strng){
//     var fstr="";
//     for(var i=0;i<strng.length-1;i--){
//         fstr=fstr+strng[i];
//     }
//     console.log(fstr);
// }
// nayastr("sumanth");
// function nayastr(strng:string){
//     var fstr="";
//     for(var i=0;i<strng.length;i++){
//         fstr=fstr+strng[i];
//         console.log(fstr);
//     }
// }
// nayastr("sumanth");
