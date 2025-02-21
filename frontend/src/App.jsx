import Navbar from './components/Navbar'
import AiSuggestion  from './components/AiSuggestion'
import OutfitRecommendation  from './components/OutfitRecommendation'


function App() {
 

  return (
    <div className="bg-[#3A2F42] flex flex-row gap-3 h-screen w-screen">  
      <Navbar />
      <AiSuggestion />
      <OutfitRecommendation />
    </div>
  )
}

export default App
