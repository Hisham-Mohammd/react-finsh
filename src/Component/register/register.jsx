import React, { useState } from 'react'
import style from './register.module.css'
import { useFormik } from 'formik';
import * as yup from 'yup'
import axios from 'axios';
import { PacmanLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';



export default function Register() {
    const [loading, setLoading] = useState(false);
    const [apiarr, setApiarr] = useState(null);
    let navegate = useNavigate()

    async function registerSupmit(values) {

        setLoading(true)
        let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, values)
            .catch((err) => {
                setApiarr(err.response.data.message)
                setLoading(false)

            })


        if (data.message == 'success') {
            setLoading(false)
            navegate('/login')
        }

    }
    let validationSchema = yup.object({

        name: yup.string().required('name is required').min(3, 'main is lenght 3').max(9, 'max is lenght 10'),
        email: yup.string().required('email is required').email('invaild  email'),
        password: yup.string().required('passowrd is required').matches(/^[A-Z][\w @]{4,10}$/, 'invalid passowrd'),
        rePassword: yup.string().required('repasowwrd is required').oneOf([yup.ref('password')], 'pasowrd  an repassowrd dont match'),
        phone: yup.string().required('phone is required').matches(/^01[0125][0-9]{8}$/, 'we need phone egyption numper')
    })


    let formik = useFormik({
        initialValues: {

            name: '',
            email: '',
            password: '',
            rePassword: '',
            phone: ''

        }, validationSchema,
        onSubmit: registerSupmit
    })
    return <>







        <div className=' w-75 mx-auto py-3 container   mt-5'>

            <h2>register</h2>
            <form onSubmit={formik.handleSubmit} className=' mt-5 '>

                {apiarr ? <div className='alert alert-danger py-2 '>{apiarr}</div> : ''}

                <label htmlFor="name">Name:</label>
                <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" id='name' name='name' className=' form-control mb-3' />
                {formik.errors.name && formik.touched.name ? <div className="alert alert-danger py-2">{formik.errors.name} </div> : null}

                <label htmlFor="email">Email:</label>
                <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="email" id='email' name='email' className=' form-control mb-3' />
                {formik.errors.email && formik.touched.email ? <div className="alert alert-danger py-2">{formik.errors.email} </div> : null}

                <label htmlFor="password">password:</label>
                <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" id='password' name='password' className=' form-control mb-3' />
                {formik.errors.password && formik.touched.password ? <div className="alert alert-danger py-2">{formik.errors.password} </div> : null}

                <label htmlFor="rePassword">rePassword:</label>
                <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" id='rePassword' name='rePassword' className=' form-control mb-3' />
                {formik.errors.rePassword && formik.touched.rePassword ? <div className="alert alert-danger py-2">{formik.errors.rePassword} </div> : null}

                <label htmlFor="phone">phone:</label>
                <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="tel" id='phone' name='phone' className=' form-control mb-3' />
                {formik.errors.phone && formik.touched.phone ? <div className='alert alert-danger py-2'>{formik.errors.phone}</div> : null}

                {loading ? <button type=' submit ' className=' border-0 bg-white '>
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
