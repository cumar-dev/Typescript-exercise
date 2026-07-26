import { useState } from "react";
interface formProps {
  onSubmit: (email: string) => void;
}
const EmailForm = ({onSubmit}: formProps) => {
  const [email, setEmail] = useState<string>("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    onSubmit(email);
    setEmail("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="email@example" value={email} onChange={(e)=> setEmail(e.target.value)}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EmailForm;
