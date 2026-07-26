import { useState } from "react";
interface formProps {
  onSubmit: (age: number) => void;
}

const AgeForm = ({ onSubmit }: formProps) => {
  const [age, setAge] = useState<number | "">("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (age === "") return;
    onSubmit(age);
    setAge("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter age"
          value={age}
          onChange={(e) =>
            setAge(e.target.value === "" ? "" : Number(e.target.value))
          }
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AgeForm;
