const stages = prompt("Enter a number of stages for your Pyramid :}");

console.log("Here's your " + stages + " stages Pyramid :");

for (var count_to_stages = 1; count_to_stages <= stages; count_to_stages++) {
  var result = ""; //string vide pour remise à zéro à chaque tour de boucle
  var decal = stages;   //décalage pour l'indentation = nombre d'étages

  for (var symbol_printer = 1; symbol_printer <= count_to_stages; symbol_printer++) {
    var decal = decal - 1; //décalage pour l'indentation = nombre d'étages - 1 car on va printer un symbole à la place
    result = " ".repeat(decal) + "🙀".repeat(symbol_printer); //on ajoute le nombre d'espaces et de symboles à printer
  }
  console.log(result);
}