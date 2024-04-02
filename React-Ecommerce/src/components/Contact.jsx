import React, { useState } from 'react';

const Contact = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!fullName || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }
        console.log('Form submitted:', { fullName, email, message });
        setFullName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col-12 text-center py-4 my-4">
                    <h1>Have Some Question?</h1>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-md 5 d-flex justify-content-center">
                    <img src="/assets/images/contact.png" alt="Contact Us" height="300px" width="300px" />
                </div>
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="fullName" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="fullName" placeholder="John Smith" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" rows="5" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                        </div>
                        <button type="submit" className="btn btn-outline-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
