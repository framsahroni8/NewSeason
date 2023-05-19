import { LocationData, LocationDetailComponent } from 'ui-kit/LocationDetailComponent'
import { TextDivider } from 'ui-kit/TextDivider'
import './Locations.scss'

export const LocationDetail: LocationData[] = [
  {
    id: 1,
    title: 'Senopati, Petogogan',
    detail: 'Santa Modern Market, Lt.1, Blok CKS 5, Jl. Cipaku I No.1, Petogogan, Jakarta Selatan',
    map: 'https://maps.google.com/maps?q=-6.238468781972374%2C%20106.81199375374425&t=m&z=12&output=embed&iwloc=near',
  },
  {
    id: 2,
    title: 'Kebon Jeruk / Tanjung Duren',
    detail:
      'Komplek Ruko Greenville Maisonet Blok D Nomor 9, RT.7/RW.5, North Tanjung Duren, Jakarta Barat',
    map: 'https://maps.google.com/maps?q=-6.1699343%2C106.7771486&t=m&z=12&output=embed&iwloc=near',
  },
  {
    id: 3,
    title: 'Food Plaza PIK',
    detail: 'Food Plaza PIK FMA-16, Kamal Muara, Penjaringan Jakarta Utara',
    map: 'https://maps.google.com/maps?q=-6.103943739439227%2C%20106.74153899962582&t=m&z=12&output=embed&iwloc=near',
  },
  {
    id: 4,
    title: 'Kuningan - D\'Kanteen',
    detail: 'D Kanteen, Jl. Komando Raya No.18, DKI Jakarta 12920',
    map: 'https://maps.google.com/maps?q=D Kanteen, Jl. Komando Raya No.18, DKI Jakarta 12920&t=&z=10&ie=UTF8&iwloc=&output=embed',
  },
  {
    id: 5,
    title: 'Bintaro, Thelapan Square',
    detail: 'Jl. Jurang Mangu Bar. No.38, Kota Tangerang Selatan, Banten',
    map: 'https://maps.google.com/maps?q=-6.2152106%2C106.8199612&t=m&z=12&output=embed&iwloc=near',
  },
  {
    id: 6,
    title: 'Gading Serpong',
    detail:
      'Ruko Golden 8, Jl. Ki Hajar Dewantara Jl. Boulevard Raya Gading Serpong No.25, West Pakulonan, Kelapa Dua, Tangerang Regency, Banten 15810',
    map: 'https://maps.google.com/maps?q=-6.2424201%2C106.6358475&t=m&z=12&output=embed&iwloc=near',
  },
  {
    id: 7,
    title: 'Cipete',
    detail: 'Jl. Cipete Raya No.74c, RW.3, Cipete Jakarta Selatan 12410',
    map: 'https://maps.google.com/maps?q=Jl. Cipete Raya No.74c, RW.3, Cipete Jakarta Selatan 12410&t=&z=10&ie=UTF8&iwloc=&output=embed',
  },
  {
    id: 8,
    title: 'Menteng',
    detail: 'Jl. H. Agus Salim No.60, Menteng, Jakarta Pusat 10350',
    map: 'https://maps.google.com/maps?q=Jl. H. Agus Salim No.60, Menteng, Jakarta Pusat 10350&t=&z=10&ie=UTF8&iwloc=&output=embed',
  },
]

const Locations = () => {
  return (
    <div className='locationsWrapper'>
      <div className='locationsContainer'>
        <div>
          <div className='locationsTitle mb-5'>
            <TextDivider>Locations</TextDivider>
          </div>
        </div>
        <div>
          <LocationDetailComponent isMap={false} options={LocationDetail} />
        </div>
      </div>
    </div>
  )
}

export default Locations
