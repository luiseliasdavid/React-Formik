import { ChangeEvent, useState } from 'react'


export const useForms = <T>(inicialData:T) => {

    const [formData, setFormData] = useState(inicialData);
    
     
    
      const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => {
          return {
            ...prev,
            [event.target.name]: event.target.value,
          };
        });
      };
     
     const resetForm = () => {
        setFormData( {...inicialData} )
     }
    

  return ({
     //propertie
     formData,
     ...formData,

    //methods
    onChange,
    resetForm

  })
}
