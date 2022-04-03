import React, {useState, useEffect} from "react";
import { View, Text } from "react-native";
import { getNewsMoviesApi } from "../api/movies";

export default function Home() {
    const [newMovies, setNewMovies] = useState(null);
    
    console.log(newMovies);

    useEffect(() => {
        getNewsMoviesApi().then((response) => {
            setNewMovies(response.results)
        });
    }, []);
    
    return(
        <View>
            <Text>Estamos en Home</Text>
        </View>
    );
}