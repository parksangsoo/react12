import React from 'react';
import styled from 'styled-components';

const Card = (props) => {

    return (
        <CardMain>
            <p>단어</p>
            <h3>{props.dic.text}</h3>
            <p>설명</p>
            <h3>{props.dic.explanation}</h3>
            <p>예시</p>
            <h4>{props.dic.example}</h4>
        </CardMain>
    );
};

const CardMain = styled.div`
    padding:10px;
    background-color: white;
    margin: 30px;
    height: 250px;
    & p{
        text-decoration: underline;
    }
    & h4{
        color: blue;
    }
`;

export default Card;