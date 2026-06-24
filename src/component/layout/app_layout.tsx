import React, { ReactNode } from 'react';
import Header from './header';
import Footer from './footer';

interface AppLayoutProps {
  children: ReactNode;
}

const App_layout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Header/>
      <main className="pt-20 bg-[#161E2F]">
 {children}
      </main>
     
      <Footer />
    </>
  );
};

export default App_layout;
