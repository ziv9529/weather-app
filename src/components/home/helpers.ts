import { AutofillResults } from "../../services/autofill";

export function convertFahrenheitToCelsius(FahrenheitValue: number): number {
    const tempResult = ((FahrenheitValue - 32) * 0.5556)
    return Number(tempResult.toFixed())
}
export function convertCelsiusToFahrenheit(CelsiusValue: number): number {
    const tempResult = ((CelsiusValue * 1.8) + 32)
    return Number(tempResult.toFixed())
}
export function removeDuplicatesCities(arr:AutofillResults[]) {
    let result = arr.filter(
        (city:AutofillResults, index:number) => index === arr.findIndex(
          other => city.location === other.location
        ));
    return result

}
export const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
