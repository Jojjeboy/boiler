<template>
  <v-container class="fill-height">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <div class="text-center my-4">Please sign in to continue</div>

            <v-btn
              variant="outlined"
              color="red"
              block
              prepend-icon="mdi-google"
              :loading="loading"
              @click="handleGoogleLogin"
              size="large"
            >
              Sign in with Google
            </v-btn>

            <v-alert v-if="error" type="error" dense class="mt-4">
              {{ error }}
            </v-alert>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const error = ref('')
const loading = ref(false)

const router = useRouter()
const authStore = useAuthStore()

const handleGoogleLogin = async () => {
  error.value = ''
  loading.value = true
  try {
    await authStore.loginWithGoogle()
    router.push('/')
  } catch (e: unknown) {
    if (e instanceof Error) {
      error.value = e.message
    } else {
      error.value = 'Failed to login with Google'
    }
  } finally {
    loading.value = false
  }
}
</script>
