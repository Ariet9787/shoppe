"use client";
import Container from "@/components/container/Container";
import "./contact.css";
import { useState, useEffect, use } from "react";

function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "Order status",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState(null);
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage("");
    setStatusType(null);
    try {
      const res = await fetch(
        "http://localhost:1337/api/contact-form-submitions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data: formData }),
        }
      );
      if (res.ok) {
        setStatusType("succes");
        setStatusMessage("Your message has been sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "Order status",
          message: "",
        });
      } else {
        const error = await res.json();
        setStatusType("error");
        setStatusMessage(
          error.message || "Something went wrong, please try again later."
        );
      }
    } catch (error) {
      setStatusType("error");
      setStatusMessage(
        "An error occurred while sending your message. Please try again later."
      );
      console.log(error);
    }
  };
  useEffect(() => {
    if (statusMessage) {
      const timer = setTimeout(() => {
        setStatusMessage("");
        setStatusType(null);
      }, 5000);
    }
  }, [statusMessage]);
  return (
    <Container>
      <div className="contact">
        <div className="contact-top">
          <h1 className="contact-title">Contact Us </h1>
          <p className="contact-description">
            Say Hello send us your thoughts about our products or share your
            ideas with our Team!
          </p>
        </div>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            onChange={handleChange}
            value={formData.firstName}
            type="text"
            name="firstName"
            placeholder="First name"
            required
          />
          <input
            onChange={handleChange}
            value={formData.lastName}
            type="text"
            name="lastName"
            placeholder="Last name"
            required
          />
          <input
            onChange={handleChange}
            value={formData.email}
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <select
            onChange={handleChange}
            value={formData.subject}
            name="subject"
            required
          >
            <option value="Order status">Order status</option>
            <option value="Delivery">Delivery</option>
            <option value="Payment">Payment</option>
            <option value="Return">Return</option>
            <option value="Product info">Product info</option>
            <option value="Feedback">Feedback</option>
            <option value="Other">Other</option>
          </select>
          <textarea
            onChange={handleChange}
            value={formData.message}
            name="message"
            placeholder="message"
          ></textarea>
          <div className="contact-form-btn">
            <button className="contact-send-btn" type="submit">
              send
            </button>
          </div>
        </form>
        {statusMessage && (
          <div className={`form-status ${statusType}`}>{statusMessage}</div>
        )}
      </div>
    </Container>
  );
}

export default ContactPage;
