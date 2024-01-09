import "@styles/globals.css";
import { Navbar, Provider } from "@components";
export const metadata = {
  title: "Let's Prompt",
  description: "Discover & Share AI-Powered Prompts.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient"></div>
          </div>
          <main className="app">
            <Navbar />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
