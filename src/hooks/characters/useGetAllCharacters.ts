import { useQuery } from "@tanstack/react-query";

import { getAllCharacters } from "~/api/characters/api";

import { AllCharacterResponse } from "./types";

const useGetAllCharacters = () =>
  useQuery<AllCharacterResponse>(["characters"], () => getAllCharacters());
export default useGetAllCharacters;
