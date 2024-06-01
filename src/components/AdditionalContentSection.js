import React from 'react';
import ProphetsImage from '../assets/img28.jpg'; // Import the image

const AdditionalContentSection = () => {
  // Sample additional Islamic content
  const additionalContent = {
    title: 'Islamic Prophets (Anbiya)',
    description: 'In Islam, it is believed that Allah sent 124,000 prophets to guide humanity. However, only 25 of these prophets are mentioned by name in the Quran. These prophets are revered figures, chosen by Allah to deliver His message. Muslims follow the teachings of these prophets, culminating in the final prophet, Muhammad (SAW), who brought the Quran, the final revelation.',
    details: [
      'Adam (AS) - The first prophet and the father of humanity.',
      'Noah (AS) - Built the Ark and survived the great flood.',
      'Abraham (AS) - Known as the father of prophets and the patriarch of monotheism.',
      'Moses (AS) - Received the Torah and led the Israelites out of Egypt.',
      'Jesus (AS) - Known as Isa in Islam, born miraculously to Maryam (AS), and is a revered prophet.',
      'Muhammad (SAW) - The final prophet and the seal of the prophets, who received the Quran from Allah.'
    ]
  };

  return (
    <section id='additional' className="mt-8 bg-green-300 p-7 border rounded-md font-sans">
      <h2 className="text-2xl font-semibold text-green-800 mb-2">{additionalContent.title}</h2>
      <p className="text-green-700 mb-4">{additionalContent.description}</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center bg-green-200 p-4 rounded-lg shadow-md">
        <div>
          <img src={ProphetsImage} alt="Prophets" className="w-full h-auto object-cover rounded-lg shadow-md" />
        </div>
        <div>
          <ul className="list-disc list-inside text-sm text-green-700">
            {additionalContent.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AdditionalContentSection;
