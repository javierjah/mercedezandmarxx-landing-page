import Header from "./components/header";
import EventsBanner from "./components/banner-events";
import NewAlbum from "./components/new-album";

function App() {
  return (
    <div className="app">
      <Header />
      <EventsBanner />
      <NewAlbum />
    </div>
  );
}

export default App;
