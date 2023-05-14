import "./cssReset.css";
import { GlobalContextProvider } from "./context/store";

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
      <body>
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </body>
    </html>
  );
}
