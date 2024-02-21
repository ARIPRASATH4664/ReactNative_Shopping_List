import React, { useState } from "react";
import { View, Text, Modal, Alert, TextInput, TouchableOpacity } from 'react-native';
import { colors } from "../assets/colors";
import { addItemList } from "../store/action";
import { useDispatch } from "react-redux";

interface TAddItems {
    closeModal: () => void
    visible: boolean
}

export const AddItems = (props: TAddItems): JSX.Element => {

    const [title, setTitle] = useState<string>("");
    const [price, setPrice] = useState<string>("");
    const dispatch = useDispatch();

    const addNewItemToList = () => {
        dispatch(addItemList({title,price}))
        props.closeModal();
    }

    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={props.visible}
            onRequestClose={() => {
                props.closeModal();
            }}>
            <View style={{ flex: 1, justifyContent: "center", alignItems: 'center', alignSelf: "center", backgroundColor: "#rgba(255, 255, 255, 0.1)" }}>
                <View style={{ alignSelf: "center", margin: 10, borderWidth: 1, height: 300, width: 300, backgroundColor: colors.white, borderRadius: 8 }}>
                    <View style={{ paddingHorizontal: 20, flexDirection: "row", justifyContent: "space-between", alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, color: colors.black, fontWeight: '600' }}>Shopping List</Text>
                        <TouchableOpacity style={{ padding: 10 }} onPress={() => {
                            // console.log("SUCK!!! ~ AddItems ~ props:", props)
                            props.closeModal();
                        }}>
                            <Text style={{ fontSize: 14, padding: 10, color: colors.black, fontWeight: '400', alignSelf: "center", borderWidth: 1, borderRadius: 8 }}>close</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingHorizontal: 20 }}>
                        <Text style={{ fontSize: 14, color: colors.black, fontWeight: '400', paddingBottom: 14 }}>Name</Text>
                        <TextInput
                            value={title}
                            style={{ borderWidth: 1, borderRadius: 8, height: 40, width: "auto", color: colors.black }}

                            onChangeText={(text) => {
                                setTitle(text)
                            }}
                        />
                        <View style={{ height: 20 }} />
                        <Text style={{ fontSize: 14, color: colors.black, fontWeight: '400', paddingBottom: 14 }}>Price</Text>
                        <TextInput
                            value={price}
                            style={{ borderWidth: 1, borderRadius: 8, height: 40, width: "auto", color: colors.black }}

                            onChangeText={(text) => {
                                setPrice(text)
                            }}
                        />
                    </View>
                    <TouchableOpacity style={{ padding: 10 }} onPress={() => {
                        addNewItemToList()
                    }}>
                        <Text style={{ fontSize: 14, padding: 10, color: colors.black, fontWeight: '400', alignSelf: "center", borderWidth: 1, borderRadius: 8 }}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}