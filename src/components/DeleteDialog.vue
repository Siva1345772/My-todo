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
        prepend-icon="mdi-delete-alert"
        title="Are you delete This Task?"
      >
        <template v-slot:actions>
          <v-spacer></v-spacer>

          <v-btn @click="$emit('toggledelete')"
          color="red-darken-1"
          variant="elevated"
          >
            No
          </v-btn>

          <v-btn @click="$emit('deletetask')"
          color="red-darken-1"
          variant="outlined"
          >
            Yes
          </v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>


<script setup>
const props = defineProps({
    dialog: Boolean
})

</script>