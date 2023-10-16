import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  const onFileChange = ({ target }) => {
    const { name, files } = target;
    setFormState({
      ...formState,
      [name]: files[0]
    })
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onFileChange,
    onResetForm,
  };
};
