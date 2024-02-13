import React from "react";
import { RecipeProps } from "../types/recipe";

const RecipeContext = React.createContext<RecipeProps | undefined>(undefined)

export default RecipeContext