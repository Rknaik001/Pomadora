let [seconds,minites]=[0,0];
let timerRef= document.querySelector("#timer");
let int= null;
let x= document.querySelector("#audi")
document.querySelector("#star").addEventListener("click", ()=>{
    if  (int!=null)
        clearInterval(int);
        int = setInterval(displayTimer, 1000);
        if (document.querySelector("#star").innerHTML == "START"){
            document.querySelector("#star").innerHTML = "Pause"
    
        } else {
            document.querySelector("#star").innerHTML = " START"
             clearInterval(int);
        }
        timerRef.style.color= 'white';
    })


const startingmin = 25
let time = startingmin * 60;

function displayTimer(){
  const minites = Math.floor(time/60)
  let seconds= time%60;


//     seconds += 1
//     if(seconds == 60){
//         seconds = 0;
//         minites++;
// }
if (minites == 00){
    x.play();
   clearInterval(int);
}


// let h = minites < 10 ? "0" + minites: minites;
// let m = seconds < 10 ? "0" + seconds: seconds;

timerRef.innerHTML = `${minites}:${seconds}`;
time--;

}