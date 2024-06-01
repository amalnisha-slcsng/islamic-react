import React from 'react';
import video from '../assets/VID2.mp4'; // Correctly import the video file

const VideoContent = () => {
  return (
    <section id="additional-content" className="bg-green-400 text-green-800 py-8 px-6 m-4 rounded-md mr-6">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Understanding Salat al-Jama'ah Prayers</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-4">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <video
              width="100%"
              height="315"
              className='border rounded-md border-none shadow-lg'
              controls
              start
            >
              <source src={video} type="video/mp4" /> {/* Use the imported video */}
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="md:w-1/2">
            <p className="mb-4">
              Islam is a comprehensive way of life, encompassing both religious rituals and daily activities.
              Muslims follow the teachings of the Quran and the Sunnah of the Prophet Muhammad (PBUH).
            </p>
            <p className="mb-4">
            The congregational prayer, known as Jama'ah prayer, holds a special significance in Islam. When two or more people join together to pray, their collective devotion strengthens their bond as a community and enhances the spiritual atmosphere. According to Islamic teachings, participating in congregational prayers not only fosters unity among believers but also brings immense blessings. It is believed that the rewards for praying in congregation are multiplied, with the act being valued up to 27 times greater than praying individually.
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoContent;
