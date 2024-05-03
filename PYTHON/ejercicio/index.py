'''
Crea un programa que le pida al usuario
nombre, apellido, correo, numero de telefono
y lo guarde en un archivo llamado usuarios.txt, cada dato separado por una coma.
y cada usuario en una nueva linea. El programa debe validar toda la información escrita
por el usuario.

Este programa debe un menu que te permita agregar un usuario,
listar todos los usuarios, buscar un usuario por correo,
eliminar un usuario por correo o detener el programa,
antes de crear un usuario se debe de validar
que el correo no exista en el archivo.

este programa debe ser orientado a objetos es decir, debes de tener una clase

opcional: al registrar un usuario, debes enviarle un mensaje de whatsapp y un
correo electronico al usuario registrado dandole la bienvenida.

Opcional: Crear una interfaz grafica para el programa.

Opcional: Hacer de este programa un .exe para que pueda ser ejecutado en cualquier
computadora.

Fecha de entrega: Viernes 03 de mayo del 2024
'''

import os
import tkinter as tk
from dotenv import load_dotenv
import re
import pywhatkit

load_dotenv()

app = tk.Tk()
class Usuario:
  def __init__(self, nombre, apellido, correo, telefono):
    self.nombre = nombre
    self.apellido = apellido
    self.correo = correo
    self.telefono = telefono
  def __str__(self):
    return f"Nombre: {self.nombre} - Apellido: {self.apellido} - Correo: {self.correo} - Telefono: {self.telefono}"
  
regex = {
  "nombre": "[a-zA-ZáéíóúÁÉÍÓÚñÑ]{2,32}$",
  "apellido": "[a-zA-ZáéíóúÁÉÍÓÚñÑ]{2,32}$",
  "telefono": r"^\d{11}$",
  "email": r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
}

def registrar():
  correo = input("\n* Correo: ")
  if re.search(regex["email"], correo) is None:
    print("Correo invalido")
    return False
  if os.path.exists("usuarios.txt"):
    with open("usuarios.txt", "r") as archivo:
      for linea in archivo:
        if correo in linea:
          print("El correo ya existe, no se puede registrar")
          return False
  nombre = input("* Nombre: ")
  if re.search(regex["nombre"], nombre) is None:
    print("Nombre invalido")
    return False
  apellido = input("* Apellido: ")
  if re.search(regex["nombre"], apellido) is None:
    print("Apellido invalido")
    return False
  telefono = input("* Telefono (formato: 04123453678): ")
  if re.search(regex["telefono"], telefono) is None:
    print("Teléfono invalido")
    return False
  telefono = "+58" + telefono[1:]
  newUsuario = Usuario(nombre, apellido, correo, telefono)
  if os.path.exists("usuarios.txt"):
    with open("usuarios.txt", "a") as archivo:
      archivo.write(str(newUsuario))
  else:
    with open("usuarios.txt", "w") as archivo:
      archivo.write(str(newUsuario))
  print("\nUsuario registrado!")
  pywhatkit.send_mail(os.environ.get("MAIL"),os.environ.get("PW"), "Python", "Te damos la bienvenida desde Python, " + newUsuario.nombre + " " + newUsuario.apellido + "!", str(newUsuario.correo))
  pywhatkit.sendwhatmsg_instantly(str(newUsuario.telefono), "¡Te damos la bienvenida desde Python, " + newUsuario.nombre + " " + newUsuario.apellido + "!", 30, True, 4)
def listar():
  print("\n* Listado de usuarios:\n")
  if not os.path.exists("usuarios.txt"):
    print("No hay usuarios registrados")
    return False
  with open("usuarios.txt", "r") as archivo:
    check = True
    for linea in archivo:
      print(linea)
      check = False
    if check:
      print("No hay usuarios registrados")

def buscar():
  correo = input("\nCorreo a buscar: ")
  if re.search(regex["email"], correo) is None:
    print("\nCorreo invalido")
    return False
  check = True
  with open("usuarios.txt", "r") as archivo:
    for linea in archivo:
      if linea.find(correo) != -1:
        print("\n* Resultado de la busqueda:\n")
        print(linea)
        check = False
  if check:
    print("\nNo se encontro el correo")

def eliminar():
  correo = input("Correo a eliminar: ")
  check = True
  with open("usuarios.txt", "r") as archivo:
    lineas = archivo.readlines()
  with open("usuarios.txt", "w") as archivo:
    for linea in lineas:
      if linea.find(correo) != -1:
        check = False
        print("\n* Se elimino el usuario:\n", linea)
      else:
        archivo.write(linea)
  if check:
    print("\nNo se encontro el correo")

def salir():
  print("Saliendo...")
  exit()

op = 0
switch = {
  "1": lambda: registrar(),
  "2": lambda: listar(),
  "3": lambda: buscar(),
  "4": lambda: eliminar(),
  "5": lambda: salir()
}
os.system('cls')
print("-" * 60)
print("\n" + " " * 7 + "Bienvenido al sistema de registro de usuarios.\n")
while op != 5:
  print("-" * 60)
  print("  1. Registrar un usuario")
  print("  2. Listar todos los usuarios")
  print("  3. Buscar un usuario")
  print("  4. Eliminar un usuario")
  print("  5. Salir")
  print("-" * 60)
  op = input("\n- Opcion: ")
  os.system('cls')
  switch.get(op, lambda: print("\nOpción inválida"))()