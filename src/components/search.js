/**
 * author: Chris Holle
 * file: search.js
 *
 * Description:
 * Card to be used to search for items
 *
 *
 * Example usage:
 */

import React from 'react'
import styled from "styled-components"
import searchIcon from "../assets/images/search.png"

const Search = styled.div`
    width: 20%;
    transform: translate(-50%, -50%);
`

const SearchWrapper = styled.div`
    width: 100%;
    position: relative;
    display: flex;
`

const SearchBtn = styled.div`
    border-bottom: 1px solid #dcdcdc;
    background: white;
    text-align: center;
    cursor: pointer;
    font-size: 20px;
    img {
        height: 24px;
        width: 24px;
    }
    &:hover{
        color: ${props => props.theme.primaryGreen};
    }
`;

const SearchInput = styled.input`
    width: 100%;
    border-bottom: 2px solid #dcdcdc;
    font-family: Geogia;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid #dcdcdc;
    color: #dcdcdc;
    outline: none;
    &:focus{
        color: ${props => props.theme.primaryGreen};
    }
    &:hover{
        color: ${props => props.theme.primaryGreen};
    }
`;


export default () => (
    <Search>
        <SearchWrapper>

            <SearchInput placeholder={"Search..."}/>
                <SearchBtn>
                    <img src={searchIcon}/>
                </SearchBtn>
        </SearchWrapper>
    </Search>
);