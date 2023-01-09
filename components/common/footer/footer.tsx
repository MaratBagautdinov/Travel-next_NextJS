import s from './footer.module.css'
import {useRouter} from "next/router";
import login from "../../../pages/api/loginUser";

type typeItems = {
    link: string
    icon: string
}
const items:typeItems[] = [
    {
        link: '/',
        icon: 'home'
    },
    {
        link: '/explore',
        icon: 'explore'
    },
    {
        link: '/place/moscow',
        icon: 'place'
    },
    {
        link: `/profile/${(login.toString() === '-1') ? 'login' : login}`,
        icon: 'person'
    },
]
const Footer = () => {
    const {push, pathname} = useRouter();
    return (
        <footer className={s.footer}>
            <nav>
                {items.map(item =>(
                <button
                    className={pathname === item.link ? s.active : ''}
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