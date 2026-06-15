console.log("يلا"); 
let favoriteNumber = 3;
favoriteNumber = 10;
console.log(favoriteNumber);
 let a = 5;
 let b = 10;

 console.log( a==b );
 console.log( a!=b );
 console.log( a>=b );


 

 console.log(a);7
 console.log(b);
 console.log(typeof b);
 console.log(b+a);
  console.log(1+3 * 2);
  console.log((1+3) * 2);



  let title = "aya"
  let te = "برمجة الويب"
  //console.log(title == te)
  let two = title + te 
  console.log(title + " " + te);
  console.log(two);
//ggللتهميش
  console.log(title);
  console.log(typeof title);


  let raining = false ;
  let sunny = false ;
  let cloudy = true ;
  // && and 
  //or ||
   
  console.log(raining && cloudy)
  console.log(raining || cloudy)

  console.log(raining || sunny)
  console.log(cloudy || (sunny && raining))



 let j = null;
 let r = undefined ;
 let f ; //undefined  غير معرف
 console.log(typeof j)
 console.log(typeof r)

/*dfef
fwfef
efef*/
//functionnnnnnnns

 function printName(){
  console.log("Aya" +" " + "Alsalfity");
  
 }
 printName();

 function sub(a ,b){  
  //   console.log(a-b);
  return a-b   
 }
 let result = sub(10,5);
 function sum(a ,b){  
  //   console.log(a+b);
  console.log(a,b);
  
  return a+b     
 }
 function div(a ,b){
  //   console.log(a/b);
  return a/b  
 }
 function mul(a ,b){   
  //   console.log(a*b);
  return a*b   
 }
 //sub(5,4)
 console.log(sub(5,4));
 console.log(sum(5,4));
 console.log(div(8,4));
 console.log(mul(5,4));
 //console.log(result);
 //Nan not number 
 
 //Arrowwwwww functions
 //شبه الفنكشن العادي بس اسهل وابسط بالكتابة للدالة مختصصرة 
 let sumArrow = (a,b) => {
  return a+b
 }
 let subArrow = (a,b) => {
  return a-b
 }
 let divArrow = (a,b) => {
  return a/b
 }
 let mulArrow = (a,b) => {
  return a*b
 }
 console.log(sumArrow(5,10));
 console.log(subArrow(20,10));
 console.log(divArrow(10,2));
 console.log(mulArrow(5,10));

  function printName(text) {
    console.log(text);
    
  }
 let printNameArrow = (text) => {
  console.log(text);
 }
 //مختصر اكتر لو بس متغير واحد بطريقة الarrow  ا
 let printNameArrow2 = text => console.log(text);
 
 printName("Ayaa")
 printNameArrow("Ayaaaa")
 console.log(printNameArrow2("Ayaaaaa"));

 //Hoistingg  Arrow functions  بنفع استخدم الدالة فوق ححتى لو معرفاها تحت بس بالدوال بدور وبلاقيها بس ما بتزبط مع 
 
//Scoping اي المتغير الي جو قوس الدالة او الارو فنكشن بكون local اما الي برا الدالة هاد global يعني عادي يكون متغير جوا الدالة الو اسم ونحط الاسم هاد برا لمتغير تاني بس هينطبع مرتين اذا انذكر 

 //Closures دالةةة جو دالةة والدالة الي جوا بتاخد المتغير من الي فوقها وبتعمل منو نسخة زي الشقة مت÷جرها تنين كل واحد غرفة ومشتركين بالمطبخ والحمام بنعمل نسخة منهم 
// Global scope
 let gym = "can access gym" ;
  
 function apartment() {
// local scope
let kitchen = 1;
let bedroom = 1;
console.log(gym,kitchen,bedroom);

function room() {
  // local scope
let light = 1;
kitchen++
console.log(light,kitchen);

}
  return room
 }
 //console.log(apartment());
let firtRoom = apartment()
console.dir(firtRoom)
firtRoom();
firtRoom();
firtRoom();
let secondRoom = apartment()
secondRoom()
secondRoom()
//  متفيراات بالجافا سكريبتnumber string boolean object

const n = 1 ;
//ما بنفع اغير قيمة المتغير بال const n = 2 اما let عادي بنغير القيمة في 
console.log(n);
const jj = "auu"
const bo = false ;
console.log(bo);
console.log(jj);

var ff= 10;
console.log(ff);
//تحووويل المتغيرات 
let k = "10"
let m = "10"



 //  بحولش النص لرقم console.log(k + m);
 console.log(parseInt(k) + parseInt(m));
 //console.log(Number(k) + Number(m));
  //وفي parseFloat لرقم عشري
 console.log(k - m);

 console.log(k / m);
 console.log(k * m);


 let rr = true ;
 //هان بتعامل ع انو بحول ال true ل  1 وال false 0 وبجمعهم
 console.log(rr+1);
 console.log(typeof(rr+1));

//let kl = "10"
//let mn = 10
let kl = true
let mn = 1
//لو بدي يقارن منطقيا بتحوويل 
console.log(kl==mn);
//لو بدي يقارن دون تححويل
console.log(kl===mn);

//مصفوفةةةةةArrays
const langs = ["Arabic","English","Franc","Italia"]
//العد يبدا من 0  وهنا ينفع نغير قيمة عنصر جوا ع الرغم من انو const لانو بخزن العنوان هان وليس المتغيرات للمصفوفة
langs[0] = "aya"
//اضافة قيمة اخر المصفوفة
langs.push("ggg")
//ازالة اخر عنصر من المصفوفة 
langs.pop()
console.log(langs);
console.log(langs[2]);

console.log(langs[3]);
v
