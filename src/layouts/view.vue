<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">

      <v-list>
        <v-list-item
          prepend-avatar="https://w0.peakpx.com/wallpaper/725/191/HD-wallpaper-master-vijay-jd-thalapathy.jpg"
          subtitle="SivakmHacker@gmail.com" title="Jd Siva">
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list :lines="false" density="compact" nav>
        <router-link v-for="(item, i) in items" :key="i" :to="item.to">
          <v-list-item color="primary">
            <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>

            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>

        </router-link>

      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="teal-darken-4" image="https://picsum.photos/1920" density="prominent">
      <template v-slot:image>
        <v-img gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)" class="ali-"></v-img>
      </template>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>My daily Application</v-app-bar-title>
    </v-app-bar>

    <v-main> 
      <RouterView></RouterView>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router';

const drawer = ref(null)
const items = [
  { text: 'Home', icon: 'mdi-folder', to: '/' },
  { text: 'About', icon: 'mdi-account-multiple', to: '/About' },
];
</script>

<style scoped>
a {
  text-decoration: none;
  color: white;
}
.ali- {
  display: flex;
  justify-content: center;
  height: 100%;
}
</style>