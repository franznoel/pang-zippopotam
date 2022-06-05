
export interface iUsPlace {
  placeName: string
  longitude: string
  state: string
  stateAbbreviation: string
  latitude: string
}

export interface iZippoInfo {
  postCode: string
  country: string
  countryAbbreviation: string
  places: iUsPlace[]
}

export interface iZippoUsPlace {
  'place name': string
  'longitude': string
  'state': string
  'state abbreviation': string
  'latitude': string
}
