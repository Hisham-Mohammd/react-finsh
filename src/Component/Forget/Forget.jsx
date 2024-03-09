
import style from './Forget.module.css'
import { useFormik } from 'formik';
import * as yup from 'yup'
import axios from 'axios';
import { PacmanLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react'



export default function Forget() {

    const [loading, setLoading] = useState(false);
    const [apiarr, setApiarr] = useState(null);
    let navegate = useNavigate()

    async function ForgetSupmit(values) {

        setLoading(true)
        let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, values)
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


        email: yup.string().required('email is required').email('invaild  email'),
       

    })


    let formik = useFormik({
        initialValues: {


            email: '',
           


        }, validationSchema,
        onSubmit: ForgetSupmit
    })
    return <>
        <div className=' w-75 mx-auto py-3 mt-5'>

            <h2>Forgit passowrd</h2>
            <form onSubmit={formik.handleSubmit} className=' mt-10'>





                <label htmlFor="email">Email:</label>
                <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="email" id='email' name='email' className=' form-control mb-3' />
                {formik.errors.email && formik.touched.email ? <div className="alert alert-danger py-2">{formik.errors.email} </div> : null}




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
