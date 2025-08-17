import { useContext } from "react";
import { ThemeContext, type IThemeContext } from "../theme.context";

export function useTheme(): IThemeContext {
    return useContext(ThemeContext)
}