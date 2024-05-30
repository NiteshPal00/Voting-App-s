import React from "react";
import { Formik } from "formik";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUpComp = () => {
  const nav = useNavigate();
  return (
    <Container fluid className="h-screen bg-black">
      <Row className="flex justify-center h-screen  items-center">
        <Col className="h-auto flex justify-center w-fit items-center bg-black text-center">
          <div>
            <h1 className="text-white mb-5 "> SignUp_Form !</h1>
            <Formik
              initialValues={{
                userName: "",
                userEmail: "",
                userPassword: "",
                userContact: "",
              }}
              validate={(values) => {
                const errors = {};
                if (!values.userName) {
                  errors.userName = "Required";
                }
                if (!values.userContact) {
                  errors.userContact = "Required";
                }
                if (!values.userEmail) {
                  errors.userEmail = "Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                    values.userEmail
                  )
                ) {
                  errors.userEmail = "Invalid email address";
                }
                if (!values.userPassword) {
                  errors.userPassword = "Required";
                }
                return errors;
              }}
              onSubmit={async (values, { setSubmitting }) => {
                try {
                  const response = await axios.post(
                    "http://localhost:8001/signUp",
                    values
                  );
                  console.log(response.data.data);
                  toast.success(response.data.message, {
                    position: "top-center",
                  });
                  setSubmitting(false);
                  nav(`/`);
                } catch (error) {
                  if (
                    error.response &&
                    error.response.data &&
                    error.response.data.message
                  ) {
                    toast.error(error.response.data.message, {
                      position: "top-center",
                    });
                  } else {
                    toast.error("An error occurred", {
                      position: "top-center",
                    });
                  }
                  setSubmitting(false);
                }
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className="pt-2">
                    <input
                      type="text"
                      name="userName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.userName}
                      className="px-5 py-2 text-center font-semibold"
                      placeholder="Enter your name..."
                    />
                    <h6 className="text-red-600 text-start mt-2">
                      {errors.userName && touched.userName && errors.userName}
                    </h6>
                  </div>
                  <div className="pt-2">
                    <input
                      type="email"
                      name="userEmail"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.userEmail}
                      className="px-5 py-2 text-center font-semibold"
                      placeholder="Enter your email..."
                    />
                    <h6 className="text-red-600 text-start mt-2">
                      {errors.userEmail &&
                        touched.userEmail &&
                        errors.userEmail}
                    </h6>
                  </div>
                  <div className="pt-2">
                    <input
                      type="password"
                      name="userPassword"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.userPassword}
                      className="px-5 py-2 text-center font-semibold"
                      placeholder="Enter your password..."
                    />
                    <h6 className="text-red-600 mt-2 text-start">
                      {errors.userPassword &&
                        touched.userPassword &&
                        errors.userPassword}
                    </h6>
                  </div>
                  <div className="pt-2">
                    <input
                      type="number"
                      name="userContact"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.userContact}
                      className="px-5 py-2 text-center font-semibold"
                      placeholder="Enter your contact..."
                    />
                    <h6 className="text-red-600 text-start mt-2">
                      {errors.userContact &&
                        touched.userContact &&
                        errors.userContact}
                    </h6>
                  </div>
                  <div className="flex justify-center gap-5 mt-4">
                    <button
                      className="px-4 py-2 border-2 bg-yellow-400 hover:bg-yellow-500 rounded-lg font-bold"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      SignIn
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpComp;
