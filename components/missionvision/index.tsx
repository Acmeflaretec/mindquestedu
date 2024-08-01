import { FaHandsHelping, FaChalkboardTeacher, FaUniversity, FaUsers, FaBook, FaAward, FaNetworkWired, FaHands } from 'react-icons/fa';

const MissionVision = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Mission & Vision</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          MindQuestEdu was founded by a team of passionate educators, developers, and entrepreneurs who believe that technology has the power to transform the way we learn. We are dedicated to creating a platform that empowers students to take control of their learning journey, fostering a love for lifelong learning and personal growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-red-50 rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-red-600 mb-6 flex items-center">
              <FaHandsHelping className="mr-3" /> Our Mission
            </h3>
            <p className="text-gray-700 mb-6">
            Our mission is to provide a comprehensive learning ecosystem that caters to diverse learning styles and abilities. We aim to:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaChalkboardTeacher className="text-red-500 mt-1 mr-3" />
                <span>Empower students to take control of their learning journey</span>
              </li>
              <li className="flex items-start">
                <FaUniversity className="text-red-500 mt-1 mr-3" />
                <span>Foster a love for lifelong learning and personal growth</span>
              </li>
              <li className="flex items-start">
                <FaUsers className="text-red-500 mt-1 mr-3" />
                <span>Provide a platform for educators to create and share engaging content</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-600 mb-6 flex items-center">
              <FaBook className="mr-3" /> Our Vision
            </h3>
            <p className="text-gray-700 mb-6">
            Our vision is to revolutionize education by harnessing the power of technology to make learning more accessible, personalized, and fun. We envision a world where every individual has the skills, knowledge, and confidence to thrive in an ever-changing world.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaAward className="text-blue-500 mt-1 mr-3" />
                <span>Provide a comprehensive learning ecosystem that caters to diverse learning styles and abilities</span>
              </li>
              <li className="flex items-start">
                <FaNetworkWired className="text-blue-500 mt-1 mr-3" />
                <span>Foster a sense of community and collaboration among learners, educators, and parents</span>
              </li>
              <li className="flex items-start">
                <FaHands className="text-blue-500 mt-1 mr-3" />
                <span>Offer a range of interactive and immersive educational content that sparks curiosity and creativity</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MissionVision;
