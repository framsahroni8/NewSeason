import Locations, { LocationDetail } from 'components/Locations/Locations'
import { LocationDetailComponent } from 'ui-kit/LocationDetailComponent'
import { LocationsMap } from 'ui-kit/LocationsMap'
import { TextDivider } from 'ui-kit/TextDivider'
import './LocationPage.scss'

const LocationPage = () => {
  return (
    <div className='locationPageWrapper'>
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
