export default function ContactPage() {
  return (
    <main className="page">
      <div className="post-entry">
        <h2>Contact</h2>

        <form className="contact-form">
          <input type="text" placeholder="Enter your name" />
          <input type="email" placeholder="Enter your email" />
          <textarea placeholder="Type your message here!"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </main>
  );
}