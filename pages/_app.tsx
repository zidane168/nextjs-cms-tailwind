import React, { FC, useEffect, useTransition } from "react";
import ReactDOM from "react-dom";
import App, { AppProps } from "next/app";
import Head from "next/head";
import Router from "next/router";
import { NextPageContext } from 'next';

import PageChange from "../components/cms1/PageChange/PageChange.js";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/tailwind.css";

// // Router.events.on("routeChangeStart", (url) => {
// //   console.log(`Loading: ${url}`);
// //   //document.body.classList.add("body-page-transition");
// //   // ReactDOM.render(
// //   //   <PageChange path={url} />,
// //   //   document.getElementById("page-transition")
// //   // );
// // });

// // Router.events.on("routeChangeComplete", () => {
// //   ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
// //   document.body.classList.remove("body-page-transition");
// // });
// // Router.events.on("routeChangeError", () => {
// //   ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
// //   document.body.classList.remove("body-page-transition");
// // });

// export default class MyApp extends App {
//   componentDidMount() {
   
//   }

//   static async getInitialProps ({ Component: NextComponentType<NextPageContext, any, any>, router, ctx }) {
//     let pageProps = {};

//     if (Component.getInitialProps) {
//       pageProps = await Component.getInitialProps(ctx);
//     }

//     return { pageProps };
//   }

//   render() {
//     const { Component, pageProps } = this.props;

//     const Layout = Component.layout || (({ children }) => <>{children}</>);

//     return (
//       <React.Fragment>
//         <Head>
//           <meta
//             name="viewport"
//             content="width=device-width, initial-scale=1, shrink-to-fit=no"
//           />
//           <title>CMS NextJS by Zidane</title>
//           {/* <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script> */}
//         </Head>
//         <Layout>
//           <Component {...pageProps} />
//         </Layout>
//       </React.Fragment>
//     );
//   }
// }
 
import '../styles/globals.css' 

export async function getStaticProps( ) {
  // ↓add  
}

function MyApp({ Component, pageProps }: any) {
 
  const Layout = Component.layout || (({ children }) => <>{children}</>);
  // const Layout = Component.layout || <> </>;
  
  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>CMS NextJS by Zidane</title>
  
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  )
}

export default MyApp
