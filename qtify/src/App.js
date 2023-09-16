import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import {
  fetchTopAlbum,
  fetchNewAlbums,
  fetchSongs,
  fetchFilters,
} from "./api/api";
import Section from "./components/Section/Section";
import Accordian from "./components/Accordian/Accordian"
// import {data} from './Data/Data'



function App() {
  // const generateSongs = async()=>{
  //   const response = await axios.get(data)
  // }
  return (
    <>
      <NavBar />
      <Hero />
      <Section title="Top Album" dataSource={fetchTopAlbum} type="album" />
      <Section title="New Album" dataSource={fetchNewAlbums} type="album" />
      <hr
        style={{
          background: "var(--color-primary)",
          height: "1px",
          border: "none",
        }}
      />
      {/* {console.log("Fetching the songs: ",data)} */}
      {/* {console.log("Filtering songs: ",fetchFilters)} */}
      <Section
        title="Songs"
        dataSource={fetchSongs}
        filterSource={fetchFilters}
        type="songs"
      />
      <hr
        style={{
          background: "var(--color-primary)",
          height: "1px",
          border: "none",
        }}
      />
      <Accordian />
    </>
  );
}

export default App;
