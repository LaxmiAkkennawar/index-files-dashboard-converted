package main

import (
	"crypto/tls"

	"encoding/json"

	"io"

	"net/http"
)

func proxmoxRequest(endpoint string) []byte {

	client := &http.Client{

		Transport: &http.Transport{

			TLSClientConfig: &tls.Config{

				InsecureSkipVerify: true,
			},
		},
	}

	req, _ := http.NewRequest(

		"GET",

		ProxmoxURL+endpoint,

		nil,
	)

	req.SetBasicAuth(
		Username,
		Password,
	)

	res, err := client.Do(req)

	if err != nil {

		return nil

	}

	defer res.Body.Close()

	body, _ := io.ReadAll(res.Body)

	return body

}

func GetNodeMetrics() Metrics {

	body := proxmoxRequest(

		"/nodes/" + NodeName + "/status",
	)

	var response struct {
		Data struct {
			CPU float64 `json:"cpu"`

			Memory float64 `json:"mem"`

			MaxMemory float64 `json:"maxmem"`

			Disk float64 `json:"disk"`

			MaxDisk float64 `json:"maxdisk"`

			Uptime int64 `json:"uptime"`
		} `json:"data"`
	}

	json.Unmarshal(body, &response)

	return Metrics{

		CPU: response.Data.CPU * 100,

		Memory: (response.Data.Memory /
			response.Data.MaxMemory) * 100,

		Disk: (response.Data.Disk /
			response.Data.MaxDisk) * 100,

		Uptime: response.Data.Uptime,
	}

}

func GetVMs() []VM {

	body := proxmoxRequest(

		"/nodes/" + NodeName + "/qemu",
	)

	var result struct {
		Data []struct {
			VMID int `json:"vmid"`

			Name string `json:"name"`

			Status string `json:"status"`

			CPU float64 `json:"cpu"`

			Memory float64 `json:"mem"`

			MaxMemory float64 `json:"maxmem"`
		} `json:"data"`
	}

	json.Unmarshal(body, &result)

	vms := []VM{}

	for _, vm := range result.Data {

		vms = append(vms, VM{

			VMID: vm.VMID,

			Name: vm.Name,

			Status: vm.Status,

			CPU: vm.CPU * 100,

			Memory: (vm.Memory / vm.MaxMemory) * 100,
		})

	}

	return vms

}
