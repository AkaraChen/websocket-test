import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
    state: () => {
        return {
            isConnect: false,
            table: [] as message[],
            count: 0
        }
    },
    actions: {
        addData({ message, time, sender }: input) {
            this.table.push({
                id: this.count++,
                message,
                time,
                sender
            })
        },
        remove(id: number) {
            this.table = this.table.filter(item => item.id != id)
        }
    }
})

type input = { message: string, time: string, sender: 'client' | 'user' }
export type message = { id: number, message: string, time: string, sender: 'client' | 'user' }