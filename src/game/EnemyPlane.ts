export class EnemyPlane {
  public x: number = 0;
  public y: number = 0;
  public speed: number = 1;

  constructor() {}

  move() {
    this.y += this.speed;
  }
}

export function initEnemyPlanes(enemyPlanes: EnemyPlane[]) {
  const enemy = new EnemyPlane();

  enemyPlanes.push(enemy);
}

export function runEnemyPlanes(enemyPlanes: EnemyPlane[]) {
  enemyPlanes.forEach((enemy) => {
    enemy.move();
  });
}
