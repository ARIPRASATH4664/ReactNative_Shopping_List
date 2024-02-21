import React from "react";
import  {View, Text, TouchableOpacity} from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { TInitialState } from "../store";
import { colors } from "../assets/colors";
import {
    GoogleSignin
} from '@react-native-google-signin/google-signin';
import { deleteUserInfo } from "../store/action";

export const UserList = (props: {}) : JSX.Element => {

    const user = useSelector((state: TInitialState) => state.user)
    console.log("SUCK!!! ~ UserList ~ user:", user);
    const dispatch = useDispatch();

    const signOut = async() => {
        try {
            await GoogleSignin.signOut();
            dispatch(deleteUserInfo({}))
        } catch(e) {

        }
    }

    return (
        <View style={{flex: 1, backgroundColor :colors.white, paddingHorizontal: 24, paddingTop: 18, borderWidth:1}}>
            <View  style={{flex: 1, backgroundColor :colors.white, paddingHorizontal: 24, paddingVertical: 18,}}>
            <Text style={{ fontSize: 24, color: colors.black, fontWeight: '800' }}>PROFILE</Text>
            <View style={{borderWidth: 1, paddingVertical: 8, paddingHorizontal: 8, margin: 8, borderRadius: 12}}>
                <Text style={{ fontSize: 18, color: colors.black, fontWeight: '500' }}>Email</Text>
                <Text style={{ fontSize: 14, color: colors.black, fontWeight: '300' }}>{user.email}</Text>
            </View>
            <View style={{borderWidth: 1, paddingVertical: 8, paddingHorizontal: 8, margin: 8, borderRadius: 12}}>
            <Text style={{ fontSize: 18, color: colors.black, fontWeight: '500' }}>First Name</Text>
                <Text style={{ fontSize: 18, color: colors.black, fontWeight: '300' }}>{user.givenName}</Text>
            </View>
            <View style={{borderWidth: 1, paddingVertical: 8, paddingHorizontal: 8, margin: 8, borderRadius: 12}}>
            <Text style={{ fontSize: 18, color: colors.black, fontWeight: '500' }}>Last Name</Text>
                <Text style={{ fontSize: 18, color: colors.black, fontWeight: '300' }}>{user.familyName}</Text>
            </View>
            </View>
            <TouchableOpacity style={{paddingBottom: 18}} onPress={()=> {signOut()}}>
                <Text style={{ fontSize: 14, padding: 10, paddingHorizontal: 40, color: colors.black, fontWeight: '400', alignSelf: "center", borderWidth: 1, borderRadius: 8 }}>Sign Out</Text>
            </TouchableOpacity>
        </View>
    )
}