import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Menu = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.menuContainer}>
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => { navigation.navigate("Course") }}>
                <Entypo name="open-book" size={24} color="#fff" />
                <Text style={styles.text}>Course</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => { navigation.navigate("About") }}>
                <AntDesign name="contacts" size={24} color="#fff" />
                <Text style={styles.text}>About</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => { navigation.navigate("Students") }}>
                <AntDesign name="user" size={24} color="#fff" />
                <Text style={styles.text} >Students</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => { navigation.navigate("Contact") }}>
                <AntDesign name="contacts" size={24} color="#fff" />
                <Text style={styles.text}>Contact</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Menu

const styles = StyleSheet.create({
    menuContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    textStyle: {
        textTransform: "uppercase",
    },
    iconStytle: {
        width: "100%",
        height: 50,
        aspectRatio: 1,
    },
    buttonStyle: {
        display: "flex",
        alignItems: "center"
    },
    text: {
        color: "#fff"
    }
})