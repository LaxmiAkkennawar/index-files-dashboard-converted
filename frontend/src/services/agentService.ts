import { AgentData } from "../types/agent";


const WS_URL = "ws://localhost:8080/ws";


export function connectAgent(
    callback: (data: AgentData) => void
) {

    const socket = new WebSocket(WS_URL);


    socket.onopen = () => {

        console.log(
            "Agent WebSocket Connected"
        );

    };


    socket.onmessage = (event) => {

        const data: AgentData =
            JSON.parse(event.data);


        callback(data);

    };


    socket.onerror = (error) => {

        console.log(
            "WebSocket Error",
            error
        );

    };


    socket.onclose = () => {

        console.log(
            "Agent disconnected. Reconnecting..."
        );


        setTimeout(() => {

            connectAgent(callback);

        }, 3000);

    };


    return socket;

}