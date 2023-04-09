import { Formik, Form } from "formik";
import * as yup from 'yup'

import "../styles/styles.css";
import { MyTextInput } from "../components/myTextInput";
import { MySelect } from "../components/MySelect";
import { MyCheckbox } from "../components/MyCheckBox";

export const FormikAbstration = () => {
    

  

  return (
    <div>
      <h1>Formik Abstractation</h1>

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
        <MyTextInput
         label='firstName'
          name='firstName'
          placeholder="your first name"
          />
        <MyTextInput
         label='lastName'
          name='lastName'
          placeholder="your last name"
          />
        <MyTextInput
         label='emailAddress'
          name='emailAddress'
          placeholder="your email"
          type="email"
          />
       
       <MySelect MySelect label='job Type' name='jobType'>
         <option value=''>Pick something</option>    
         <option value='developer'>Developer</option>    
         <option value='designer'>Designer</option>    
         <option value='it-senior'>It Senio</option>    
         <option value='it-jr'>It Jr.</option>    
        </MySelect>
        
        <MyCheckbox label="Termns & Conditions" name="terms" />

        <button type="submit">Submit</button>
      </Form>
          )
        }
      </Formik>

      
    </div>
  );
};
