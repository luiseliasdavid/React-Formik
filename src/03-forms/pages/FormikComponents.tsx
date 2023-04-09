import { Formik, Field, Form, ErrorMessage, } from "formik";
import * as yup from 'yup'

import "../styles/styles.css";


export const FormikComponents = () => {
    

  

  return (
    <div>
      <h1>Formik Components</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          emailAddress: "",
          terms: false,
          jobType:''

        }}
        onSubmit={(values) =>{
          console.log(values)
        }}
        validationSchema={yup.object({
          firstName: yup.string()
                        .max(15,'deber tener maximo 15 caracteres')
                        .required('requerido'),
          lastName: yup.string()
                        .max(10,'deber tener maximo 10 caracteres')
                        .required('requerido'),
         emailAddress: yup.string()
                        .email('El correo electrónico no es válido')
                        .required('El correo electrónico es obligatorio'),
         terms: yup.boolean()
                        .oneOf([true], 'Debe de aceptar las condiciones'),
         jobType: yup.string()
                        .notOneOf(['it-jr'], 'esta opcion no es permitida.')
                        .required('Requerido')      
         
        })}
      >
        {
          (formik) => (
            <Form >
        <label htmlFor="firstName">First Name</label>
        <Field name='firstName' type='text'/>
        <ErrorMessage name='firstName' component='span'/>

        <label htmlFor="lastName">Last Name</label>
        <Field name='lastName' type='text'/>
        <ErrorMessage name='lastName' component='span'/>

        <label htmlFor="emailAddress">Email Address</label>
        <Field name='emailAddress' type='text'/>
        <ErrorMessage name='emailAddress' component='span'/>

        <label htmlFor="jobType">Job Type </label>
        <Field name='jobType' as='select'>
         <option value=''>Pick something</option>    
         <option value='developer'>Developer</option>    
         <option value='designer'>Designer</option>    
         <option value='it-senior'>It Senio</option>    
         <option value='it-jr'>It Jr.</option>    
        </Field>
        <ErrorMessage name='jobType' component='span' />

        <label>
        <Field name='terms' type='checkbox'/>
          Terms and conditions</label>
        <ErrorMessage name='terms' component='span'/>

       

        <button type="submit">Submit</button>
        <button type="button" onClick={formik.handleReset}>
            Reset
          </button>
      </Form>
          )
        }
      </Formik>

      
    </div>
  );
};
