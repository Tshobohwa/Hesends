import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import MyBottomSheet from "../components/bottomSheets/MyBottomSheet";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text>Profile</Text>
        {/* <MyBottomSheet /> */}
        <Text>This is a bottom sheet</Text>
        <TouchableOpacity onPress={() => setBottomSheetOpen(!bottomSheetOpen)}>
          <Text>Toggle bottom sheet</Text>
        </TouchableOpacity>
        <MyBottomSheet
          bottomSheetOpen={bottomSheetOpen}
          setBottomSheetOpen={setBottomSheetOpen}
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
