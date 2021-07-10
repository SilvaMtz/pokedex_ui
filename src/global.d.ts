interface CommonProps {
  className?: string;
  'aria-label'?: string;
  'data-test-subj'?: string;
}

declare type ThemeType = {
  [key: string]: string;
};

declare type PokemonAbilityObject = {
  name: string;
  url: string;
};

declare type PokemonTypeObject = {
  name: string;
  url: string;
};

declare type StatObject = {
  name: string;
  url: string;
};

declare type PokemonStat = {
  base_stat: number;
  effort: number;
  stat: StatObject;
};

declare type PokemonAbilityDetail = {
  id: number;
  name: string;
  effect: string;
};

declare type EvolutionObject = {
  id: number;
  pokemon_id: number;
  name: string;
  photo: string;
};

declare type PokemonObject = {
  id: number;
  name: string;
  weight: number;
  abilities: PokemonAbilityDetail[];
  photo: string;
  type: PokemonType[];
  stats: PokemonStat[];
  evolutions: EvolutionObject[];
};

declare type PokemonType = {
  slot: number;
  type: PokemonTypeObject;
};

declare type PokemonAbility = {
  ability: PokemonAbilityObject;
  is_hidden: boolean;
  slot: number;
};

declare type PokemonListItem = {
  id: number;
  name: string;
  weight: number;
  abilities: PokemonAbility[];
  photo: string;
  type: PokemonType[];
};
