<template>
    <div class="pa-4">
        <v-list v-model:selected="settingsSelection" lines="three" select-strategy="leaf">
            <v-list-subheader>Tasks</v-list-subheader>
            <v-list-item v-for="(item, i) in taskstore.tasks" :key="i" :subtitle="item.subtitle" :title="item.title"
                :value="i"
                @click="taskstore.toggleDonetask(i)">
                <template v-slot:prepend="{}">
                    <v-list-item-action start>
                        <v-checkbox-btn :model-value="item.done"></v-checkbox-btn>
                    </v-list-item-action>
                </template>
                <template v-slot:append>
                    <v-menu>
                        <template v-slot:activator="{ props }">
                            <v-btn 
                            color="grey-lighten"
                            icon="mdi-dots-vertical"
                            variant="text" 
                            v-bind="props"
                            v-slot:activator="{ on, attrs }"
                            v-on="on">
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item value="1" @click="taskstore.toggleedit(i)">
                                <v-list-item-title>Edit</v-list-item-title>
                            </v-list-item>
                            <v-list-item value="2" @click="taskstore.toggledelete(i)">
                                <v-list-item-title>Delete</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </template>

            </v-list-item>
        </v-list>
        <Dailogfileds 
        :dialog="taskstore.ShowDailog"
        :task="taskstore.tasks[taskstore.indextaskselected]"
        @toggle="taskstore.updatetask"
         />

         <DeleteDialog
         :dialog="taskstore.Deletedialog"
         @toggledelete="taskstore.toggledelete"
         @deletetask="taskstore.deletetask"
          /> 
    </div>
</template>

<script setup>
/* eslint-disable 
import { ref } from 'vue';

const settingsItems = ref([
    { title: 'Notifications', subtitle: 'Notify me about updates to apps or games that I downloaded' },
    { title: 'Sound', subtitle: 'Auto-update apps at any time. Data charges may apply' },
    { title: 'Auto-add widgets', subtitle: 'Automatically add home screen widgets when downloads complete' },
]);

const settingsSelection = ref([]);

const task = ref({
    title: '',
    subtitle: '',
});

const Addtask = () => {
    settingsItems.value.push({
        title: task.value.title,
        subtitle: task.value.subtitle,
    });
    task.value.title = '';
    task.value.subtitle = '';
};
*/


import { ref} from 'vue';  
import Dailogfileds from './Dailogfileds.vue';
import DeleteDialog from './DeleteDialog.vue';

import { useTaskStore } from '@/stores/task';
const taskstore = useTaskStore();

// const probs = defineProps({
//     settingsItems: Object

// })
// const indextaskselected = ref(0);
// const ShowDailog = ref(false);

// const toggleedit = (index) => {
//     ShowDailog.value = !ShowDailog.value
//     if (index != null)
//         indextaskselected.value = index;
// }

// const Deletedialog = ref(false);
// const toggledelete = (index) => {
//     Deletedialog.value = !Deletedialog.value
//     if (index != null)
//         indextaskselected.value = index;
// }

// const deletetask = () => {
//     taskstore.tasks.splice(indextaskselected.value, 1);
//     taskstore.toggledelete();
// }

</script>

