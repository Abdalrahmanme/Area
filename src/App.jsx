import "./App.css";
import {
  Nav,
  Header,
  Logo,
  Benefits,
  Features,
  Table,
  Testimonial,
  Howto,
  CTA,
  Image,
  Footer,
} from "./Components/connect.js";

function App() {
  const style = {
    backgroundColor: "black",
    height: "1500px",
  }

  return (
    <div className="container">
      <Nav />
      <Header />
      <Logo />
      <Benefits />
      <Features />
      <Table />
      <Testimonial />
      <Howto />
      <Image />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
