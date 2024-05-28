
import { Theme } from '@radix-ui/themes';

export default function MyApp({ Component, pageProps }) {
  return (
    <Theme appearance="dark">
      <Component {...pageProps} />
    </Theme>
  );
}