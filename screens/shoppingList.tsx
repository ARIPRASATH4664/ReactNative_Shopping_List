import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { AddItems } from "../components/addItem";
import { colors } from "../assets/colors";
import { useSelector, useDispatch } from "react-redux";
import { TInitialState, TItems } from "../store";
import { updateList } from "../store/action";
import { getStorage, getStorageInstance, setStorage } from "../hepler/mmkv";
import { MMKV } from "react-native-mmkv";

export const ShoppingList = (props: {}): JSX.Element => {

    const storage : MMKV = getStorageInstance();

    const [visible, setVisible] = useState<boolean>(false);
    const list = useSelector((state: TInitialState) => state. items)
    // console.log("SUCK!!! ~ ShoppingList ~ list:", list)


    useEffect(() => {
        const data : string = getStorage(storage, "list")
        const list = JSON.parse(data);
        dispatch(updateList([...list]))
      }, []);

    useEffect(() => {
        if(list && list.length > 0) {
            setStorage(storage, "list", JSON.stringify(list))
        }
    }, [list])

    const dispatch = useDispatch();

    const updateListItem = (index: number, title: string , price: string, pending: boolean) => {
        const data = list
        data.splice(index,1,{title, price, pending: !pending})
        dispatch(updateList(data));
    }

    return (
        <ScrollView style={{ flex: 1 , backgroundColor: colors.white}}>
        <View style={{ flex: 1 , backgroundColor: colors.white}}>
            <View style={{ padding: 16 }}>
                <View style={{ flexDirection: 'row', justifyContent: "space-between" , alignItems: 'center'}}>
                    <Text style={{ fontSize: 18, color: colors.black, fontWeight: '600',  }}>Shopping List</Text>
                    <TouchableOpacity onPress={() => { setVisible(true) }}>
                        <Text style={{ fontSize: 16, color: colors.black, fontWeight: '400', borderWidth:1, borderRadius: 8, padding: 6 }}>Add Item</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 8, paddingTop: 8}}>
                        {list?.map((item,index) => {
                            // if(!item.pending) {
                            //     return null
                            // }
                            return (
                                <View style={{ marginBottom: 10,padding : 10, paddingHorizontal :28, borderRadius: 8, borderWidth: 1, height: 70, flexDirection: 'row' , justifyContent: 'space-between', alignItems: 'center'}}>
                                    <View  style={{ flexDirection: 'column' }}>
                                        <Text style={{ fontSize: 14, color: colors.black, fontWeight: '400', textDecorationLine: item.pending ? 'none' :'line-through' }}>Title :- {item.title}</Text>
                                        <Text style={{ fontSize: 14, color: colors.black, fontWeight: '400', textDecorationLine: item.pending ? 'none' :'line-through'  }}>Price :- {item.price}</Text>
                                    </View>
                                    <TouchableOpacity style={{ borderWidth: 1, padding: 6, borderRadius: 6, backgroundColor: item.pending ? colors.green : colors.purple }} onPress={() => {
                                       updateListItem(index, item.title,item.price,item.pending)
                                    }}>
                                        <Text style={{ fontSize: 14, color: colors.black, fontWeight: '400' }}>{item.pending ? 'Mark as Purchased' : 'Yet to Purchase'}</Text>
                                    </TouchableOpacity>
                                </View>
                            );
                        })}

                </View>
            </View>
            {visible ? <AddItems closeModal={() => { setVisible(false) }} visible={visible} /> : null}
        </View>
        </ScrollView>
    )
}