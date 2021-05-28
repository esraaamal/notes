
const secondHand=document.querySelector('.sec-hand')
const minhand=document.querySelector('.min-hand')
const hourHand=document.querySelector('.hour-hand')
function setDate(){
   let now=new Date();
   let second=now.getSeconds();
   let secondDergee=((second/60)*360)+90;
   secondHand.style.transform=`rotate(${secondDergee}deg)`
   
   let minute=now.getMinutes();
    let minDegree=((minute/60)*360)+90;
    minhand.style.transform=`rotate(${minDegree}deg)`

    let hour=now.getHours();
    console.log(hour)
    let hourDegree=((hour/12)*360)+90;
    hourHand.style.transform=`rotate(${hourDegree}deg)`
}
setInterval(setDate,1000)
setDate()
