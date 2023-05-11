import Content from "@/components/content/Content";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import React from "react";

interface MainProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainProps) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <Content>{children}</Content>
      <Footer />
    </div>
  );
};

export default MainLayout;
