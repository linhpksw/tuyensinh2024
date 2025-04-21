import '@/styles/globals.css';
import { Be_Vietnam_Pro } from 'next/font/google';

const beVietnamPro = Be_Vietnam_Pro({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    display: 'swap',
    variable: '--font-be-vietnam-pro',
});

export default function App({ Component, pageProps }) {
    return (
        <main className={beVietnamPro.className}>
            <Component {...pageProps} />
        </main>
    );
}
