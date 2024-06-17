import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ref, update, get } from "firebase/database";
import { database } from "./utils/firebase";

const StateDetailsForm = ({ handleClose, handleAddState, state }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    if (state) {
      setValue("name", state.name);
      setValue("country", state.country);
      setValue("capital", state.capital);
    }
  }, [state, setValue]);

  useEffect(() => {
    const fetchCountries = async () => {
      const countriesRef = ref(database, "countries");
      const snapshot = await get(countriesRef);
      if (snapshot.exists()) {
        const countriesList = [];
        snapshot.forEach((childSnapshot) => {
          countriesList.push(childSnapshot.val());
        });
        setCountries(countriesList);
      } else {
        console.log("No countries available");
      }
    };

    fetchCountries();
  }, []);

  const onSubmit = (data) => {
    if (state) {
      // If editing an existing state
      const stateRef = ref(database, "states/" + state.key);
      update(stateRef, data)
        .then(() => {
          console.log("Data updated successfully");
          handleClose();
        })
        .catch((error) => {
          console.error("Error updating data: ", error);
        });
    } else {
      // If adding a new state
      handleAddState(data);
    }
  };

  return (
    <div>
      <form className="form-horizontal" onSubmit={handleSubmit(onSubmit)}>
        <div className="card-body">
          <h4>State Details</h4>

          <div className="form-group row">
            <label htmlFor="fname">State Name</label>
            <input
              className="form-control"
              type="text"
              id="fname"
              placeholder="State Name"
              {...register("name", { required: "State Name is required" })}
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
              {...register("country", { required: "Country Name is required" })}
            >
              <option value="">Select a Country</option>
              {countries.map((country, index) => (
                <option key={index} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
            {errors.country && (
              <span className="text-danger">{errors.country.message}</span>
            )}
          </div>

          {/* <div className="form-group row">
            <label htmlFor="capital">Capital</label>
            <input
              className="form-control"
              type="text"
              id="capital"
              placeholder="Capital"
              {...register("capital", { required: "Capital is required" })}
            />
            {errors.capital && (
              <span className="text-danger">{errors.capital.message}</span>
            )}
          </div> */}
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

export default StateDetailsForm;
