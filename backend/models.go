package main

type Metrics struct {
	CPU float64 `json:"cpu"`

	Memory float64 `json:"memory"`

	Disk float64 `json:"disk"`

	NetworkRx float64 `json:"networkRx"`

	NetworkTx float64 `json:"networkTx"`

	Uptime int64 `json:"uptime"`
}

type Agent struct {
	ID string `json:"id"`

	Name string `json:"name"`

	Version string `json:"version"`

	Node string `json:"node"`

	Host string `json:"host"`

	Status string `json:"status"`

	Heartbeat string `json:"heartbeat"`
}

type VM struct {
	VMID int `json:"vmid"`

	Name string `json:"name"`

	Status string `json:"status"`

	CPU float64 `json:"cpu"`

	Memory float64 `json:"memory"`

	Disk float64 `json:"disk"`
}

type Log struct {
	ID int `json:"id"`

	Time string `json:"time"`

	Level string `json:"level"`

	Message string `json:"message"`
}

type AgentData struct {
	Agent Agent `json:"agent"`

	Metrics Metrics `json:"metrics"`

	VMs []VM `json:"vms"`

	Logs []Log `json:"logs"`
}
