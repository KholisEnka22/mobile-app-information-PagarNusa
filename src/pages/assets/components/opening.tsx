import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import Svg, { Ellipse } from "react-native-svg";

function Opening(props) {
    return (
        <View style={[styles.container, props.style]}>
            <View style={styles.ellipseStack}>
                <Svg viewBox="0 0 432 432" style={styles.ellipse}>
                    <Ellipse
                        stroke="rgba(230, 230, 230,1)"
                        strokeWidth={0}
                        fill="rgba(41,52,98,1)"
                        cx={216}
                        cy={216}
                        rx={216}
                        ry={216}
                    ></Ellipse>
                </Svg>
                <Svg viewBox="0 0 203 203" style={styles.ellipse2}>
                    <Ellipse
                        strokeWidth={5}
                        fill="rgba(255,255,255,1)"
                        cx={102}
                        cy={102}
                        rx={99}
                        ry={99}
                        stroke="rgba(41,52,98,1)"
                    ></Ellipse>
                </Svg>
                <Image
                    source={require("../images/sa.png")}
                    resizeMode="contain"
                    style={styles.image}
                ></Image>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {},
    ellipse: {
        top: 0,
        width: 432,
        height: 432,
        position: "absolute",
        left: 0
    },
    ellipse2: {
        top: 307,
        left: 115,
        width: 203,
        height: 203,
        position: "absolute"
    },
    image: {
        top: 338,
        left: 154,
        width: 125,
        height: 148,
        position: "absolute"
    },
    ellipseStack: {
        width: 432,
        height: 510
    }
});

export default Opening;
