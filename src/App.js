import Players from "./components/Players/Players";
import FootballTeams from "./components/Teams/FootballTeams";
import { FootballTeamsProvider } from "./context/context";

function App() {
  return (
    <FootballTeamsProvider>
      <FootballTeams />
      <Players />
    </FootballTeamsProvider>
  );
}

export default App;
