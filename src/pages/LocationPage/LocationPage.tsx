import Locations, { LocationDetail } from 'components/Locations/Locations'
import { LocationDetailComponent } from 'ui-kit/LocationDetailComponent'
import { LocationsMap } from 'ui-kit/LocationsMap'
import { TextDivider } from 'ui-kit/TextDivider'
import './LocationPage.scss'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Impor stylesheet AOS
import { useEffect } from 'react'

const LocationPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <div className='locationPageWrapper' data-aos="fade-up"
    data-aos-duration="3000">
      <div className='locationText'>
        <TextDivider>Locations</TextDivider>
      </div>
      <div>
        <LocationDetailComponent isMap options={LocationDetail} />
      </div>
    </div>
  )
}
export default LocationPage
