<script setup lang="ts">
import { ref } from 'vue'

const drawer = ref<boolean | null>(null) // null for auto-behavior (open on desktop, closed on mobile)
</script>

<template>
  <v-app>
    <v-navigation-drawer v-model="drawer">
      <div class="d-flex justify-center align-center py-4 bg-primary text-white">
        <h2 class="text-h6 font-weight-bold">My App</h2>
      </div>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item
          prepend-icon="mdi-view-dashboard"
          title="Dashboard"
          to="/"
          color="primary"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-account-group"
          title="Customers"
          value="customers"
          color="primary"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-cog"
          title="Settings"
          value="settings"
          color="primary"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="primary" density="compact">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Application</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <v-container fluid class="fill-height align-start">
        <slot></slot>
      </v-container>
    </v-main>

    <v-footer app border>
      <div class="text-center w-100 text-caption">
        <strong>Vuetify Boilerplate</strong> — {{ new Date().getFullYear() }}
      </div>
    </v-footer>
  </v-app>
</template>
