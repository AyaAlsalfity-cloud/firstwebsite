function printName(name) {
    let res = "My name is " + name;
    console.log(res);
    
    
}
let n = "Aya"
printName(n);


let nameTwo = (text) => {
console.log(text);

}

let text = "Aya" ;
nameTwo("aaa")
console.log(text)


{
    let c = 1
    console.log(c);
{
    let c = 2
    console.log(c);
    
}

}
let c = 3
console.log(c);



//Global scope
let login = "accept"

function login1() {
    //Outer scope 
    let username = 1 
    let pass = 2 
    console.log(login,username ,pass);
    function login2() {
        //local scope
        let phone = 0
       // username ++ 
        console.log(phone, username,pass);
        
        
    }
    return login2
}
let firstLog = login1()
console.dir(firstLog)
firstLog()
firstLog()
firstLog()
firstLog()
 

let secondLog = login1()
secondLog()
secondLog()
secondLog()


let threeLog = login1()
console.log(typeof threeLog);
