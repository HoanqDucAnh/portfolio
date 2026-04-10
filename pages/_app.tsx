// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import "../styles/globals.scss";
import "../styles/article.css";

import type { AppProps } from "next/app";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Component {...pageProps} />

			{/* GA4 */}
			<Script
				src="https://www.googletagmanager.com/gtag/js?id=G-6T2HTBS4WQ"
				strategy="afterInteractive"
			/>
			<Script id="ga4-init" strategy="afterInteractive">
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', 'G-6T2HTBS4WQ', { page_path: window.location.pathname });
				`}
			</Script>

			{/* Microsoft Clarity */}
			<Script id="clarity" strategy="afterInteractive">
				{`
					(function(c,l,a,r,i,t,y){
						c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
						t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
						y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
					})(window,document,"clarity","script","w99ronz0em");
				`}
			</Script>
		</>
	);
}

export default MyApp;
