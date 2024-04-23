import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-8 bg-white rounded shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Welcome to our website!</h1>
        <p className="text-lg text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod risus nec felis ultrices aliquet. Mauris placerat pretium urna, in ultrices odio molestie id.</p>
        <div className="mt-8">
          <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
