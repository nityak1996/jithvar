import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ref, update } from "firebase/database";
import { database } from "./utils/firebase";

const CountryDetailsForm = ({ handleClose, handleAddCountry, country }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (country) {
      setValue("name", country.name);
      setValue("code", country.code);
      setValue("currency", country.currency);
    }
  }, [country, setValue]);

  const onSubmit = (data) => {
    if (country) {
      // If editing an existing country
      const countryRef = ref(database, "countries/" + country.key);
      update(countryRef, data)
        .then(() => {
          console.log("Data updated successfully");
          handleClose();
        })
        .catch((error) => {
          console.error("Error updating data: ", error);
        });
    } else {
      // If adding a new country
      handleAddCountry(data);
    }
  };

  return (
    <div>
      <form className="form-horizontal" onSubmit={handleSubmit(onSubmit)}>
        <div className="card-body">
          <h4>Country Details</h4>

          <div className="form-group row">
            <label htmlFor="fname">Name</label>
            <input
              className="form-control"
              type="text"
              id="fname"
              placeholder="Country Name"
              {...register("name", { required: "Country Name is required" })}
            />
            {errors.name && (
              <span className="text-danger">{errors.name.message}</span>
            )}
          </div>

          <div className="form-group row">
            <label htmlFor="code">Code</label>
            <input
              className="form-control"
              type="text"
              id="code"
              placeholder="Country Code"
              {...register("code", { required: "Country Code is required" })}
            />
            {errors.code && (
              <span className="text-danger">{errors.code.message}</span>
            )}
          </div>

          <div className="form-group row">
            <label htmlFor="currency">Currency</label>
            <input
              className="form-control"
              type="text"
              id="currency"
              placeholder="Currency"
              {...register("currency", { required: "Currency is required" })}
            />
            {errors.currency && (
              <span className="text-danger">{errors.currency.message}</span>
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

export default CountryDetailsForm;
