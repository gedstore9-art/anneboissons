import React from 'react';

export const metadata = {
  title: 'Anne Boissons Royale',
  description: 'Vente de boissons en détail et en gros à Cotonou',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-zinc-950 text-white antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LiquorStore",
              "name": "Anne Boissons Royale",
              "image": "https://anneboissonsroyale.bj/og-image.jpg",
              "telephone": "+22901970000",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Avenue Jean-Paul II",
                "addressLocality": "Cotonou",
                "addressCountry": "BJ"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 6.3654,
                "longitude": 2.4183
              },
              "paymentAccepted": "Cash on Delivery, Mobile Money",
              "currenciesAccepted": "XOF"
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
