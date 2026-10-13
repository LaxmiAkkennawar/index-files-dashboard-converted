import React from "react";
import { VirtualMachine } from "../../types/agent";


interface Props {

    vms: VirtualMachine[];

}



const AgentTable: React.FC<Props> = ({
    vms
}) => {


    return (

        <div className="card shadow mt-4">


            <div className="card-header">

                <h5>
                    Virtual Machines
                </h5>

            </div>



            <div className="card-body">


                <table className="table table-bordered">


                    <thead>

                        <tr>

                            <th>
                                VM ID
                            </th>

                            <th>
                                Name
                            </th>

                            <th>
                                Status
                            </th>

                            <th>
                                CPU
                            </th>


                            <th>
                                Memory
                            </th>


                            <th>
                                Disk
                            </th>


                        </tr>

                    </thead>



                    <tbody>


                        {
                            vms.map(vm => (

                                <tr key={vm.vmid}>


                                    <td>
                                        {vm.vmid}
                                    </td>


                                    <td>
                                        {vm.name}
                                    </td>


                                    <td>

                                        <span
                                            className={
                                                vm.status === "running"
                                                    ?
                                                    "badge bg-success"
                                                    :
                                                    "badge bg-danger"
                                            }
                                        >

                                            {vm.status}

                                        </span>


                                    </td>


                                    <td>
                                        {vm.cpu}%
                                    </td>


                                    <td>
                                        {vm.memory}%
                                    </td>


                                    <td>
                                        {vm.disk}%
                                    </td>



                                </tr>


                            ))
                        }


                    </tbody>


                </table>


            </div>


        </div>

    );


};


export default AgentTable;