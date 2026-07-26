import AgeForm from "./AgeForm";
import ContactForm from "./ContactForm";
import EmailForm from "./EmailForm";

function App() {
  const handleAddEmail = (newEmail: string) => {
    console.log("new email: ", newEmail);
  };
  const handleSubmitAge = (age: number) => {
    if (age < 18) {
      console.log("age must be greater than 18");
      return;
    }
    console.log("current Age:", age);
  };
  const handleAddContact = (currentContact: {
    name: string;
    email: string;
  }): void => {
    console.log(currentContact);
    console.log("Name:", currentContact.name);
    console.log("Email:", currentContact.email);
  };
  return (
    <>
      <EmailForm onSubmit={handleAddEmail} />
      <AgeForm onSubmit={handleSubmitAge} />
      <ContactForm onSubmit={handleAddContact} />
    </>
  );
}

export default App;
