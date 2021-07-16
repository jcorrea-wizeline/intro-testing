const fetch = require("node-fetch")

module.exports.getRandomNumberFactService = async () => {
  try {
    const response = await fetch("http://numbersapi.com/random/year?json", {
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();

    return data;
  } catch (e) {
    return e;
  }
};
