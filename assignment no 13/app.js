// ASSIGNMENT 13


// Changing Case:

// var a = prompt("enter")
// var b = a.toUpperCase()
// alert(b)


// var a = prompt("Enter anything")                                                                
// var b = a.split(" ")

// var e = [];
// for(var i = 0 ; i<b.length ;i++){
//     var c = b[i]
//     var d = c[0].toUpperCase() + c.slice(1).toLowerCase()
//     e[i] = d 
// }

// console.log(e.join(' '))



// var a = prompt("enter anything")
// var b = a.split(" ")
// var e = []
// for(var i = 0 ; i<b.length ; i++){
//     var c = b[i]
//     var d = c[0].toUpperCase() + c.slice(1).toLowerCase()
//     e[i] = d
// }

// console.log(e.join(" "))


// var a = prompt("enter model")
// console.log(a.length)

// var a = prompt("enter")
// var b = a.slice(a.length-1)
// console.log(b)

// var a = ("pakistani")
// var b = a.indexOf("n")
// console.log(b)

// var a = prompt("ENTER USERNAME!")
// for(i=0 ; i<a.length ; i++){
//     if(a[i] === "@" || a[i]==='.' || a[i] === ',' || a[i] === '!'){
//         console.log('Enter valid name')
//         break;
//     }
// }

// var a = "The quick brown fox jumps over the lazy dog";
// var c = a.toLowerCase();
// var b = 0;
// for(var i =0 ; i<c.length; i++ ){
//     if(c.slice(i,i+3) === "the"){
//         b = b+1
//     }
// } 

// console.log(b)



// var d = "The quick brown fox jumps over the lazy dog";
// var a = d.toLowerCase()
// var b = a.split(' ')
// var c = 0
// for(var i = 0;i<b.length;i++){
//     if(b[i] === 'the'){
//         c = c+1
//     }
// }

// console.log(c)



// var a = "Pakistani"
// var b = a.charAt(3)
// console.log(b)


// var a = "Hyderabad"
// var b = a.replace(/Hyder/,"Islam")
// console.log(b)

// var message = "“Ali and Sami are best friends. They play cricket and football together.”";
// var replace = message.replace(/and/g,"&")
// console.log(replace)

// var a = 3.45214
// // var b = Math.round(a)
// // var b = Math.floor(a)
// // var b = Math.ceil(a)
// console.log(b)


// var a = -2.678
// var b = Math.round(a)
// var b = Math.floor(a)
// var b = Math.ceil(a)
// console.log(b)


// var dice = Math.random()
// var b = Math.floor(dice*6)+1
// console.log("Your Score " + b)

// var coin = Math.random()
// var b = Math.floor(coin*2)+1
// if(b===1){
//     alert("Tails")

// }else{
//     alert("heads")
// }

// var a = prompt("Enter number between 1 to 10")
// var b = Math.random()
// var c = Math.floor(b*10)+1
// if(a===c){
//     alert("conratulation")
// }else{
//     alert("Try again")
// }



// var a = "420"
// var b = Number(a)
// alert(typeof(b))


// var num = 35.36 ;
// var str = num.toString()
// var spl = str.split('')
// for(var i = 0; i < spl.length ; i++){
//     if(spl[i] === '.'){
//        spl.splice(i,1) 
//     }
// }
// alert(spl.join(''))


// var percentage = 30 / 45 * 100
// var round = percentage.toFixed(2)
// console.log(round)
