import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'

const API_URL= "https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/placement.json"

const RegistrationView = () => {
    const [data,changeData] = useState([])
    const fetchData = () => {
        axios.get(API_URL)
        .then(
            (respone) => {
                changeData(respone.data)
            }
    )
    .catch((error) => {
        console.log(error)
    }
)
    } 

    useEffect(() => {
        fetchData()
    },[])
  return (
    <div>
        <NavigationBar/>
         <div className="container mt-4">

                <div className="card shadow">

                    <div className="card-header bg-primary text-white text-center">
                        <h3>View All Registrations</h3>
                    </div>

                    <div className="card-body">

                        <div className="table-responsive">

                            <table className="table table-bordered table-striped table-hover">

                                <thead className="table-dark">

                                    <tr>
                                        <th>Registration No</th>
                                        <th>Full Name</th>
                                        <th>Branch</th>
                                        <th>SSLC (%)</th>
                                        <th>Plus Two (%)</th>
                                        <th>UG (%)</th>
                                        <th>PG (%)</th>
                                    </tr>

                                </thead>

                                <tbody>
                                    {data.map(
                                        (value,index) => {
                                            return(
                                                <tr key={index}>
                                            <td>{value.regNo}</td>
                                            <td>{value.fullName}</td>
                                            <td>{value.branch}</td>
                                            <td>{value.sslcMark}</td>
                                            <td>{value.plusTwoMark}</td>
                                            <td>{value.ugMark}</td>
                                            <td>{value.pgMark}</td>
                                        </tr>
                                            )
                                        }
                                    )}
                                

                                </tbody>

                            </table>

                        </div>

                    </div>

                </div>

            </div>

    </div>
  )
}

export default RegistrationView