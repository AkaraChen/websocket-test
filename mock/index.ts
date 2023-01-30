import { WebSocketServer } from 'ws'

const wss = new WebSocketServer({ port: 8080 })

wss.on('connection', (ws) => {
    ws.send('Open')
    let count = 0
    setInterval(() => {
        ws.send(`Count: ${++count}`)
    }, 1000)
    ws.on('message', (data) => {
        ws.send(data.toString())
    })
})

console.log(`Listen at ws://localhost:8080`)