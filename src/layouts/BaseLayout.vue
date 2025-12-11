<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const drawer = ref<boolean | null>(null) // null for auto-behavior (open on desktop, closed on mobile)

const authStore = useAuthStore()
const router = useRouter()

const handleLogout = async () => {
  await authStore.logout()
  router.push('/login')
}
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
      <v-spacer></v-spacer>

      <v-btn v-if="!authStore.user" to="/login" variant="text">Login</v-btn>
      <v-btn v-else @click="handleLogout" variant="text">Logout</v-btn>
    </v-app-bar>

    <v-main>
      <slot></slot>
    </v-main>

    <v-footer app border>
      <div class="text-center w-100 text-caption">
        <strong>Vuetify Boilerplate</strong> — {{ new Date().getFullYear() }}
      </div>
    </v-footer>
  </v-app>
</template>
