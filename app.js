function startup() {

var donut_count = 0;
var auto_clicker_count = 0;
var auto_clicker_purchase$ = 100;
var multiplier_count = 0;
var multiplier_purchase$ = 10;
document.getElementById("bttn").onclick = function() {Add_donut()};
document.getElementById("bttn1").onclick = function() {Purchase_auto_clicker()};
document.getElementById("bttn2").onclick = function() {Purchase_multiplier()};

function Add_donut() {
    if (multiplier_count = 0) {
        donut_count++;
    }
    else {
            donut_count=donut_count + auto_clicker_count*Math.pow(1.2, multiplier_count);
    }
    Display_donut_count();
    Display_ac_count();
    Display_m_count();

}


function Purchase_auto_clicker() {
    if (donut_count >= auto_clicker_purchase$) {
        donut_count = donut_count - auto_clicker_purchase$;
        auto_clicker_count++;
        console.log(auto_clicker_count + " auto clickers purchased.");
        console.log("Cost is " + auto_clicker_purchase$ + " donuts.");
        auto_clicker_purchase$=1.1*auto_clicker_purchase$;
        console.log("Next one costs " + auto_clicker_purchase$ + " donuts.");
    }
}

function Activate_auto_clickers() {
    setInterval(function(){
        if (multiplier_count < 0) {
            donut_count = donut_count + auto_clicker_count;
        }
        else {
            donut_count=donut_count + auto_clicker_count*Math.pow(1.2, multiplier_count);
        }
        Display_donut_count();
        Display_ac_count();
        Display_m_count();
    }, 1000);
}

function Purchase_multiplier() {
    if (donut_count >= multiplier_purchase$) {
        donut_count = donut_count - multiplier_purchase$;
        multiplier_count++;
        console.log(multiplier_count + " donut multipliers purchased.");
        console.log("Cost is " + multiplier_purchase$ + " donuts.");
        multiplier_purchase$=1.1*multiplier_purchase$;
        console.log("Next one costs " + multiplier_purchase$ + " donuts.");
    }
}

function Display_donut_count(){
    document.getElementById("count").innerHTML="The donut count is " + Math.round(donut_count) + " donuts."
}

function Display_ac_count() {
    document.getElementById("ac_count"),innerHTML="You have " + auto_clicker_count + " autoclickers."
}

function Display_m_count() {
    document.getElementById("m_count"),innerHTML="You have " + multiplier_count + " multipliers."
}
}

