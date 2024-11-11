import React, { useState } from 'react';
import axios from 'axios';

const PetForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    type: '',
    breed: '',
    mediDescription: '', // New field for medical description
  });
  const [imageFile, setImageFile] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Use FormData to handle file uploads
    const data = new FormData();
    data.append('name', formData.name);
    data.append('age', formData.age);
    data.append('type', formData.type);
    data.append('breed', formData.breed);
    data.append('mediDescription', formData.mediDescription); // Append medical description
    data.append('image', imageFile);  // Append the image file

    try {
      const response = await axios.post('https://full-stack-pet-adoption.onrender.com/pets', data, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set the content type to multipart/form-data
        },
      });
      alert(response.data.message);
      setFormData({ name: '', age: '', type: '', breed: '', mediDescription: '' });
      setImageFile(null); // Reset the image file input
    } catch (error) {
      alert('Error submitting form');
    }
  };

  return (
    <div className="pet-form-page">
      {/* Navbar */}
      <nav className="bg-green-500 p-4">
        <div className="flex justify-between items-center">
          <div className="text-white font-semibold text-lg">FourPaws</div>
          <ul className="flex space-x-6 text-white">
            <li><a href="/home" className="hover:text-gray-200">Home</a></li>
            <li><a href="/petform" className="hover:text-gray-200">PetForm</a></li>
            <li><a href="/admin/requests" className="hover:text-gray-200">Request-Page</a></li>
            <li><a href="/logout" className="hover:text-gray-200">Logout</a></li>
          </ul>
        </div>
      </nav>

      {/* Pet Form */}
      <div className="max-w-lg mx-auto p-8 bg-white rounded-xl shadow-md mt-6">
        <h1 className="text-2xl font-semibold text-center mb-6">Add a New Pet</h1>
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div className="input-group">
              <label htmlFor="name" className="block text-lg font-semibold">Pet Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Pet Name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="age" className="block text-lg font-semibold">Age</label>
              <input
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Enter Age"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="type" className="block text-lg font-semibold">Type</label>
              <input
                name="type"
                value={formData.type}
                onChange={handleChange}
                placeholder="Enter Type (e.g. Dog, Cat)"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="breed" className="block text-lg font-semibold">Breed</label>
              <input
                name="breed"
                value={formData.breed}
                onChange={handleChange}
                placeholder="Enter Breed"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="mediDescription" className="block text-lg font-semibold">Medical Description</label>
              <textarea
                name="mediDescription"
                value={formData.mediDescription}
                onChange={handleChange}
                placeholder="Enter any medical details"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="image" className="block text-lg font-semibold">Upload Pet Image</label>
              <input
                type="file"
                onChange={handleFileChange}
                accept="image/jpeg, image/png"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
          </div>
          <div className="mt-6 text-center">
            <button type="submit" className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PetForm;
