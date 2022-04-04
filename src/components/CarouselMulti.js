import React from "react";
import { StyleSheet, View, Image, Dimensions, TouchableWithoutFeedback } from "react-native";
import {Title} from "react-native-paper";
import Carousel from "react-native-snap-carousel";
import { BASE_PATH_IMG } from "../utils/constants";

const {widht} = Dimensions.get("window");
const ITEM_WIDHT = Math.round(widht * 0.3);

export default function CarouselMulti(props) {
    const {data, navigation} = props;

    return(
        <Carousel 
        layout={'default'}
        data={data}
        renderItem={(item) => <RenderItem data={item} navigation={navigation} />}
        sliderWidth={widht}
        itemWidth={ITEM_WIDHT}
        />
    );
}

function RenderItem() {
    return (
        <View>
            <Title>Hola</Title>
        </View>
    );
}