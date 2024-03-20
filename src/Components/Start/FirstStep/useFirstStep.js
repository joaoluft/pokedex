import { useState } from "react";

export const useFirstStep = ({ stepControl, setUserData }) => {
  const [error, setError] = useState("");

  const nameStartHandler = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const username = form.get("username");

    if (username.length < 3)
      return setError("Seu nome precisa conter mais de 3 caracteres!");
    setUserData((prevData) => ({
      ...prevData,
      username: username,
    }));
    stepControl(2);
  };

  return { error, nameStartHandler };
};