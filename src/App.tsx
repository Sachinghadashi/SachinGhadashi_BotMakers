import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EventsSection } from './components/EventsSection';
import { UserJourney } from './components/UserJourney';
import { BotLeagueAbout } from './components/BotLeagueAbout';
import { DisciplinesSection } from './components/DisciplinesSection';
import { WhyRegister } from './components/WhyRegister';
import { FooterEcosystem } from './components/FooterEcosystem';

function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-white flex flex-col">
      {/* Top Header/Navigation Bar */}
      <Navbar />

      {/* Main Banner / Hero Section */}
      <Hero />

      {/* Main Event Sections (Live, Upcoming, Past Results) */}
      <main className="flex-grow">
        <EventsSection />
        <UserJourney />
        <BotLeagueAbout />
        <DisciplinesSection />
        <WhyRegister />
      </main>

      {/* Complete Rich Footer Ecosystem */}
      <FooterEcosystem />
    </div>
  );
}

export default App;
