import axios from "axios";

export interface Country {
  ID: string;
  LocalizedName: string;
}

export interface AdministrativeArea {
  ID: string;
  LocalizedName: string;
}

export interface AutofillRootObject {
  Version: number;
  Key: string;
  Type: string;
  Rank: number;
  LocalizedName: string;
  Country: Country;
  AdministrativeArea: AdministrativeArea;
}
export interface AutofillResults {
  key: string;
  location: string
}
const autoCompleteUrl = 'http://dataservice.accuweather.com/locations/v1/cities/autocomplete';

export async function getAutofillOptionsService(location_input: string): Promise<AutofillResults[]> {
  const response: AutofillRootObject[] = await axios.get(`${autoCompleteUrl}?apikey=${process.env.API_KEY}&q=${location_input}`);
  const result:AutofillResults[] = response.map((r: AutofillRootObject) => { return { key: r.Key, location: r.LocalizedName } })
  return result;
}