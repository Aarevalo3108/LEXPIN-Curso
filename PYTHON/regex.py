#Expresiones regulares
#Las expresiones regulares son una secuencia de caracteres que forman un patrón de búsqueda, principalmente utilizada para la búsqueda de patrones de cadenas de caracteres u operaciones de sustituciones.

import re

cadena = "Vamos a aprender expresiones regulares en Python. Python es un lenguaje de sintaxis sencilla"

texto_buscar = "Python"

if re.search(texto_buscar, cadena) is not None:
  print(f"He encontrado el texto: {texto_buscar}")
else:
  print(f"No he encontrado el texto: {texto_buscar}")
  
#validar un correo
correo = "hola@hola.com"
if re.search("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$", correo) is not None:
  print("Correo valido")
else:
  print("Correo invalido")