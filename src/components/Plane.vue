<script setup lang="ts">
import { onMounted, onUnmounted, reactive } from 'vue';
import planeImg from '../assets/plane.png';
import { setupPlane } from '../game';

const plane = setupPlane(reactive({}));

const keydownHandler = (e: KeyboardEvent) => {
  switch (e.code) {
    case 'ArrowDown':
      plane.moveDown();
      break;
    case 'ArrowUp':
      plane.moveUp();
      break;
    case 'ArrowLeft':
      plane.moveLeft();
      break;
    case 'ArrowRight':
      plane.moveRight();
      break;
    default:
      break;
  }
};

onMounted(() => {
  window.addEventListener('keydown', keydownHandler);
});

onUnmounted(() => {
  window.removeEventListener('keydown', keydownHandler);
});
</script>

<template>
  <Container :x="plane.x" :y="plane.y">
    <Sprite :texture="planeImg"></Sprite>
  </Container>
</template>
