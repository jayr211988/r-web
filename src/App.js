import React from 'react';
import './App.css';
import PropTypes from 'prop-types'

const PokemonRow = ({ pokemon, onSelect }) => (
  <tr>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(", ")}</td>
    <td>
      <button
        onClick={() => onSelect(pokemon)}
      >Select
      </button>
    </td>
  </tr>
)

PokemonRow.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.shape({
      english: PropTypes.string
    }),
    type: PropTypes.arrayOf(PropTypes.string)
  }),
  onSelect: PropTypes.func
}

const PokemonInfo = ({ name, base }) => (
  <div>
    <h1>{name.english}</h1>
    <table>
      <tbody>
        {
          Object.keys(base).map((key) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{base[key]}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  </div>
)

PokemonInfo.propTypes = {
  name: PropTypes.shape({
    english: PropTypes.string
  }),
  base: PropTypes.shape({
    HP: PropTypes.number.isRequired,
    Attack: PropTypes.number.isRequired,
    Defense: PropTypes.number.isRequired,
    "Sp. Attack": PropTypes.number.isRequired,
    "Sp. Defense": PropTypes.number.isRequired,
    Speed: PropTypes.number.isRequired,
  })
}


function App() {

  const [filter, filterSet] = React.useState("")
  const [selectedItem, selectedItemSet] = React.useState(null)
  const [pokemons, pokemonSet] = React.useState([])

  React.useEffect(() => {
    //https://jayr211988.github.io
    fetch("https://jayr211988.github.io/r-web/pokemon.json")
      .then((res) => res.json())
      .then((data)=>pokemonSet(data))
      
  }, [])

  return (
    <div style={{
      margin: 'auto',
      width: 800
    }}>
      <h1 className="title">Hi! I'm Rogelio</h1>
      <p className="title">You can search your favorite pokemen here</p>
      <input
        onChange={(evt) => filterSet(evt.target.value)}
        placeholder="Enter you pokemon here"
        value={filter}
      />
      <div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '70% 30%',
            gridColumnGap: '1rem'
          }}
        >
          <table width="100%">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {
                pokemons
                  .filter((pokemon) => pokemon.name.english.toLowerCase().includes(filter.toLowerCase()))
                  .slice(0, 20)
                  .map((pokemen) => (
                    <PokemonRow pokemon={pokemen} key={pokemen.id}
                      onSelect={(pokemen) => selectedItemSet(pokemen)}
                    />
                  ))
              }
            </tbody>
          </table>
          {
            selectedItem && (
              <PokemonInfo {...selectedItem} />
            )
          }
        </div>
      </div>
    </div>
  );
}

export default App;
