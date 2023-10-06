import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { theme } from "../theme";
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline'

export default function HomeScreen(){
    return(
        <View className="flex-1 relative">
            <StatusBar style="light" />
            <Image blurRadius={90} source={require('../assets/images/bg.png')}
                className="absolute h-full w-full"
            />
            <SafeAreaView className="flex flex-1">
            {/* search bar section*/}
                <View style={{height: '7%'}} className="mx-4 relative z-50">
                    <View className="flex-row justify-end items-center rounded-full"
                    style={{backgroundColor: theme.bgWhite(0.2)}}>
                        <TextInput 
                            placeholder="Search City" 
                            placeholderTextColor={'lightgray'}
                            className="p1-6 h-10 flex-1 text-base text-white"
                        />
                        <TouchableOpacity
                            style={{backgroundColor: theme.bgWhite(0.3)}}
                            className="rounded-full p-3 m-1">
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
}