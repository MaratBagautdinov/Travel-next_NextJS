import {FC, useEffect, useState} from "react";
import Layout from "@/common/footer/Layout";
import Meta from "@meta";

import {SubmitHandler, useForm} from "react-hook-form"
import {signUp} from "next-auth-sanity/client";
import {signIn} from "next-auth/react";
import {toast} from "react-toastify";
import {useRouter} from "next/router";
import AuthPage from "@screens/auth/AuthPage";

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
            (response.email) ?
                await toast.success('Done! You are registered!')
                :
                toast.error(`Error! Try again`)
        }
    }
    return(
        <Layout>
            <Meta title='Log in' description='Log in'/>
            <AuthPage
                setTypeForm={setTypeForm}
                typeForm={typeForm}
                register={register}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
            />
        </Layout>
)
}
export default Auth


