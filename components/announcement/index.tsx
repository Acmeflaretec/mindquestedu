'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

const announcements = [
  {
    id: 1,
    title: "2024 Scholarship Applications Now Open",
    date: "July 1, 2024",
    content: "We are excited to announce that applications for our 2024 scholarship program are now open. Don't miss this opportunity to fund your education!",
    link: "/apply"
  },
  {
    id: 2,
    title: "New STEM Grant Program Launched",
    date: "June 15, 2024",
    content: "In partnership with leading tech companies, we're introducing a new grant program for STEM students. Check eligibility and apply now.",
    link: "/stem-grant"
  },
  {
    id: 3,
    title: "Scholarship Workshop Series",
    date: "May 30, 2024",
    content: "Join our upcoming workshop series to learn tips on crafting a standout scholarship application. Sessions start next week!",
    link: "/workshops"
  }
];

const AnnouncementCard = ({announcement, onClick }) => (
  <motion.div 
    className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    onClick={() => onClick(announcement)}
  >
    <div className="p-6">
      <p className="text-sm text-red-600 font-semibold mb-2">{announcement.date}</p>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{announcement.title}</h3>
      <p className="text-gray-600 mb-4">{announcement.content.substring(0, 100)}...</p>
      <span className="text-red-600 font-semibold hover:underline">Read more</span>
    </div>
  </motion.div>
);

AnnouncementCard.propTypes = {
  announcement: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

const AnnouncementModal = ({ announcement, onClose }) => (
  <motion.div 
    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div 
      className="bg-white rounded-lg max-w-md w-full p-6"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{announcement.title}</h2>
      <p className="text-sm text-red-600 font-semibold mb-4">{announcement.date}</p>
      <p className="text-gray-600 mb-6">{announcement.content}</p>
      <div className="flex justify-between items-center">
        <a 
          href={announcement.link} 
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-300"
        >
          Learn More
        </a>
        <button 
          onClick={onClose}
          className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
        >
          Close
        </button>
      </div>
    </motion.div>
  </motion.div>
);

AnnouncementModal.propTypes = {
  announcement: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

const AnnouncementSection = () => {
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Latest Announcements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {announcements.map((announcement) => (
            <AnnouncementCard 
              key={announcement.id} 
              announcement={announcement} 
              onClick={setSelectedAnnouncement}
            />
          ))}
        </div>
        <AnimatePresence>
          {selectedAnnouncement && (
            <AnnouncementModal 
              announcement={selectedAnnouncement} 
              onClose={() => setSelectedAnnouncement(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AnnouncementSection;
