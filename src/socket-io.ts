import { Server, Socket } from 'socket.io';

let io: Server | undefined;

const initSocketSingleton = () => {
    if (!io) {
        io = new Server({
            cors: {
                origin: '*',
            },
        });

        io.on('connection', (socket: Socket) => {
            // console.log(`Client connected: ${socket.id}`);
            console.log("🟢 A user connected:", socket.id);

            socket.emit('welcome', 'ยินดีต้อนรับสู่ Dashboard'); // ส่งไปยัง client

            socket.on("message", (msg) => {
            console.log("📩 Message received:", msg);
            socket.broadcast.emit("message", msg);
            });


            socket.on('disconnect', () => {
                // console.log(`Client disconnected: ${socket.id}`);
                console.log("🔴 A user disconnected:", socket.id);
            });
        });

    }
    return io!;
}

declare const globalThis: {
    ioGlobal: ReturnType<typeof initSocketSingleton>;
} & typeof global;

io = globalThis.ioGlobal ?? initSocketSingleton()

export default io;

if (process.env.NODE_ENV !== 'production') globalThis.ioGlobal = io
