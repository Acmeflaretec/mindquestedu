import { FaHandsHelping, FaChalkboardTeacher, FaUniversity, FaUsers, FaBook, FaAward, FaNetworkWired, FaHands } from 'react-icons/fa';

const MissionVision = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Mission & Vision</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering minds, transforming futures, and creating a world where every student has the opportunity to excel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-red-50 rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-red-600 mb-6 flex items-center">
              <FaHandsHelping className="mr-3" /> Our Mission
            </h3>
            <p className="text-gray-700 mb-6">
              To provide accessible educational opportunities through innovative scholarship programs, fostering academic excellence and personal growth for students from all backgrounds.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaChalkboardTeacher className="text-red-500 mt-1 mr-3" />
                <span>Support students in achieving their educational goals</span>
              </li>
              <li className="flex items-start">
                <FaUniversity className="text-red-500 mt-1 mr-3" />
                <span>Promote academic excellence and lifelong learning</span>
              </li>
              <li className="flex items-start">
                <FaUsers className="text-red-500 mt-1 mr-3" />
                <span>Create a diverse and inclusive educational community</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-600 mb-6 flex items-center">
              <FaBook className="mr-3" /> Our Vision
            </h3>
            <p className="text-gray-700 mb-6">
              To be the leading force in transforming lives through education, creating a world where financial barriers no longer hinder academic and professional success.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaAward className="text-blue-500 mt-1 mr-3" />
                <span>A future where every student can access quality education</span>
              </li>
              <li className="flex items-start">
                <FaNetworkWired className="text-blue-500 mt-1 mr-3" />
                <span>Cultivate a generation of innovative and compassionate leaders</span>
              </li>
              <li className="flex items-start">
                <FaHands className="text-blue-500 mt-1 mr-3" />
                <span>Foster global connections and cultural understanding</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MissionVision;
