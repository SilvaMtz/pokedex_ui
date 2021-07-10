import { FunctionComponent, useEffect, useState } from 'react';
import classes from './PokemonDetail.module.css';
import {
  Sprite,
  TypeChip,
  Stat,
  Tab,
  Tabs,
  TabPanel,
  Pokeball
} from '../../components';
import { axiosDefault } from '../../axiosDefault';

interface PokemonDetailInterface {
  pokemonId: number;
  type: string;
  onClose: (() => void) | (() => {});
}

export const PokemonDetail: FunctionComponent<PokemonDetailInterface> = ({
  pokemonId,
  type,
  onClose
}) => {
  const [pokemon, setPokemon] = useState({} as PokemonObject);
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line
  const [error, setError] = useState({});
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    async function fetchPokemonDetail() {
      setLoading(true);
      await axiosDefault
        .get('/pokemon', {
          params: {
            pokemon_id: pokemonId
          }
        })
        .then((response) => {
          const data = response.data;
          setPokemon(data.result);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    }
    fetchPokemonDetail();

    return () => {
      setPokemon({} as PokemonObject);
    };
    // eslint-disable-next-line
  }, []);

  const viewInstance = (
    <div className={classes['PokemonDetail']}>
      <button onClick={onClose} className={classes['PokemonDetail__CloseButton']}>
        <svg
          className="w-6 h-6"
          fill="white"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={classes['SpriteContainer']}
        style={{ backgroundColor: `rgba(var(--${type}-type))` }}
      >
        {loading ? (
          <Pokeball animate className={classes['Sprite']} />
        ) : (
          <Sprite
            className={classes['Sprite']}
            url={pokemon.photo}
            size="medium"
          />
        )}
      </div>
      <div className={classes['PokemonDescription']}>
        <div className={classes['PokemonDescription__Flap']} />
        <p className={classes['Pokemon__Name']}>{pokemon.name}</p>
        <div className={classes['Pokemon__Types']}>
          {pokemon?.type?.map((t) => {
            return <TypeChip key={t.slot} type={t.type.name} />;
          })}
        </div>
        <br />
        <div className={classes['Stats']}>
          <Tabs activeTab={activeTab}>
            <Tab
              tabId={0}
              label="Stats"
              onClick={() => setActiveTab(0)}
              activeTab={activeTab}
            />
            <Tab
              tabId={1}
              label="Abilities"
              onClick={() => setActiveTab(1)}
              activeTab={activeTab}
            />
          </Tabs>
          <TabPanel activeTab={activeTab} tabId={0}>
            {pokemon?.stats?.map((st, index) => {
              return <Stat stat={st} key={index} />;
            })}
          </TabPanel>
          <TabPanel activeTab={activeTab} tabId={1}>
            {pokemon?.abilities?.map((ab) => {
              return (
                <div className={classes['AbilityBlock']} key={ab.id}>
                  <h5 className={classes['AbilityName']}>{ab.name}</h5>
                  <p className={classes['AbilityEffect']}>{ab.effect}</p>
                </div>
              );
            })}
          </TabPanel>
        </div>
      </div>
    </div>
  );

  return viewInstance;
};
