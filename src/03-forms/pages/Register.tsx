import { FormEvent } from "react";
import { useForm } from "../hooks/useForm";
import "../styles/styles.css";

export const Register = () => {
  const {
    formData,
    name,
    email,
    password,
    confirmPassword,
    handleChange,
    isValidEmail,
    resetForm,
  } = useForm({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div>
      <h1>Register Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={name}
          type="text"
          className={`${name.trim().length < 5 && "has-error"}`}
        />
        {name.trim().length <= 5 && <span>Este campo es obligatorio</span>}
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={email}
          type="email"
          className={`${!isValidEmail(email) && "has-error"}`}
        />
        {!isValidEmail(email) && <span>Email invalido</span>}
        <input
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={password}
          type="password"
          className={`${password.trim().length < 5 && "has-error"}`}
        />
        {password.trim().length < 5 && (
          <span>Debe tener al menos 6 caracteres</span>
        )}
        <input
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
          value={confirmPassword}
          type="password"
          className={`${
            (confirmPassword.trim().length < 5 ||
              password !== confirmPassword) &&
            "has-error"
          }`}
        />
        {(confirmPassword.trim().length < 5 ||
          password !== confirmPassword) && (
          <span>Las contraseñas deben ser iguales</span>
        )}
        <button type="submit">Create</button>
        <button type="button" onClick={resetForm}>
          Reset
        </button>
      </form>
    </div>
  );
};
