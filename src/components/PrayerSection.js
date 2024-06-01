import React from 'react';
import FajrImage from '../assets/img6.jpg';
import DhuhrImage from '../assets/img4.jpg';
import AsrImage from '../assets/img5.jpg';
import MaghribImage from '../assets/img3.jpg';
import IshaImage from '../assets/img8.jpg';
import JumuahImage from '../assets/img12.avif';

const PrayerSection = () => {
  // Sample data for five daily prayers
  const prayersData = [
    {
      name: 'Fajr',
      time: 'Before Sunrise',
      benefits: ['Spiritual start to the day', 'Encourages discipline'],
      image: FajrImage
    },
    {
      name: 'Dhuhr',
      time: 'Noon',
      benefits: ['Breaks from daily work', 'Spiritual refreshment'],
      image: DhuhrImage
    },
    {
      name: 'Asr',
      time: 'Afternoon',
      benefits: ['Reminds of Allah’s presence', 'Boosts patience and perseverance'],
      image: AsrImage
    },
    {
      name: 'Maghrib',
      time: 'At Sunset',
      benefits: ['Signifies the end of the day’s fast', 'Encourages gratitude'],
      image: MaghribImage
    },
    {
      name: 'Isha',
      time: 'Night',
      benefits: ['Completes the daily prayers', 'Promotes good sleep'],
      image: IshaImage
    },
    {
      name: 'Jumu\'ah (Friday Prayer)', // Name adjusted
      time: 'Afternoon', // Time adjusted
      benefits: ['Special congregational prayer', 'Opportunity for community bonding'],
      image: JumuahImage // Image added
    }
  ];

  return (
    <section id='prayers' className="mt-8 bg-green-200 p-9 border rounded-md">
      <h2 className="text-4xl font-semibold text-green-800 mb-2 underline:text-green-300">Prayers</h2>
      <p className="text-green-700 mb-4 text-2xl">Daily Prayers</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
        {prayersData.map((prayer, index) => (
          <div key={index} className="bg-white p-5 rounded-lg shadow-md">
            <div className={`flex flex-col items-center ${prayer.name === 'Jumu\'ah (Friday Prayer)' ? 'justify-center' : ''}`}>
              <img src={prayer.image} alt={prayer.name} className="w-full h-40 object-cover mb-4 border rounded-md shadow-md" />
              <h3 className="text-lg font-semibold text-green-800">{prayer.name}</h3>
              <p className="text-sm text-green-700 mb-2">{prayer.time}</p>
              <ul className="list-disc list-inside text-sm text-green-700">
                {prayer.benefits.map((benefit, idx) => (
                  <li key={idx}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PrayerSection;
