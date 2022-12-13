import axios from "axios";
import { API_KEY } from "./api_key";

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
  // const { data } = await axios.get(`${autoCompleteUrl}?apikey=${API_KEY}&q=${location_input}`);
  // const result: AutofillResults[] = data?.map((r: AutofillRootObject) => { return { key: r.Key, location: r.AdministrativeArea.LocalizedName } })
  // return result;
  return [{key:'215854',location:'Tel Aviv'}]
}