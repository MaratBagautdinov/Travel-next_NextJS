import '../styles/_variables.css'
import '../styles/globals.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NextProgressBar from 'nextjs-progressbar'
import 'material-icons/iconfont/material-icons.css'
import {SessionProvider} from "next-auth/react";
export default function App({ Component, pageProps: {session, ...pageProps} }) {
  return (<>
    <NextProgressBar
        color='#c04815'
        startPosition={.3}
        stopDelayMs={200}
        height={3}
    />
    <SessionProvider session={session}>
      <Component {...pageProps} />
      <ToastContainer theme={'dark'}/>
    </SessionProvider>
</>)}
