import Bullet from './Bullet';

export interface Plane {
  run(): void;
  attack(): void;
  x: number;
  y: number;
  moveDown: () => void;
  moveUp: () => void;
  moveLeft: () => void;
  moveRight: () => void;
}

const defaultOptions = {
  x: 0,
  y: 0,
  speed: 10,
};

export const setupPlane = (plane, options?, bullets: Bullet[] = []): Plane => {
  // init
  plane.bullets = bullets;
  Object.assign(plane, defaultOptions, options);

  plane.attack = () => {
    const bullet = new Bullet();
    bullet.x = plane.x + 25;
    bullet.y = plane.y;
    bullets.push(bullet);
  };

  plane.run = () => {
    bullets.forEach((bullet) => {
      bullet.move();
    });
  };

  plane.moveDown = function moveDown() {
    plane.y += plane.speed;
  };

  plane.moveUp = function moveUp() {
    plane.y -= plane.speed;
  };

  plane.moveLeft = function moveLeft() {
    plane.x -= plane.speed;
  };

  plane.moveRight = function moveRight() {
    plane.x += plane.speed;
  };

  return plane;
};
