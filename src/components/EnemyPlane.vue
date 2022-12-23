<script setup lang="ts">
import { PropType } from 'vue';
import { EnemyPlane } from '../game';
import enemyPlaneImg from '../assets/enemyPlane.png';

const props = defineProps({
  enemy: {
    type: Object as PropType<EnemyPlane>,
    required: true,
  },
});

props.enemy.width = 100;
props.enemy.height = 100;
</script>

<template>
  <Container :x="enemy.x" :y="enemy.y">
    <Sprite :texture="enemyPlaneImg"></Sprite>
  </Container>
</template>

<style scoped></style>
