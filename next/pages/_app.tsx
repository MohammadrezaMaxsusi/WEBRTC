import "../styles/globals.scss";
import type { AppProps } from "next/app";
import wrapper from "../store/store";
import {RawIntlProvider, createIntl, createIntlCache} from "react-intl";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const cache = createIntlCache()

const intl = createIntl({
  locale: 'fr-FR',
  messages: {}
}, cache)

function App({ Component, pageProps }: AppProps) {
  return (
    <RawIntlProvider value={intl}>
      <Component {...pageProps} />
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </RawIntlProvider>
  );
}

export default wrapper.withRedux(App);