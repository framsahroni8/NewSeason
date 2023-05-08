import { Headline } from 'components/Headline';
import './Home.scss';
import { ContactUs } from 'components/ContactUs';
import { Menu } from 'components/Menu'
import Navbar from 'components/NavBar/NavBar';
import { Footer } from 'components/Footer';
import { Locations } from 'components/Locations';
import { Reviews } from 'components/Reviews';

const Home = () => {
  return (
    <>
     <Headline/>
     <Menu/>
     <Locations />
     <Reviews/>
    <ContactUs/>
    </>
   
  )
};

export default Home;