<template>
    <div class="text-center pa-4">
      <v-dialog
        v-model="props.dialog"
        max-width="400"
        persistent
      >
        <!-- <template v-slot:activator="{ props: activatorProps }">
          <v-btn v-bind="activatorProps">
            Open Dialog
          </v-btn>
        </template> -->
  
        <v-card
        prepend-icon="mdi-file-edit"
        title="Are you edit This Task?"
        >
            <v-card-text>
                <v-text-field label="Text" v-model="props.task.title"></v-text-field>
                <v-text-field label="subtitle" v-model="props.task.subtitle"></v-text-field> 
            </v-card-text>
          <template v-slot:actions>
            <v-spacer></v-spacer>
            <v-btn @click="$emit('toggle')"
            color="blue-darken-1"
            variant="elevated"
            >
              Ok
            </v-btn>
          </template>
        </v-card>
      </v-dialog>
    </div>
  </template>
  

<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
    dialog: Boolean,
    task : Object 
})

</script>