import React, { useContext } from "react";
import Movies from "../../services/movies";
import { MoviesDispatchContext } from "../contexts/MoviesContext";

export default function MoviesList (props) {

    
    return  (<Movies title={props.movies[0]} year= {props.movies[1]}> data = {props.movies[2]}</Movies>);
}