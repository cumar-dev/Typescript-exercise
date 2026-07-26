import { useState } from "react";
interface contactForm {
  onSubmit: (data: { name: string; email: string }) => void;
}
const ContactForm = ({ onSubmit }: contactForm) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: "",
      email: "",
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) =>
            setFormData({
              ...formData,
              name: e.target.value,
            })
          }
        />

        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            })
          }
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
