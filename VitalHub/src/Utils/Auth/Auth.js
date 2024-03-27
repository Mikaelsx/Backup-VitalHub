// IMPORT 

import AsyncStorage from "@react-native-async-storage/async-storage"; // ASYNC STORAGE

import { jwtDecode } from "jwt-decode"; // JWT - DECODE

import { encode, decode } from "base-64"; // BASE - 64

if ( global.atob ) {
    global.atob = encode
}

if ( !global.atob ) {
    global.atob = decode
}

export const userDecodeToken = async () => {
    const token = await AsyncStorage.getItem("token")

    if ( token === null ) {
        return null;
    }

    // DECODIFICA O TOKEN RECEBIDO

    const decoded = jwtDecode( token );

    return {
        name: decoded.name,
        role: decoded.role,
        email: decoded.email,
    }
}