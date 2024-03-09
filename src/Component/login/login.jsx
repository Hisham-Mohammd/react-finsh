import React , {useContext, useState} from 'react'
import style from './login.module.css'
import { useFormik } from 'formik';
import * as yup from 'yup'
import axios from 'axios';
import { PacmanLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext.js';




export default function Login() {
    const [loading, setLoading] = useState(false);
    const [apiarr, setApiarr] = useState(null);
    let navegate = useNavigate()
let {setUserToken}=useContext(UserContext)
    async function LoginSupmit(values) {

        setLoading(true)
        let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, values)
            .catch((err) => {
                setApiarr(err.response.data.message)
           
                setLoading(false)

            })


        if (data.message == 'success') {
            setLoading(false)
            localStorage.setItem('UserToken', data.token)
          setUserToken(data.token)
            navegate('/Home')

        }

    }
    let validationSchema = yup.object({

        
        email: yup.string().required('email is required').email('invaild  email'),
        password: yup.string().required('passowrd is required').matches(/^[A-Z][\w @]{4,10}$/, 'invalid passowrd'),
        
    })


    let formik = useFormik({
        initialValues: {

           
            email: '',
            password: '',
            

        }, validationSchema,
        onSubmit: LoginSupmit
    })


    
return <>
     <div className=' w-75 mx-auto py-3 mt-5'>

<h2>Login</h2>
<form onSubmit={formik.handleSubmit} className=' mt-10'>

    

    

    <label htmlFor="email">Email:</label>
    <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="email" id='email' name='email' className=' form-control mb-3' />
    {formik.errors.email && formik.touched.email ? <div className="alert alert-danger py-2">{formik.errors.email} </div> : null}

    <label htmlFor="password">password:</label>
    <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" id='password' name='password' className=' form-control mb-3' />
    {formik.errors.password && formik.touched.password ? <div className="alert alert-danger py-2">{formik.errors.password} </div> : null}

    
    
    {loading ? <button type=' submit ' className=' border-0 bg-white  '>
        <PacmanLoader
            color="#e16c4d"
            cssOverride={{}}
            loading
            margin={-1}
            size={15}
            speedMultiplier={4}
        />
    </button> : <button disabled={!(formik.isValid && formik.dirty)} type=' submit ' className=' btn  bg-danger text-light '>reguster</button>
    }







</form>
</div>
    </>

}
