import s from './LogIn.module.css'
import {IUsers} from "@/types/users";
import {FC, useEffect, useState} from "react";
import Layout from "@/common/footer/Layout";
import Meta from "@meta";
import Input from "@/common/Input/Input";
import Button from "@/common/Button/Button";
import {GetStaticProps} from "next";
import {sanityClient} from "@api/sanity/sanity";
import {getUsers} from "@api/sanity/queries";

interface ILogin{
    users: IUsers[]
    setLogIn
}

const Login:FC<ILogin> = ({users,setLogIn}) =>{
    const [name, setLogin] = useState('')
    const [REGorLOG, setREGorLOG] = useState(true)
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    console.log(users)
    const findUser = () => {
        const check = users.find(user => user.login === name && user.password === password)
        if(check){
            setLogIn(check._id)
        }else{
            setError('User not found')
        }
    }
    return(
        <Layout>
            <Meta title='Log in' description='Log in'/>
            <div className={s.formLogIn}>
                <Input
                    icon={'account_circle'}
                    placeholder='login'
                    value={name}
                    setValue={setLogin}
                />
                <Input
                    icon={'key'}
                    placeholder='password'
                    value={password}
                    setValue={setPassword}
                />
                <div>
                    {REGorLOG ?
                        <Button
                            key={'auth'}
                            icon={'toggle_off'}
                            title={'Auth'}
                            onClick={()=>setREGorLOG(!REGorLOG)}
                        />
                    :
                        <Button
                            key={'register'}
                            icon={'toggle_off'}
                            title={'Register'}
                            onClick={()=>setREGorLOG(!REGorLOG)}
                        />
                    }
                    <Button
                        key={'login'}
                        icon={'login'}
                        title={'Log in'}
                        onClick={findUser}
                    />
                </div>
                {error}
            </div>
        </Layout>
)
}
export const getStaticProps: GetStaticProps =
    async () => {
        const users = await sanityClient.fetch(getUsers)
        return { props: { users } }
}
export default Login


