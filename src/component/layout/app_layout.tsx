import React, { ReactNode } from 'react';
import Header from './header';
import Footer from './footer';
import Headerone from './headerone';


interface AppLayoutProps {
  children: ReactNode;
}

const App_layout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Header/>
      <main className="bg-[#000000]">
 {children}
      </main>
     
      <Footer />
    </>
  );
};

export default App_layout;
