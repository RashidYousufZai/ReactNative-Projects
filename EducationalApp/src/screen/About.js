import {
    Linking,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
} from "react-native";
import React from "react";
import { useFonts, WorkSans_400Regular } from "@expo-google-fonts/work-sans";
import { Nunito_700Bold } from "@expo-google-fonts/nunito";
import AppLoading from "expo-app-loading";

const About = () => {
    let [fontsLoaded] = useFonts({
        WorkSans_400Regular,
        Nunito_700Bold,
    });

    if (!fontsLoaded) {
        <AppLoading />;
    }

    return (
        <View style={styles.aboutContainer}>
            <Text style={styles.mainHeader}> Rashid Yousufzai </Text>
            <Text style={styles.paraStyle}> I am a full stack developer 😀 </Text>

            <View>
                <Image
                    style={styles.imgStyle}
                    source={require("../../assets/Rashid.jpg")}
                />
            </View>

            <View style={styles.aboutLayout}>
                <Text style={styles.aboutSubHeader}> About me </Text>
                <Text style={[styles.paraStyle, styles.aboutPara]}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                    commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit. Aenean commodo ligula eget dolor.
                </Text>
            </View>

            <Text style={styles.mainHeader}> Follow me on Social Network </Text>

            <View style={styles.menuContainer}>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() =>
                        Linking.openURL("https://www.instagram.com/rashid.yousufzai/")
                    }>
                    <Image
                        style={styles.iconStyle}
                        source={{
                            uri: "https://e7.pngegg.com/pngimages/722/1011/png-clipart-logo-icon-instagram-logo-instagram-logo-purple-violet.png",
                        }}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() =>
                        Linking.openURL(
                            "https://www.linkedin.com/in/i-am-rashid-yousufzai/"
                        )
                    }>
                    <Image
                        style={styles.iconStyle}
                        source={{
                            uri: "https://e7.pngegg.com/pngimages/887/616/png-clipart-linkedin-icon-linkedin-text-rectangle.png",
                        }}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => Linking.openURL("https://www.facebook.com/profile.php?id=100013305993266")}>
                    <Image
                        style={styles.iconStyle}
                        source={{
                            uri: "https://e7.pngegg.com/pngimages/991/568/png-clipart-facebook-logo-computer-icons-facebook-logo-facebook.png",
                        }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    aboutContainer: {
        display: "flex",
        alignItems: "center",
    },

    imgStyle: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    mainHeader: {
        fontSize: 18,
        color: "#344055",
        textTransform: "uppercase",
        fontWeight: "500",
        // marginTop: 50,
        marginTop: 40,
        marginBottom: 10,
        //   fontFamily: "Nunito_700Bold",
    },
    paraStyle: {
        fontSize: 18,
        color: "#7d7d7d",
        paddingBottom: 30,
        //   fontFamily: "WorkSans_400Regular",
    },
    aboutLayout: {
        backgroundColor: "#0d99ff",
        paddingHorizontal: 30,
        // marginVertical: 30,
        marginTop: 20,
    },
    aboutSubHeader: {
        fontSize: 18,
        color: "#fff",
        textTransform: "uppercase",
        fontWeight: "500",
        marginVertical: 15,
        //   fontFamily: "Nunito_700Bold",
        alignSelf: "center",
    },
    aboutPara: {
        color: "#fff",
        fontSize: 18,
        //   fontFamily: "WorkSans_400Regular",
        lineHeight: 26,
    },
    menuContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
    },

    iconStyle: {
        width: "100%",
        height: 50,
        aspectRatio: 1,
    },
});

export default About;
