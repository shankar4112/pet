import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Home = () => {
  return (
    <div className="font-sans text-gray-900">
      {/* Transparent Navbar */}
      <nav className="bg-transparent py-4 px-8 flex justify-between items-center fixed w-full top-0 z-10 backdrop-blur-md">
        <div className="text-3xl font-bold text-indigo-600">FourPaws</div>
        <ul className="flex space-x-6 text-lg">
          <li><Link to="/homee" className="hover:text-indigo-500">Home</Link></li>
          <li><Link to="/petform" className="hover:text-indigo-500">Pet-Form</Link></li>
          <li><Link to="/admin/requests" className="hover:text-indigo-500">Request-Page</Link></li>
          <li><Link to="/logout" className="hover:text-indigo-500">Logout</Link></li>
        </ul>
      </nav>

      {/* Header Section */}
      <header className="mt-20 bg-gradient-to-b from-indigo-500 to-indigo-700 text-white py-16">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-4 text-center md:text-left">
            <h1 className="text-4xl font-bold">Find Your Perfect Pet Companion</h1>
            <p className="text-lg">Connecting loving families with pets in need of a home</p>
            <div className="flex justify-center md:justify-start space-x-4 mt-6">
              <div className="benefit-item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqqEz8mcMAUNM8YmghD9lVzDC-tMSNMiF6fgVdox3zg-JS8TZQJWWSRfVc7ehzQrNbLUg&usqp=CAU" alt="Adopt a Friend" className="h-20 w-20 rounded-full" />
                <p className="mt-2">Adopt a New Friend</p>
              </div>
              <div className="benefit-item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM6bynRhaGGiIHem_DDcq-X76N-JzJDWO0Yg&s" alt="Save Lives" className="h-20 w-20 rounded-full" />
                <p className="mt-2">Save a Life</p>
              </div>
              <div className="benefit-item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgImzln2aPSHEk7yFtLUWzDH9WXqP5RFc15w&s" alt="Find Joy" className="h-20 w-20 rounded-full" />
                <p className="mt-2">Find Joy in Companionship</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ7evcDXmFBcRmQ1oGVFc9GLvEhddfpgVc5Q&s" alt="Pet Adoption" className="w-full rounded-lg shadow-lg" />
          </div>
        </div>
      </header>

      {/* About Us Section */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center mb-8">About Us</h2>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6">
            <Carousel showThumbs={false} infiniteLoop autoPlay interval={5000} showStatus={false}>
              <div className="carousel-slide text-center p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">Our Vision</h3>
                <p>To ensure every pet finds a loving, forever home with a caring family.</p>
              </div>
              <div className="carousel-slide text-center p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">Our Mission</h3>
                <p>Connecting pets with compassionate adopters, promoting responsible pet ownership.</p>
              </div>
              <div className="carousel-slide text-center p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">Our Core Values</h3>
                <p>We believe every animal deserves a chance at happiness and a loving home.</p>
              </div>
            </Carousel>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img src="https://www.shutterstock.com/image-vector/adopt-dog-pet-animals-adoption-600nw-2234595001.jpg" alt="Pet Care" className="w-full rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-8">Get in Touch</h2>
        <p className="text-center mb-8 text-gray-700">If you have questions, need support, or want to know more about adopting, we’re here to help!</p>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2 text-center md:text-left">
            <p>Email: <span className="font-semibold">support@petadopt.com</span></p>
            <p>Phone: <span className="font-semibold">+123-456-7890</span></p>
            <p>Address: <span className="font-semibold">456 Animal Haven, Compassion City, Pawland</span></p>
          </div>

          {/* Feedback Form */}
          <div className="space-y-4">
            <form className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Send Us Your Feedback</h3>
              <label className="block mb-2">
                <span className="text-gray-600">Name:</span>
                <input type="text" name="name" required className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500" />
              </label>
              <label className="block mb-2">
                <span className="text-gray-600">Email:</span>
                <input type="email" name="email" required className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500" />
              </label>
              <label className="block mb-4">
                <span className="text-gray-600">Message:</span>
                <textarea name="message" rows="4" required className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"></textarea>
              </label>
              <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
