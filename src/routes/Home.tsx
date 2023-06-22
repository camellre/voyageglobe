import Footer from "../components/Footer/Footer";
import HomePage from "../components/HomePage/HomePage";
import NavBar from "../components/NavBar/NavBar";

function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <HomePage />
      <Footer />
    </>
  );
}

export default Home;
