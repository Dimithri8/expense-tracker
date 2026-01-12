import { useState } from "react";

export default function useHandleChange() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    const userInput = setUser((prevValue) => ({ ...prevValue, [name]: value }));
  }
}
