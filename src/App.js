import React from 'react';
import './App.css'
import { useTrail, animated } from 'react-spring';
import Header from './components/Header';
import Home from './components/Home';
import PrayerSection from './components/PrayerSection';
import FastingSection from './components/FastingSection';
import DutiesSection from './components/DutiesSection';
import VideoContent from './components/Videocontent';
import AdditionalContentSection from './components/AdditionalContentSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-green-50 min-h-screen">
      <Header />
      <main className="container mx-auto p-6">
        <Home /> {/* Add Home component here */}
        <PrayerSection />
        <FastingSection />
        <DutiesSection />
        <VideoContent></VideoContent>
        <AdditionalContentSection />
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
