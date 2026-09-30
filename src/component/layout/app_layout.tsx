import React, { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

interface AppLayoutProps {
  children: ReactNode;
}

const App_layout = ({ children }: AppLayoutProps) => {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      {/* Header */}
      <header className="relative z-[9999]">
        <Header />
      </header>

      {/* Main Page Content */}
      <main className="relative z-0 min-h-screen bg-[#000000]">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App_layout;