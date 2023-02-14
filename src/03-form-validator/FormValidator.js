import { useState } from "react";

export default function FormValidator() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [displayMsg, setDisplayMsg] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    let errorMessage = "";

    if (!email) errorMessage += "Email address is missing.\n";
    else if (!email.includes("@"))
      errorMessage += "Email address is invalid.\n";

    if (!password) errorMessage += "Password is missing.\n";

    if (!passwordConfirm) errorMessage += "Password confirmation is missing.\n";
    else if (password && password !== passwordConfirm)
      errorMessage += "Password mismatch!\n";

    if (errorMessage) {
      setDisplayMsg("Error:\n" + errorMessage);
    } else {
      setDisplayMsg("User created!");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up!</h2>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        minLength={8}
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="password-confirm">Confirm Password </label>
      <input
        type="password"
        name="password-confirm"
        minLength={8}
        required
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />
      <p>{displayMsg}</p>
      <input type="submit" value="Submit" />
    </form>
  );
}
