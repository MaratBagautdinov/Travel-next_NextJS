import s from './LogIn.module.css'
import {FC, useEffect, useState} from "react";
import Layout from "@/common/footer/Layout";
import Meta from "@meta";
import Button from "@/common/Button/Button";

import {SubmitHandler, useForm} from "react-hook-form"
import {signUp} from "next-auth-sanity/client";
import {signIn} from "next-auth/react";
import {toast} from "react-toastify";
import {useRouter} from "next/router";

interface IAuth{
    email:string,
    password:string
}

const Auth:FC = () =>{
    const [typeForm, setTypeForm] = useState(true)

    const {
        handleSubmit,
        register,
        formState: {errors}
    } = useForm<IAuth>({
        mode: 'onChange'
    })


    useEffect(()=>{
        if(errors.email) toast.error(`${errors.email.message}`)
    }, [errors.email])
    useEffect(()=>{
        if(errors.password) toast.error(`${errors.password.message}`)
    }, [errors.password])


    const {push} = useRouter()
    const onSubmit:SubmitHandler<IAuth> = async (data) =>{
        if(typeForm) {
            const enter = await signIn('sanity-login',{
                redirect: false,
                ...data
            });
            (enter.ok) ?
                toast.success('Done! You are log in!') &&
                await push('/')
                :
                toast.error(`${
                    enter.error === `Cannot destructure property '_id' of '(intermediate value)' as it is null.` 
                        ? 'User not found' : 'Password invalid'}`
                )
        }else{
            const response = await signUp(data);
            (response.email) ? toast.success('Done! You are registered!') : toast.error(`Error! Try again`)
        }
    }

    return(
        <Layout>
            <Meta title='Log in' description='Log in'/>
            <div className={s.typeForm}>
            {typeForm ?
                <Button
                    key={'register'}
                    icon={'toggle_off'}
                    title={'I want register'}
                    onClick={()=>setTypeForm(!typeForm)}
                />
                :
                <Button
                    key={'auth'}
                    icon={'toggle_off'}
                    title={'I want auth'}
                    onClick={()=>setTypeForm(!typeForm)}
                />
            }
            </div>
            <form className={s.formLogIn} onSubmit={handleSubmit(onSubmit)}>
                <div className={s.search}>
                    <span className='material-icons-outlined'>account_circle</span>
                    <input
                        type="text"
                        key='Login'
                        placeholder='Login'
                        {...register('email', {required: "Login is invalid!"})}
                    />
                </div>
                <div className={s.search}>
                    <span className='material-icons-outlined'>key</span>
                    <input
                        type="text"
                        key='Password'
                        placeholder='Password'
                        {...register('password', {required: "Password is invalid!"})}
                    />
                </div>
                <button className={s.Button} type='submit'>
                    {typeForm ? 'Log in' : 'Registration'}
                    <span className="material-icons-outlined">
                        {typeForm ?  'login' : 'person_add'}
                    </span>
                </button>
            </form>
        </Layout>
)
}
export default Auth


