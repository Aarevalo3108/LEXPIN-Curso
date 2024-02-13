/* las clases son moldes de objetos y usualmente se usan en la programacion orientada a objetos */

class User {
  constructor(name,lastname,email,phone,password){
    this.name = name;
    this.lastname = lastname;
    this.email = email;
    this.phone = phone;
    this.password = password;
  }
  // Metodos de la clase
  sayHello(){
    console.log(`Hola, mi nombre es ${this.name} ${this.lastname}`);
  }
}

// Crear nuevos usuarios
const user1 = new User("John","Doe","hola@hola.com","+1234567890","1234");
const user2 = new User("Jane","Doe","hola@hola.com","+1234567890","1234");
const user3 = new User("Manuelito","Perez","hola@hola.com","+1234567890","1234");

user1.sayHello();

// Herencia
class Admin extends User{
  constructor(name,lastname,email,phone,password,role){
    // Llamar al constructor de la clase padre
    super(name,lastname,email,phone,password);
    this.role = role;
  }
  // Metodos de la clase
  sayHelloAsAdmin(){
    console.log(`Hola, soy ${this.name} ${this.lastname} y soy ${this.role}`);
  }
}


// Polimorfismo
// Es la capacidad de un objeto para tomar diferentes formas

/*

  Ejercicios:
  1.- Crear el ejercicio de TO DO list con POO
  2.- Crear el ejercicio de tres en raya con POO
  
  Opcional:
  3.- Crea la clase personaje con las siguientes características:
  - Nombre
  - Vida
  - Ataque
  - Defensa
  - Velocidad
  - Nivel
  - Experiencia
  
  crea los siguientes métodos:
  - Atacar
  - Defender
  - Subir de nivel
  - Ganar experiencia
  - Morir
  
  Crea la clase enemigo que se extiende de la clase personaje pero que contiene ademas
  - Recompensa
  - Tipo de enemigo
  - Faccion
  
  Crea la funcion pelear que reciba dos personajes y que simule una pelea entre ellos
  
  fecha de entrega: 19/02/2024
*/