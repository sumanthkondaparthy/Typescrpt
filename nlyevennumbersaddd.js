// function neven(num:number[]) {
//     var sum:number=0;
//     for (var i:number= 0; i<num.length ; i++) {
//         if (num[i] % 2 == 0) {
//             sum = sum + num[i];
//         }
//     }
//     console.log(sum);
// }
// neven([1,2,3,4,5,6,7,8]);
///////////////////////////////////    TO Add some numbers in ARRAY /////////////////////////////
function neven(num) {
    var sum = 0;
    for (var i = 0; i < num.length; i++) {
        sum = sum + num[i];
    }
    console.log(sum);
}
neven([4, 6, 7, 9]);
