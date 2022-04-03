import React, {useState} from 'react'
import { StyleSheet, View } from 'react-native'
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Drawer, Switch, TouchableRipple, Text } from 'react-native-paper';

export default function DrawerContent(props) {
    const { navigation } = props;
    const [active, setActive] = useState ("home");
    console.log(props);

    return (
        <DrawerContentScrollView style={styles.text}>
            <Drawer.Section>
                <Drawer.Item

                    label='Inicio'
                    onPress={() => navigation.navigate("news")}
                />
            </Drawer.Section>
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    text: {
        backgroundColor: "black",
    },
})