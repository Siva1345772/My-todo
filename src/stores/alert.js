// Utilities
import { defineStore } from 'pinia'

export const useAlartStore = defineStore('alert', {
  state: () => ({
    showAlert: false,
    type:'error',
    text:'tast' 
  }),

  actions:{
    notifyalert(){
        this.showAlert = true
        setTimeout(()=>{
            this.showAlert = false
        },1000)
    },
    notifyedalertcreated(){
        this.text = 'Task Created'
        this.type = 'success'
        this.notifyalert()
    },
    notifyedalertdeleted(){
        this.text = 'Task Deleted'
        this.type = 'warning'
        this.notifyalert()
    },
    notifyedalertupdated(){
        this.text = 'Task Updated'
        this.type = 'info'
        this.notifyalert()
    }

}
})
