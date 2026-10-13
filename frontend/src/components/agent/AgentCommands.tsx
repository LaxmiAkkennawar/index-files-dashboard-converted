import React from "react";


interface Props {

    onCommand: (cmd: string) => void;

}


const AgentCommands: React.FC<Props> = ({
    onCommand
}) => {


    return (

        <div className="card shadow mt-4">

            <div className="card-header">

                <h5>
                    Agent Commands
                </h5>

            </div>


            <div className="card-body">


                <button
                    className="btn btn-success me-2"
                    onClick={() => onCommand("start")}
                >
                    Start
                </button>


                <button
                    className="btn btn-danger me-2"
                    onClick={() => onCommand("stop")}
                >
                    Stop
                </button>



                <button
                    className="btn btn-warning me-2"
                    onClick={() => onCommand("restart")}
                >
                    Restart
                </button>



                <button
                    className="btn btn-primary"
                    onClick={() => onCommand("refresh")}
                >
                    Refresh
                </button>



            </div>

        </div>

    );


};


export default AgentCommands;