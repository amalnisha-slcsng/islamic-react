import React from 'react';
import ShahadaImage from '../assets/img19.jpg'; // Import the image for Shahada
import PrayerImage from '../assets/img14.webp';
import FastingImage from '../assets/img20.jpeg';
import ZakatImage from '../assets/img22.jpg';
import HajjImage from '../assets/img23.jpg';
import QuranImage from '../assets/img21.jpg';

const DutiesSection = () => {
  // Sample data for important duties
  const dutiesData = [
    {
      name: 'Profession of Faith (Shahada)',
      description: 'The Shahada is the Islamic declaration of faith: "There is no god but Allah, and Muhammad is the messenger of Allah." It is the first pillar of Islam and signifies the acceptance of Allah as the one true God and Muhammad as His prophet.',
      image: ShahadaImage
    },
    {
      name: 'Prayer',
      description: 'Performing the five daily prayers (Salah) is one of the fundamental duties in Islam. Muslims are required to pray at specific times throughout the day to maintain spiritual connection with Allah.',
      image: PrayerImage
    },
    {
      name: 'Fasting',
      description: 'Fasting during the month of Ramadan is obligatory for all adult Muslims (with exceptions such as illness, travel, etc.). It involves abstaining from food, drink, and other physical needs during daylight hours.',
      image: FastingImage
    },
    {
      name: 'Zakat',
      description: 'Zakat is the obligatory giving of a set portion of one\'s wealth to charity, typically 2.5% of savings, wealth, and annual income. It is considered a form of almsgiving and social responsibility.',
      image: ZakatImage
    },
    {
      name: 'Hajj',
      description: 'Hajj is the pilgrimage to the holy city of Mecca, which is obligatory for every financially and physically able Muslim at least once in their lifetime. It is one of the Five Pillars of Islam.',
      image: HajjImage
    },
    {
      name: 'Quran',
      description: 'Reading, understanding, and following the teachings of the Quran is one of the core duties of every Muslim. The Quran is the holy book of Islam, believed to be the word of Allah as revealed to the Prophet Muhammad (peace be upon him).',
      image: QuranImage
    }
  ];

  return (
    <section id='duties' className="mt-8 font-sans bg-green-200 p-6 border rounded">
      <h2 className="text-4xl font-semibold text-green-800 mb-4 mt-4 ">Important Duties</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dutiesData.map((duty, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <img src={duty.image} alt={duty.name} className="w-full h-40 object-cover mb-4 border rounded-md shadow-md" />
            <h3 className="text-lg font-semibold text-green-800 mb-2">{duty.name}</h3>
            <p className="text-sm text-green-700">{duty.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DutiesSection;
