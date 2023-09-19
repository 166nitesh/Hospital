import React, { useState } from 'react';

function DoctorAppointmentForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [comments, setComments] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your logic here to handle the form submission, such as sending the data to a server or performing client-side validation.
    // For this example, let's just log the form data.
    console.log('Submitted Data:', { name, email, phone, preferredDate, comments });
  };

  return (
    <div>
      <h2 class ="headingg"> Doctor Appointment Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="preferredDate">Preferred Date:</label>
          <input
            type="date"
            id="preferredDate"
            value={preferredDate}
            onChange={(e) => setPreferredDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="comments"> Symptoms/Difficulty faced by patient</label>
          <textarea
            id="comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default DoctorAppointmentForm;
