// stores/counter.js
import { defineStore } from 'pinia'
import { useAlartStore } from './alert';
const alertStore = useAlartStore();

export const useTaskStore = defineStore('task', {
    state: () => ({
        tasks: [],
        titletaskcreating: '',
        Deletedialog: false,
        ShowDailog: false,
        indextaskselected: 0

    }),
    actions: {
        Addtask(){
            if (this.titletaskcreating.length<5)
                return;
            this.tasks.push({
                title: this.titletaskcreating,
                done: false
            });
            this.titletaskcreating = '';
            this.saveLocalData();
            //create notify
            alertStore.notifyedalertcreated();
        },
        toggledelete(index){
            this.Deletedialog = !this.Deletedialog
            if (index != null)
                this.indextaskselected = index;
            this.saveLocalData();
            
        },
        deletetask(){
            this.tasks.splice(this.indextaskselected, 1);
            this.toggledelete();
            //delete notify
            alertStore.notifyedalertdeleted();
        },
        updatetask(){
            this.saveLocalData();
            this.toggleedit();
            //update notify
            alertStore.notifyedalertupdated();
        },
        toggleedit(index){
            this.ShowDailog = !this.ShowDailog
            if (index != null)
                this.indextaskselected = index;
            this.saveLocalData();
        },
        saveLocalData(){
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        },
        getTasks() {
            const tasks = localStorage.getItem('tasks');
            if (tasks) {
                this.tasks = JSON.parse(tasks);
            }
        },
        toggleDonetask(index){
            this.tasks[index].done = !this.tasks[index].done;
            this.saveLocalData();
        }

    }

})

