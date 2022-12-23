<script setup lang="ts">
import { PropType } from 'vue';
import { Bullet } from '../game';
import bulletImg from '../assets/bullet.png';

defineProps({
  bullet: {
    type: Object as PropType<Bullet>,
    required: true,
  },
});
</script>

<template>
  <Container :x="bullet.x" :y="bullet.y">
    <Sprite :texture="bulletImg"></Sprite>
  </Container>
</template>

<style scoped></style>
