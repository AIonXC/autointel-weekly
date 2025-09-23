import React, { useState, useEffect } from 'react';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [currentArticle, setCurrentArticle] = useState(0);

  // Mock data basado en tus documentos (AI in Automotive USA 2025, Infosys, IBM, Fullpath)
  const featuredArticles = [
    {
      title: "Generative AI in Automotive Design: GM & Ford Lead the Charge",
      source: "AI in Automotive USA 2025",
      summary: "How GM and Ford are using generative AI to cut design time by 40%, with case studies from their 2025 conferences. Experts like Sudeep Chavare (GM) and Gbenga Ladapo (Ford) showcase real-world applications.",
      impact: "High",
      tags: ["Generative AI", "Design", "OEMs"]
    },
    {
      title: "The Semiconductor Crisis: Why Mature Chips Are the New Gold",
      source: "Infosys Automotive Outlook 2025",
      summary: "Ford, GM and Japanese OEMs form chip consortiums as mature chip shortage threatens 2025 production. Infosys forecasts $155B market by 2032, with mature chips critical for basic vehicle functions.",
      impact: "Critical",
      tags: ["Chips", "Supply Chain", "Hardware"]
    },
    {
      title: "Dealerships Report 30% Revenue Boost with AI Personalization",
      source: "Fullpath AI Sentiment Report 2024",
      summary: "91% of dealers say AI is crucial for data activation. 81% increasing AI budgets in 2025. AI enhances jobs without replacing humans — 72% of dealers agree. Personalization drives revenue growth.",
      impact: "High",
      tags: ["Dealerships", "AI Adoption", "Revenue"]
    },
    {
      title: "SDVs Will Be 90% of Production by 2029 — Are You Ready?",
      source: "Infosys & IBM Reports",
      summary: "Software-Defined Vehicles require new architectures, talent, and business models. ASPICE compliance reduces bugs by 30%. IBM reports 79% of OEMs expect AI to drive SDV progress by 2028.",
      impact: "Transformative",
      tags: ["SDV", "Software", "Architecture"]
    },
    {
      title: "Honda’s AI Robot & Hyundai’s Holographic Windshield: The New In-Car Experience",
      source: "Infosys & CES 2025",
      summary: "Honda’s 0 Series EVs feature a talking robot assistant. Hyundai Mobis debuts full-windshield holographic display. But safety concerns grow — Hyundai is bringing back physical buttons due to distraction complaints.",
      impact: "Innovative",
      tags: ["In-Car Experience", "AI Assistants", "UX"]
    },
    {
      title: "Toyota’s Digital Twin Revolution: Simulating Production in Real-Time",
      source: "Infosys Automotive Outlook 2025",
      summary: "Toyota uses digital twins to run 'what-if' scenarios, optimizing production lines based on real demand. Post-pandemic, JIS (Just-in-Sequence) models rely on real-time data from IoT sensors and AI analytics.",
      impact: "Efficiency",
      tags: ["Digital Twin", "Manufacturing", "Toyota"]
    },
    {
      title: "Mercedes-Benz Achieves Level 3 Autonomy in the U.S.",
      source: "Infosys & Goldman Sachs",
      summary: "First OEM to achieve Level 3 in the U.S. Drivers can take eyes off road on highways — but must be ready to intervene. Goldman Sachs predicts 10% of cars will have Level 3 by 2030. Regulatory hurdles remain.",
      impact: "Landmark",
      tags: ["Autonomy", "Level 3", "Regulation"]
    },
    {
      title: "IBM & Honda: AI Slashes Knowledge Transfer Time by 67%",
      source: "IBM Institute for Business Value",
      summary: "Honda used IBM’s generative AI to convert technical diagrams into text, reducing modeling time from 3 years to 1. AI extracts expert knowledge, accelerating innovation and onboarding for next-gen engineers.",
      impact: "Breakthrough",
      tags: ["Generative AI", "Knowledge Transfer", "IBM"]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentArticle((prev) => (prev + 1) % featuredArticles.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800'}`}>
      {/* Header */}
      <header className="border-b border-blue-500/20 sticky top-0 z-50 backdrop-blur-sm bg-gray-900/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7 0a1 1 0 100-2 1 1 0 000 2zm-7 4a1 1 0 100-2 1 1 0 000 2zm3-4a1 1 0 100-2 1 1 0 000 2zm3 4a1 1 0 100-2 1 1 0 000 2zm3-4a1 1 0 100-2 1 1 0 000 2zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              AutoIntel Weekly
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-800 transition-colors"
            >
              {darkMode ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 000 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-4 py-2 rounded-lg font-medium transition-all transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-cyan-900/20"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Intelligence
              </span>
              <br />
              <span className="text-white">for the Automotive AI Era</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Every Monday, receive the 8 most impactful insights on AI, SDVs, and electrification — curated by experts, powered by AI, 100% legal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-lg">
                Get This Week's Report
              </button>
              <button className="border border-cyan-500/50 hover:border-cyan-400 px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:bg-cyan-500/10">
                View Sample
              </button>
            </div>
          </div>
        </div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </section>

      {/* Featured Article Rotator */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">This Week's Featured Insight</h3>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300">
            <div className="flex justify-between items-start mb-4
            export default App;

