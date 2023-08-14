import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import Card from './components/Cards/Card';
import CardComponent from './components/Card/CardComponent';
import image from './Assets/Rectangle 2138.png'
import styles from './App.module.css'


function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <div className= {styles.container}>
        <CardComponent />
        <Card
          Card_Image={image}
          Title="100 Follows"
          Description="Bollywood Tops"
        />
      </div>
    </>
  );
}

export default App;
