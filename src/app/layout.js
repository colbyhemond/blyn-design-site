
import Navbar from "../components/layout/Navbar";
import "./globals.css";
import Footer from "../components/layout/Footer";
import FathomAnalytics from "../components/FathomAnalytics";
import { client } from "../sanity/client";
import ThemeWrapper from "../components/layout/ThemeWrapper";
import Layout from "../components/layout/Layout";

//import Libre Baskerville from  next google fonts
import { Libre_Baskerville, Figtree } from 'next/font/google';
const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-libre-baskerville',
});

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-figtree',
});


const SETTINGS_QUERY = `*[_type == "settings"][0]`;
const options = { next: { revalidate: 30 } };

export const metadata = async () => {
  const settings = await client.fetch(SETTINGS_QUERY, {}, options);
  const title = settings?.title || "B. Lyn Design & Co.";

  return ({
    title: {
      template: `%s | ${title}`,
      default: title,
    },
    description: settings?.description || "Transforming spaces with thoughtful design and craftsmanship.",
    keywords: settings?.keywords || "senior living, interior design, healthcare design, functional spaces, warm interiors",
    authors: [{ name: "Colby Hemond", url: "https://colbyhemond.com" }],
    openGraph: {
      title: title,
      description: settings?.description || "Transforming spaces with thoughtful design and craftsmanship.",
      url: `https://${process.env.NEXT_PUBLIC_DOMAIN}`,
      siteName: title,
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: "Warm, functional interior space",
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    alternates: {
      types: {
        'application/rss+xml': `https://${process.env.NEXT_PUBLIC_DOMAIN}/feed.xml`,
      },
    }
  })
};

export default async function RootLayout({ children }) {

  const settings = await client.fetch(SETTINGS_QUERY, {}, options);

  const theme = settings?.theme || "light";
  
  return (
    <html lang="en" className={`${libreBaskerville.variable} ${figtree.variable}  bg-neutral font-figtree`}>
      <FathomAnalytics />
      
      <body className="bg-base-100">
        <ThemeWrapper theme={theme}>
        
        <Layout settings={settings}>
          {children}
        </Layout>
        </ThemeWrapper>
      </body>
    </html>
  );
}
