import { FormEvent} from "react";
import { useForms } from '../hooks/useForms';
import "../styles/styles.css";

export const RegisterPage = () => {
 
   const {name,email,password1,password2, formData,onChange, resetForm}= useForms({
    name: "",
    email: "",
    password1: "",
    password2: "",
  })
   

  const onSubmit = (event:FormEvent<HTMLFormElement>) => {
   event.preventDefault()
   console.log(formData)
  }

  return (
    <div>
      <h1>Register page</h1>

      <form 
       noValidate
       onSubmit={onSubmit}
       >
        <input
          name="name"
          type="text"
          placeholder="name"
          value={name}
          onChange={onChange}
        />
        <input
          name="email"
          type="email"
          placeholder="email"
          value={email}
          onChange={onChange}
        />
        <input
          name="password1"
          type="password"
          placeholder="password"
          value={password1}
          onChange={onChange}
        />
        <input
          name="password2"
          type="password"
          placeholder="Repeat password"
          value={password2}
          onChange={onChange}
        />

        <button 
         type="submit">Create</button>
         <button
         type="button"
         onClick={resetForm}
         >Reset</button>
      </form>
    </div>
  );
};
