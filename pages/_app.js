import '../styles/_variables.css'
import '../styles/globals.css'
import NextProgressBar from 'nextjs-progressbar'
import 'material-icons/iconfont/material-icons.css'
export default function App({ Component, pageProps }) {
  return (<>
    <NextProgressBar
        color='#c04815'
        startPosition={.3}
        stopDelayMs={200}
        height={3}
    />
    <Component {...pageProps} />
</>)}
