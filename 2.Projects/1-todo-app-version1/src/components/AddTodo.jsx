import React from "react";

function AddTODO() {
  return (
    <>
      <div className="container">
        <div className="row kg-row">
          <div className="col-6">
            <input type="text" placeholder="Enter ToDo Here" />
          </div>
          <div className="col-4">
            <input type="date" />
          </div>
          <div className="col-2 kg-align">
            <button className="btn btn-success kg-button">Add </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTODO;
