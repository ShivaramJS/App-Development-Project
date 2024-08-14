import React from 'react';
import '../CSS/Returns.css';
import Navbar from './Navbar';

const Returns = () => {
    return (
        <div>
            <Navbar />
            <div className="returns-container">
                <h1>Returns Policy</h1>
                <p>
                    Our returns policy is designed to provide you with peace of mind when using our insurance services. We strive to ensure complete customer satisfaction. Please read through our terms and conditions to understand our refund process and how we handle various situations.
                </p>

                <h2>General Return Guidelines</h2>
                <ol>
                    <li>Submit a return request within 30 days of service activation or renewal.</li>
                    <li>Ensure that all necessary documentation, including proof of payment and service agreement, is provided.</li>
                    <li>Once your return request is approved, you will receive confirmation via email.</li>
                    <li>Refunds will be processed within 14 days of confirmation, credited back to your original method of payment.</li>
                </ol>

                <h2>Exceptions to the Returns Policy</h2>
                <p>
                    Please note that certain situations may not qualify for a refund. These exceptions include:
                </p>
                <ul>
                    <li>Claims already initiated and processed under the insurance policy.</li>
                    <li>Services utilized beyond the free trial period or promotional offers.</li>
                    <li>Cancellation requests made after the 30-day return period.</li>
                    <li>Policies that have been fully paid out or terminated due to non-compliance with terms.</li>
                </ul>

                <h2>Special Considerations</h2>
                <p>
                    We understand that circumstances can change unexpectedly. In cases of unforeseen events, such as a significant life change, we may consider exceptions on a case-by-case basis. Please contact our customer support team to discuss your situation.
                </p>

                <h2>How to Request a Return</h2>
                <p>Follow these simple steps to request a return:</p>
                <ol>
                    <li>Log in to your account and navigate to the "My Policies" section.</li>
                    <li>Select the policy you wish to return and click on "Request Return."</li>
                    <li>Fill out the return form with the necessary details and submit it.</li>
                    <li>Our team will review your request and reach out to you within 3 business days.</li>
                </ol>

                <h2>Contact Us</h2>
                <p>
                    If you have any questions about our returns policy or need assistance with the return process, please don't hesitate to contact our customer support team:
                </p>
                <ul>
                    <li>Email: support@insuranceportal.com</li>
                    <li>Phone: 1-800-555-1234</li>
                    <li>Live Chat: Available on our website during business hours</li>
                </ul>

                <h2>Frequently Asked Questions (FAQs)</h2>
                <p>
                    <strong>Q: Can I return a policy after making a claim?</strong><br />
                    A: Unfortunately, policies with processed claims are not eligible for return or refund.
                </p>
                <p>
                    <strong>Q: What if I change my mind after the 30-day period?</strong><br />
                    A: Returns after the 30-day period are generally not accepted. However, please contact us to discuss your situation.
                </p>
                <p>
                    <strong>Q: How long will it take to receive my refund?</strong><br />
                    A: Refunds are processed within 14 days of return confirmation and credited back to your original payment method.
                </p>
            </div>
        </div>
    );
};

export default Returns;