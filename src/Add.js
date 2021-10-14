import React,{ useRef } from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {addCardFB} from './redux/modules/card';

const Add = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const text = useRef(null);
    const explan = useRef(null);
    const example = useRef(null);


    const addcard = () => {
        const card = {
            text: text.current.value,
            explanation: explan.current.value,
            example: example.current.value
        }
        dispatch(addCardFB(card))
        history.push("/");
    }
    
    return (
        <AddMain>
            <h1>단어 추가d하기</h1>
            <InputBox>
                <p>단어</p>
                <input type="text" ref={text}/>
            </InputBox>
            <InputBox>
                <p>설명</p>
                <input type="text" ref={explan}/>
            </InputBox>
            <InputBox>
                <p>예시</p>
                <input type="text" ref={example}/>
            </InputBox>
            <button onClick={addcard}>추가하기</button>
        </AddMain>
    );
};

const AddMain = styled.div`
    background-color: #E6EAA5;
    margin:auto;
    max-width: 500px;
    height: 100vh;
    & button{
        background-color: blue;
        color: white;
        width: 45vh;
        height: 50px;
        margin-left: 45px;
    }
`;

const InputBox = styled.div`
    padding: 10px;
    background-color: white;
    margin: 30px;
    & p{
        text-decoration: underline;
    }
    & input{
        width: 95%;
        height: 50px;
    }
`;


export default Add;