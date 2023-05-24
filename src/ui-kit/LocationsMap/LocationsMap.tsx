import { LocationDetail } from 'components/Locations/Locations'
import { LocationDetailComponent } from 'ui-kit/LocationDetailComponent'

export const LocationsMap = () => {
    return(
        <div className='inline'>
            <iframe src='https://maps.google.com/maps?q=-6.238468781972374%2C%20106.81199375374425&t=m&z=12&output=embed&iwloc=near'></iframe>
            <LocationDetailComponent options={LocationDetail} isMap={false}/>
        </div>
    )
}