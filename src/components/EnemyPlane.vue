<script setup lang="ts">
import { PropType } from 'vue';
import { EnemyPlane } from '../game';
import enemyPlaneImg from '../assets/enemyPlane.png';

defineProps({
  enemy: {
    type: Object as PropType<EnemyPlane>,
    required: true,
  },
});
</script>

<template>
  <Container :x="enemy.x" :y="enemy.y">
    <Sprite :texture="enemyPlaneImg"></Sprite>
  </Container>
</template>

<style scoped></style>
