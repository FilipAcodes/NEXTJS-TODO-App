export const metadata = {
  title: "Todo App",
  description: "App that lets the user make a to-do list",
};
import "./cssReset.css";

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
