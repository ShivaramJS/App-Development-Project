// Home.js
import React from 'react';
import Navbar from './Navbar';
import "../CSS/Home.css"
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const reasons = [
    {
      title: 'Expertise',
      description: 'Our team consists of experienced professionals who understand the complexities of insurance.',
      icon: 'https://media.istockphoto.com/id/1253230015/vector/brainstorming-gear-head-strategy-black-icon.jpg?s=612x612&w=0&k=20&c=9Gcs6jE5ywwlgmmeeosp88qcdBNdKcH4PITHE8yBfYo=',
    },
    {
      title: 'Personalized Service',
      description: 'We provide customized insurance plans that fit your specific requirements.',
      icon: 'https://static.vecteezy.com/system/resources/previews/014/730/439/original/personalized-care-line-icon-vector.jpg',
    },
    {
      title: 'Customer Support',
      description: 'Our dedicated support team is always ready to assist you with any questions or concerns.',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5G_lXK5cROdWBjbkK6h3rghuHW1pcfFwDfg&s',
    },
    {
      title: 'Comprehensive Coverage',
      description: 'We offer a wide range of insurance products to ensure complete protection.',
      icon: 'https://static.vecteezy.com/system/resources/previews/009/485/484/original/insurance-coverage-icon-style-vector.jpg',
    }
  ];

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="home-container">
      <Navbar />
      <h1>Welcome to Our Insurance Services</h1>
      <p>You're successfully logged in.</p>
      <section>
        <div className="life">
          <h2>Why Choose Us?</h2>
          <div className="cards-container">
            {reasons.map((reason, index) => (
              <div className="card" key={index}>
                <img src={reason.icon} alt={`${reason.title} icon`} />
                <h4>{reason.title}</h4>
                <p>{reason.description}</p>
              </div>
            ))}
          </div>

          <div className="life-insurance-details">
            <h3>Life Insurance Plans</h3>
            <p>
              Life insurance provides financial security for your loved ones in the event of your passing. Our plans are designed to offer peace of mind, knowing that your family's future is protected.
            </p>
            <ul>
              <li>Term Life Insurance: Affordable coverage for a specified term.</li>
              <li>Whole Life Insurance: Permanent coverage with a savings component.</li>
              <li>Universal Life Insurance: Flexible coverage with adjustable premiums.</li>
              <li>Variable Life Insurance: Investment options with life insurance protection.</li>
            </ul>
          </div>

          {/* New Sections */}
          <div className="additional-services">
            <h3>Additional Services</h3>
            <div className="cards-container">
              <div className="card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8O8ixWnu1FYBQ_6gifCFy_LAveR9DL8ux-Q&s" alt="Investment Plans icon" />
                <h4>Investment Plans</h4>
                <p>Grow your wealth while ensuring your loved ones' security with our dual-benefit investment plans.</p>
              </div>
              <div className="card">
                <img src="https://cdn-icons-png.flaticon.com/512/835/835601.png" alt="Health Insurance icon" />
                <h4>Health Insurance</h4>
                <p>Comprehensive health insurance plans that cover medical expenses and provide peace of mind.</p>
              </div>
              <div className="card">
                <img src="https://cdn-icons-png.flaticon.com/512/2167/2167864.png" alt="Retirement Plans icon" />
                <h4>Retirement Plans</h4>
                <p>Plan for a secure and comfortable retirement with our flexible retirement savings plans.</p>
              </div>
            </div>
          </div>

          <div className="customer-testimonials">
            <h3>What Our Customers Say</h3>
            <div className="testimonial">
              <p>"The personalized service and attention to detail were exceptional. I feel confident knowing my family is protected." - Sarah M.</p>
            </div>
            <div className="testimonial">
              <p>"Switching to their insurance was the best decision. The team is knowledgeable and responsive." - John D.</p>
            </div>
          </div>

          <div className="call-to-action">
            <h3>Get Started Today</h3>
            <p>Secure your future and protect your loved ones with our trusted life insurance plans. Contact us today to learn more and find the perfect plan for you.</p>
            <button onClick={handleContactClick}>Contact Us</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
