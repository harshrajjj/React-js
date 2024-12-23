import React,{createContext,useContext} from 'react'


// peechele wale project m hum value nhi daal rhe the ceeat context m but create context m default value dali jaa sakti hai phly v hum new file bna k hum export kar rhe the yha hum isi file se export kar rhe hai ye default variable daal rhe hai ye default valur error se bachaig but ye tareeka static hai 
export const ThemeContext = createContext({
    themeMode:'light',
    darkTheme: () => {

    },
    lightTheme: () => {

    },
})

export const ThemeProvider = ThemeContext.Provider


//custom hook
export default function useTheme () {
        return useContext(ThemeContext)
}





