import Chance from "chance";

const chance = new Chance();

export default function handler(request, response) {
  const character = {
    firstName: chance.first(),
    lastName: chance.last(),
    birthday: chance.birthday(),
    twitter: chance.twitter(),
    geohash: chance.geohash(),
  };
  if (request.url === "/api/random-character") {
    response.status(200).json(character);
    return;
  }

  response.status(404).json({ status: "Not found" });
}
