function ContactUs() {
  return (
    <div className="contact_us">
      <h1>Contact Us</h1>
      <p>Have any questions? We would love to hear from you.</p>

      <div className="contact_container">
        <div className="contact_info">
          <h2>Get In Touch</h2>
          <p>📍 Mumbai, Maharashtra, India</p>
          <p>📞 +91 98765 43210</p>
          <p>📧 info@aashiyanaproperties.com</p>
        </div>

        <form className="contact_form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
