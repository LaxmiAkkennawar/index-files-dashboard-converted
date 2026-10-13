package main

import (
	"encoding/json"

	"net/http"

	"time"

	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{

	CheckOrigin: func(r *http.Request) bool {

		return true

	},
}

func AgentSocket(

	w http.ResponseWriter,

	r *http.Request,

) {

	conn, err := upgrader.Upgrade(

		w,

		r,

		nil,
	)

	if err != nil {

		return

	}

	defer conn.Close()

	for {

		data := AgentData{

			Agent: Agent{

				ID: "agent-001",

				Name: "Proxmox Agent",

				Version: "1.0",

				Node: NodeName,

				Host: "Proxmox Server",

				Status: "Online",

				Heartbeat: time.Now().String(),
			},

			Metrics: GetNodeMetrics(),

			VMs: GetVMs(),

			Logs: []Log{

				{

					ID: 1,

					Time: time.Now().Format("15:04:05"),

					Level: "INFO",

					Message: "Metrics updated",
				},
			},
		}

		jsonData, _ := json.Marshal(data)

		conn.WriteMessage(

			websocket.TextMessage,

			jsonData,
		)

		time.Sleep(

			2 * time.Second,
		)

	}

}
