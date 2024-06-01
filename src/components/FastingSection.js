import React from 'react';
import FastingImage from '../assets/img13.jpg'; // Import the image

const FastingSection = () => {
  // Sample fasting content
  const fastingContent = {
    description: "Fasting, known as 'Sawm' in Arabic, is one of the Five Pillars of Islam. It involves abstaining from food, drink, smoking, and marital relations from dawn until sunset during the month of Ramadan. Fasting is a form of self-discipline, spiritual reflection, and an opportunity to empathize with the less fortunate.",
    benefits: [
      "Strengthens self-discipline and willpower.",
      "Encourages spiritual growth and closeness to Allah.",
      "Promotes empathy and compassion towards the needy.",
      "Provides health benefits such as detoxification and improved digestion.",
      "Creates a sense of community and unity among Muslims worldwide."
    ]
  };

  return (
    <section id='fasting'className="mt-8 bg-green-400 p-8 border rounded-md font-sans">
      <h2 className="text-4xl font-semibold text-green-900 mb-2">Fasting</h2>
      <p className="text-green-700 mb-4 text-2xl">Information about fasting in Islam...</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center bg-green-100 p-4 rounded-lg shadow-md">
        <div>
          <h3 className="text-lg font-semibold text-green-800 mb-2">Description</h3>
          <p className="text-sm text-green-700 mb-4">{fastingContent.description}</p>
          <h3 className="text-lg font-semibold text-green-800 mb-2">Benefits</h3>
          <ul className="list-disc list-inside text-sm text-green-700">
            {fastingContent.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
        <div>
          <img src={FastingImage} alt="Fasting" className="w-full h-full object-cover rounded-lg shadow-md" />
        </div>
      </div>
    </section>
  );
}

export default FastingSection;
