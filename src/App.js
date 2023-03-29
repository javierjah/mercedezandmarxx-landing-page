import Header from "./components/header";
import EventsBanner from "./components/banner-events";
import NewAlbum from "./components/new-album";
import Tweets from "./components/tweets/img-tweets";

function App() {
  return (
    <div className="app">
      <Header />
      <EventsBanner />
      <NewAlbum />
      <Tweets />
    </div>
  );
}

export default App;
