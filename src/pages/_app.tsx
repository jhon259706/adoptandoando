import { Provider } from 'react-redux';
import { useStore } from '../hooks/store';
import '@styles/reset.css';
import '@styles/styles.css';

import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '@styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
