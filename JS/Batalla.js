class Personaje {
  constructor(name,life,atk,shield,speed,lvl = 1,exp = 0,status = 0,turno = 0){
    this.name = name;
    this.life = life;
    this.atk = atk;
    this.shield = shield;
    this.speed = speed;
    this.lvl = lvl;
    this.exp = exp;
    this.status = status;
    this.turno = turno;
  }
  hit(enemy){
    console.log(`${this.name} ha infligido ${this.atk} puntos de daño.`);
    if(enemy.status == 1){
      if(enemy.shield - this.atk >= 0){
        console.log(`${enemy.name} solo recibio un punto de daño de ${this.name}!\n`);
        enemy.life--;
      }
      else{
        enemy.life = enemy.life + (enemy.shield-this.atk);
        console.log(`${enemy.name} recibio ${this.atk - enemy.shield} un punto de daño de ${this.name}!\n`);
      }
      enemy.status = 0;
    }
    else{
      enemy.life -= this.atk;
      console.log(`${enemy.name} recibio ${this.atk} punto de daño de ${this.name}!\n`);
    }
    if(enemy.life <= 0){
      enemy.die();
      if(enemy.reward != undefined){
        this.expGain(enemy.reward);
      }
    }
  }
  guard(){
    this.status = 1;
    console.log(`${this.name} se esta defendiendo!`);
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
  constructor(name,life,atk,shield,speed,lvl = 1,status,reward,type,faction,turno = 0){
    super(name,life,atk,shield,speed,lvl,turno,status);
    this.reward = reward;
    this.type = type;
    this.faction = faction;
  }
}
let player = new Personaje("Angel",20,10,5,10,1,0);
let enemy = new Enemigo("Globulon",20,12,3,5,1,0,200,1,1);

const Batallar = (player,enemy) => {
  if(player.speed > enemy.speed){
    player.turno = 0;
    enemy.turno = 1;
  }
  else{
    enemy.turno = 0;
    player.turno = 1;
  }
  while((player.life > 0) && (enemy.life > 0)){
    player.status = Math.floor(Math.random()*2);
    enemy.status = Math.floor(Math.random()*2);
    if(player.turno == 0){
      if(enemy.status == 1){
        enemy.guard();
      }
      player.hit(enemy);
      player.turno = 1;
      enemy.turno = 0;
    }
    else{
      if(player.status == 1){
        player.guard();
      }
      enemy.hit(player);
      enemy.turno = 1;
      player.turno = 0;
    }
  }
}

Batallar(player,enemy);