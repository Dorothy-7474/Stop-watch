let time=document.querySelector(".timer");
let hour=document.querySelector(".hour");
let min=document.querySelector(".minute");
let sec=document.querySelector(".second");
let onehun=document.querySelector(".oneby100thsec")
let start=document.querySelector(".btn1");
let stop=document.querySelector(".btn2");
let reset=document.querySelector(".btn3");
let rec=document.querySelector(".records");
let h3=document.querySelector("#h3");

let IntervalId=null;
h3.classList.add("hide");
start.addEventListener('click', (e) => {
   if(!IntervalId){
   IntervalId=setInterval(()=>{   
   OnebyHun();
},10);
   }
});

records=[];
stop.addEventListener('click',()=>{
   clearInterval(IntervalId);
   IntervalId=null;
   records.push(`${hour.innerText}:${min.innerText}:${sec.innerText}:${sec.innerText}`);
    rec.innerHTML = records.map((time, index) => `${index + 1} -- ${time}`).join('<br>');
    h3.classList.remove("hide");
});

reset.addEventListener('click',()=>{
   clearInterval(IntervalId);
   IntervalId=null;
   records=[];
   rec.innerHTML="";
   hour.innerText="00";
   min.innerText="00";
   sec.innerText="00";
   onehun.innerText="00";
   h3.classList.add("hide");
})

//Increment for 1/10th sec
function OnebyHun()
{
   let c=parseInt(onehun.innerText);
   c+=1;
   if (c > 100) {
      c = 0;
      Sec();
  }
  if(c<10)
  {
   c='0'+c;
   onehun.innerText=c;
  }
  onehun.innerText=c;
}

//Increment for Sec
function Sec()
{
   let c=parseInt(sec.innerText);
   c+=1;
   if (c > 60) {
      c = 0;
      Min();
  }
  if(c<10)
  {
   c='0'+c;
   sec.innerText=c;
  }
  sec.innerText=c;
}
//Increment for Min
function Min()
{
   let c=parseInt(min.innerText);
   c+=1;
   if (c > 60) {
      c = 0;
      Hour();
  }
  if(c<10)
  {
   c='0'+c;
   min.innerText=c;
  }
  min.innerText=c;
  
}
//Increment for Hour
function Hour()
{
   let c=parseInt(hour.innerText);
   c+=1;
  if(c<10)
  {
   c='0'+c;
   hour.innerText=c;
  }
  hour.innerText=c;
}
