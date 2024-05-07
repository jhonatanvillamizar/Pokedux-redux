import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import StarButton from "./StarButton";
import './PokemonList.css'
import { setFavorite } from "../actions";
import { useDispatch } from 'react-redux'

const PokemonCard = ({ name, image, abilities, id, favorite }) => {

    const dispatch = useDispatch();

    const handleOnClick = () => {
        dispatch(setFavorite({ pokemonId: id }))
    }

    return (
        <Card 
        title={name}
        cover={<img src={image} alt={name} />} 
        extra={<StarButton isFavorite={favorite} onClick={handleOnClick}/>}
        >
            <Meta description={abilities.map(ability => <li>{ability.ability.name}</li>)} />
        </Card>  
    ) 
}

export default PokemonCard