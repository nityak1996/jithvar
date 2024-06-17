import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ref, update, get } from "firebase/database";
import { database } from "./utils/firebase";

const CityDetailsForm = ({ handleClose, handleAddCity, city }) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [filteredStates, setFilteredStates] = useState([]);
  const selectedCountry = watch("country");
  const selectedState = watch("state");

  useEffect(() => {
    if (city) {
      setValue("name", city.name);
      setValue("state", city.state);
      setValue("country", city.country);
    }
  }, [city, setValue]);

  useEffect(() => {
    const fetchCountries = async () => {
      const countriesRef = ref(database, "countries");
      const snapshot = await get(countriesRef);
      if (snapshot.exists()) {
        const countriesList = [];
        snapshot.forEach((childSnapshot) => {
          countriesList.push({
            key: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });
        setCountries(countriesList);
      } else {
        console.log("No countries available");
      }
    };

    const fetchStates = async () => {
      const statesRef = ref(database, "states");
      const snapshot = await get(statesRef);
      if (snapshot.exists()) {
        const statesList = [];
        snapshot.forEach((childSnapshot) => {
          statesList.push({ key: childSnapshot.key, ...childSnapshot.val() });
        });
        setStates(statesList);
      } else {
        console.log("No states available");
      }
    };

    fetchCountries();
    fetchStates();
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      const filtered = states.filter((state) => state.country === selectedCountry);
      setFilteredStates(filtered);
    } else {
      setFilteredStates([]);
    }
  }, [selectedCountry, states]);

  useEffect(() => {
    if (selectedState) {
      const selected = states.find((s) => s.name === selectedState);
      if (selected) {
        setValue("country", selected.country);
      }
    }
  }, [selectedState, states, setValue]);

  const onSubmit = (data) => {
    if (city) {
      const cityRef = ref(database, "cities/" + city.key);
      update(cityRef, data)
        .then(() => {
          console.log("Data updated successfully");
          handleClose();
        })
        .catch((error) => {
          console.error("Error updating data: ", error);
        });
    } else {
      handleAddCity(data);
    }
  };

  return (
    <div>
      <form className="form-horizontal" onSubmit={handleSubmit(onSubmit)}>
        <div className="card-body">
          <h4>City Details</h4>

          <div className="form-group row">
            <label htmlFor="name">Name</label>
            <input
              className="form-control"
              type="text"
              id="name"
              placeholder="City Name"
              {...register("name", { required: "City Name is required" })}
            />
            {errors.name && (
              <span className="text-danger">{errors.name.message}</span>
            )}
          </div>

          <div className="form-group row">
            <label htmlFor="country">Country</label>
            <select
              className="form-control"
              id="country"
              {...register("country", { required: "Country is required" })}
            >
              <option value="">Select a country</option>
              {countries.map((country) => (
                <option key={country.key} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
            {errors.country && (
              <span className="text-danger">{errors.country.message}</span>
            )}
          </div>

          <div className="form-group row">
            <label htmlFor="state">State</label>
            <select
              className="form-control"
              id="state"
              {...register("state", { required: "State is required" })}
            >
              <option value="">Select a state</option>
              {filteredStates.map((state) => (
                <option key={state.key} value={state.name}>
                  {state.name}
                </option>
              ))}
            </select>
            {errors.state && (
              <span className="text-danger">{errors.state.message}</span>
            )}
          </div>
        </div>

        <div className="form-footer">
          <button
            className="btn btn-outline-primary mx-2"
            type="button"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button className="btn btn-outline-success" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default CityDetailsForm;
