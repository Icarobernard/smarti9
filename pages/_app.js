
import { ModalContextProvider } from '~/src/components/ModalAcceptCookies/context/ModalContext';

function MyApp({ Component, pageProps }) {
  return (
    <ModalContextProvider>
      <Component {...pageProps} />
    </ModalContextProvider>
  )
}

export default MyApp
