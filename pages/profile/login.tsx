import s from './logIn/LogIn.module.css'
import {IUsers} from "@/types/users";
import {FC, useEffect, useState} from "react";
import Layout from "@/common/footer/Layout";
import Meta from "../../components/utills/Meta";

interface ILogin{
    users: IUsers[]
    setLogIn
}

const Login:FC<ILogin> = ({users,setLogIn}) =>{
    const [name, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const findUser = () => {
        const check = users.find(user => user.login === name && user.password === password)
        if(check){
            setLogIn(check.id)
        }else{
            setError('User not found')
        }
    }
    useEffect(() => setError(''),[name, password])
    return(
        <Layout>
            <Meta title='Log in' description='Log in'/>
        <div className={s.formLogIn}>
            <input
                type="text"
                placeholder='name'
                value={name}
                onChange={(e)=>setLogin(e.target.value)}
                />
            <input
                type="text"
                placeholder='password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
            <button
                onClick={findUser}
            >Log in</button>
            {error}
        </div>
        </Layout>
)
}
export default Login


