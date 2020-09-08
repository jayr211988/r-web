import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import {
  Button, Paper, Table, TableBody, TextField,
  TableCell, TableContainer, TableHead, TableRow
} from '@material-ui/core';

const PokemonRow = ({ pokemon, onSelect }) => (
  <tr>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(", ")}</td>
    <td>
      <Button
        variant="contained"
        onClick={() => onSelect(pokemon)}
      >Select
      </Button>
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
  <div style={{marginLeft: '2vw'}}>
    <h1>{name.english}</h1>
    <Paper elevation={3}>
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
    </Paper>
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

const Title = styled.h1`
  text-align: center;
`;

const Title2 = styled.h3`
  text-align: center;
  color: lightgreen
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-column-gap: 1re;
  margin-top: 2vh;
`;

const Container = styled.div`
  margin: auto;
  width: 800px;
`;

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.2rem;
`;

const useStyles = makeStyles({
  table: {
    minWidth: 350,
  },
});



function App() {

  const [filter, filterSet] = React.useState("")
  const [selectedItem, selectedItemSet] = React.useState(null)
  const [pokemons, pokemonSet] = React.useState([])
  const [loading, loadingSet] = React.useState(false)
  const classes = useStyles();

  React.useEffect(() => {
    async function fetchData() {
      //https://jayr211988.github.io
      loadingSet(true)
      fetch("https://jayr211988.github.io/r-web/pokemon.json")
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          pokemonSet(data)
          console.log(data, 'testset');
          loadingSet(false)
        })

    }
    fetchData();
  }, [])

  return (
    <Container>
      <Title>Hi! I'm Rogelio</Title>
      <Title2>You can search your favorite anime character here</Title2>
      <TextField
        style={{width: '100%'}}
        variant="outlined"
        onChange={(evt) => filterSet(evt.target.value)} 
        value={filter} 
        label="Enter you anime character here" />
      <div>
        <TwoColumnLayout>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="center">Type</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  loading ?
                    <TableRow >
                      <TableCell component="th" scope="row">
                        Please wait loading...
                      </TableCell>
                    </TableRow> :
                    <>
                      {pokemons
                        .filter((pokemon) => pokemon.name.english.toLowerCase().includes(filter.toLowerCase()))
                        .slice(0, 20)
                        .map((pokemon) => (
                          <TableRow key={pokemon.id}>
                            <TableCell component="th" scope="row">
                              {pokemon.name.english}
                            </TableCell>
                            <TableCell align="center">{pokemon.type.join(", ")}</TableCell>
                            <TableCell align="center">
                              <Button
                                variant="contained"
                                onClick={() => selectedItemSet(pokemon)}
                              > Select
                          </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                    </>
                }
              </TableBody>
            </Table>
          </TableContainer>
          {
            selectedItem && (
              <PokemonInfo {...selectedItem} />
            )
          }
        </TwoColumnLayout>
      </div>
    </Container>
  );
}

export default App;
