import { useFormik } from "formik";

import "../styles/styles.css";

export const FromikBasicPage = () => {
  const {handleChange, values, handleSubmit} = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      emailAddress: "",
      },
    onSubmit : (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <h1>Formik Basic Tutorial</h1>

      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input 
        type="text" 
        name="firstName" 
        onChange={handleChange} 
        value={values.firstName}
        />
        <span>First Name is required</span>

        <label htmlFor="lastName">Last Name</label>
        <input 
        type="text" 
        name="lastName" 
        onChange={handleChange}
        value={values.lastName}
        />
        <span>Last Name is required</span>

        <label htmlFor="emailAddress">Email Address</label>
        <input 
        type="emailAddress" 
        name="emailAddress" 
        onChange={handleChange}
        value={values.emailAddress}
        />
        <span>Email Address is required</span>
        <span>Check for a valid email format</span>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
