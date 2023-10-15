import React from "react";
// components
import Footer from "./Footer";

const Layout = ({ loginBackground, title, children, handleSubmit, footerHref, footerLabel, footerLinkLabel }) => {
  return (
    <div
      className="relative flex flex-col justify-center min-h-screen overflow-hidden"
      style={{ backgroundImage: `url(${loginBackground})` }}
    >
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring ring-2 ring-purple-600 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 underline uppercase decoration-wavy">
          {title}
        </h1>
        <form onSubmit={handleSubmit} className="mt-6">
          {children}
        </form>
        <Footer
          label={footerLabel}
          linkLabel={footerLinkLabel}
          href={footerHref}
        />
      </div>
    </div>
  );
};

export default Layout;
