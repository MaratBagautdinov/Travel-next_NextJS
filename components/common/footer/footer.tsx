import s from './footer.module.css'
import {useRouter} from "next/router";
import loginUser from "@api/loginUser";

type typeItems = {
    link: string
    icon: string
}
const LogOut:typeItems[] = [
    {
        link: '/',
        icon: 'travel_explore'
    },
    {
        link: '/login',
        icon: 'login'
    },
]
const LogIn:typeItems[] = [
    {
        link: '/',
        icon: 'travel_explore'
    },
    {
        link: '/favorites',
        icon: 'favorite'
    },
    {
        link: `/login`,
        icon: 'logout'
    },
]
// @ts-ignore
const Log = !(loginUser) ? LogOut : LogIn
const Footer = () => {
    const {push, pathname} = useRouter();
    return (
        <footer className={s.footer}>
            <nav>
                {Log.map(item =>(
                <button
                    className={pathname === `${item.link}` ? s.active : ''}
                    key={item.link}
                    onClick={() => push(item.link.toLowerCase())}>
                  <span className='material-icons-outlined'>{item.icon}</span>
                </button>
                ))}
            </nav>
        </footer>
    )
}
export default Footer