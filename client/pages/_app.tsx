import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../containers/Layout/Layout";
import {RecoilRoot} from "recoil";
import UserProvider from "../Providers/UserProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return <RecoilRoot>
      <UserProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </UserProvider>
  </RecoilRoot>
}

export default MyApp
