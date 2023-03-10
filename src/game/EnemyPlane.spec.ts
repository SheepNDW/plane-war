import { describe, expect, it, vi } from 'vitest';
import { EnemyPlane, initEnemyPlanes, runEnemyPlanes } from './EnemyPlane';

describe('EnemyPlane', () => {
  it('move', () => {
    const enemy = new EnemyPlane();
    enemy.y = 0;
    enemy.speed = 1;

    enemy.move();

    expect(enemy.y).toBe(1);
  });

  it('creates an enemy every two seconds', () => {
    vi.useFakeTimers();
    const enemyPlanes = [];
    initEnemyPlanes(enemyPlanes);

    vi.advanceTimersByTime(4000);

    expect(enemyPlanes.length).toBe(2);

    vi.restoreAllMocks();
  });

  it('enemy moving', () => {
    const enemy = new EnemyPlane();
    enemy.y = 1;
    const enemyPlanes = [enemy];

    runEnemyPlanes(enemyPlanes);

    expect(enemy.y).toBe(2);
  });
});
