// Bruna ruta nummmer 1
			
// Byta rubrik
var x = "FSL kritiserar Naturvårdsverkets hantering av vindkraftbuller";
// byta underrubrik/text
var y = "Hanteringen av ljudfrågor vid prövning av vindkraft är bristfällig, anvisningar för hur beräkningar ska utföras är bristfälliga, samt redovisning av andel bullerstörda är felaktig. FSL menar att Naturvårdsverket skyndsamt bör göra en översyn av vägledningen för vindkraftbuller.
";
// byta länk namn
var z = "<i> Läs mer </i>";
// byta länk adress, ändra endast webadressen innom citattäcknena
var yourElement = document.getElementById('1.3');
yourElement.setAttribute('href', 'http://landskapsskydd.se/artikel/104'); 
    

document.getElementById("1.1").innerHTML = x;
document.getElementById("1.2").innerHTML = y;
document.getElementById("1.3").innerHTML = z;

// BRUNA RUTA NUMMER 2
			
// Byta rubrik
var a = "Retroaktiv barmhärtighet i stället för utveckling?";
// byta under rubrik/text
var b = "På branschorganisationen Svensk Vindenergis hemsida ligger en artikel med rubriken<br><br>Låt inte de som gått i spetsen ta kostnaderna.";
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
var d = "";
// byta under rubrik/text
var e = "";
// byta länk namn
var f = "";
// byta länk adress, ändra endast webadressen innom citattäcknena
var yourElement3 = document.getElementById('3.3');
yourElement3.setAttribute('href', 'https://www.landskapsskydd.se/artikel/JH102');
    
    
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
    var antal = "3"
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
