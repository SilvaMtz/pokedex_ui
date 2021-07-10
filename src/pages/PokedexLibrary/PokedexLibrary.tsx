import { FunctionComponent, useState, useEffect } from 'react';
import classes from './PokedexLibrary.module.css';
import { axiosDefault } from '../../axiosDefault';
import { Pokeball, ListItem } from '../../components';

export const PokedexLibrary: FunctionComponent = () => {
  const [pokemonList, setPokemonList] = useState([] as PokemonListItem[]);
	// eslint-disable-next-line
  const [error, setError] = useState({} as any);
  const [loading, setLoading] = useState(false as boolean);
  const [nextPage, setNextPage] = useState('');

  useEffect(() => {
    async function fetchPokemonList() {
      setLoading(true);
      await axiosDefault
        .get('/pokemon_list')
        .then((response) => {
          const data = response.data;
          setPokemonList(data.result.list);
          setNextPage(data.result.next_page);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    }
    fetchPokemonList();
		// eslint-disable-next-line
  }, []);

  async function fetchNextPage() {
    setLoading(true);
		console.log(nextPage)
    await axiosDefault
      .get('/pokemon_list', { params: { page: nextPage } })
      .then((response) => {
        const data = response.data;
        const newPokemon = data.result.list;
        setNextPage(data.result.next_page);
        const updatedPokemon = pokemonList.concat(newPokemon);
        setPokemonList([...updatedPokemon]);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }

  return (
    <div className={classes['PokedexLibrary']}>
      {loading ? (
        <div className={classes['LoadingScreen']}>
          <Pokeball animate />
        </div>
      ) : null}
      <div className={classes['PokemonList']}>
        {pokemonList.map((pokemon, index) => {
          return <ListItem key={index} pokemon={pokemon} />;
        })}
        <button className={classes['LoadMore']} onClick={() => fetchNextPage()}>
          Load More
        </button>
      </div>
    </div>
  );
};
