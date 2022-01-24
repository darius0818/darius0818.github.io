var a = "Gills are feathery organs full of blood vessels. A fish breathes by taking water into its mouth and forcing it out through the gill passages. As water passes over the thin walls of the gills, dissolved oxygen moves into the blood and travels to the fish's cells."; 

var b = "Avocados are a fruit, not a vegetable. They're technically considered a single-seeded berry, believe it or not.";

var c = "Ketchup was once sold as medicine. The condiment was prescribed and sold to people suffering with indigestion back in 1834.";

var d = "The last letter added to the English alphabet was 'J'. The letter dates back to 1524, and before that the letter 'i' was used for both the 'i' and 'j' sounds.";

var e = "Domestic cats are similar in size to the other members of the genus Felis, typically weighing between 8.8 pounds (4.0 kg) and 11 pounds (5.0 kg). However, Meow weighed 39.6 pounds (18.0 kilograms), making him the heaviest cat in the world at the time, but not the heaviest on record.";

document.querySelector('#facta').addEventListener("click",showfacta);

function showfacta(){
	document.getElementById('facts').innerHTML = "<h3>" + a + "</h3>" + "<img src='images/fish.jpg' alt='fish'>";
}

document.querySelector('#factb').addEventListener("click",showfactb);


function showfactb(){
	document.getElementById('facts').innerHTML = "<h3>" + b + "</h3>" + "<img src='images/avacado.jpg' alt='avacado'>";
}

document.querySelector('#factc').addEventListener("click",showfactc);


function showfactc(){
	document.getElementById('facts').innerHTML = "<h3>" + c + "</h3>" + "<img src='images/ketchup.jpg' alt='ketchup'>";
}

document.querySelector('#factd').addEventListener("click",showfactd);


function showfactd(){
	document.getElementById('facts').innerHTML = "<h3>" + d + "</h3>" + "<img src='images/j.jpg' alt='letter j'>";
}

document.querySelector('#facte').addEventListener("click",showfacte);


function showfacte(){
	document.getElementById('facts').innerHTML = "<h3>" + e + "</h3>" + "<img src='images/cat.jpg' alt='cat'>";;

}

document.querySelector('#lighttheme').addEventListener("click",showLight);

function showLight(){
	document.body.style.backgroundColor = "#F6F0ED";
}

document.querySelector('#darktheme').addEventListener("click",showDark);

function showDark(){
	document.body.style.backgroundColor = "#234758";
}

document.querySelector('#othertheme').addEventListener("click",showOther);

function showOther(){
	document.body.style.backgroundColor = "#ECDE6F";	
}