import React from "react";
import { Button } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contactUs">
      <h1>CONTACT INFO</h1> <br />
      <h3>Phone: 01780225308</h3>
      <h3>Email: infoprogramming@gmail.com</h3>
      <h3>Address: Level 1, 8 Beulah Road, Norwood SA 5067, Dhaka.</h3> <br />
      <h3>Give us your feedback</h3>
      <input type="text" />
      <Button variant="primary" size="sm">
        Send
      </Button>
    </div>
  );
};

export default Contact;
<h1>This is contact</h1>;
