import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import '../styles/globals.css';
import AuthUserProvider from '../components/auth/AuthUserProvider';
import { ChakraProvider } from "@chakra-ui/react"
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <ChakraProvider>
                <AuthUserProvider>
                    <Component {...pageProps} />
                </AuthUserProvider>
            </ChakraProvider>
        </Layout>
      );
}

export default MyApp;

