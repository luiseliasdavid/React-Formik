import { useFormik } from "formik";
import { FormikErrors } from "formik/dist/types";

import "../styles/styles.css";

interface FormValues {
    firstName: string;
    lastName: string;
    emailAddress: string;
}

export const FromikBasicPage = () => {
    
    const validate = ({firstName,lastName,emailAddress}:FormValues) => {
      const errors: FormikErrors<FormValues>= {}

      if (!firstName) {
        errors.firstName= 'required';
      } else if (firstName.length > 15){
        errors.firstName = 'must be 15 characters or less'   
      }
      if (!lastName) {
        errors.lastName= 'required';
      } else if (lastName.length > 10){
        errors.lastName = 'must be 10 characters or less'   
      }
      if (!emailAddress) {
        errors.emailAddress = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailAddress)) {
        errors.emailAddress = 'Invalid email address';
      }

      return errors
  }

  const { handleChange, values, handleSubmit, errors, touched, handleBlur } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      emailAddress: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate
  });

  return (
    <div>
      <h1>Formik Basic Tutorial</h1>

      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.firstName}
        />
        { touched.firstName && errors.firstName && <span>{errors.firstName }</span>}

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.lastName}
        />
        {touched.lastName && errors.lastName && <span> {errors.lastName} </span>}

        <label htmlFor="emailAddress">Email Address</label>
        <input
          type="emailAddress"
          name="emailAddress"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.emailAddress}
        />
        { touched.emailAddress && errors.emailAddress && <span> {errors.emailAddress} </span>}
       

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
