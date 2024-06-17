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
import CountryDetailsForm from "./CountryDetailsForm";

const CountryDetails = () => {
  const [showForm, setShowForm] = useState(false);
  const [countries, setCountries] = useState([]);
  const [editCountry, setEditCountry] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [countryToDelete, setCountryToDelete] = useState(null);
  const database = getDatabase();

  // Fetch countries data from Firebase
  const fetchCountries = () => {
    const countriesRef = ref(database, "countries");
    onValue(countriesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const countryList = Object.keys(data).map((key, index) => ({
          id: index + 1,
          key,
          ...data[key],
        }));
        setCountries(countryList);
      }
    });
  };

  // Fetch countries data on component mount
  useEffect(() => {
    fetchCountries();
  }, []);

  // Show the country form
  const handleShowForm = () => setShowForm(true);

  // Close the country form
  const handleCloseForm = () => {
    setShowForm(false);
    setEditCountry(null);
  };

  // Add a new country to the database
  const handleAddCountry = (newCountry) => {
    const countriesRef = ref(database, "countries");
    const newCountryRef = push(countriesRef);
    const newCountryKey = newCountryRef.key;
    update(ref(database, `countries/${newCountryKey}`), newCountry)
      .then(() => {
        fetchCountries();
        handleCloseForm();
      })
      .catch((error) => {
        console.error("Error adding data: ", error);
      });
  };

  // Edit an existing country
  const handleEditCountry = (country) => {
    setEditCountry(country);
    setShowForm(true);
  };

  // Update an existing country in the database
  const handleUpdateCountry = (updatedCountry) => {
    const countryRef = ref(database, "countries/" + updatedCountry.key);
    update(countryRef, updatedCountry)
      .then(() => {
        fetchCountries();
        handleCloseForm();
      })
      .catch((error) => {
        console.error("Error updating data: ", error);
      });
  };

  // Delete a country
  const handleDeleteCountry = (country) => {
    setCountryToDelete(country);
    setShowDeleteConfirm(true);
  };

  // Confirm deletion of a country
  const confirmDeleteCountry = () => {
    remove(ref(database, "countries/" + countryToDelete.key))
      .then(() => {
        setShowDeleteConfirm(false);
        setCountryToDelete(null);
        fetchCountries();
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
                      {/* Render the country form */}
                      {showForm && (
                        <CountryDetailsForm
                          handleClose={handleCloseForm}
                          handleAddCountry={
                            editCountry ? handleUpdateCountry : handleAddCountry
                          }
                          country={editCountry}
                          countries={countries}
                        />
                      )}
                    </div>
                    <hr />
                    {/* Render the countries table */}
                    <table className="table">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Name</th>
                          <th>Code</th>
                          <th>Currency</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {countries.map((country) => (
                          <tr key={country.key}>
                            <td>{country.id}</td>
                            <td>{country.name}</td>
                            <td>{country.code}</td>
                            <td>{country.currency}</td>
                            <td>
                              <button
                                className="btn btn-sm btn-outline-primary mr-2"
                                onClick={() => handleEditCountry(country)}
                              >
                                Edit
                              </button>
                              <button
                                className="btn btn-sm btn-outline-danger"
                                onClick={() => handleDeleteCountry(country)}
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
      {/* Show delete confirmation modal */}
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
                  Are you sure you want to delete the country "
                  {countryToDelete?.name}"?
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
                  onClick={confirmDeleteCountry}
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

export default CountryDetails;
