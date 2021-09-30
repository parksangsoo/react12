import React,{useEffect} from 'react';
import styled from 'styled-components';
import Card from './Card';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {Link} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import { loadCardFB } from "./redux/modules/card";

const Home = () => {
    const cards = useSelector((state) => state.card.list);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadCardFB());
    },[])

    console.log(cards)
    return (
        <HomeMain>
            <h1>MY DICTIONARY</h1>
            {cards.map((card,index) => (
                <Card key={index} dic={card} />
            ))}
            <Link to="/add"><AddCircleIcon/></Link>
        </HomeMain>
        
    );
};

const HomeMain = styled.div`
    background-color: #E6EAA5;
    margin:auto;
    max-width: 500px;
    height: 100%;
    padding-bottom: 5px;
    & .MuiSvgIcon-root{
        position:fixed;
        bottom: 10px;
        right: 90px;
        color: blue;
        width: 70px;
        height: 70px;
    }
`;

export default Home;