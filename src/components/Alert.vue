<template>
    <div class="notification animate__animated animate__bounce">
        <v-alert 
        :text='alertStore.text'
        :type="alertStore.type" 
        closable></v-alert>
    </div>

</template>

<script setup>
import 'animate.css';
import { useAlartStore } from '@/stores/alert';
const alertStore = useAlartStore();
</script>

<style scoped>
.notification {
    position: fixed;
    z-index: 1;
    bottom: 50px;
    width: 100%;
    padding: 0 30% 0 30%;
}
</style>