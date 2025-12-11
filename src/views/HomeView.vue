<script setup lang="ts"></script>

<template>
  <div>
    <v-row class="mb-4">
      <v-col cols="12">
        <v-card color="primary" variant="tonal" class="text-center py-6">
          <v-card-title class="text-h4">Welcome to Vuetify</v-card-title>
          <v-card-subtitle>A Material Design Framework for Vue 3</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="4" v-for="n in 3" :key="n">
        <v-card hover>
          <v-card-item>
            <v-card-title>Feature {{ n }}</v-card-title>
            <v-card-subtitle>Amazing capability</v-card-subtitle>
          </v-card-item>

          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore.
          </v-card-text>

          <v-card-actions>
            <v-btn variant="text" color="primary">Details</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
