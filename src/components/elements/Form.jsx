import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import "./Form.css";


const SERVICE_ID = "gmail";
const TEMPLATE_ID = "template_1l4oc7l";
const PUBLIC_KEY = "ga_hJOhX1822Zr86V";

function Form() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }
    return (
        <form data-aos="flip-up" ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="user_name" placeholder="John Doe" required />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="user_email" placeholder="you@example.com" required />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message</label>
                <input id="message" type="text" name="message" placeholder="Your Message" required></input>
            </div>
            <button type="submit" className="submit-button">SUBMIT</button>
        </form>
    )
}



export default Form;

