// import React, { Component, useState } from "react";
// import { StyleSheet, View, Text, FlatList} from "react-native";
// import Cardnama from "../assets/components/cardNama";
// import SwitchSelector from "react-native-switch-selector";
// import { Table, Row, Rows, Col, TableWrapper } from "react-native-table-component";

// const listTab = [
//     { value: 'Tagihan' },
//     { value: 'History' },
// ]

// const data = [
//     {
//         name: 'Tagihan',
//         value: 'Tagihan'
//     },
//     {
//         name: 'History',
//         value: 'History'
//     },

// ]

// function Tagihan() {

//     // const [Tagihan, setTagihan] = useState("Tagihan");


//     const [value, setValue] = useState('Tagihan')
//     // const [datalist, setDatalist] = useState(data)

//     const setValueFilter = value => {
//         if (value !== 'Tagihan') {
//             setValue([...data.filter(data => data.value === value)])
//         } else {
//             setValue(value)
//         }
//         // setValue(value)
//     }

//     const renderItem = ({ item, index }) => {
//         return (
//             <View key={index} style={styles.rect}>
//                 <Text style={styles.tagihanPembayaran}>
//                     Tagihan
//                 </Text>
//                 <View style={styles.rect1}>
//                     <View style={styles.rect2}>
//                     </View>
//                     <View style={{ margin: 5, borderRadius: 10 }}>
//                         <Table>
//                             <Row data={state.tableHead} flexArr={[1, 2, 2, 1]} style={styles.head} textStyle={styles.text} />
//                             <TableWrapper style={styles.wrapper}>
//                                 <Col data={state.tableTitle} style={styles.title} heightArr={[28, 28]} textStyle={styles.text1} />
//                                 <Rows data={state.tableData} flexArr={[1, 2, 2, 1]} style={styles.row} textStyle={styles.text1} />
//                             </TableWrapper>
//                         </Table>
//                     </View>

//                 </View>
//             </View>
//         )
//     }

//     this.state = {
//         tableHead: ['No', 'Nama Tagihan', 'Tanggal Pembayaran', 'Status'],
//         tableData: [
//             ['1', 'Ianah Bulanan', '1 Agustus 2022', 'Belum Dibayar'],
//             ['2', 'Kas Padepokan', '1 Agustus 2022', 'Lunas'],
//         ]
//     }

//     return (
//         <View style={styles.container}>
//             <Cardnama style={styles.cardnama}></Cardnama>
//             <Text style={styles.tagihanAnda}>Tagihan Anda</Text>
//             <SwitchSelector style={styles.switch}
//                 initial={0}
//                 // onPress={value => this.setState({ listTab: value })}
//                 onPress={() => setValueFilter(value)}

//                 textColor={colors.ungu} //'#7a44cf'
//                 selectedColor={colors.white}
//                 buttonColor={colors.ungu}
//                 borderColor={colors.ungu}
//                 hasPadding
//                 options={[
//                     { label: "Tagihan", value: "Tagihan" }, //images.feminino = require('./path_to/assets/img/feminino.png')
//                     { label: "History", value: "History" } //images.masculino = require('./path_to/assets/img/masculino.png')
//                 ]}
//                 testID="table-switch-selector"
//                 accessibilityLabel="table-switch-selector"
//             />

//             <FlatList
//                 data={value}
//                 renderItem={renderItem}
//                 keyExtractor={(data, item) => item.toString()}
//             // keyExtractor={item => item.name}
//             />
//         </View>
//     );
// };

// const colors = StyleSheet.create({
//     ungu: '#293462',
//     white: '#fff'
// })

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "rgba(41,52,98,1)"
//     },
//     cardnama: {
//         height: 124,
//         width: 346,
//         marginTop: 10,
//         alignSelf: "center"
//     },
//     tagihanAnda: {
//         fontFamily: "Inter-SemiBold",
//         color: "rgba(255,255,255,1)",
//         marginTop: 30,
//         marginLeft: 31,
//         fontSize: 18,
//     },
//     switch: {
//         width: 290,
//         marginTop: 30,
//         alignSelf: 'center'
//     },
//     rect: {
//         width: 345,
//         height: 400,
//         backgroundColor: "#fff",
//         shadowColor: "rgba(154,120,120,1)",
//         alignSelf: "center",
//         shadowOffset: {
//             height: 5,
//             width: 5
//         },
//         borderRadius: 10,
//         elevation: 5,
//         shadowOpacity: 1,
//         shadowRadius: 0,
//         marginTop: 24
//     },
//     tagihanPembayaran: {
//         fontFamily: "Inter-SemiBold",
//         color: "rgba(41,52,98,1)",
//         fontSize: 20,
//         paddingTop: 10,
//         alignSelf: "center"
//     },
//     rect1: {
//         width: 333,
//         height: 270,
//         backgroundColor: "#fff",
//         shadowColor: "rgba(154,120,120,1)",
//         alignSelf: "center",
//         shadowOffset: {
//             height: 5,
//             width: 5
//         },
//         borderRadius: 10,
//         elevation: 5,
//         shadowOpacity: 1,
//         shadowRadius: 0,
//         marginTop: 10
//     },
//     rect2: {
//         width: 333,
//         height: 15,
//         backgroundColor: "rgba(41,52,98,1)",
//         borderTopLeftRadius: 10,
//         borderTopRightRadius: 10,
//     },
//     wrapper: { flexDirection: 'row' },
//     head: {
//         height: 60,
//         backgroundColor: "rgba(41,52,98,1)",
//         borderTopLeftRadius: 8,
//         borderTopRightRadius: 8
//     },
//     text: {
//         fontFamily: "Inter-SemiBold",
//         fontSize: 13,
//         margin: 6,
//         textAlign: 'center',
//         color: "#fff"
//     },
//     text1: {
//         margin: 6,
//         textAlign: 'center',
//         color: "#121212",
//         fontFamily: "Inter-Medium",
//         fontSize: 12
//     },
//     row: {
//         minHeight: 50,
//         borderBottomWidth: 1
//     },
// });

// export default Tagihan;
import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Table, Row, Rows, Col, TableWrapper } from "react-native-table-component";

const Tagihan = () => {
    const [Pembayaran, setPembayaran] = useState("tagihan");

    this.state = {
        tableHead: ['No', 'Nama Tagihan', 'Tanggal Pembayaran', 'Status'],
        tableData: [
            ['1', 'Ianah Bulanan', '1 Agustus 2022', 'Belum Dibayar'],
            ['2', 'Kas Padepokan', '1 Agustus 2022', 'Lunas'],
        ]
    }
    return (

        <PreviewLayout
            // label="Pembayaran"
            selectedValue={Pembayaran}
            values={[
                "tagihan",
                "history",
            ]}
            setSelectedValue={setPembayaran}
        >
            {/* <View
                style={[styles.box, { backgroundColor: "powderblue" }]}
            />
            <View
                style={[styles.box, { backgroundColor: "skyblue" }]}
            />
            <View
                style={[styles.box, { backgroundColor: "steelblue" }]}
            /> */}
            <View style={styles.rect}>
                <Text style={styles.tagihanPembayaran}>
                    {Pembayaran}
                </Text>
                <View style={styles.rect1}>
                    <View style={styles.rect2}>
                    </View>
                    <View style={{ margin: 5, borderRadius: 10 }}>
                        <Table>
                            <Row data={state.tableHead} flexArr={[1, 2, 2, 1]} style={styles.head} textStyle={styles.text} />
                            <TableWrapper style={styles.wrapper}>
                                <Col data={state.tableTitle} style={styles.title} heightArr={[28, 28]} textStyle={styles.text1} />
                                <Rows data={state.tableData} flexArr={[1, 2, 2, 1]} style={styles.row} textStyle={styles.text1} />
                            </TableWrapper>
                        </Table>
                    </View>

                </View>
            </View>
        </PreviewLayout>
    );
};

const PreviewLayout = ({
    label,
    children,
    values,
    selectedValue,
    setSelectedValue,
}) => (
    <View style={{ padding: 10, flex: 1 }}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.row}>
            {values.map((value) => (
                <TouchableOpacity
                    key={value}
                    onPress={() => setSelectedValue(value)}
                    style={[styles.button, selectedValue === value && styles.selected]}
                >
                    <Text
                        style={[
                            styles.buttonLabel,
                            selectedValue === value && styles.selectedLabel,
                        ]}
                    >
                        {value}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
        <View style={[styles.container, { [label]: selectedValue }]}>
            {children}
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 8,
        backgroundColor: "aliceblue",
    },
    box: {
        width: 50,
        height: 50,
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    button: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 4,
        backgroundColor: "oldlace",
        alignSelf: "flex-start",
        marginHorizontal: "1%",
        marginBottom: 6,
        minWidth: "48%",
        textAlign: "center",
    },
    selected: {
        backgroundColor: "coral",
        borderWidth: 0,
    },
    buttonLabel: {
        fontSize: 12,
        fontWeight: "500",
        color: "coral",
    },
    selectedLabel: {
        color: "white",
    },
    label: {
        textAlign: "center",
        marginBottom: 10,
        fontSize: 24,
    },
    tagihanPembayaran: {
        fontFamily: "Inter-SemiBold",
        color: "rgba(41,52,98,1)",
        fontSize: 20,
        paddingTop: 10,
        alignSelf: "center"
    },
    rect1: {
        width: 333,
        height: 270,
        backgroundColor: "#fff",
        shadowColor: "rgba(154,120,120,1)",
        alignSelf: "center",
        shadowOffset: {
            height: 5,
            width: 5
        },
        borderRadius: 10,
        elevation: 5,
        shadowOpacity: 1,
        shadowRadius: 0,
        marginTop: 10
    },
    rect2: {
        width: 333,
        height: 15,
        backgroundColor: "rgba(41,52,98,1)",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    wrapper: { flexDirection: 'row' },
    head: {
        height: 60,
        backgroundColor: "rgba(41,52,98,1)",
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    text: {
        fontFamily: "Inter-SemiBold",
        fontSize: 13,
        margin: 6,
        textAlign: 'center',
        color: "#fff"
    },
    text1: {
        margin: 6,
        textAlign: 'center',
        color: "#121212",
        fontFamily: "Inter-Medium",
        fontSize: 12
    },
    row: {
        minHeight: 50,
        borderBottomWidth: 1
    },
});

export default Tagihan;