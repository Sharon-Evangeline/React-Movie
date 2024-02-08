import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import{useFormik} from "formik";
import * as yup from "yup";
import { Link } from 'react-router-dom';

export default function Login() {

    const loginValidationSchema=yup.object({
        email:yup.string().required(),
        password:yup.string().required(),

    })
    const formik = useFormik({
        initialValues: {
            email:"",
            password:"",
            
        },

        validationSchema: loginValidationSchema,
       
        onSubmit: (values)=>{
            console.log( values);
        },
       
        
    })

  return (
    
    <div>
    <form className="addForm" onSubmit={formik.handleSubmit}/>
    <h1>Login Page</h1>
         <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={formik.values.email}
            onChange={formik.handleChange}
            name="email"
            onBlur={formik.handleBlur}
            error={formik.touched.email && formik.errors.email}
            helperText={formik.touched.email && formik.errors.email ? formik.errors.email : null}
            />

    <form className="addForm" onSubmit={formik.handleSubmit}/>
            <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            value={formik.values.password}
            onChange={formik.handleChange}
            name="password"
            onBlur={formik.handleBlur}
            error={formik.touched.password && formik.errors.password}
            helperText={formik.touched.password && formik.errors.password ? formik.errors.password : null}
            /> 

             <form className="addForm" onSubmit={formik.handleSubmit}/>

            <Button variant ="contained" type="submit">SUBMIT</Button>
            <h4>Don't have an account ? Sign up here!<Link to="/register"> Register</Link></h4>
            

 
    </div>
  )
}
