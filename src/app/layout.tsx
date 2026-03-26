export const metadata = {
  title: "InCell - Усиление связи",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700;900&display=swap" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  fontFamily: {
                    sans: ['Montserrat', 'sans-serif'],
                  },
                }
              }
            }
          `
        }} />
        <style dangerouslySetInnerHTML={{
          __html: `
            body {
              margin: 0;
              padding: 0;
              font-family: 'Montserrat', sans-serif !important;
              background-color: #030712 !important;
              /* ПРОВЕРЬ ПУТЬ НИЖЕ: должен быть /hero-bg.jpg */
              background-image: linear-gradient(rgba(3, 7, 18, 0.85), rgba(3, 7, 18, 0.85)), 
                                url('/hero-bg.jpg') !important;
              background-size: cover !important;
              background-position: center center !important;
              background-attachment: fixed !important;
              background-repeat: no-repeat !important;
              min-height: 100vh;
              color: white;
            }

            .accent-mini {
              font-family: 'Montserrat', sans-serif !important;
              color: rgba(255, 255, 255, 0.6) !important;
              font-size: 0.7em !important;
              font-weight: 500 !important;
              text-transform: uppercase;
              letter-spacing: 0.15em;
              display: inline-block;
              margin-left: 8px;
            }

            /* Это ВАЖНО: делает все секции прозрачными, чтобы видеть картинку */
            section, main, div[class*="bg-"] {
              background-color: transparent !important;
            }
          `
        }} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}