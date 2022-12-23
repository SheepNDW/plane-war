import { describe, expect, it } from 'vitest';
import { EnemyPlane, initEnemyPlanes, runEnemyPlanes } from './EnemyPlane';

describe('EnemyPlane', () => {
  it('move', () => {
    const enemy = new EnemyPlane();
    enemy.y = 0;
    enemy.speed = 1;

    enemy.move();

    expect(enemy.y).toBe(1);
  });

  it('create enemy', () => {
    const enemyPlanes = [];
    initEnemyPlanes(enemyPlanes);

    expect(enemyPlanes.length).toBe(1);
  });

  it('enemy moving', () => {
    const enemy = new EnemyPlane();
    enemy.y = 1;
    const enemyPlanes = [enemy];

    runEnemyPlanes(enemyPlanes);

    expect(enemy.y).toBe(2);
  });
});
