import Announcement from "./components/Announcement.js";
import Camps from "./components/Camps.js";
import Footer from "./components/Footer.js";
import Grads from "./components/Grads.js";
import Hire from "./components/Hire.js";
import Landing from "./components/Landing.js";
import Navbar from "./components/Navbar.js";
import Partners from "./components/Partners.js";
import Testimonial from "./components/Testimonial.js";
import Upcoming from "./components/Upcoming.js";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Announcement />
      <Landing />
      <Camps />
      <Upcoming />
      <Partners />
      <Testimonial />
      <Grads />
      <Hire />
      <Footer />
    </div>
  );
}

export default App;
