import styled from 'styled-components'
// common classnames that will be available to all children in routes

const StylingWrapper = styled.div`
display: flex;
.bodyContainer {
    position: relative;
    .navBarContainer {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }
}
html, body
{
    height: 100%;
}
.modal-open {
    .modal-backdrop.show {
        opacity: .8;
    }
}

*:focus-visible {
    outline: none;
}

*:focus {
    outline: none;
}
    /* Default styles applied to wrapper div*/
    margin:0;
    padding:0;
    width:100%;
    height:100%;
    /* font-family: Formular-Light; */
    font-weight: normal;
    font-style: normal;
    scroll-behavior: smooth;

    /* Theme dependent styles */
    .BG1{ background-color: ${props => props.theme.bg1} }
    .yoshinoyaYellow { color: ${props => props.theme.yoshinoyaYellow} }

    /* Theme independent styles */
    /* MISC */
`
export default StylingWrapper
