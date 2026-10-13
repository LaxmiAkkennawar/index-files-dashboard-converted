import React from "react";
import { AgentLog } from "../../types/agent";


interface Props {

    logs: AgentLog[];

}



const AgentLogs: React.FC<Props> = ({
    logs
}) => {


    return (

        <div className="card shadow mt-4">


            <div className="card-header">

                <h5>
                    Live Agent Logs
                </h5>

            </div>


            <div className="card-body">


                <div
                    style={{
                        height: "250px",
                        overflowY: "auto"
                    }}
                >


                    <table className="table table-sm">


                        <thead>

                            <tr>

                                <th>
                                    Time
                                </th>

                                <th>
                                    Level
                                </th>

                                <th>
                                    Message
                                </th>


                            </tr>

                        </thead>



                        <tbody>


                            {
                                logs.map(log => (

                                    <tr key={log.id}>

                                        <td>
                                            {log.time}
                                        </td>


                                        <td>

                                            <span className="badge bg-info">

                                                {log.level}

                                            </span>


                                        </td>


                                        <td>
                                            {log.message}
                                        </td>


                                    </tr>


                                ))
                            }


                        </tbody>


                    </table>


                </div>


            </div>


        </div>

    );


};


export default AgentLogs;