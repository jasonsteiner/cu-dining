import type { AppProps } from 'next/app';
import Layout from '../components/layout/Layout';
import '../styles/globals.css';
import AuthUserProvider from '../components/auth/AuthUserProvider';
import { ChakraProvider } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    fonts: {
        heading: "Roboto",
        body: "Roboto",
    },
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <ChakraProvider theme={theme}>
                <AuthUserProvider>
                    <Component {...pageProps} />
                </AuthUserProvider>
            </ChakraProvider>
        </Layout>
    );
}

export default MyApp;
