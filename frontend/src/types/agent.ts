export interface AgentMetrics {
    cpu: number;
    memory: number;
    disk: number;
    networkRx: number;
    networkTx: number;
    uptime: number;
}


export interface AgentInfo {
    id: string;
    name: string;
    version: string;
    node: string;
    host: string;
    status: "Online" | "Offline";
    heartbeat: string;
}


export interface VirtualMachine {
    vmid: number;
    name: string;
    status: string;
    cpu: number;
    memory: number;
    disk: number;
}


export interface AgentLog {
    id: number;
    time: string;
    level: string;
    message: string;
}


export interface AgentData {

    agent: AgentInfo;

    metrics: AgentMetrics;

    vms: VirtualMachine[];

    logs: AgentLog[];

}