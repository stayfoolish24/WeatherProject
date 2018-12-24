import { StyleSheet } from "react-native"

const baseFontSize = 24

const styles = StyleSheet.create({
  bigText: { fontSize: baseFontSize + 8, color: "#FFFFFF" },
  mainText: { fontSize: baseFontSize, color: "#FFFFFF" }
})

// 다른 곳에서 사용하기 위해 지정
styles["baseFontSize"] = baseFontSize

export default styles
