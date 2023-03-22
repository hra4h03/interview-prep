import { AppProps } from 'next/app';
import Head from 'next/head';
import "../styles/bootstrap.min.css";
import "../styles/animate.min.css";
import "../styles/boxicons.min.css";
import "../styles/meanmenu.min.css";
import "../styles/flaticon.css";
import "../styles/style.css";
import "../styles/responsive.css";
import Navbar from '../app/navbar/navbar';
import { Provider } from 'react-redux';
import { store, wrapper } from '../app/store/store';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>Interview prep!</title>
      </Head>
      <main className="app">
        <Navbar user={undefined}></Navbar>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}

// export default CustomApp;
export default wrapper.withRedux(CustomApp);
