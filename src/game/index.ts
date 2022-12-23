import { Application } from 'pixi.js';
import { Plane, setupPlane } from './Plane';

export * from './Plane';

export const game = new Application({
  width: 500,
  height: 500,
});

document.body.append(game.view);

export const initGame = (_plane, bullets) => {
  const plane = setupPlane(_plane, {}, bullets);

  mainTicker(plane);
  return {
    plane,
    bullets,
  };
};

function mainTicker(plane: Plane) {
  game.ticker.add(() => {
    plane.run();
  });
}
