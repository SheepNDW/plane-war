<script setup lang="ts">
import { onMounted, onUnmounted, PropType } from 'vue';
import planeImg from '../assets/plane.png';
import { Plane } from '../game';

const props = defineProps({
  plane: {
    type: Object as PropType<Plane>,
    required: true,
  },
});

const keydownHandler = (e: KeyboardEvent) => {
  if (e.code === 'Space') {
    props.plane.attack();
  }

  switch (e.code) {
    case 'ArrowDown':
      props.plane.moveDown();
      break;
    case 'ArrowUp':
      props.plane.moveUp();
      break;
    case 'ArrowLeft':
      props.plane.moveLeft();
      break;
    case 'ArrowRight':
      props.plane.moveRight();
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
