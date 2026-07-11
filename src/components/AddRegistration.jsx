import React from 'react'

const AddRegistration = () => {
  return (
    <div>
        <div className="container mt-4">
                <div className="card shadow">
                    <div className="card-header bg-primary text-white text-center">
                        <h3>Student Registration</h3>
                    </div>

                    <div className="card-body">
                        <div className="row g-3">

                            <div className="col-md-6">
                                <label className="form-label">Registration Number</label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Full Name</label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Aadhar Number</label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Email Address</label>
                                <input type="email" className="form-control" />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Phone Number</label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Branch / Department</label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">SSLC Mark (%)</label>
                                <input type="number" className="form-control" />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Plus Two Mark (%)</label>
                                <input type="number" className="form-control" />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">UG Degree Name</label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">UG Mark (%)</label>
                                <input type="number" className="form-control" />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">PG Degree Name</label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">PG Mark (%)</label>
                                <input type="number" className="form-control" />
                            </div>

                            <div className="col-12 text-center">
                                <button className="btn btn-success">
                                    Submit
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default AddRegistration