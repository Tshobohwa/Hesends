import React, { useRef, useMemo, useCallback, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import BottomSheet, {
  BottomSheetView,
  SCREEN_WIDTH,
} from "@gorhom/bottom-sheet";

const MyBottomSheet = ({
  bottomSheetOpen,
  setBottomSheetOpen = () => {},
  snapPointsArray = ["60%"],
  children,
}) => {
  const bottomSheetRef = useRef(null);

  // Define snap points
  const snapPoints = useMemo(() => snapPointsArray, []);

  // Handle sheet changes
  const handleSheetChanges = useCallback((index) => {
    console.log("Bottom Sheet Index:", index);
  }, []);

  useEffect(() => {
    if (bottomSheetOpen) {
      bottomSheetRef.current?.expand();
    } else {
      bottomSheetRef.current?.close();
    }
  }, [bottomSheetOpen]);

  return (
    // <View style={styles.container}>
    <BottomSheet
      ref={bottomSheetRef}
      index={-1} // Initially closed
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      enablePanDownToClose={true}
      onClose={() => setBottomSheetOpen(false)}
    >
      <BottomSheetView style={styles.contentContainer}>
        <View style={{ width: SCREEN_WIDTH }}>{children}</View>
      </BottomSheetView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "static",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default MyBottomSheet;
