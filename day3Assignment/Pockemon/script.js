const Base_url = "https://pokeapi.co/api/v2/pokemon";

const pockemonParentBox = document.querySelector("#pockemonParentBox");
const typeofpockemon = document.querySelector("#typeofpockemon");
const searchByName = document.querySelector("#searchByName");
const loadmore = document.querySelector("#loadmore");

let pockemonData = []
let filterdPockemonData = [];
let types = ["Filter By Type"];
let count = 20;
let offset = 0


const fetchPokemonList = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const promises = data.results.map(pokemon => {
            return (fetch(pokemon.url).then(res => res.json()).then((data) => (
                {
                    "name": data?.forms[0]?.name,
                    "img": data?.sprites?.other?.dream_world?.front_default,
                    "types": data?.types?.map((el) => {
                        if (!types.includes(el?.type.name)) {
                            types.push(el?.type?.name)
                        }
                        return el?.type.name
                    }),
                    "height": data?.height,
                    "weight": data?.weight,
                    "stats": data?.stats.map((el) => ({ ...el, ["stat"]: el?.stat?.name }))
                }
            )))
        });
        const pokemonDetails = await Promise.all(promises);
        renderFilteringOption(types);
        return pokemonDetails;
    } catch (error) {
        console.error("Error fetching Pokémon data:", error);
    }
};


const renderFilteringOption = (types) => {
    typeofpockemon.innerHTML = null;
    types?.forEach((element) => {
        let option = document.createElement("option");
        option.innerText = element;
        option.value = element;
        typeofpockemon.append(option);
    })
}


const renderPokemon = (pokemons) => {
    pockemonParentBox.innerHTML = null;
    pokemons.forEach((pokemon) => {
        let card = document.createElement("div");
        let innerCard = `<div class="flip-card">
                         <div class="flip-card-inner">
                         <div class="flip-card-front">
                         <img src="${pokemon.img}" alt="Avatar" width="100px" height="100px">
                         <p>${pokemon.name}</p>
                         <p>Type : ${pokemon.types.join(", ")} </p>
                         </div>
                         <div class="flip-card-back">
                         <p>Height:- ${pokemon.height},</p>
                         <p>Weight:- ${pokemon.weight},</p>
                         <p>${pokemon?.stats?.map((el) => `${el?.stat + " :- " + el?.base_stat}</br>`)}</p>
                         </div>
                         </div>
                         </div>
                         `
        card.innerHTML = innerCard;
        pockemonParentBox.append(card)
    })
}

fetchPokemonList(`${Base_url}?limit=${count}&offset=${offset}`).then((res) => {
    pockemonData = res;
    renderPokemon(pockemonData);
}).catch(err => (console.log(err)))

typeofpockemon.addEventListener("change", (e) => {
    e.preventDefault();
    let value = e.target.value;
    if (value !== "Filter By Type") {
        filterdPockemonData = pockemonData?.filter((pockemon) => pockemon?.types?.includes(value));
        renderPokemon(filterdPockemonData)
    } else {
        renderPokemon(pockemonData)
    }
})

searchByName.addEventListener("input", (e) => {
    e.preventDefault();
    let value = e.target.value;
    if (typeofpockemon?.value !== "Filter By Type" && value) {
        filterdPockemonData = filterdPockemonData?.filter((pockemon) => pockemon?.name?.includes(value));
        renderPokemon(filterdPockemonData);
    } else if (value) {
        filterdPockemonData = pockemonData?.filter((pockemon) => pockemon?.name?.includes(value));
        renderPokemon(filterdPockemonData);
    } else {
        renderPokemon(pockemonData);
    }
})

loadmore.addEventListener("click", (e) => {
    e.preventDefault();
    count = count + 20;
    offset = offset + 20;
    fetchPokemonList(`${Base_url}?limit=${count + 20}&offset=${offset + 20}`).then((res) => {
        pockemonData = res;
        renderPokemon(pockemonData)
    }).catch(err => (console.log(err)))
})