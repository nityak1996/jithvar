import React, { useState, useEffect } from "react";
import {
  getDatabase,
  ref,
  onValue,
  remove,
  update,
  push,
} from "firebase/database";
import Headers from "./Headers";
import LeftSide from "./LeftSide";
import Preloader from "./Preloader";
import SideBar from "./SideBar";
import StateDetailsForm from "./StateDetailsForm";

const StateDetails = () => {
  const [showForm, setShowForm] = useState(false);
  const [states, setStates] = useState([]);
  const [editState, setEditState] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [stateToDelete, setStateToDelete] = useState(null);
  const database = getDatabase();

  const fetchStates = () => {
    const statesRef = ref(database, "states");
    onValue(statesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const stateList = Object.keys(data).map((key, index) => ({
          id: index + 1,
          key,
          ...data[key],
        }));
        setStates(stateList);
      }
    });
  };

  useEffect(() => {
    fetchStates();
  }, []);

  const handleShowForm = () => setShowForm(true);
  const handleCloseForm = () => {
    setShowForm(false);
    setEditState(null);
  };

  const handleAddState = (newState) => {
    const statesRef = ref(database, "states");
    const newStateRef = push(statesRef);
    update(newStateRef, newState)
      .then(() => {
        fetchStates();
        handleCloseForm();
      })
      .catch((error) => {
        console.error("Error adding data: ", error);
      });
  };

  const handleEditState = (state) => {
    setEditState(state);
    setShowForm(true);
  };

  const handleUpdateState = (updatedState) => {
    const stateRef = ref(database, "states/" + updatedState.key);
    update(stateRef, updatedState)
      .then(() => {
        fetchStates();
        handleCloseForm();
      })
      .catch((error) => {
        console.error("Error updating data: ", error);
      });
  };

  const handleDeleteState = (state) => {
    setStateToDelete(state);
    setShowDeleteConfirm(true);
  };

  const confirmDeleteState = () => {
    remove(ref(database, "states/" + stateToDelete.key))
      .then(() => {
        setShowDeleteConfirm(false);
        setStateToDelete(null);
        fetchStates();
      })
      .catch((error) => {
        console.error("Error deleting data: ", error);
      });
  };

  return (
    <>
      <div id="main-wrapper">
        <div>
          <Preloader />
          <div>
            <Headers />
            <LeftSide />
            <div className="page-wrapper">
              <div className="page-breadcrumb">
                <div className="card">
                  <span className="ml-auto">
                    <button
                      className="mr-5 mt-3 btn btn-outline-dark"
                      onClick={handleShowForm}
                    >
                      Add
                    </button>
                  </span>
                  <div>
                    <div>
                      {showForm && (
                        <StateDetailsForm
                          handleClose={handleCloseForm}
                          handleAddState={
                            editState ? handleUpdateState : handleAddState
                          }
                          state={editState}
                        />
                      )}
                    </div>
                    <hr />
                    <table className="table">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Name</th>
                          <th>Country</th>
                          {/* <th>Capital</th> */}
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {states.map((state) => (
                          <tr key={state.key}>
                            <td>{state.id}</td>
                            <td>{state.name}</td>
                            <td>{state.country}</td>
                            {/* <td>{state.capital}</td> */}
                            <td>
                              <button
                                className="btn btn-sm btn-outline-primary mr-2"
                                onClick={() => handleEditState(state)}
                              >
                                Edit
                              </button>
                              <button
                                className="btn btn-sm btn-outline-danger"
                                onClick={() => handleDeleteState(state)}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <SideBar />
          </div>
        </div>
      </div>
      {showDeleteConfirm && (
        <div
          className="modal"
          style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Deletion</h5>
                <button
                  type="button"
                  className="close"
                  onClick={() => setShowDeleteConfirm(false)}
                >
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>
                  Are you sure you want to delete the state "
                  {stateToDelete?.name}"?
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowDeleteConfirm(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={confirmDeleteState}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default StateDetails;
