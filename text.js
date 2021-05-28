// var myP=document.createElement('p');
// myPText=document.createTextNode('resolve problem is very hard is it!');

// myP.appendChild(myPText);
// document.body.appendChild(myP)

// var myDiv= document.getElementById('test');
// // myDiv.innerHTML=document.images[0].src;
// // myDiv.innerHTML=document.forms[0].x2.value;
// // myDiv.innerHTML=document.body.innerText;
//  myDiv.innerHTML=document.links.length;

// var myElement=document.getElementsByTagName('div');
// // myElement.forEach(x=>{
// //     myElement[x].innerHTML='changed to javascript'
// // })
// myElement[1].innerHTML='changed by javascript';
// for(let i=0;i<document.images.length;i++){
//     document.write(document.images[i].src+"<br>")
// }



// // var myimage=document.querySelector('img');
// // myimage.setAttribute('alt','hi esraa')

// // if(myimage.hasAttribute('src')){
// //     console.log("you are awsome woman")
// // }
// // else{
// //     // myimage.setAttribute("src","https://media.wired.com/photos/593261cab8eb31692072f129/master/pass/85120553.jpg")
// //     myimage.removeAttribute('alt')
// //     console.log(myimage.alt)
// // }
// // if(myDiv.classList.contains('hi1')){
// //     // myimage.removeAttribute('alt')
// //     console.log(myimage.alt)
// // }

// // var myDiv=document.getElementById("main")
// // // console.log(myDiv.classList.length)

// // myButton= document.querySelector("button")

// // myButton.onclick=function(){
// //     'use strict';
// //     myDiv.classList.toggle('hi1')
// // }

// // myNewDiv=document.getElementById('newDiv');
// // // console.log(myNewDiv.childElementCount)
// // console.log(myNewDiv.children[0].className)

// // newElemnt1=document.createElement("div")

// // // myNewDiv.appendChild(newElemnt1)
// // myNewDiv.insertBefore(newElemnt1,myNewDiv.childNodes[0])



// let con1=document.getElementById("content1")
// // let con2=document.getElementById("newCont")
// // let myCopy=con1.cloneNode(true);
// // console.log(myCopy)
// // con2.appendChild(myCopy)


// //////////////////////////new course//////////

// let myButton=con1.firstElementChild,
// myNextButton=con1.children[1]
// console.log(myNextButton)

// console.log(myButton.parentNode)

// myButton.onclick=function(){
//     // this.parentNode.style.visibility='hidden';
//     // document.getElementById("mon1").style.visibility="hidden"
    
// }
// myNextButton.onclick=function(){
//     'use strict'
//     myButton.addEventListener('click',function(){
//         document.getElementById('mon2').style.visibility="hidden"
//     })
// }

// console.log(con1.clientHeight)
// console.log(con1.clientWidth)


// // window.onload=function(){
// //     'use strict';
// //     setTimeout(function(){
// //         myButton.click();
// //     },2000)
// // }
// // window.onload= function(){
// //     'use strict';
// //     document.getElementById("myInput").focus()
// // }

// document.getElementById("myInput").onclick=function(){
//     'use strict';
//     this.blur();
// }

// // let scrollT1=document.getElementById("cssMain");

// myButton.onclick=function(){
//     'use strict';
//     document.documentElement.scrollTop+=100;
//     console.log(document.documentElement.scrollTop)

// }

var myElement1=document.createElement("div"),
myText1=document.createTextNode("this div created by js")

document.body.appendChild(myElement1);
myElement1.appendChild(myText1)

var UlElem=document.createElement("ul")
document.body.appendChild(UlElem);

for(let i=0;i<20;i++){
let liLoop=document.createElement("li")

    UlElem.appendChild(liLoop)
}