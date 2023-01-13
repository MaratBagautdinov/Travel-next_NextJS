import s from './LogIn.module.css'
import {FC} from "react";
import ButtonTypeForm from "./ButtonTypeForm";

const AuthPage:FC<{register, handleSubmit, onSubmit, typeForm, setTypeForm}> = ({register, handleSubmit, onSubmit,typeForm, setTypeForm}) => {
    return(<>
            <ButtonTypeForm
                typeForm={typeForm}
                setTypeForm={setTypeForm}
            />
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
    </>)
}
export default AuthPage


