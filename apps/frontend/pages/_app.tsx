import { AppProps } from 'next/app';
import Head from 'next/head';
// import './styles.scss';
import "../styles/bootstrap.min.css";
import "../styles/animate.min.css";
import "../styles/boxicons.min.css";
import "../styles/meanmenu.min.css";
import "../styles/flaticon.css";
// import "../node_modules/react-modal-video/css/modal-video.min.css";
// import "react-accessible-accordion/dist/fancy-example.css";
// import "react-tabs/style/react-tabs.css";
// import "react-image-lightbox/style.css";
// import "swiper/css/bundle";
import "../styles/style.css";
import "../styles/responsive.css";

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to frontend!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
