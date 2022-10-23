import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { registerUser } from "../../services/auth-services";

import "./LoginScreen.css";

function LoginScreen() {
  const navigation = useNavigate();
  const value = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({ mode: "onTouched" });

  const handleRegister = (data) => {
    registerUser(data)
      .then((data) => {
        value.setUser(data);
        navigation("/login");
      })
      .catch((error) => {
        if (error.response?.data?.errors) {
          const { errors } = error.response.data;
          console.log(errors);
          Object.keys(error.response.data.errors).forEach((error) => {
            setError(error, { message: errors[error].message });
          });
        }
      });
  };
  return (
    <>
      {/* <form onSubmit={handleSubmit(handleRegister)}>
        <div className="input-group mb-1">
          <span className="input-group-text">
            <i className="fa fa-user fa-fw"></i>
          </span>
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            placeholder="Email..."
            {...register("email", {
              required: "Email is required",
            })}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email.message}</div>
          )}
        </div>


        <div className="input-group mb-1">
          <span className="input-group-text">
            <i className="fa fa-key fa-fw"></i>
          </span>
          <input
            type="password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            placeholder="Password..."
            {...register("password", {
              required: "Password is required",
            })}
          />
          {errors.password && (
            <div className="invalid-feedback">{errors.password.message}</div>
          )}
        </div>


        <div className="d-grid mt-2">
          <button className="btn btn-primary" type="submit" disabled={!isValid}>
            Login
          </button>
        </div>
      </form> */}

      {/* NEW FORM  */}
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-8 col-sm-12 col-xs-12 m-auto pt-3">
            <div className="tab-login my-5 ">
              <div className="tab-content tabs">
                <div className="d-flex">
                  <Link to="/login" type="button">
                    <h3 className="fw-light m-2 text-muted">Login</h3>
                  </Link>
                  <h3 className="fw-light m-2">Register</h3>
                </div>
                <hr />

  

                <form
                  onSubmit={handleSubmit(handleRegister)}
                  className="form-horizontal"
                >
                  <div className=" form-group mb-1">
                    <label htmlFor="name">username</label>
                    <input
                      type="name"
                      className={`form-control ${
                        errors.name ? "is-invalid" : ""
                      }`}
                      placeholder="Almu"
                      {...register("name", {
                        required: "Name is required",
                      })}
                    />
                    {errors.name && (
                      <div className="invalid-feedback">
                        {errors.name.message}
                      </div>
                    )}
                  </div>

                  <div className=" form-group mb-1">
                    <label htmlFor="email">email</label>
                    <input
                      type="email"
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      placeholder="patata@gmail.com"
                      {...register("email", {
                        required: "Email is required",
                      })}
                    />
                    {errors.email && (
                      <div className="invalid-feedback">
                        {errors.email.message}
                      </div>
                    )}
                  </div>
                  {/* // */}

                  <div className=" form-group mb-1">
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      className={`form-control ${
                        errors.password ? "is-invalid" : ""
                      }`}
                      placeholder="Password..."
                      {...register("password", {
                        required: "Password is required",
                      })}
                    />
                    {errors.password && (
                      <div className="invalid-feedback">
                        {errors.password.message}
                      </div>
                    )}
                  </div>

                  <div className="d-grid mb-4 ">
                    <button
                      className="btn btn-primary btn-outline-primary"
                      type="submit"
                      disabled={!isValid}
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginScreen;
