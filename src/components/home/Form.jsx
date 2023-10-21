import React from "react";
import Title from "./Title";
import Layout from "./Layout";

const Form = ({ children, onSubmit, title }) => {
  return (
    <Layout>
      <Title text={title} />
      <form className="p-6" onSubmit={onSubmit}>
        {children}
      </form>
    </Layout>
  );
};

export default Form;
