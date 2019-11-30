import React from "react";

const useFormState = <T>(initialValues: T) => {
  const [values, setValues] = React.useState(initialValues);

  const handleChange = (key: keyof T) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    setValues({
      ...values,
      [key]: value
    });
  };

  return {
    handleChange,
    values
  };
};

export default useFormState;
