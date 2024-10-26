let htmi = document.querySelector(".push");
let stop = document.querySelector(".stop");
let start = document.querySelector(".start");
let reset = document.querySelector(".reset")

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

stop.addEventListener("click", function (){
    clearInterval(timer)
  })
reset.addEventListener("click" ,()=>{
  clearInterval(timer);
  htmi.innerHTML = `00:00:00:00`
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
htmi.innerHTML = `${hour} : ${minut} : ${second} :<spain class="chotu">${mili}</spain>`;

}




















