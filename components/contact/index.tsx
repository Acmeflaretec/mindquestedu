import { FaEnvelope } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <div className="bg-white p-10 rounded-lg shadow-md text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-700 opacity-20"></div>
      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Need More Information?</h2>
        <p className="text-lg mb-6 text-gray-600">
          If you have any questions or need further details about our scholarship programs, feel free to reach out to us. We are here to help you!
        </p>
        <button className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300">
          <FaEnvelope className="mr-2" />
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default ContactSection;
