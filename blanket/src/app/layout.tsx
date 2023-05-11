import "./cssReset.css";

export const metadata = {
  title: "Todo App",
  description: "App that lets the user make a to-do list",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
