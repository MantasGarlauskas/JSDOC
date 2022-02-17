/**
 * Įvedus automobilio marke, degalu kieki bake ir kiek sunaudoja degalu mieste, automagistralėje ir vidutiniškai, grąžinamas sakinys ir suskaiciuojama kiek kilometru gali nuvaziuoti autoomobilis
 * @param {String} carName Automobilio modelis
 * @param {Number} fuelInTank Degalu kiekis bake
 * @param {Number} consHighway Degalu sąnaudos automagistraleje
 * @param {Number} consAverage Vidutinės degalu sanaudos 
 * @param {Number} consTown Degalų sąnaudos mieste
 * @returns Sakinys
 */

function car(carName, fuelInTank, consHighway, consAverage, consTown) {
    const highwayKm = fuelInTank * 100 / consHighway
    const averageKm = fuelInTank * 100 / consAverage
    const townKm = fuelInTank * 100 / consTown

    return `${carName} su ${fuelInTank} baku, gali nuvaziuoti ${highwayKm.toFixed()}km (magistralej, kai sanaudos yra ${consHighway}l/100km), ${averageKm.toFixed()}km (vidutiniskai, kai sanaudos yra ${consAverage}l/100km) ir ${townKm.toFixed()}km (mieste, kai sanaudos yra ${consTown}l/100km`
}

module.exports = car;