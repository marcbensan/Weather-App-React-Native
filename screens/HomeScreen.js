import {View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, ScrollView,} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { theme } from "../theme";
import { CalendarDaysIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { MapPinIcon } from "react-native-heroicons/solid";
import { useState } from "react";

export default function HomeScreen() {
  const [showSearch, toggleSearch] = useState(false);
  const [locations, setLocations] = useState([1]);

  return (
    <View className="flex-1 relative">
      <StatusBar style="light" />
      <Image
        source={require("../assets/images/bg6.png")}
        className="absolute h-full w-full"
      />
      <SafeAreaView className="flex flex-1">
        {/* search bar section*/}
        <View
          style={{ height: "7%", marginTop: 50 }}
          className="mx-5 fixed z-50"
        >
          <View
            className="flex-row justify-start items-center rounded-full"
            style={{
              backgroundColor: theme.bgWhite(0.1),
              width: showSearch ? "flex-grow transition-all" : "16%",
            }}
          >
            <TouchableOpacity
              onPress={() => toggleSearch(!showSearch)}
              style={{
                backgroundColor: theme.bgWhite(0.2),
                alignSelf: "flex-start",
                justifyContent: "flex-start",
              }}
              className="rounded-full p-3 m-1 justify-start"
            >
              <MagnifyingGlassIcon size="25" color="white" />
            </TouchableOpacity>

            {showSearch ? (
              <TextInput
                placeholder="Search City..."
                placeholderTextColor={"lightgray"}
                style={{ marginLeft: 10 }}
                className=" text-left flex-1 h-15 text-sm text-gray-500"
              />
            ) : null}
          </View>
          {locations.length > 0 && showSearch ? (
            <View className="absolute w-full bg-gray-300 top-16 rounded-3xl">
              {locations.map((loc, index) => {
                let showBorder = index != locations.length;
                let borderClass = showBorder
                  ? "b order-b-2 border-b-gray-400 "
                  : "";
                return (
                  <TouchableOpacity
                    onPress={() => handleLocation(loc)}
                    key={index}
                    className={
                      "flex-row items-center border-0 p-3 px-4 mb-1" +
                      borderClass
                    }
                  >
                    <MapPinIcon size="20" color="gray" />
                    <Text className="text-black text-lg ml-2">
                      Toronto, Canada
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          ) : null}
        </View>

        {/* degrees celsius */}
        <View>
          <Text
            className="text-center text-white font-thin text-9xl pt-24 pl-12"
            style={{ height: 200 }}
          >
            23&#176;
          </Text>
        </View>
        {/* forecast section */}
        <View className="justify-center" style={{ height: 60 }}>
          {/*location details */}
          <Text className="text-white text-center font-light text-xl pt-8">
            Toronto
          </Text>
          <Text className="text-base text-center text-gray-300 pb-4 font-light ">
            Canada
          </Text>
        </View>

        {/* weather image */}
        <View style={{ height: 300 }}>
          <View className="flex-row justify-center pt-48">
            <Image
              source={require("../assets/images/partlycloudy.png")}
              className="h-9 w-9"
            />
          </View>
          <View className="space-y-2 pt-2">
            <Text className="text-center text-white text-base font-extralight tracking-widest ">
              Partly Cloudy
            </Text>
          </View>
        </View>

        <View>
          {/* more stats */}
          <View
            className="flex-row justify-between mx-4"
            style={{ height: 50 }}
          >
            <View className="flex-row space-x-2 items-center pl-3">
              <Image
                source={require("../assets/icons/wind.png")}
                className="h-6 w-6"
              />
              <Text className="text-white font-light text-base ">22km</Text>
            </View>

            <View className="flex-row space-x-2 items-center">
              <Image
                source={require("../assets/icons/drop.png")}
                className="h-6 w-6"
              />
              <Text className="text-white font-light text-base">23%</Text>
            </View>

            <View className="flex-row space-x-2 items-center">
              <Image
                source={require("../assets/icons/sun.png")}
                className="h-6 w-6"
              />
              <Text className="text-white font-light text-base pr-3">
                6:05 AM
              </Text>
            </View>
          </View>
        </View>

        {/* forecast for the next days */}
        <View className="mb-2 space-y-1">
          <View className="flex-row items-center mx-5 space-x-2 pt-3 pb-">
            <CalendarDaysIcon
              size="22"
              color="white"
              style={{ marginLeft: 10 }}
            />
            <Text className="text-white font-light text-base">
              Daily forecast
            </Text>
          </View>
          <ScrollView
            horizontal
            contentContainerStyle={{ paddingHorizontal: 15, marginRight: 2 }}
            showsHorizontalScrollIndicator={false}
          >
            <View
              className="flex justify-center items-center w-24 h-20 rounded-2xl py-3 space-y-1 mt-4 mb-5 mr-2"
              style={{ backgroundColor: theme.bgWhite(0.08) }}
            >
              <Image
                source={require("../assets/images/heavyrain.png")}
                className="h-3 w-3"
              />
              <Text className="text-white text-xs font-light">Monday</Text>
              <Text className="text-white text-base font-semibold">
                20&#176;
              </Text>
            </View>

            <View
              className="flex justify-center items-center w-24 h-20 rounded-2xl py-3 space-y-1 mt-4 mb-5 mr-2"
              style={{ backgroundColor: theme.bgWhite(0.08) }}
            >
              <Image
                source={require("../assets/images/mist.png")}
                className="h-3 w-3"
              />
              <Text className="text-white text-xs font-light">Tuesday</Text>
              <Text className="text-white text-base font-semibold">
                18&#176;
              </Text>
            </View>

            <View
              className="flex justify-center items-center w-24 h-20 rounded-2xl py-3 space-y-1 mt-4 mb-5 mr-2"
              style={{ backgroundColor: theme.bgWhite(0.08) }}
            >
              <Image
                source={require("../assets/images/moderaterain.png")}
                className="h-3 w-3"
              />
              <Text className="text-white text-xs font-light">Wednesday</Text>
              <Text className="text-white text-base font-semibold">
                17&#176;
              </Text>
            </View>

            <View
              className="flex justify-center items-center w-24 h-20 rounded-2xl py-3 space-y-1 mt-4 mb-5 mr-2"
              style={{ backgroundColor: theme.bgWhite(0.08) }}
            >
              <Image
                source={require("../assets/images/sun.png")}
                className="h-3 w-3"
              />
              <Text className="text-white text-xs font-light">Thursday</Text>
              <Text className="text-white text-base font-semibold">
                25&#176;
              </Text>
            </View>

            <View
              className="flex justify-center items-center w-24 h-20 rounded-2xl py-3 space-y-1 mt-4 mb-5 mr-2"
              style={{ backgroundColor: theme.bgWhite(0.08) }}
            >
              <Image
                source={require("../assets/images/cloud.png")}
                className="h-3 w-3"
              />
              <Text className="text-white text-xs font-light">Friday</Text>
              <Text className="text-white text-base font-semibold ">
                19&#176;
              </Text>
            </View>

            <View
              className="flex justify-center items-center w-24 h-20 rounded-2xl py-3 space-y-1 mt-4 mb-5 mr-2"
              style={{ backgroundColor: theme.bgWhite(0.08) }}
            >
              <Image
                source={require("../assets/images/sun.png")}
                className="h-3 w-3"
              />
              <Text className="text-white text-xs font-light">Saturday</Text>
              <Text className="text-white text-base font-semibold">
                26&#176;
              </Text>
            </View>

            <View
              className="flex justify-center items-center w-24 h-20 rounded-2xl py-3 space-y-1 mt-4 mb-5 mr-2"
              style={{ backgroundColor: theme.bgWhite(0.08) }}
            >
              <Image
                source={require("../assets/images/cloud.png")}
                className="h-3 w-3"
              />
              <Text className="text-white text-xs font-light">Sunday</Text>
              <Text className="text-white text-base font-semibold">
                23&#176;
              </Text>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
}
