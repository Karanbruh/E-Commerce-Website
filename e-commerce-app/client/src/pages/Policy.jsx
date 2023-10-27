import React from 'react';
import Layout from '../components/Layout/Layout';

const Policy = () => {
    return (
        <Layout>
            <div className="row contactus ">
                <div className="col-md-6 ">
                    <img
                        src="/images/contactus.jpeg"
                        alt="contactus"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="col-md-4">
                    <h1>Privacy & Policy</h1>

                    <h2>Introduction</h2>

                    <p>Briefly explain the purpose and importance of the privacy policy.</p>

                    <h2>Information We Collect</h2>

                    <p>Describe the types of information you collect, such as personal and usage data.</p>

                    <h2>How We Use Information</h2>

                    <p>Explain how collected data is used, including order processing, personalization, and analytics.</p>

                    <h2>Data Security</h2>

                    <p>Describe the measures taken to protect user information.</p>

                    <h2>Disclosure of Information</h2>

                    <p>Clarify when and with whom data may be shared, e.g., service providers.</p>

                    <h2>User Choices</h2>

                    <p>Explain how users can manage their data, update preferences, and opt-out of marketing communications.</p>

                </div>
            </div>
        </Layout>
    );
};

export default Policy;