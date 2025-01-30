<template>
  <v-card
    class="mx-auto"
    prepend-icon="$vuetify"
    subtitle="The #1 Vue UI Library"
    width="400"
  >
    <template v-slot:title>
      <span class="font-weight-black">Welcome to My Todo</span>
    </template>

    <v-card-text class="bg-surface-light pt-4">
      Managing your tasks efficiently is the key to staying productive and organized. With this to-do list, you can keep track of your daily, weekly, and long-term goals in one convenient place.
    </v-card-text>
    <v-btn
        v-for="icon in icons"
        :key="icon"
        :icon="icon"
        class="mx-4"
        size="small"
        variant="plain"
      ></v-btn>
  </v-card>
</template>

<script setup>
  icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ]
</script>
