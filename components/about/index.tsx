import Image from 'next/image';

const AboutUs = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About MindQuest</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering students to achieve their academic dreams through innovative scholarship programs and educational support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">Our Mission</h3>
            <p className="text-gray-600">
            Welcome to MindQuestEdu, a cutting-edge educational platform designed to help students of all ages and abilities unlock their full potential.  Our mission is to empower students of all ages and abilities to unlock their full potential by providing innovative, engaging, and effective learning experiences that cater to the diverse needs of modern learners.
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-900">What We Do</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Innovation: We strive to stay at the forefront of educational technology and pedagogy</li>
              <li>Collaboration: We believe that partnerships are key to achieving our goals</li>
              <li>Empathy: We prioritize understanding and catering to the diverse needs of our learners</li>
              <li>Excellence: We strive for excellence in everything we do, from content creation to platform development</li>
              <li>Authenticity: We are committed to authenticity in all our interactions, whether with learners, educators, or partners.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900">Our Impact</h3>
            <p className="text-gray-600">
              Since our inception, we&apos;ve helped over 10,000 students achieve their educational goals, awarding more than $50 million in scholarships across the nation.
            </p>
          </div>

          <div className="space-y-8">
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://img.freepik.com/free-photo/happy-student-with-graduation-hat-diploma-grey_231208-12979.jpg?t=st=1721129976~exp=1721133576~hmac=5714cb70244d368ee97c24b2e0b08ae8629a3591c5b157d04ee915a70f7d3036&w=996"
                alt="Students collaborating"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-red-100 p-4 rounded-lg text-center">
                <h4 className="text-2xl font-bold text-red-600">10,000+</h4>
                <p className="text-sm text-gray-600">Students Supported</p>
              </div>
              <div className="bg-blue-100 p-4 rounded-lg text-center">
                <h4 className="text-2xl font-bold text-blue-600">$50M+</h4>
                <p className="text-sm text-gray-600">Scholarships Awarded</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
