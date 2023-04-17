import { AppProps } from 'next/app';
import Head from 'next/head';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './styles.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from '../auth/JwtContext';

function CustomApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <>
          <Head>
            <title>Welcome to one-app!</title>
          </Head>
          <main className="app">
            <Component {...pageProps} />
          </main>
        </>
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default CustomApp;
