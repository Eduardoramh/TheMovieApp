import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Movie from "../screens/Movie";
import News from "../screens/News";
import Popular from "../screens/Popular";
import Search from "../screens/Search";

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="home"
                component={Home}
                options={{ title: 'TheMovieApp' }}
            />

            <Stack.Screen
                name="movie"
                component={Movie}
                options={{ title: 'Algo' }}
            />

            <Stack.Screen
                name="news"
                component={News}
                options={{ title: 'Nuevas Películas' }}
            />

            <Stack.Screen
                name="popular"
                component={Popular}
                options={{ title: 'Películas Populares' }}
            />

            <Stack.Screen
                name="search"
                component={Search}
                options={{ title: 'Algo' }}
            />

        </Stack.Navigator>
    );
}