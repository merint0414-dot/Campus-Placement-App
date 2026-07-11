import React from 'react'

const SearchRegistration = () => {
  return (
    <div>
        <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col col-12 co-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="card shadow">
                            <div className="card-header bg-primary text-white text-center">
                                <h3>Search Registration</h3>
                            </div>

                            <div className="card-body">

                                <label className="form-label">
                                    Registration Number
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Registration Number"
                                />

                                <br />

                                <button className="btn btn-primary">
                                    Search
                                </button>

                            </div>

                        </div>

                    </div>
                </div>
            </div>

    </div>
  )
}

export default SearchRegistration