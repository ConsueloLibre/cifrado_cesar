
/* creamos bucle do, es esta  1 variable (text), que tendra en si la función de solicitar a traves de un
 promt, un texto ingresado por el usuario que se cifrarar, luego con un alert debelveremos al
 usuario el texto ingresado ya con "cifrado cesar"  si usuario no ingresa campo valido retornara
 mensaje "ingrese texto"*/

  do {
    var text = prompt("Ingrese texto para cifrar");
    if (text === ''){
      alert('Ingrese texto');
    }
  }  while (text ==='');
  alert(cipher(text, 33));
  console.log(cipher(text, 33));
/* luego creamos una segunda variable (text2), que tendra en si la función de solitar a traves de un
 promp un texto ya cifrado al usuario para descifrar y volverlo a la normalidad */

  var text2 = prompt("Ingrese texto para descifrar");
  alert(decipher(text2, 33));
  console.log(decipher(text2, 33));



/* Hay que establecer las funciones, primero funcion cifrar (cipher) esta tendra 2 parametros
(str, cant) si cant es menor a 0 devolvera a traves de un return  la suma de str que correra
a traves de un for incrementandose uno a la vez, para recorrer cada una de las letras, que a su
vez sumara la cantidad de 26 en el alfabeto y modalidad cesar, en la misma funcion crearemos la
variable output que sin valor ira acumulando este nuevo orden del alphabeto*/

  function cipher(str, cant) {
    if (cant < 0)
		  return cipher(str, cant + 26);
  	var output = '';
  	for (var i = 0; i < str.length; i ++) {
  		var j = str[i];
str.charCodeAt(text)
  		output += j;
  	}
  	return output;
  };
  function decipher(str, cant) {
    cant = cant * -1;

    if (cant < 0)
		  return cipher(str, cant + 26);
  };

console.log(userText);
//formula del cifrado cesar (X+N)%26
