/**
 * Įvedus automobilio marke, degalu kieki bake ir kiek sunaudoja degalu mieste, automagistralėje ir vidutiniškai, grąžinamas sakinys ir suskaiciuojama kiek kilometru gali nuvaziuoti autoomobilis
 * @param {string} carName Automobilio modelis
 * @param {number} fuelInTank Degalu kiekis bake
 * @param {number} consHighway Degalu sąnaudos automagistraleje
 * @param {number} consAverage Vidutinės degalu sanaudos 
 * @param {number} consTown Degalų sąnaudos mieste
 * @returns Sakinys
 */

function car(carName, fuelInTank, consHighway, consAverage, consTown) {
    const highwayKm = Math.floor(fuelInTank * 100 / consHighway)
    const averageKm = Math.floor(fuelInTank * 100 / consAverage)
    const townKm = Math.floor(fuelInTank * 100 / consTown)

    return `${carName} su ${fuelInTank}l baku, gali nuvaziuoti ${highwayKm}km (magistralej, kai sanaudos yra ${consHighway}l/100km), ${averageKm}km (vidutiniskai, kai sanaudos yra ${consAverage}l/100km) ir ${townKm}km (mieste, kai sanaudos yra ${consTown}l/100km).`
}

module.exports = car;