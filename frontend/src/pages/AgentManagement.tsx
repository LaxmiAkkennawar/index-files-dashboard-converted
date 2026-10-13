import React,
{
    useEffect,
    useState
}
    from "react";


import {
    AgentData
}
    from "../types/agent";


import {
    connectAgent
}
    from "../services/agentService";


import AgentMetrics
    from "../components/agent/AgentMetrics";


import AgentStatus
    from "../components/agent/AgentStatus";


import AgentCommands
    from "../components/agent/AgentCommands";


import AgentLogs
    from "../components/agent/AgentLogs";


import AgentTable
    from "../components/agent/AgentTable";




const AgentManagement = () => {


    const [data, setData] = useState<AgentData | null>(null);



    useEffect(() => {


        const socket =
            connectAgent((liveData) => {

                setData(liveData);

            });



        return () => {

            socket.close();

        };


    }, []);




    const sendCommand = (cmd: string) => {


        console.log(
            "Command:",
            cmd
        );


        // later connect with Go API


    };





    if (!data)

        return (

            <div className="container mt-5">

                <h3>
                    Connecting Agent...
                </h3>

            </div>

        );




    return (

        <div className="container-fluid p-4">


            <h2 className="mb-4">

                Proxmox Agent Management

            </h2>



            <AgentMetrics

                metrics={
                    data.metrics
                }

            />



            <AgentStatus

                agent={
                    data.agent
                }

            />




            <AgentCommands

                onCommand={
                    sendCommand
                }

            />



            <AgentTable

                vms={
                    data.vms
                }

            />




            <AgentLogs

                logs={
                    data.logs
                }

            />



        </div>

    );


};


export default AgentManagement;