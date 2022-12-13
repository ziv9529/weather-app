export function convertFahrenheitToCelsius(FahrenheitValue: number): number {
    const tempResult = ((FahrenheitValue - 32) * 0.5556)
    return Number(tempResult.toFixed())
}

export const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
