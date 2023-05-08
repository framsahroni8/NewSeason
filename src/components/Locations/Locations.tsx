import { LocationData, LocationDetailComponent } from 'ui-kit/LocationDetailComponent'
import { TextDivider } from 'ui-kit/TextDivider'
import './Locations.scss'

const Locations = () => {
    const LocationDetail: LocationData[] = [
        {
            id: 1,
            title: 'Senopati, Petogogan',
            detail: 'Santa Modern Market, Lt.1, Blok CKS 5, Jl. Cipaku I No.1, Petogogan, Jakarta Selatan'
        },
        {
            id: 2,
            title: 'Kebon Jeruk / Tanjung Duren',
            detail: 'Komplek Ruko Greenville Maisonet Blok D Nomor 9, RT.7/RW.5, North Tanjung Duren, Jakarta Barat'
        },
        {
            id: 3,
            title: 'Food Plaza PIK',
            detail: 'Food Plaza PIK FMA-16, Kamal Muara, Penjaringan Jakarta Utara'
        },
        {
            id: 4,
            title: 'Kuningan - D\'Kanteen',
            detail: 'D Kanteen, Jl. Komando Raya No.18, DKI Jakarta 12920'
        },
        {
            id: 5,
            title: 'Bintaro, Thelapan Square',
            detail: 'Jl. Jurang Mangu Bar. No.38, Kota Tangerang Selatan, Banten'
        },
        {
            id: 6,
            title: 'Gading Serpong',
            detail: 'Ruko Golden 8, Jl. Ki Hajar Dewantara Jl. Boulevard Raya Gading Serpong No.25, West Pakulonan, Kelapa Dua, Tangerang Regency, Banten 15810'
        },
        {
            id: 7,
            title: 'Cipete',
            detail: 'Jl. Cipete Raya No.74c, RW.3, Cipete akarta Selatan 12410'
        },
        {
            id: 8,
            title: 'Menteng',
            detail: 'Jl. H. Agus Salim No.60, Menteng, Jakarta Pusat 10350'
        },
    ];

  return (
    <div  className='locationsWrapper'>
      <div className='locationsContainer'>
        <div>
          <TextDivider>Locations</TextDivider>
        </div>
        <div>
            <LocationDetailComponent options={LocationDetail} />
        </div>
      </div>
    </div>
  )
}

export default Locations
