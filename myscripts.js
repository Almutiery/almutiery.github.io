var racers   = [ document.getElementById("race"), document.getElementById("race1") ];
var pos_tot = 0;
var pos_rab = 0;
var interval;
var winner = [ document.getElementById("r_tot"), document.getElementById("r_rab") ];

//change light color
function changeColor()
            {	
				interval = setInterval( fly, 100 );
                if (image.getAttribute('src') == "red_light.jpg")
                {
                    image.src = "green_light.jpg";
                }
                else
                {
                    image.src = "red_light.jpg";
				}
            }
// running function
function fly() {
    var speed  = Math.floor((Math.random() * 10) + 1);
    pos_tot = parseInt(speed) + pos_tot;
    racers[0].style.left = pos_tot + "px";
	var speed  = Math.floor((Math.random() * 10) + 1);
    pos_rab = parseInt(speed) + pos_rab;
    racers[1].style.left = pos_rab + "px";
    if((pos_tot + 200) >= window.innerWidth){
        clearInterval(interval);
        winner[0].style.display = "block";
    }
	else if( (pos_rab + 200) >= window.innerWidth) {
		clearInterval(interval);
        winner[1].style.display = "block";		
		} 
}
// back to start and image red
function back_to_start()
            {
				racers[0].style.left = 0;
				racers[1].style.left = 0;
				winner[0].style.display = "none";
				winner[1].style.display = "none";
				pos_rab = 0;
				pos_tot = 0;		
                if (image.getAttribute('src') == "red_light.jpg")
                {
                    image.src = "green_light.jpg";
                }
                else
                {
                    image.src = "red_light.jpg";
				}
            }
