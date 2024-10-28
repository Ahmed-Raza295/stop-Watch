let htmi = document.querySelector(".push");
let stop = document.querySelector(".stop");
let start = document.querySelector(".start");
let reset = document.querySelector(".reset")
let lap = document.querySelector(".lap")
let ul = document.querySelector("ul")
let h = 0;
let m = 0;
let s = 0;
let nano = 0;
let timer = null
start.addEventListener("click", function (){
if(timer !== null){
  clearInterval(timer)
}
  timer = setInterval(startWacth,10)
})
let increas = 0;
lap.addEventListener("click",()=>{
  let hour = h < 10 ? `0${h} `: h ;
let minut = m < 10 ? `0${m} `: m ;
let second = s < 10 ? `0${s} `: s ;
let mili = nano < 10 ? `0${nano}` : nano;
let all = hour + ": " + minut + ": " + second + ": " + nano;
let li = document.createElement("li")
increas++;
li.innerHTML = `<span>lap ${increas}</span> : ${all}`
ul.append(li)
  console.log(hour, minut,second,mili );
  

  })
stop.addEventListener("click", function (){
    clearInterval(timer)
  })
reset.addEventListener("click" ,()=>{
  clearInterval(timer);
   h = 0;
 m = 0;
 s = 0;
 nano = 0;
  htmi.innerHTML = `00:00:00:00`
  timer = null
})

function startWacth (){
 nano++;
 if(nano == 100){
  s++;
 nano=0
if(s == 60){
  m++;
  s = 0;
if(m == 60){
  h++;
  m=0;
}
}
}
let hour = h < 10 ? `0${h} `: h ;
let minut = m < 10 ? `0${m} `: m ;
let second = s < 10 ? `0${s} `: s ;
let mili = nano < 10 ? `0${nano}` : nano;
htmi.innerHTML = `${hour} : ${minut} : ${second} : <spain class="chotu">${mili}</spain>`;





}




















