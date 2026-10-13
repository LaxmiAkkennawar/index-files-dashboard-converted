import React from "react";
import { AgentMetrics as Metrics } from "../../types/agent";


interface Props {

    metrics: Metrics;

}


const AgentMetrics: React.FC<Props> = ({
    metrics
}) => {


    return (

        <div className="row g-3">


            <div className="col-md-3">

                <div className="card shadow">

                    <div className="card-body">

                        <h6>CPU Usage</h6>

                        <h2>
                            {metrics.cpu.toFixed(1)}%
                        </h2>

                        <div className="progress">

                            <div
                                className="progress-bar"
                                style={{
                                    width: `${metrics.cpu}%`
                                }}
                            >

                            </div>

                        </div>

                    </div>

                </div>

            </div>




            <div className="col-md-3">

                <div className="card shadow">

                    <div className="card-body">

                        <h6>Memory</h6>

                        <h2>
                            {metrics.memory.toFixed(1)}%
                        </h2>

                        <div className="progress">

                            <div
                                className="progress-bar bg-success"
                                style={{
                                    width: `${metrics.memory}%`
                                }}
                            >

                            </div>

                        </div>


                    </div>

                </div>

            </div>




            <div className="col-md-3">

                <div className="card shadow">

                    <div className="card-body">

                        <h6>Disk</h6>

                        <h2>
                            {metrics.disk.toFixed(1)}%
                        </h2>


                        <div className="progress">

                            <div
                                className="progress-bar bg-warning"
                                style={{
                                    width: `${metrics.disk}%`
                                }}
                            >

                            </div>

                        </div>

                    </div>

                </div>

            </div>




            <div className="col-md-3">

                <div className="card shadow">

                    <div className="card-body">

                        <h6>Network</h6>


                        <p>
                            RX :
                            {metrics.networkRx} MB/s
                        </p>


                        <p>
                            TX :
                            {metrics.networkTx} MB/s
                        </p>


                    </div>

                </div>

            </div>


        </div>

    );


};


export default AgentMetrics;