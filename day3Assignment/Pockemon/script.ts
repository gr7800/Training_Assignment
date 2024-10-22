interface Pokemon {
  name: string;
  url: string;
}

interface PokemonResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

interface DetailedPokemon {
  name: string;
  img: string;
  types: string[];
  height: number;
  weight: number;
  stats: Array<{ stat: string; base_stat: number }>;
}

const Base_url: string = "https://pokeapi.co/api/v2/pokemon";

const pockemonParentBox =
  document.querySelector<HTMLDivElement>("#pockemonParentBox")!;
const typeofpockemon =
  document.querySelector<HTMLSelectElement>("#typeofpockemon")!;
const searchByName = document.querySelector<HTMLInputElement>("#searchByName")!;
const loadmore = document.querySelector<HTMLButtonElement>("#loadmore")!;

let pockemonData: DetailedPokemon[] = [];
let filterdPockemonData: DetailedPokemon[] = [];
let types: string[] = ["Filter By Type"];
let count: number = 20;
let offset: number = 0;

const fetchPokemonList = async (
  url: string
): Promise<DetailedPokemon[] | undefined> => {
  try {
    const response = await fetch(url);
    const data: PokemonResponse = await response.json();
    const promises = data.results.map(async (pokemon: Pokemon) => {
      const res = await fetch(pokemon.url);
      const details = await res.json();
      return {
        name: details?.forms[0]?.name,
        img: details?.sprites?.other?.dream_world?.front_default,
        types:
          details?.types.map((el: any) => {
            const typeName = el?.type?.name;
            if (typeName && !types.includes(typeName)) {
              types.push(typeName);
            }
            return typeName;
          }) || [],
        height: details?.height,
        weight: details?.weight,
        stats:
          details?.stats.map((el: any) => ({
            stat: el?.stat?.name,
            base_stat: el?.base_stat,
          })) || [],
      };
    });
    const pokemonDetails = await Promise.all(promises);
    renderFilteringOption(types);
    return pokemonDetails;
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
  }
};

const renderFilteringOption = (types: string[]) => {
  typeofpockemon.innerHTML = "";
  types.forEach((element) => {
    const option = document.createElement("option");
    option.innerText = element;
    option.value = element;
    typeofpockemon.append(option);
  });
};

const renderPokemon = (pokemons: DetailedPokemon[]) => {
  pockemonParentBox.innerHTML = "";
  pokemons.forEach((pokemon) => {
    const card = document.createElement("div");
    const innerCard = `
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src="${
                pokemon.img
              }" alt="Avatar" width="100px" height="100px">
              <p>${pokemon.name}</p>
              <p>Type: ${pokemon.types.join(", ")}</p>
            </div>
            <div class="flip-card-back">
              <p>Height: ${pokemon.height},</p>
              <p>Weight: ${pokemon.weight},</p>
              <p>${pokemon.stats
                .map((el) => `${el.stat} :- ${el.base_stat}`)
                .join("<br>")}</p>
            </div>
          </div>
        </div>
      `;
    card.innerHTML = innerCard;
    pockemonParentBox.append(card);
  });
};

fetchPokemonList(`${Base_url}?limit=${count}&offset=${offset}`)
  .then((res) => {
    if (res) {
      pockemonData = res;
      renderPokemon(pockemonData);
    }
  })
  .catch((err) => console.error(err));

typeofpockemon.addEventListener("change", (e) => {
  e.preventDefault();
  const value = (e.target as HTMLSelectElement).value;
  if (value !== "Filter By Type") {
    filterdPockemonData = pockemonData.filter((pokemon) =>
      pokemon.types.includes(value)
    );
    renderPokemon(filterdPockemonData);
  } else {
    renderPokemon(pockemonData);
  }
});

searchByName.addEventListener("input", (e) => {
  e.preventDefault();
  const value = (e.target as HTMLInputElement).value.toLowerCase();
  if (typeofpockemon.value !== "Filter By Type" && value) {
    filterdPockemonData = filterdPockemonData.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(value)
    );
    renderPokemon(filterdPockemonData);
  } else if (value) {
    filterdPockemonData = pockemonData.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(value)
    );
    renderPokemon(filterdPockemonData);
  } else {
    renderPokemon(pockemonData);
  }
});

loadmore.addEventListener("click", (e) => {
  e.preventDefault();
  count += 20;
  offset += 20;
  fetchPokemonList(`${Base_url}?limit=${count}&offset=${offset}`)
    .then((res) => {
      if (res) {
        pockemonData = res;
        renderPokemon(pockemonData);
      }
    })
    .catch((err) => console.error(err));
});
