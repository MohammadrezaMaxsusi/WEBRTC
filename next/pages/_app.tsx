import "../styles/globals.scss";
import type { AppProps } from "next/app";

// import 'rc-slider/assets/index.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      
    </>
  );
}

// export default wrapper.withRedux(App);
export default App;
