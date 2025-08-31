import React from 'react';
import Link from 'next/link';

export default function FlowZenDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link 
          href="/" 
          className="fixed top-6 left-6 bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full hover:scale-105 transition-all z-50"
        >
          ← Back to Portfolio
        </Link>
        
        {/* Header */}
        <div className="text-center mb-12 pt-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-4">FlowZen</h1>
          <p className="text-xl text-gray-300">Advanced Android Workflow Automation App - Screenshots</p>
        </div>
        
        {/* Screenshots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Main Dashboard */}
          <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 hover:transform hover:-translate-y-2 transition-all border border-gray-700">
            <div className="bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl h-64 mb-4 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-2">📱</div>
                <div className="text-lg">Main Dashboard</div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-red-400 mb-2">Main Dashboard</h3>
            <p className="text-gray-300 text-sm">
              The main FlowZen dashboard featuring six core modules: Text & Image AI, Chat with AI, Create Workflow, Maps, CamFlow, and AI Assistant. Each module shows available AI models and provides quick access to different automation features.
            </p>
          </div>
          
          {/* Sign In Screen */}
          <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 hover:transform hover:-translate-y-2 transition-all border border-gray-700">
            <div className="bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl h-64 mb-4 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-2">🔐</div>
                <div className="text-lg">Sign In Screen</div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-red-400 mb-2">Sign In Screen</h3>
            <p className="text-gray-300 text-sm">
              Clean authentication interface with email/password login and Google Sign-In options. Features the FlowZen branding with the tagline &ldquo;Be ready anywhere, anytime!&rdquo; and modern dark theme design.
            </p>
          </div>
          
          {/* AI Assistant Chat */}
          <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 hover:transform hover:-translate-y-2 transition-all border border-gray-700">
            <div className="bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl h-64 mb-4 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-2">🤖</div>
                <div className="text-lg">AI Assistant Chat</div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-red-400 mb-2">AI Assistant Chat</h3>
            <p className="text-gray-300 text-sm">
              Intelligent AI chat interface with model selection (Gemma-3n-E2B-it-int4). The AI can handle general conversation and create specific workflows for email summarization, geofencing, and text extraction from documents.
            </p>
          </div>
          
          {/* Geofence Map */}
          <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 hover:transform hover:-translate-y-2 transition-all border border-gray-700">
            <div className="bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl h-64 mb-4 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-2">🗺️</div>
                <div className="text-lg">Geofence Map</div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-red-400 mb-2">Geofence Map</h3>
            <p className="text-gray-300 text-sm">
              Interactive Google Maps integration for creating location-based geofences. Features radius control (500m), expiration settings, email connection for notifications, and real-time map visualization with custom markers.
            </p>
          </div>
        </div>
        
        {/* Features List */}
        <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700">
          <h2 className="text-3xl font-bold text-orange-400 text-center mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-3 p-4 bg-gray-700/50 rounded-lg">
              <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white text-lg">🤖</div>
              <span className="text-gray-300 text-sm">AI Assistant with Natural Language Processing</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-700/50 rounded-lg">
              <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white text-lg">📧</div>
              <span className="text-gray-300 text-sm">Email Summarization & Automation</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-700/50 rounded-lg">
              <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white text-lg">📱</div>
              <span className="text-gray-300 text-sm">Telegram Integration & Notifications</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-700/50 rounded-lg">
              <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white text-lg">📷</div>
              <span className="text-gray-300 text-sm">CamFlow AI Image Analysis</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-700/50 rounded-lg">
              <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white text-lg">🗺️</div>
              <span className="text-gray-300 text-sm">Maps & Geofencing</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-700/50 rounded-lg">
              <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white text-lg">⚡</div>
              <span className="text-gray-300 text-sm">Workflow Automation</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-700/50 rounded-lg">
              <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white text-lg">🔧</div>
              <span className="text-gray-300 text-sm">On-Device AI Models</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-700/50 rounded-lg">
              <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white text-lg">📊</div>
              <span className="text-gray-300 text-sm">Background Task Management</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
