import Head from 'next/head';
import '../styles/globals.css';
import { Cookie } from '@/components/common/Cookie/Cookie';
import { useEffect, useLayoutEffect, useState } from 'react';
import { useRouter } from 'next/router';
import TagManager from 'react-gtm-module';
import * as fbq from '@/utils/fpixel';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  const [showCookie, setShowCookie] = useState(false);

  useEffect(() => {
    const alreadyShown = window.localStorage.getItem('cookie') === 'true';

    if (!alreadyShown) {
      setShowCookie(true);
    }
  }, []);

  const router = useRouter();

  useEffect(() => {
    // This pageview only triggers the first time (it's important for Pixel to have real information)
    fbq.pageview();

    const handleRouteChange = () => {
      fbq.pageview();
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-PQC67DR' });
  }, []);

  return (
    <>
      <Head>
        <base href="/" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>

      {/* Global Site Code Pixel - Facebook Pixel */}
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${fbq.FB_PIXEL_ID});
          `,
        }}
      />

      <Component {...pageProps} />

      {showCookie && <Cookie />}
    </>
  );
}

export default MyApp;
