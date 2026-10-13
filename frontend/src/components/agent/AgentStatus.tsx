import React from "react";
import { AgentInfo } from "../../types/agent";


interface Props {

    agent: AgentInfo;

}


const AgentStatus: React.FC<Props> = ({
    agent
}) => {


    return (

        <div className="card shadow mt-4">


            <div className="card-header">

                <h5>
                    Agent Information
                </h5>

            </div>



            <div className="card-body">


                <table className="table">


                    <tbody>

                        <tr>
                            <td>Name</td>
                            <td>{agent.name}</td>
                        </tr>


                        <tr>
                            <td>Version</td>
                            <td>{agent.version}</td>
                        </tr>


                        <tr>
                            <td>Node</td>
                            <td>{agent.node}</td>
                        </tr>


                        <tr>
                            <td>Host</td>
                            <td>{agent.host}</td>
                        </tr>


                        <tr>

                            <td>Status</td>

                            <td>

                                <span
                                    className={
                                        agent.status === "Online"
                                            ?
                                            "badge bg-success"
                                            :
                                            "badge bg-danger"
                                    }
                                >

                                    {agent.status}

                                </span>


                            </td>

                        </tr>


                        <tr>

                            <td>
                                Heartbeat
                            </td>

                            <td>
                                {agent.heartbeat}
                            </td>

                        </tr>


                    </tbody>


                </table>


            </div>


        </div>

    );


};


export default AgentStatus;