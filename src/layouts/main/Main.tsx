import Content from "@/components/content/Content";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import React from "react";

interface MainProps {
  children: React.ReactNode;
}

const Main = ({ children }: MainProps) => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <Header />
      <Content>{children}</Content>
      <Footer />
    </div>
  );
};

export default Main;
