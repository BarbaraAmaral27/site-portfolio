import styled from "styled-components"

export const Nav = styled.nav`

.header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 2rem 9%;
    background: #d57c61;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
}

.logo {
    font-size: 2.5rem;
    color: #ffff;
    font-weight: 600;
    cursor: default;
}

.navbar a {    
    font-size: 1.7rem;
    color: #ffff;
    margin-left: 4rem;
    transition: .3s;
}

.navbar a:hover,
.navbar a.active {
    color: #a63407;
}

.menu {
    font-size: 3.6rem;
    color: #ffff;
    display: none;
}
`
