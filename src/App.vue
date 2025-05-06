<script lang="ts" setup>
import {onMounted, onUnmounted} from 'vue';

let mediaQueryList: MediaQueryList | null = null;

const updateTheme = (event: MediaQueryListEvent | MediaQueryList) => {
  const theme = event.matches ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme);
};

onMounted(() => {
  mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
  updateTheme(mediaQueryList);
  mediaQueryList.addEventListener('change', updateTheme);
});

onUnmounted(() => {
  if (mediaQueryList) {
    mediaQueryList.removeEventListener('change', updateTheme);
  }
});
</script>

<template>
  <Suspense>
    <router-view/>
  </Suspense>
</template>

<style lang="scss" scoped>
</style>
