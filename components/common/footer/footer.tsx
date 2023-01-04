import s from './footer.module.css'
import {useRouter} from "next/router";

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
        link: '/place/Kyoto',
        icon: 'place'
    },
    {
        link: '/profile',
        icon: 'person'
    },
]
const Footer = () => {
    const {push, pathname} = useRouter();
  return <footer className={s.footer}>
    <nav>
        {items.map(item =>(
        <button className={pathname === item.link ? s.active : ''} key={item.link} onClick={() => push(item.link)}>
          <span className='material-icons-outlined'>{item.icon}</span>
        </button>
        ))}
    </nav>
  </footer>
}
export default Footer