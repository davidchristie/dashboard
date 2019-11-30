import React from "react";

interface FormValues {
  name: string;
}

const useFormState = () => {
  const [name, setName] = React.useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const values: FormValues = {
    name
  };

  return {
    handleNameChange,
    values
  };
};

export default useFormState;
