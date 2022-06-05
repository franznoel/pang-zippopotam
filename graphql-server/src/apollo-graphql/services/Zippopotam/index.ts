import { iUsPlace, iZippoInfo, iZippoUsPlace } from '@interfaces/iZippoInfo'
import axios from 'axios'

export const getZippoInfo = async (countryCode: string, postalCode: string): Promise<iZippoInfo> => {
  const zippoInfo = (await axios.get(`http://api.zippopotam.us/${countryCode}/${postalCode}`)
    .then((response): iZippoInfo => {
      const { data } = response

      const newPlaces: iUsPlace[] = data.places.map((place: iZippoUsPlace) => {
        const { latitude, longitude, state } = place
        return {
          latitude,
          longitude,
          state,
          placeName: place['place name'],
          stateAbbreviation: place['state abbreviation']
        }
      })

      return {
        country: data.country,
        countryAbbreviation: data['country abbreviation'],
        postCode: data['post code'],
        places: newPlaces
      } as iZippoInfo
    })
    .catch((error) => {
      console.error(error)
    })) as iZippoInfo
  return zippoInfo
}
