var start =  document.getElementById('start');
var reset = document.getElementById('reset');
var stop = document.getElementById('stop');


var wm = document.getElementById('w_minutes');
var ws = document.getElementById('w_seconds');

var bm = document.getElementById('b_minutes');
var bs = document.getElementById('b_seconds');


// store a reference to a timer variable
var startTimer;

start.addEventListener('click', function(){
    if(startTimer === undefined){
        startTimer = setInterval(timer, 1000)
    } else {
        alert("Timer is already running")
    }
})


function timer(){
    // work timer countdown
    if (ws.innerText != 0){
        ws.innerText--;
    }
        else if (wm.innerText != 0 && ws.innerText ==0){
            ws.innerText = 59;
            wm.innerText--;
        }

            // break time countdown
            if(wm.innerText == 0 && ws.innerText ==0){
                if(bs.innerText != 0){
                    bs.innerText--;
                }
                else if(bm.innerText != 0 && bs.innerText ==0){
                    bs.innerText = 59;
                    bm.innerText --;
                }
                
            }

            // increment counter by one if a full cycle is completed
            if(wm.innerText == 0 && ws.innertext == 0 && bm.innerText == 0 && bs.innerText == 0 ){
                wm.innerText == 30;
                ws.innerText == "00";

                bm.innerText == 5;
                bs.innerText == "00";

                document.getElementById('counter').innerText++;
            }
}


