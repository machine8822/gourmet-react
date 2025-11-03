import "./../css/Contact.css";
import { useState } from "react";

const Contact = () => {
    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3628413e-725e-4249-9193-75c1465dda18");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error sending email", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact-form">
      <form onSubmit={onSubmit}>
        <h2>Contact Form</h2>
       <p>
            <label for="name">Name:</label>
            <input type="text" name="name" id="name" required />
       </p>
       <p>
            <label for="email">Email:</label>
            <input type="email" name="email" id="email" required />
       </p>
       <p>
            <label for="message">Message:</label>
            <textarea name="message" id="message" required></textarea>
       </p>
       <p>
            <button type="submit">Submit</button>
       </p>

      </form>
      <span>{result}</span>

    </div>
  );
};

export default Contact;