<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <div>
    <router-link :to="{ path: '/' }">Home</router-link>
    <router-link :to="{ path: '/about' }">About</router-link>
  </div>

  <router-view></router-view>
</template>

<style scoped></style>
