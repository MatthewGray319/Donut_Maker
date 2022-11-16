function startup() {

var donut_count = 0;
var auto_clicker_count = 0;
var auto_clicker_purchase$ = 100;
var autoclicker_on = false;
var multiplier_count = 0;
var multiplier_purchase$ = 10;
var auto_interval = 0;
document.getElementById("bttn").onclick = function() {Add_donut()};
document.getElementById("bttn1").onclick = function() {
    Activate_auto_clickers();
    Purchase_auto_clicker();
    
};
document.getElementById("bttn2").onclick = function() {Purchase_multiplier()};
console.log(donut_count);
console.log(auto_clicker_count);
console.log(multiplier_count);
document.getElementById("bttn3").onclick = function() {Reset()};

function Add_donut() {
if (multiplier_count == 0) {
        donut_count++;
    }
    else {
        donut_count=donut_count + (1)*Math.pow(1.2, multiplier_count);  
    }
    console.log(donut_count);
    Display_donut_count();
    Display_ac_count();
    Display_m_count();
    if (donut_count >= auto_clicker_purchase$) {
        document.getElementById("bttn1").style.opacity="1.0";
    }
    else {
        document.getElementById("bttn1").style.opacity="0.6";
    }
    if (donut_count >= multiplier_purchase$) {
        document.getElementById("bttn2").style.opacity="1.0";
    }
    else {
        document.getElementById("bttn2").style.opacity="0.6";
    }

}


function Purchase_auto_clicker() {
    if (donut_count >= auto_clicker_purchase$) {
        donut_count = donut_count - auto_clicker_purchase$;
        auto_clicker_count++;
        console.log(auto_clicker_count + " auto clickers purchased.");
        console.log("Cost is " + auto_clicker_purchase$ + " donuts.");
        auto_clicker_purchase$=1.1*auto_clicker_purchase$;
        console.log("Next one costs " + auto_clicker_purchase$ + " donuts.");
        Display_donut_count();
        Display_ac_count();
        Display_m_count();
        if (donut_count >= auto_clicker_purchase$) {
            document.getElementById("bttn1").style.opacity="1.0";
        }
        else {
            document.getElementById("bttn1").style.opacity="0.6";
        }    
    }
}

function Activate_auto_clickers() {
    if ((autoclicker_on == false) && (donut_count >= auto_clicker_purchase$)) {
        auto_interval = setInterval(function(){
            if (multiplier_count == 0) {
                donut_count = donut_count + auto_clicker_count;
            }
            else {
                donut_count=donut_count + (1+auto_clicker_count)*Math.pow(1.2, multiplier_count);         }
            console.log(donut_count);
            autoclicker_on = true;
            Display_donut_count();
            Display_ac_count();
            Display_m_count();
            if (donut_count >= auto_clicker_purchase$) {
                document.getElementById("bttn1").style.opacity="1.0";
            }
            else {
                document.getElementById("bttn1").style.opacity="0.6";
            }
            if (donut_count >= multiplier_purchase$) {
                document.getElementById("bttn2").style.opacity="1.0";
            }
            else {
                document.getElementById("bttn2").style.opacity="0.6";
            }
        }, 1000);
    }
}

function Purchase_multiplier() {
    if (donut_count >= multiplier_purchase$) {
        donut_count = donut_count - multiplier_purchase$;
        multiplier_count++;
        console.log(multiplier_count + " donut multipliers purchased.");
        console.log("Cost is " + multiplier_purchase$ + " donuts.");
        multiplier_purchase$=1.1*multiplier_purchase$;
        console.log("Next one costs " + multiplier_purchase$ + " donuts.");
        Display_donut_count();
        Display_ac_count();
        Display_m_count();
        if (donut_count >= multiplier_purchase$) {
            document.getElementById("bttn2").style.opacity="1.0";
        }
        else {
            document.getElementById("bttn2").style.opacity="0.6";
        }
  
    }
}

function Display_donut_count(){
    document.getElementById("count").innerHTML="The donut count is " + Math.round(donut_count) + " donuts"
}

function Display_ac_count() {
    document.getElementById("ac_count").innerHTML="You have " + auto_clicker_count + " autoclickers. The auto clicker purchase price is " + parseFloat(auto_clicker_purchase$.toFixed(2)) + " donuts";
}

function Display_m_count() {
    document.getElementById("m_count",).innerHTML="You have " + multiplier_count + " multipliers. The donut multiplier purchase price is " + parseFloat(multiplier_purchase$.toFixed(2)) + " donuts"
    document.getElementById("dmv").innerHTML="Donut Multiplier value is: " + multiplier_count;

}

function Reset() {
    console.log("Resetting game.")
    donut_count = 0;
    auto_clicker_count = 0;
    auto_clicker_purchase$ = 100;
    autoclicker_on = false;
    multiplier_count = 0;
    multiplier_purchase$ = 10;
    Display_donut_count();
    Display_ac_count();
    Display_m_count();
    clearInterval(auto_interval);
    if (donut_count >= auto_clicker_purchase$) {
        document.getElementById("bttn1").style.opacity="1.0";
    }
    else {
        document.getElementById("bttn1").style.opacity="0.6";
    }
    if (donut_count >= multiplier_purchase$) {
        document.getElementById("bttn2").style.opacity="1.0";
    }
    else {
        document.getElementById("bttn2").style.opacity="0.6";
    }
}


}















