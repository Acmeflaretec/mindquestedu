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
              At MindQuest, we believe that every student deserves the opportunity to pursue higher education. Our mission is to break down financial barriers and provide resources that enable students to unlock their full potential.
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-900">What We Do</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Offer a wide range of scholarships across various fields of study</li>
              <li>Provide guidance and support throughout the application process</li>
              <li>Connect students with mentors and educational resources</li>
              <li>Organize workshops and seminars to enhance students' skills</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900">Our Impact</h3>
            <p className="text-gray-600">
              Since our inception, we've helped over 10,000 students achieve their educational goals, awarding more than $50 million in scholarships across the nation.
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