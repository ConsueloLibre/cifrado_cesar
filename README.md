# Codido de Cifrado Cesar, Pseudo Codigo.
### crear buque do, para obligar al usuario a que ingrese un texto valido, si usuario no ingresa devolvera valor "ingrese texto"
### 1 crear la primera variable, (text).
##### creando primera variable
1.1 En esta misma Variable crear un prompt con el texto "ingrese texto para cifrar"
    1.2 crear alert en Text, que contenga la función "cipher" que llame a las propiedades bajo el calculo, text y 33 (numero de desplazamiento en el alphabeto para cambiar la letra original por
      una letra 33 espacios mas alla)
      1.3 que el resultado se imprima en nuestra consola( el texto ya transformado en base a nuestra función)
### 2 crear segunda variable, (text2).
##### creando segunda variable
2.1 en esta segunda variable crearemos un prompt con el texto "Ingrese texto para descifrar"
    2.2 crear alert en text2 que contenga la funcion  "descipher" que llame a las propiedades text2 y 33 (numero de desplazamiento) para volver a la normalidad el texto.
    2.3  el resultado debe ser impreso en consola, ya resuelto.

### Creando funciones.
##### Funcion cipher (cifrar)
1.1 crear función con parametros str (cadena de texto) y cant (cantidad)
1.2 si cantidad es menor a 0 devolvera cadena de texto, sumando 26 (numero de letras del alphabeto)
1.3 declarar variable "output" para que se vayan almacenando las letras ya cifradas.
1.4 crear un for que recorra todas la letras ingresadas en nuestro primer prompt de la variable text.
1.5 convertir en base a formula //formula del cifrado cesar (X+N)%26

### funcion desscipher (descifrar)
1.1 crear función que vuelva y retroceda en le alphabeto para retornar el orden normal del texto
parametros a definir  str (cadena de texto) y cant (cantidad) los mismo que en la función anterior.
1.2 el parametro cant debe ser modificado por un nuevo cant que se multiplicará por -1 para su retorno.
si cant es menor a 0 debe devolver el segundo texto, la cantidad mas 26 espacios del alphabeto.

(el codigo no funciona pero ne base a lo que vi en internet deberia ser algo así, se que me falta el como aplicar la formula.)
