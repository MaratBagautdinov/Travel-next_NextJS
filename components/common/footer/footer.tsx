import s from './footer.module.css'
import {useRouter} from "next/router";
import {signOut, useSession} from "next-auth/react";
import {toast} from "react-toastify";

type typeItems = {
    link: string
    icon: string
    out?: boolean
}
const LogOut:typeItems[] = [
    {
        link: '/',
        icon: 'travel_explore'
    },
    {
        link: '/auth',
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
        link: `/auth`,
        icon: 'logout',
        out: true
    },
]
const Footer = () => {
    const {push, pathname} = useRouter();
    const {data} = useSession()
    console.log(data)
    const Log = !(data) ? LogOut : LogIn
    const out = async () => {
        await push('/');
        await signOut();
    }
    return (
        <footer className={s.footer}>
            <nav>
                {Log.map(item =>(
                <button
                    className={pathname === `${item.link}` ? s.active : ''}
                    key={item.link}
                    onClick={() => (item.out) ? out() : push(item.link)}>
                  <span className='material-icons-outlined'>{item.icon}</span>
                </button>
                ))}
            </nav>
        </footer>
    )
}
export default Footer