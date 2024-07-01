// import React from 'react';
// import './ContactUs.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
// import { faTwitter, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';


// function ContactUs() {
//   return (
//     <>
//     <section className='contact'>
//       <div className='c-container'>
//         <h2>Contact Us</h2>
//         <div className="contact-wrapper">
//           <div className="contact-form">
//             <h3>Send us a message</h3>
//             <form>
//               <div className="form-group">
//                 <input type="text" name='name' placeholder='Your Name' />
//               </div>
//               <div className="form-group">
//                 <input type="email" name='email' placeholder='Your Email' />
//               </div>
//               <div className="form-group">
//                 <input type="number" name='phone' placeholder='Your phone number' />
//               </div>
//               <div className="form-group">
//                 <textarea className='h-52' name='message' placeholder='Your Message'></textarea>
//               </div>
//               <button type='submit' className='send-button'>Send Message</button>
//             </form>
//           </div>
//           <div className="contact-info">
//             <h3>Contact Information</h3>
//             <p><FontAwesomeIcon icon={faPhone} /> +91 234 657 7899</p>
//             <p><FontAwesomeIcon icon={faEnvelope} /> mysweethome@gmail.com</p>
//             <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Nayapalli, Bhubaneswar</p>

//             <div className="w-32">
//             <h4 className='text-lg p-5 underline'>follow us</h4>
//             <div className="flex justify-between text-lg">
//               <a href="#"><FontAwesomeIcon icon={faYoutube} className='text-white bg-black p-3 rounded-full m-2 hover:text-black hover:bg-white'/></a>
//               <a href="#"><FontAwesomeIcon icon={faTwitter} className='text-white bg-black p-3 rounded-full m-2 hover:text-black hover:bg-white'/></a>
//               <a href="#"><FontAwesomeIcon icon={faInstagram} className='text-white bg-black p-3 rounded-full m-2 hover:text-black hover:bg-white'/></a>
//               <a href="#"><FontAwesomeIcon icon={faLinkedinIn} className='text-white bg-black p-3 rounded-full m-2 hover:text-black hover:bg-white'/></a>
//             </div>
//           </div>
//           </div>
//         </div>
//       </div>      
//     </section>

//     </>
//   );
// }

// export default ContactUs;
import React, { useState } from 'react';
import './ContactUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage('');

    try {
      const response = await fetch('http://localhost:3006/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        setResponseMessage('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setResponseMessage(`Error: ${result.message}`);
      }
    } catch (error) {
      setResponseMessage('An error occurred while sending the message.');
    }

    setIsSubmitting(false);
  };

  return (
    <>
      <section className='contact'>
        <div className='c-container'>
          <h2>Contact Us</h2>
          <div className="contact-wrapper">
            <div className="contact-form">
              <h3>Send us a message</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input type="text" name='name' placeholder='Your Name' value={formData.name} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                  <input type="email" name='email' placeholder='Your Email' value={formData.email} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                  <input type="tel" name='phone' placeholder='Your phone number' value={formData.phone} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                  <textarea className='h-52' name='message' placeholder='Your Message' value={formData.message} onChange={handleInputChange} required></textarea>
                </div>
                <button type='submit' className='send-button' disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
              {responseMessage && <p>{responseMessage}</p>}
            </div>
            <div className="contact-info">
              <h3>Contact Information</h3>
              <p><FontAwesomeIcon icon={faPhone} /> +91 234 657 7899</p>
              <p><FontAwesomeIcon icon={faEnvelope} /> mysweethome.odisha@gmail.com</p>
              <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Nayapalli, Bhubaneswar</p>

              <div className="w-32">
                <h4 className='text-lg p-5 underline'>follow us</h4>
                <div className="flex justify-between text-lg">
                  <a href="#"><FontAwesomeIcon icon={faYoutube} className='text-white bg-black p-3 rounded-full m-2 hover:text-black hover:bg-white' /></a>
                  <a href="#"><FontAwesomeIcon icon={faTwitter} className='text-white bg-black p-3 rounded-full m-2 hover:text-black hover:bg-white' /></a>
                  <a href="#"><FontAwesomeIcon icon={faInstagram} className='text-white bg-black p-3 rounded-full m-2 hover:text-black hover:bg-white' /></a>
                  <a href="#"><FontAwesomeIcon icon={faLinkedinIn} className='text-white bg-black p-3 rounded-full m-2 hover:text-black hover:bg-white' /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;

