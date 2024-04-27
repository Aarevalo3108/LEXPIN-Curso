#Esto es un comentario

'''
Esto es otro
comentario de varias lineas
'''
#Variables
hola = "Hola Mundo"
print(hola)

#Tipos de datos
#String
nombre = "Juan"
print(nombre)
#Entero
numero = 10
print(numero)
#Decimal
numero_decimal = 10.5
print(numero_decimal)
#Boolean
verdadero = True
falso = False
print(verdadero)
print(falso)
#listas
lista = [1,2,3,4,5]
print(lista)
#Tuplas
tupla = (1,2,3,4,5)
print(tupla)
#Diccionarios
diccionario = {
  "nombre": "Angel",
  "edad": 23
}
print(diccionario)
#None
nada = None
print(nada)

#Operadores de asignacion
edad = 55
print(edad)
edad += 5
print(edad)
edad -= 5
print(edad)
edad *= 5
print(edad)
edad /= 5
print(edad)

#Operadores aritmeticos
numero1 = 77
numero2 = 44
print(numero1 + numero2)
print(numero1 - numero2)
print(numero1 * numero2)
print(numero1 / numero2)
print(numero1 % numero2)

#Operadores logicos
print(numero1 == numero2)
print(numero1 != numero2)
print(numero1 > numero2)
print(numero1 < numero2)
print(numero1 >= numero2)
print(numero1 <= numero2)
#And
print(numero1 > numero2 and numero1 < numero2)
#Or
print(numero1 > numero2 or numero1 < numero2)
#Not
print(not(numero1 > numero2))

#input
nombre = input("¿Cual es tu nombre?: ")
print("Hola " + nombre)

#Concatenacion y F-strings
nombre = "Angel"
edad = 23
print("Hola, mi nombre es " + nombre + " y tengo " + str(edad) + " anios")
print(f"Hola, mi nombre es {nombre} y tengo {edad} anios")

#Condicionales
#if
if edad >= 18:
  print("Eres mayor de edad")
else:
  print("Eres menor de edad")
#elif
dia = 1
if dia == 1:
  print("Hoy es domingo")
elif dia == 2:
  print("Hoy es sabado")
else:
  print("Hoy no es sabado ni domingo")

#Scopes
def mi_funcion():
  nombre = "Angel"
  print("Hola " + nombre)

mi_funcion()
#print(nombre) #No se puede acceder

#Variables globales
texto = "Hola mundo"

def mi_funcion2():
  print(texto)

mi_funcion2()

#Funciones con parametros
def saludar(nombre = "Mundo"):
  return f"Hola {nombre}"

print(saludar())

#Funciones con parametros opcionales
def saludar2(nombre = None):
  if nombre is None:
    return "Hola Mundo"
  else:
    return f"Hola {nombre}"
  
print(saludar2())

#Metodos de string
nombre = "Juan"
print(nombre.upper())
print(nombre.lower())
print(nombre.capitalize())
print(nombre.count("a"))
print(nombre.replace("a", "e"))
print(nombre.split("a"))
print(" ".join(["hola", "mundo"]))
print(nombre.find("n"))
print(nombre.isdigit())
print(nombre.isalpha())
print(nombre.isalnum())
print(nombre.isupper())
print(nombre.islower())
print(nombre.istitle())
#Funcion
print(len(nombre))

#Metodos de listas
lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(lista)
#agregar un elemento al final de la lista
lista.append(50)
print(lista)
#agregar un elemento en una posicion especifica
lista.insert(2, 25)
print(lista)
#eliminar un elemento de la lista (por indice)
lista.pop()
print(lista)
#Elimina el primer elemento que coincida con el valor
lista.remove(5)
print(lista)
#Revertir la lista
lista.reverse()
print(lista)
#Vacia la lista
lista.clear()
print(lista)
#Ordenar la lista
lista = [10, 23, 10, 45, 12, 60, 79, 19, 52, 53]
lista.sort()
print(lista)
#Devolver el indice de un elemento
print(lista.index(12))
#Contar cuantas veces aparece un elemento
print(lista.count(30))

#Metodos de diccionarios
diccionario = {
  "nombre": "Juan",
  "edad": 30
}
print(diccionario)
#Devuelve las claves
print(diccionario.keys())
#Devuelve los valores
print(diccionario.values())
#Devuelve los elementos
print(diccionario.items())
#Devuelve el valor de una clave
print(diccionario.get("nombre"))
#diccionario["nombre"]
#Agregar un elemento
diccionario["pais"] = "Mexico"
print(diccionario)
#Eliminar un elemento
diccionario.pop("pais")
print(diccionario)
#Eliminar el ultimo elemento
diccionario.popitem()
print(diccionario)
#Copiar un diccionario
diccionario2 = diccionario.copy()
print(diccionario2)
#Limpiar un diccionario
diccionario.clear()

#Metodos de tuples
tupla = (10, 20, 30, 40)
print(tupla)
#Devuelve el numero de veces que aparece un elemento
print(tupla.count(30))
#Devuelve el indice de un elemento
print(tupla.index(30))

#Bucles
lista = [10, 20, 30, 40]
for elemento in lista:
  print(elemento)

for i in range(0, 10):
  print(i)

i = 0
while i < 10:
  print(i)
  i += 1

#Bucles para diccionarios
diccionario = {
  "nombre": "Juan",
  "edad": 30
}

for clave, valor in diccionario.items():
  print(clave, valor)

#Funciones de tiempo
import datetime
print(datetime.datetime.now())
print(datetime.datetime.now().year)
print(datetime.datetime.now().month)
print(datetime.datetime.now().day)
print(datetime.datetime.now().hour)
print(datetime.datetime.now().minute)
print(datetime.datetime.now().second)
print(datetime.datetime.now().microsecond)
print(datetime.datetime.now().strftime("%d/%m/%Y"))
print(datetime.datetime.now().strftime("%H:%M:%S"))

#Clases
class Persona:
  def __init__(self, nombre, edad):
    self.nombre = nombre
    self.edad = edad
  def presentarse(self):
    print(f"Hola, mi nombre es {self.nombre} y tengo {self.edad} años")

persona = Persona("Juan", 30)
persona.presentarse()

#try except
try:
  print(10/0)
except ZeroDivisionError:
  print("No se puede dividir entre cero")

#multiples excepciones
try:
  print(10/0)
except ZeroDivisionError:
  print("No se puede dividir entre cero")
except NameError:
  print("El nombre de la variable no existe")
except Exception as e:
  print(e)

#Manejo de archivos
archivo = open("archivo.txt", "w")
archivo.write("Hola Mundo")
archivo.close()

archivo = open("archivo.txt", "r")
contenido = archivo.read()
archivo.close()

archivo = open("archivo.txt", "a")
archivo.write("\nAdios Mundo")
archivo.close()

#Get each line
archivo = open("archivo.txt", "r")
contenido = archivo.readline()
archivo.close()

print(contenido)

import os

if os.path.exists("archivo.txt"):
  os.remove("archivo.txt")
  print("El archivo ha sido eliminado")
else:
  print("El archivo no existe")
