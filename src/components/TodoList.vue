<template>
    <div>
        <v-text-field clearable label="Add Tasks" :rules="rules" @keyup.enter="taskstore.Addtask"
            v-model="taskstore.titletaskcreating"></v-text-field>

        <ListTasks />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';
import { useTaskStore } from '@/stores/task';
import ListTasks from './ListTasks.vue';

const taskstore = useTaskStore();

const rules = [
    value => {
        if (!value || value.length>=5) return true

        return 'You must enter at least 5 characters'
    },
]

// const settingsItems = ref([
//     { title: 'Notifications', subtitle: 'Notify me about updates to apps or games that I downloaded' },
//     { title: 'Sound', subtitle: 'Auto-update apps at any time. Data charges may apply' },
//     { title: 'Auto-add widgets', subtitle: 'Automatically add home screen widgets when downloads complete' },
// ]);

// const settingsSelection = ref([]);

// const task = ref({
//     title: '',
//     subtitle: '',
// });

// const Addtask = () => {
//     taskstore.value.push({
//         title: taskstore.titletaskcreating,
//     });
//     taskstore.titletaskcreating = '';
// };

// get tasks from local storage
onMounted(() => {
    taskstore.getTasks();
});

</script>
