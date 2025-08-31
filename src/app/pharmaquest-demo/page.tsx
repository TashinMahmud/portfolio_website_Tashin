export default function PharmaQuestDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <a 
          href="/" 
          className="fixed top-6 left-6 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full hover:bg-white/30 transition-all z-50"
        >
          ← Back to Portfolio
        </a>
        
        {/* Header */}
        <div className="text-center mb-12 pt-16">
          <h1 className="text-5xl font-bold text-white mb-4">PharmaQuest</h1>
          <p className="text-xl text-white/80">Interactive Medicine Quiz Game - App Screenshots</p>
        </div>
        
        {/* Screenshots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Welcome Screen */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:transform hover:-translate-y-2 transition-all">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl h-64 mb-4 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-2">🎯</div>
                <div className="text-lg">Welcome Screen</div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Welcome Screen</h3>
            <p className="text-white/80 text-sm">
              Beautiful landing page with soft gradient background (light blue to light pink). Features the "PharmaQuest" title in gradient text, welcome message "Welcome to the world of medicine adventures!", name input field, and a gradient "Start" button with arrow icon.
            </p>
          </div>
          
          {/* World Map Game */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:transform hover:-translate-y-2 transition-all">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl h-64 mb-4 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-2">🗺️</div>
                <div className="text-lg">World Map Game</div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">World Map Game</h3>
            <p className="text-white/80 text-sm">
              Interactive world map interface showing game progress. Displays "Welcome, Tashin!" with current score (0), progress bar, and "Countries unlocked: 1/6". Countries like Sweden, England, Spain, Japan, Australia are marked, with Bangladesh highlighted in green as the unlocked country.
            </p>
          </div>
          
          {/* Quiz Question 1 */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:transform hover:-translate-y-2 transition-all">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl h-64 mb-4 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-2">❓</div>
                <div className="text-lg">Quiz Question 1</div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Quiz Question 1</h3>
            <p className="text-white/80 text-sm">
              Quiz modal asking "What is the most common antibiotic used in Bangladesh?" with four options: Amoxicillin, Ciprofloxacin, Azithromycin, and Penicillin. Features gradient header with "Question 1/3", clean white design, and navigation buttons (Cancel/Next).
            </p>
          </div>
          
          {/* Quiz Question 2 */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:transform hover:-translate-y-2 transition-all">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl h-64 mb-4 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-2">✅</div>
                <div className="text-lg">Quiz Question 2</div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Quiz Question 2</h3>
            <p className="text-white/80 text-sm">
              Second quiz question: "Which disease is most prevalent in Bangladesh?" Options include Malaria, Dengue, Tuberculosis (correctly selected with green highlight and checkmark), and HIV. Shows the interactive quiz system with visual feedback for correct answers.
            </p>
          </div>
          
          {/* Country Completion */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:transform hover:-translate-y-2 transition-all">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl h-64 mb-4 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-2">🎉</div>
                <div className="text-lg">Country Completion</div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Country Completion</h3>
            <p className="text-white/80 text-sm">
              Congratulations modal with party hat icon and "You completed this country! Choose a Country to unlock next:" message. Features five country buttons (Japan, Australia, Sweden, Spain, England) in alternating green and blue colors, allowing players to select their next challenge.
            </p>
          </div>
        </div>
        
        {/* Features List */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-lg">🌍</div>
              <span className="text-white/90 text-sm">Interactive World Map Navigation</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-lg">🧠</div>
              <span className="text-white/90 text-sm">Medicine-Related Quiz System</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-lg">🔓</div>
              <span className="text-white/90 text-sm">Country Unlocking Progress</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-lg">💾</div>
              <span className="text-white/90 text-sm">Local Storage Progress Saving</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-lg">📱</div>
              <span className="text-white/90 text-sm">Responsive Modern UI Design</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-lg">🎨</div>
              <span className="text-white/90 text-sm">Beautiful Gradient Design</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-lg">⚡</div>
              <span className="text-white/90 text-sm">Fast Interactive Experience</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-lg">🏆</div>
              <span className="text-white/90 text-sm">Score Tracking System</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
