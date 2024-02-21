import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Alert } from 'react-native';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import { useDispatch } from 'react-redux';
import { updateUserInfo } from '../store/action';

export const Auth = (props: {}) => {

    const [loggedIn, setLoggedIn] = useState<boolean>(false);
    const [userInfo, setUserInfo] = useState<Array<Record<string, string|null>> | undefined>();
    const userRef = useRef<Array<Record<string, string|null>>>();

    const dispatch = useDispatch();

    useEffect(() => {
      console.log("SUCK!!! ~ useEffect ~ userRef.current !== userInfo:", userRef.current , userInfo)
      if(userRef.current !== userInfo && userInfo) {

        console.log("SUCK!!! ~ useEffect ~ userInfo:", userInfo)
        dispatch(updateUserInfo(userInfo))
        userRef.current = userInfo;
      }
    }, [userInfo])


    useEffect(() => {
        GoogleSignin.configure({
            androidClientId: "573115463264-8cirf9ic8ekjfvm8f5lbtmlou2umnbhi.apps.googleusercontent.com",
            iosClientId: '573115463264-5k0j9prbsvpq52eaekiug3fljvmf5inj.apps.googleusercontent.com',
            // scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
            // offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
            // hostedDomain: '', // specifies a hosted domain restriction
            // forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
          });
    }, []);

    const signIn = async () => {
        try {
          const hasPlayService = await GoogleSignin.hasPlayServices();
          const res = await GoogleSignin.signIn();
          console.log("SUCK!!!", res.user)
          setUserInfo(res.user);
          setLoggedIn(true);
        } catch (error) {
          console.log("SUCK!!! ~ signIn ~ error:", error)
        }
      };

      const signOut = async () => {
        try {
          await GoogleSignin.revokeAccess();
          await GoogleSignin.signOut();
          setLoggedIn(false);
          setUserInfo([]);
        } catch (error) {
          console.error(error);
        }
      };

    return (
        <View style={{ flex: 1, borderWidth: 1, justifyContent: "center", alignItems: "center", margin: 8 }}>
            <Text>Auth Screen</Text>
            <GoogleSigninButton
                style={{width: 192, height: 48}}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={() => {signIn()}}
              />
        </View>
    )
}