import React from 'react'
import { useGlobalContext} from '../Contexto/global'
import Popular from './Popular'
import styled from 'styled-components'
import Proximos from './Proximos'
import Temporada from './Temporada'

function Home() {

    const {handleSubmit, 
        search, 
        handleChange ,
        getUpcomingAnime,
        getAiringAnime,
    } =  useGlobalContext()

    const [rendered, setRendered] = React.useState('popular')

    const switchComponent = () => {
        switch(rendered){
            case 'popular':
                return <Popular rendered={rendered} />
            case 'temporada':
                return <Temporada rendered={rendered} />
            case 'proximos':
                return <Proximos rendered={rendered} />
            default:
                return <Popular rendered={rendered} />
        }
    }

    return (
        <HomepageStyled>
            <header>
                <div className="logo">
                    <h1 className='letra-home'>
                        {rendered === 'popular' ? 'Home' : 
                        rendered === 'temporada' ? 'Temporada' : 'Proximos'}
                    </h1>
                </div>
                <div className="search-container">
                    <div className="filter-btn popular-filter">
                        <button onClick={() => {
                            setRendered('popular')
                        }}>Home<i className="fas fa-fire"></i></button>
                    </div>
                    <div className="filter-btn airing-filter">
                        <button onClick={() => {
                            setRendered('temporada')
                            getAiringAnime()
                        }}>Temporada</button>
                    </div>
                    <div className="filter-btn upcoming-filter">
                        <button onClick={() => {
                            setRendered('proximos')
                            getUpcomingAnime()
                        }}>Proximos</button>
                    </div>
                    <form action="" className="search-form" onSubmit={handleSubmit}>
                        <div className="input-control">
                            <input type="text" placeholder="Buscar Anime" value={search} onChange={handleChange} />
                            <button type="submit">Buscar:</button>
                        </div>
                    </form>
                </div>
            </header>
            {switchComponent()}
        </HomepageStyled >
    )
}

const HomepageStyled = styled.div`
    background-color: #474747;
    header{
        padding: 2rem 5rem;
        width: 60%;
        margin: 0 auto;
        transition: all .4s ease-in-out;
        @media screen and (max-width:1530px){
            width: 95%;
        }
        .logo{
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 2rem;
        }
        .letra-home{
            color: #fff;
        }
        .search-container{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            button{
                display: flex;
                align-items: center;
                gap: .5rem;
                padding: .7rem 1.5rem;
                outline: none;
                border-radius: 30px;
                font-size: 1.2rem;
                background-color: #fff;
                cursor: pointer;
                transition: all .4s ease-in-out;
                font-family: inherit;
                border: 5px solid #e5e7eb;
            }
            form{
                position: relative;
                width: 100%;
                .input-control{
                    position: relative;
                    transition: all .4s ease-in-out;
                }
                .input-control input{
                    width: 100%;
                    padding:.7rem 1rem;
                    border: none;
                    outline: none;
                    border-radius: 30px;
                    font-size: 1.2rem;
                    background-color: #fff;
                    border: 5px solid #e5e7eb;
                    transition: all .4s ease-in-out;
                }
                .input-control button{
                    position: absolute;
                    right: 0;
                    top: 50%;
                    transform: translateY(-50%);
                }
            }
        }
    }
`

export default Home