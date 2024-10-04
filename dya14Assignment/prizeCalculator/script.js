function calculatePrizes(awards) {
  let basedOnyear = {};

  for (let award of awards) {
    let { name, category, team, year } = award;
    let temp = `${category}-${year}`;
    if (!basedOnyear[temp]) {
      basedOnyear[temp] = {
        category,
        year,
        teams: {},
      };
    }

    if (!basedOnyear[temp].teams[team]) {
      basedOnyear[temp].teams[team] = [];
    }

    basedOnyear[temp].teams[team].push(name);
  }

  let result = [];

  for (let key in basedOnyear) {
    let { category, year, teams } = basedOnyear[key];
    let totalTeamInEachSport = Object.keys(teams).length;
    let totalPrizePerTeam = 1 / totalTeamInEachSport;
    const winners = [];
    for (let team in teams) {
      let players = teams[team];
      let permemberprize = totalPrizePerTeam / players.length;
      for (let player of players) {
        winners.push({
          name: player,
          rate: permemberprize,
        });
      }
    }
    result.push({
      category,
      year,
      winners: winners,
    });
  }

  return result;
}

const awards = [
  {
    name: "James Peebles",
    category: "javelin",
    team: "Mumbai Indians",
    year: 2019,
  },
  {
    name: "Michel Mayor",
    category: "javelin",
    team: "Gujarat Titans",
    year: 2019,
  },
  {
    name: "Didier Queloz",
    category: "javelin",
    team: "Gujarat Titans",
    year: 2019,
  },
  {
    name: "John B. Goodenough",
    category: "Shooting",
    team: "Chennai Super Kings",
    year: 2019,
  },
  {
    name: "M. Stanley Whittingham",
    category: "Shooting",
    team: "Chennai Super Kings",
    year: 2019,
  },
  {
    name: "Akira Yoshino",
    category: "Shooting",
    team: "Chennai Super Kings",
    year: 2019,
  },
  {
    name: "Arthur Ashkin",
    category: "javelin",
    team: "Pune Warriors",
    year: 2018,
  },
  {
    name: "Gerard Mourou",
    category: "javelin",
    team: "Deccan Chargers",
    year: 2018,
  },
  {
    name: "Donna Strickland",
    category: "javelin",
    team: "Deccan Chargers",
    year: 2018,
  },
  {
    name: "Frances H. Arnold",
    category: "Shooting",
    team: "Kolkata Riders",
    year: 2018,
  },
  {
    name: "George P. Smith",
    category: "Shooting",
    team: "Sunrisers Hyderabad",
    year: 2018,
  },
  {
    name: "Sir Gregory P. Winter",
    category: "Shooting",
    team: "Sunrisers Hyderabad",
    year: 2018,
  },
];

let output = calculatePrizes(awards)
console.log(output);


document.getElementById("result").innerHTML=(JSON.stringify(output));

