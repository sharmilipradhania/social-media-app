

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-fuchsia-600 to-purple-600">
   
        {children}
      </body>
    </html>
  );
}
