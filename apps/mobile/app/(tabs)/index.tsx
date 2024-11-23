import Logo from "@/components/template/Logo";
import { bgBlack, centerGrow, flex1 } from "@/style";
import { ImageBackground, SafeAreaView, Text } from "react-native";

export default function TelaIncio() {
  return (
    <ImageBackground
      source={require("@/assets/images/background.png")}
      resizeMode="cover"
      style={[flex1, bgBlack]}
    >
      <Logo />
    </ImageBackground>
  );
}
