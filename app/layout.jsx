import '@styles/globals.css';

export const metadata = {
  title: "Let's Prompt",
  description: 'Discover & Share AI-Powered Prompts.',
};

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <div className='main'>
          <div className='gradient'></div>
        </div>
        <div className='app'>{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
