import styled from "styled-components"

export const Home = styled.main`
/* background-color:#eae5e5; */

.container{
    min-height: 100vh;
    padding: 10rem 9% 2rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: #030a1ccc;
    background: #efdedecc;    
}

.home-img {
    width: 300px;
}

.home-content h3{
    font-size: 3.2rem;
    font-weight: 700;
    color: rgba(30, 29, 56, 0.75);
}

.home-content h2{
    font-size: 5.6rem;
    font-weight: 700;
    line-height: 1.3;
    color: #18193F;
}

.line{
    border-right: 2px solid rgba(30, 29, 56, 0.75);
    color: rgba(30, 29, 56, 0.75);    
    font-size: 3em;
    text-align: start;   
    margin: 0 auto;
    white-space: nowrap;
    overflow: hidden;
}

.typing-animation {
    animation: blinkCursor 500ms steps(30) infinite normal, typing 4s steps(30) 1s normal both;
}

@keyframes typing {
    from{
        width: 0;
    }
    to{
        width: 13em;
    }
  }

@keyframes blinkCursor {
    from {
        border-right-color:rgba(30, 29, 56, 0.75);
    }   
    to {
        border-right-color: transparent;        
    } 
}

` 

