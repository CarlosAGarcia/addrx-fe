
export const DARK = 'DARK'
export const LIGHT = 'LIGHT'

// color scheme insipred by https://www.flickr.com/photos/megane_wakui/
// Actual hex samples lifted off select photographs
const wakui = {
    dark1: '#1E2223',
    dark2: '#2F282A',
    dark3: '#2B2029',
    akibaSegaRed1: '#FEC56B',
    akibaSegaRed2: '#E50735' ,
    akibaSegaRed3: '#68182E',
    akibaSegaBlue1: '#44A7AD',
    akibaSegaBlue2: '#258291',
    akibaBridge1: '#B59B68',
    akibaBridge2: '#04664F' ,
    akibaBridge3: '#192F2D',
    yoshinoyaYellow: '#FBC525',
    akibaStreetPurple1: '#B9735A',
    akibaStreetPurple2: '#663744',
    akibaStreetPurple3: '#372236' ,
    akibaStreetPurple4: '#241F27',

    skyShibuyaLightPollutionOrange: '#333432',
    skyShibuyaLightPollutionBlue: '#21353C',
    darkSkyShibuya: '#222723',
    billboardInnerShibuya: '#EBF1CB',
    billboardGreenOuterShibuya: '#55D887',
    billboardBlueInnerShibuya: '#EBF0C2',
    billboardBlueOuterShibuya: '#268991',
    shibuyaCrossingLineWhite1: '#DFD4A9',
    shibuyaCrossingLineWhite2: '#CC9F87',
    shibuyaCrossingLineWhite3: '#A67B74',
    shibuyaCrossingLineWhite4: '#56505B',
    shibuyaCrossingLineWhite5: '#314450',
    shibuyaCrossingLineWhite6: '#182E36',
    blackMensSuit: '#262923',
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
    ...ethColours,
    ...wakui
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
