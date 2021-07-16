const { getRandomNumberFactService } = require("./number-facts-service")

module.exports.getRandomNumberFact = async () => {
  const randomNumberFact = await getRandomNumberFactService();
  return randomNumberFact;
};
