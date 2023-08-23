import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import { fetchTopAlbum, fetchNewAlbums } from "./api/api";
import Section from './components/Section/Section'

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Section title="Top Album" dataSource={fetchTopAlbum} type="album" />
      <Section title="New Album" dataSource={fetchNewAlbums} type="album" />
    </>
  );
}

export default App;
