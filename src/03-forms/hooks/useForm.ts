import { ChangeEvent, useState } from "react";

export const useForm = <T>(initData: T) => {
  const [formData, setFormData] = useState(initData);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  const resetForm = () => {
    setFormData({ ...initData });
  };

  const isValidEmail = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  return {
    ...formData,
    formData,
    //Functions
    handleChange,
    isValidEmail,
    resetForm,
  };
};
