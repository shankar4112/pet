import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HomePage = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-sky-50 min-h-screen text-gray-900">
      {/* Navbar */}
      <nav className="navbar bg-white bg-opacity-90 backdrop-blur-lg fixed w-full z-10 shadow-md transition duration-300">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="navbar-logo text-2xl font-bold text-sky-600">FourPaws</div>
          <ul className="navbar-links flex space-x-4 text-gray-700 font-semibold">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/petlist">Pet-List</Link></li>
            <li><Link to="/chatai">Recommend</Link></li>
            <li><Link to="/logout">Logout</Link></li>
          </ul>
        </div>
      </nav>

      {/* Header Section */}
      <header className="relative flex flex-col lg:flex-row items-center justify-center h-screen bg-gradient-to-r from-sky-100 to-sky-200 pt-20 lg:pt-0 px-6 shadow-lg">
        <div className="lg:w-1/2 text-center lg:text-left space-y-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-sky-800">Find Your Perfect Pet Companion</h1>
          <p className="text-lg text-gray-700">Connecting loving families with pets in need of a home</p>
          <div className="flex space-x-8 justify-center lg:justify-start mt-6">
            {[
              {
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqqEz8mcMAUNM8YmghD9lVzDC-tMSNMiF6fgVdox3zg-JS8TZQJWWSRfVc7ehzQrNbLUg&usqp=CAU",
                text: "Adopt a New Friend",
              },
              {
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM6bynRhaGGiIHem_DDcq-X76N-JzJDWO0Yg&s",
                text: "Save a Life",
              },
              {
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgImzln2aPSHEk7yFtLUWzDH9WXqP5RFc15w&s",
                text: "Find Joy in Companionship",
              },
            ].map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center space-y-2 group">
                <img src={benefit.img} alt={benefit.text} className="h-16 w-16 rounded-full transform group-hover:scale-105 transition duration-300" />
                <p className="text-sm text-gray-800 font-medium group-hover:text-sky-600 transition duration-300">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ7evcDXmFBcRmQ1oGVFc9GLvEhddfpgVc5Q&s"
            alt="Pet Adoption"
            className="rounded-lg shadow-lg w-full max-w-md mx-auto lg:max-w-none lg:mx-0 transform transition duration-300 hover:scale-105"
          />
        </div>
      </header>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-sky-700 mb-12">About Us</h2>
          <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-10">
            <div className="lg:w-1/2">
              <Carousel
                showThumbs={false}
                infiniteLoop
                autoPlay
                interval={5000}
                showStatus={false}
                className="rounded-lg shadow-lg"
              >
                <div className="text-center p-6">
                  <h3 className="text-2xl font-semibold text-sky-600">Our Vision</h3>
                  <p className="text-gray-700 mt-2">To ensure every pet finds a loving, forever home with a caring family.</p>
                </div>
                <div className="text-center p-6">
                  <h3 className="text-2xl font-semibold text-sky-600">Our Mission</h3>
                  <p className="text-gray-700 mt-2">Connecting pets with compassionate adopters, promoting responsible pet ownership.</p>
                </div>
                <div className="text-center p-6">
                  <h3 className="text-2xl font-semibold text-sky-600">Our Core Values</h3>
                  <p className="text-gray-700 mt-2">We believe every animal deserves a chance at happiness and a loving home.</p>
                </div>
              </Carousel>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://www.shutterstock.com/image-vector/adopt-dog-pet-animals-adoption-600nw-2234595001.jpg"
                alt="Pet Care"
                className="rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-20 bg-gradient-to-b from-sky-100 to-sky-200">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
          <p className="text-lg text-gray-700 mt-4">If you have questions, need support, or want to know more about adopting, we’re here to help!</p>
          <div className="flex flex-col lg:flex-row mt-12 items-center lg:justify-between space-y-8 lg:space-y-0">
            <div className="lg:w-1/2 text-left space-y-4">
              <p className="text-gray-700"><strong>Email:</strong> support@petadopt.com</p>
              <p className="text-gray-700"><strong>Phone:</strong> +123-456-7890</p>
              <p className="text-gray-700"><strong>Address:</strong> 456 Animal Haven, Compassion City, Pawland</p>
            </div>
            <div className="lg:w-1/2 flex flex-col items-center space-y-6">
              <form className="w-full max-w-sm text-left bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-sky-600 mb-4">Send Us Your Feedback</h3>
                <label className="block mb-2 font-semibold">Name:</label>
                <input type="text" name="name" className="w-full mb-4 p-2 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500" required />
                <label className="block mb-2 font-semibold">Email:</label>
                <input type="email" name="email" className="w-full mb-4 p-2 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500" required />
                <label className="block mb-2 font-semibold">Message:</label>
                <textarea name="message" rows="4" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500" required></textarea>
                <button type="submit" className="w-full bg-sky-500 text-white py-2 mt-4 rounded-lg hover:bg-sky-600 transition duration-300">Submit</button>
              </form>
              <div className="w-full max-w-xs">
                <img src="https://www.shutterstock.com/image-photo/litter-terrier-mix-puppies-playing-260nw-336435884.jpg" alt="Contact Us" className="rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
