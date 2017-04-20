// Bruna ruta nummmer 1
			
// Byta rubrik
var x = "Den 25 mars 2017 höll FSL årsmöte i Uppsala";
// byta underrubrik/text
var y = "Årsmötet hölls liksom förra året i Uppsala Konsert & Kongress<br><br>Föreningens verksamhetsberättelse för 2016 redovisades<br><br>En styrelse för 2017 valdes, varvid tre nya namn tillkom.";
// byta länk namn
var z = "Läs verksamhetsberättelsen och årsmötesprotokollet";
// byta länk adress, ändra endast webadressen innom citattäcknena
var yourElement = document.getElementById('1.3');
yourElement.setAttribute('href', 'http://landskapsskydd.se/artikel/101'); 
    

document.getElementById("1.1").innerHTML = x;
document.getElementById("1.2").innerHTML = y;
document.getElementById("1.3").innerHTML = z;

// BRUNA RUTA NUMMER 2
			
// Byta rubrik
var a = "Retroaktiv barmhärtighet i stället för utveckling?";
// byta under rubrik/text
var b = "På branschorganisationen Svensk Vindenergis hemsida ligger en artikel med rubriken /"Låt inte de som gått i spetsen ta kostnaderna/";
// byta länk namn
var c = "läs mer";
// byta länk adress, ändra endast webadressen innom citattäcknena,
var yourElement2 = document.getElementById('2.3');
yourElement2.setAttribute('href', 'http://landskapsskydd.se/artikel/JH101');
    
    
document.getElementById("2.1").innerHTML = a;
document.getElementById("2.2").innerHTML = b;
document.getElementById("2.3").innerHTML = c;

// BRUNA RUTA NUMMER 3
			
// Byta rubrik
var d = "rubrik3";
// byta under rubrik/text
var e = "brödtext3";
// byta länk namn
var f = "lankText3";
// byta länk adress, ändra endast webadressen innom citattäcknena
var yourElement3 = document.getElementById('3.3');
yourElement3.setAttribute('href', 'https://www.youtube.com');
    
    
document.getElementById("3.1").innerHTML = d;
document.getElementById("3.2").innerHTML = e;
document.getElementById("3.3").innerHTML = f;

// BRUNA RUTA NUMMER 4

// Glöm inte att endast byta variablen innom parantes "rubrik" och behåll paranteserna.   
    
// Byta rubrik
var g = "rubrik44";
// byta under rubrik/text
var h = "brödtext4";
// byta länk namn
var i = "lankText4";
// byta länk adress, ändra endast webadressen innom citattäcknena
var yourElement4 = document.getElementById('4.3');
yourElement4.setAttribute('href', 'https://www.9gag.com');
    
    
document.getElementById("4.1").innerHTML = g;
document.getElementById("4.2").innerHTML = h;
document.getElementById("4.3").innerHTML = i;

    // Antal bruna ruter som visas, ändra variablen innom parantes "x" och behåll parenteserna
    var antal = "2"
    var displayAntal;
    if (antal == 1) {
        document.getElementById("1").style.opacity = "1";
        document.getElementById("2").style.opacity = "0";
        document.getElementById("3").style.opacity = "0";
        document.getElementById("4").style.opacity = "0";
    } else if (antal == 2) {
        document.getElementById("1").style.opacity = "1";
        document.getElementById("2").style.opacity = "1";
        document.getElementById("3").style.opacity = "0";
        document.getElementById("4").style.opacity = "0";
    } else if (antal == 3) {
        document.getElementById("1").style.opacity = "1";
        document.getElementById("2").style.opacity = "1";
        document.getElementById("3").style.opacity = "1";
        document.getElementById("4").style.opacity = "0";
    } else if (antal == 4) {
        document.getElementById("1").style.opacity = "1";
        document.getElementById("2").style.opacity = "1";
        document.getElementById("3").style.opacity = "1";
        document.getElementById("4").style.opacity = "1";
    }else {
        document.getElementById("1").style.opacity = "1";
        document.getElementById("2").style.opacity = "1";
        document.getElementById("3").style.opacity = "1";
        document.getElementById("4").style.opacity = "1";
    }
