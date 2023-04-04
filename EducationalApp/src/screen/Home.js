import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Menu from '../component/Menu';

export default function Home(props) {

    const description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ";

    return (
        <>
            <ScrollView style={styles.mainContainer}>
                <View style={styles.homeTop}>
                    <Image
                        style={styles.headerImage}
                        resizeMode="contain"
                        source={require("../../assets/logo.jpg")}
                    />

                    <Text style={styles.mainHeader}>Welcome to</Text>
                    <Text
                        style={[
                            styles.mainHeader,
                            {
                                fontSize: 33,
                                color: "#4c5dab",
                                marginTop: 0,
                            },
                        ]}>
                        {props.channelname}
                    </Text>

                    <Text style={styles.paraStyle}>{description} </Text>
                </View>


            </ScrollView>

            <View style={styles.menuStyle}>
                <View style={styles.lineStyle}></View>
                <Menu />
                <View style={styles.lineStyleBottom}></View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        height: "100%",
        display: "flex",
        // justifyContent: "space-between",
        paddingHorizontal: 20,
        backgroundColor: "#fff",
        textAlign: "center",
    },

    homeTop: {
        // height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
    },

    headerImage: {
        height: undefined,
        width: "100%",
        aspectRatio: 1,
        display: "flex",
        alignItems: "stretch",
        marginTop: 50,
        borderRadius: 20,
    },

    mainHeader: {
        fontSize: 30,
        color: "#344055",
        textTransform: "uppercase",
        // fontFamily: "Nunito_700Bold",
    },

    paraStyle: {
        textAlign: "left",
        fontSize: 18,
        color: "#7d7d7d",
        marginTop: 30,
        paddingBottom: 50,
        lineHeight: 27,
        // fontFamily: "WorkSans_400Regular",
    },

    lineStyle: {
        marginBottom: 10,
        borderWidth: 0.5,
        borderColor: "grey",
    },
    lineStyleBottom: {
        marginBottom: 10,
    },
    menuStyle: {
        display: "flex",
        justifyContent: 'flex-end',
        backgroundColor: "#0d99ff",
        width: "100%",
        color: "#fff"
    }
});
