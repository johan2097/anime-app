import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

function AnimeItem() {
  const {id} = useParams()

  // estado
  const [anime, setAnime] = React.useState({})
  const [mostrasMas, setMostrarMas] = React.useState(false)
  
  const {
    title, synopsis, 
    duration,aired, 
    season, images, rank, 
    score,scored_by, popularity, 
    status, rating, source } = anime
    
    //get anime based on id
    const getAnime = async (anime) => {
      const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}`)
      const data = await response.json()
      setAnime(data.data)
  }

 
  


  //initial render
  useEffect(() => {
      getAnime(id)
  }, [])

  return (
    <AnimeItemStyled> 
         <h1>{title}</h1>
         <div className="details">
            <div className="detail">
            <div className="image">
                        <img src={images?.jpg.large_image_url} alt="" />
            </div>
             <div className="anime-details">
             <p><span>Fecha:</span><span>{aired?.string}</span></p>
                        <p><span>Rating:</span><span>{rating}</span></p>
                        <p><span>Ranking:</span><span>{rank}</span></p>
                        <p><span>Puntaje:</span><span>{score}</span></p>
                        <p><span>Puntaje por:</span><span>{scored_by}</span></p>
                        <p><span>Poblacion:</span><span>{popularity}</span></p>
                        <p><span>Estatus:</span><span>{status}</span></p>
                        <p><span>Fuente:</span><span>{source}</span></p>
                        <p><span>Temporada:</span><span>{season}</span></p>
                        <p><span>Duracion:</span><span>{duration}</span></p>
               </div>
            </div>
            <p className="description">
                    {mostrasMas ? synopsis : synopsis?.substring(0, 450) + '...'}
                    <button onClick={() => {
                        setMostrarMas(!mostrasMas)
                    }}>{mostrasMas ? 'Mostras Menos': 'Read More'}</button>
                </p>
         </div>
    </AnimeItemStyled>
  )
}

const AnimeItemStyled = styled.div`
    padding: 3rem 18rem;
    background-color: #EDEDED;
    h1{
        display: inline-block;
        font-size: 3rem;
        margin-bottom: 1.5rem;
        cursor: pointer;
        background:linear-gradient( to right, #A855F7, #27AE60);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        transition: all .4s ease-in-out;
        &:hover{
            transform: skew(-3deg);
        }
    }
    .title{
        display: inline-block;
        margin: 3rem 0;
        font-size: 2rem;
        cursor: pointer;
        background:linear-gradient( to right, #A855F7 23%, #27AE60);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .description{
        margin-top: 2rem;
        color: #6c7983;
        line-height: 1.7rem;
        button{
            background-color: transparent;
            border: none;
            outline: none;
            cursor: pointer;
            font-size: 1.2rem;
            color: #27AE60;
            font-weight: 600;
        }
    }

 
    .details{
        background-color: #fff;
        border-radius: 20px;
        padding: 2rem;
        border: 5px solid #e5e7eb;
        .detail{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            img{
                border-radius: 7px;
            }
        }
        .anime-details{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            p{
                display: flex;
                gap: 1rem;
            }
            p span:first-child{
                font-weight: 600;
                color: #454e56;
            }
        }
    }

  
`;

export default AnimeItem