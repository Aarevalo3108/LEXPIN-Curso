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

class Personaje {
  constructor(name,life,atk,shield,speed,lvl = 1,exp = 0){
    this.name = name;
    this.life = life;
    this.atk = atk;
    this.shield = shield;
    this.speed = speed;
    this.lvl = lvl;
    this.exp = exp;
  }
  Hit(enemy){
    console.log(`${this.name} ha infligido ${this.atk} puntos de daño.`);
    if(this.atk - enemy.shield <= 0){
      enemy.life--;
      console.log(`${enemy.name} ha aguantado como un champion y solo recibio un punto de daño de ${this.name}!`);
    }
    else{
      enemy.life -= (this.atk-enemy.shield)
      console.log(`${enemy.name} ha recibido ${this.atk-enemy.shield} puntos de daño de ${this.name}!`);
    }
    if(enemy.life < 0){
      enemy.die();
      this.expGain(enemy.reward);
    }
  }
  Guard(enemy){
    console.log(`${this.name} se ha puesto en guardia con ${this.shield} puntos de escudo.`);
    if(enemy.atk - this.shield <= 0){
      this.life--;
      console.log(`${this.name} solo recibio un punto de daño de ${enemy.name}!`);
    }
    else{
      this.life -= (enemy.atk-this.shield)
      console.log(`${this.name} ha aguantado como un champion y ha recibido ${enemy.atk-this.shield} puntos de daño de ${enemy.name}!`);
    }
    if(this.life < 0){
      this.die();
    }
  }
  lvlUp(){
    this.lvl++;
    this.exp -= 100;
    this.life += 5;
    this.atk++;
    this.shield++;
    this.speed++;
    console.log(`${this.name} ha subido de nivel! ahora es nivel ${this.lvl}.`)
    console.log(`Estadisticas nuevas: \nVida: ${this.life}  Ataque: ${this.atk} Escudo: ${this.shield}  Velocidad: ${this.speed}.`)
  }
  expGain(exp){
    if(this.exp) this.exp += exp;
    else this.exp = exp;
    console.log(`${this.name} gano ${exp} puntos de experiencia y lleva ${this.exp} puntos acumulados.`);
    if(this.exp >= 100) {
      this.lvlUp();
    }
  }
  die(){
    console.log(`${this.name} ha muerto :c `);
  }
}

class Enemigo extends Personaje{
  constructor(name,life,atk,shield,speed,lvl = 1,reward,type,faction){
    super(name,life,atk,shield,speed,lvl);
    this.reward = reward;
    this.type = type;
    this.faction = faction;
  }
}

let player = new Personaje("Angel","10","5","20","5");
let enemy = new Enemigo("Globulon","20","15","3","2","1","50","Slime","Entes del barro");

player.Guard(enemy);