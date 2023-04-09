import { useFormik } from "formik";
import * as yup from 'yup'

import "../styles/styles.css";


export const FormikYupPage = () => {
    

  const {  handleSubmit, errors, touched,  getFieldProps } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      emailAddress: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: yup.object({
      firstName: yup.string()
                    .max(15,'deber tener maximo 15 caracteres')
                    .required('requerido'),
      lastName: yup.string()
                    .max(10,'deber tener maximo 10 caracteres')
                    .required('requerido'),
     emailAddress: yup.string()
                    .email('El correo electrónico no es válido')
                    .required('El correo electrónico es obligatorio')
    })
  });

  return (
    <div>
      <h1>Formik Yup Tutorial</h1>

      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" {...getFieldProps('firstName')}/>
        { touched.firstName && errors.firstName && <span>{errors.firstName }</span>}

        <label htmlFor="lastName">Last Name</label>
        <input type="text" {...getFieldProps('lastName')} />
        {touched.lastName && errors.lastName && <span> {errors.lastName} </span>}

        <label htmlFor="emailAddress">Email Address</label>
        <input type="email" {...getFieldProps('emailAddress')} />
        { touched.emailAddress && errors.emailAddress && <span> {errors.emailAddress} </span>}
       

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
