import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import{useFormik} from "formik";
import * as yup from "yup";
import { Link } from 'react-router-dom';

export default function Register() {

    const loginValidationSchema=yup.object({
        username:yup.string().required(),
        email:yup.string().required(),
        password:yup.string().required(),

    })
    const formik = useFormik({
        initialValues: {
            username:"",    
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
        <h1>Register Page</h1>
         <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            value={formik.values.username}
            onChange={formik.handleChange}
            name="username"
            onBlur={formik.handleBlur}
            error={formik.touched.username && formik.errors.username}
            helperText={formik.touched.username && formik.errors.username ? formik.errors.username : null}
            />
            <form className="addForm" onSubmit={formik.handleSubmit}/>
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
            <h4>Do have an account ? Sign up here!<Link to="/"> Login</Link></h4>
            

 
    </div>
  )
}
