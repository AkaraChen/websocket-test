import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
    state: () => {
        return {
            isConnect: false,
            table: [] as message[]
        }
    },
    actions: {
        addData(data: message) {
            this.table.push(data)
        }
    }
})

export type message = { message: string, time: string, sender: 'client' | 'user' }