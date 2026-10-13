package main

import (
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/ws", AgentSocket)

	log.Println("Server running on http://localhost:8080")
	log.Fatal(http.ListenAndServe(ServerPort, nil))
}
