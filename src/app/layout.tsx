import './globals.css'

// export const metadata = {
//   title: "iNoah",
//   description: 'Welcome to my portfolio!',
//   openGraph: {
//     title: 'iNoah',
//     description: 'Welcome to my portfolio!',
//     siteName: 'inoah.dev',
//     images: [
//       {
//         url: "/screenshot.png"
//       }
//     ],
//     locale: 'en-GB',
//     type: 'website',
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'iNoah',
//     description: 'Welcome to my portfolio!',
//     creator: '@NoxhDevs',
//     images: ['/screenshot.png'],
//   },
//   category: 'technology',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
