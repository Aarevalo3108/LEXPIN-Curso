class Personaje {
  constructor(name,life,atk,shield,speed,lvl = 1,exp = 0,status = 0){
    this.name = name;
    this.life = life;
    this.atk = atk;
    this.shield = shield;
    this.speed = speed;
    this.lvl = lvl;
    this.exp = exp;
    this.status = status;
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
    if(enemy.life <= 0){
      enemy.die();
      if(enemy.reward != undefined){
        this.expGain(enemy.reward);
      }
    }
  }
  lvlUp(){
    while(this.exp >= 100){
      this.lvl++;
      this.exp -= 100;
      this.life += 5;
      this.atk++;
      this.shield++;
      this.speed++;
    }
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
  constructor(name,life,atk,shield,speed,lvl = 1,status,reward,type,faction){
    super(name,life,atk,shield,speed,lvl);
    this.reward = reward;
    this.type = type;
    this.faction = faction;
  }
}

let player = new Personaje("Angel",10,5,8,5);
let enemy = new Enemigo("Globulon",20,50,3,2,1,0,200,"Slime","Entes del barro");

function Batallar(player,enemy){
  let SpeedPlayer = player.speed;
  let SpeedEnemy = enemy.speed;
  let turno = 0
  while((player.life > 0) && (enemy.life > 0)){
    if(SpeedPlayer > SpeedEnemy && turno%2 == 0){
      player.Hit(enemy);
    }
    else{
      enemy.Hit(player);
    }
    turno++;
  }
}

Batallar(player,enemy);