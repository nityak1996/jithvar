import React, { useState, useEffect } from "react";
import {
  getDatabase,
  ref,
  onValue,
  remove,
  set,
  push,
} from "firebase/database";
import Headers from "./Headers";
import LeftSide from "./LeftSide";
import Preloader from "./Preloader";
import SideBar from "./SideBar";

import CityDetailsForm from "./CityDetailForm";

const CityDetails = () => {
  const [showForm, setShowForm] = useState(false);
  const [cities, setCities] = useState([]);
  const [editCity, setEditCity] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [cityToDelete, setCityToDelete] = useState(null);
  const database = getDatabase();

  const fetchCities = () => {
    const citiesRef = ref(database, "cities");
    onValue(citiesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const cityList = Object.keys(data).map((key, index) => ({
          id: index + 1,
          key,
          ...data[key],
        }));
        setCities(cityList);
      }
    });
  };

  useEffect(() => {
    fetchCities();
  }, []);

  const handleShowForm = () => setShowForm(true);
  const handleCloseForm = () => {
    setShowForm(false);
    setEditCity(null);
  };

  const handleAddCity = (newCity) => {
    const citiesRef = ref(database, "cities");
    const newCityRef = push(citiesRef);
    set(newCityRef, newCity)
      .then(() => {
        fetchCities();
        handleCloseForm();
      })
      .catch((error) => {
        console.error("Error adding data: ", error);
      });
  };

  const handleEditCity = (city) => {
    setEditCity(city);
    setShowForm(true);
  };

  const handleUpdateCity = (updatedCity) => {
    const cityRef = ref(database, "cities/" + updatedCity.key);
    set(cityRef, updatedCity)
      .then(() => {
        fetchCities();
        handleCloseForm();
      })
      .catch((error) => {
        console.error("Error updating data: ", error);
      });
  };

  const handleDeleteCity = (city) => {
    setCityToDelete(city);
    setShowDeleteConfirm(true);
  };

  const confirmDeleteCity = () => {
    remove(ref(database, "cities/" + cityToDelete.key))
      .then(() => {
        setShowDeleteConfirm(false);
        setCityToDelete(null);
        fetchCities();
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
                        <CityDetailsForm
                          handleClose={handleCloseForm}
                          handleAddCity={
                            editCity ? handleUpdateCity : handleAddCity
                          }
                          city={editCity}
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
                          <th>State</th> 
                          {/* <th>Capital</th> */}
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cities.map((city) => (
                          <tr key={city.key}>
                            <td>{city.id}</td>
                            <td>{city.name}</td>
                            <td>{city.country}</td>
                            <td>{city.state}</td> 
                            {/* <td>{city.capital}</td> */}
                            <td>
                              <button
                                className="btn btn-sm btn-outline-primary mr-2"
                                onClick={() => handleEditCity(city)}
                              >
                                Edit
                              </button>
                              <button
                                className="btn btn-sm btn-outline-danger"
                                onClick={() => handleDeleteCity(city)}
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
                  Are you sure you want to delete the city "{cityToDelete?.name}
                  "?
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
                  onClick={confirmDeleteCity}
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

export default CityDetails;
