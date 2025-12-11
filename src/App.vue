<script setup lang="ts">
import BaseLayout from './layouts/BaseLayout.vue'
import ReloadPrompt from './components/ReloadPrompt.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <BaseLayout>
    <RouterView />
    <ReloadPrompt />
  </BaseLayout>
</template>
