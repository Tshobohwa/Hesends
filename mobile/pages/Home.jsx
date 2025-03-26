import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import COLORS from "../utils/colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import TransactionItem from "../components/buttons/TransactionItem";
import AccountCard from "../components/buttons/AccountCard";
// import hesendsIcon from "../images/hesends.png";
// import hederaBlack from "../images/hedera-black.png";
import hederaGreen from "../images/hedera-green.png";
import MyBottomSheet from "../components/bottomSheets/MyBottomSheet";

const Home = () => {
  const [isSelectingAccount, setIsSelectingAccount] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            gap: -20,
            marginBottom: 40,
          }}
        >
          <Image
            source={hederaGreen}
            style={{
              height: 32,
              objectFit: "contain",
            }}
          />
          <Text
            style={{
              fontSize: 30,
              marginBottom: -18,
              color: COLORS["green-light"],
            }}
          >
            esends
          </Text>
        </View>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
          onPress={() => setIsSelectingAccount(!isSelectingAccount)}
        >
          <Text
            style={{
              fontWeight: "semibold",
              color: COLORS["green-light"],
              fontSize: 24,
              lineHeight: 30,
            }}
          >
            KES Account
          </Text>
          <MaterialIcons
            name="keyboard-arrow-down"
            size={24}
            color={COLORS["green-light"]}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: COLORS.black,
            fontSize: 48,
            fontWeight: "semibold",
            lineHeight: 50,
          }}
        >
          14 500<Text style={{ fontSize: 24 }}> KES</Text>
        </Text>
        {/* <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TransactionButton name="Top up" />
          <TransactionButton name="Send" />
          <TransactionButton name="Withdraw" />
        </View> */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ width: "100%", marginTop: 20, gap: 10 }}
        >
          <AccountCard />
          <AccountCard />
          <AccountCard />
          <AccountCard />
          <AccountCard />
        </ScrollView>
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "600" }}>Transactions</Text>
          <TouchableOpacity>
            <Text style={{ fontSize: 18, color: COLORS["green-light"] }}>
              see all
            </Text>
          </TouchableOpacity>
        </View>
        <TransactionItem />
        <TransactionItem />
        <TransactionItem />
        <TransactionItem />
        <TransactionItem />
        <TransactionItem />
        <MyBottomSheet />
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          position: "absolute",
          bottom: 20,
          width: "100%",
        }}
      >
        <TouchableOpacity
          style={{
            height: 45,
            backgroundColor: COLORS["green-light"],
            justifyContent: "center",
            alignItems: "center",
            borderTopLeftRadius: 25,
            borderBottomLeftRadius: 30,
            width: 95,
          }}
        >
          <Text style={{ fontWeight: "600" }}>Top up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 45,
            backgroundColor: COLORS["green-light"],
            justifyContent: "center",
            alignItems: "center",
            width: 95,
            borderRightWidth: 2,
            borderLeftWidth: 2,
            borderColor: COLORS.white,
          }}
        >
          <Text style={{ fontWeight: "600" }}>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 45,
            backgroundColor: COLORS["green-light"],
            justifyContent: "center",
            alignItems: "center",
            borderTopRightRadius: 25,
            borderBottomRightRadius: 30,
            width: 95,
          }}
        >
          <Text style={{ fontWeight: "600" }}>Withdraw</Text>
        </TouchableOpacity>
      </View>
      <MyBottomSheet
        bottomSheetOpen={isSelectingAccount}
        setBottomSheetOpen={setIsSelectingAccount}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 40,
  },
});
