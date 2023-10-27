import React from 'react';
import Layout from '../components/Layout/Layout';

const About = () => {
    return (
        <Layout>
            <div className="row contactus ">
                <div className="col-md-6 ">
                    <img
                        src="/images/about.jpeg"
                        alt="contactus"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="col-md-4">
                    <div className="text-justify mt-4">
                        <h1>About Us</h1>

                        <p>Welcome to Your E-Commerce App ! We're here to make your shopping experience better. We offer quality products, affordable prices, and excellent customer service.</p>

                        <h2>Our Story</h2>

                        <p>Founded in 2023, E-Commerce App started with a simple idea: provide a wide selection of products at great prices. We've grown, but our commitment to quality remains the same.</p>

                        <h2>What We Offer</h2>

                        <span>Quality</span>: We curate top-notch products from trusted brands. <br />
                        <span>Affordability</span>: Great value for your money. <br />
                        <span>Variety</span>: Explore a wide range of categories. <br />
                        <span>Support</span>: Our customer service is here to help you. <br />

                        <h2>Our Vision</h2>

                        <p>We aim to be your go-to e-commerce destination, known for quality and affordability.</p>

                        <h2>Join Us</h2>

                        <p>Thank you for choosing E-Commerce App . Start exploring and find great deals on the latest trends. Your feedback matters; we're here to serve you better.</p>

                        <p>Happy shopping!</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default About;