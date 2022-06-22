
export const DARK = 'DARK'
export const LIGHT = 'LIGHT'

// color scheme insipred by https://www.flickr.com/photos/megane_wakui/
// Actual hex samples lifted off select photographs
const wakui = {
    dark1: '#1E2223',
    dark2: '#2F282A',
    blue1: '#52B18D',
    blue2: '#75C29A',
    blue3: '#F9F2B6',
}

// Official brand colors used by the eth foundation + brand/logo
const ethColours = {
    ethBlue1: '#8A93B1',
    ethBlue2: '#63688F',
    ethBlue3: '#464A76',
    ethPastelOrange: '#EDCBC0',
    ethPastelBlue: '#87A9EF',
    ethPastelCyan: '#B8FBF5',
    ethPastelPurple: '#CAB3F4',
    ethPastelDivider: '#3441C1'
}

const commonColours = {
    ethColours,
    wakui
}

export const darkTheme = {
    ...commonColours,
    textcolor1: '#f2f0eb',
    bg1: '#222222',
    label: DARK
}
  
export const lightTheme = {
    ...commonColours,
    textColor1: '#0d0d0d',
    bg1: '#f2f0eb',
    label: LIGHT
}
  
// ideas
/*
    rounded
    white/light colours
    green
    masashi wakui color

        very clean, single note range of pastel colours - washed out

        washed out blacks
        'strong' dark background with strong highlights
        neon blue/cyan or red/yellow

        pattern neon blue -> very very light blue bordering on white
        neaon red -> very very light red bordering on white

        black -> dark blue 
*/
