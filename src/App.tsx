import AboutUs from "./components/sections/about-us";
import ClientStories from "./components/sections/client-stories";
import Footer from "./components/sections/footer";
import GetInTouch from "./components/sections/get-in-touch";
import Header from "./components/sections/header";
import Hero from "./components/sections/hero";
import OurServices from "./components/sections/our-services";
import Why from "./components/sections/why";

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <Why />
      <AboutUs />
      <OurServices />
      <ClientStories />
      <GetInTouch />
      <Footer />
    </main>
  );
}

export default App;
