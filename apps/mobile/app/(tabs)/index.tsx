import { centerGrow, flex1 } from "@/style";
import { SafeAreaView, Text } from "react-native";

export default function Index() {
  return (
    <SafeAreaView style={[flex1, centerGrow]}>
      <Text style={[]}>Edit app/index.tsx to edit this screen.</Text>
    </SafeAreaView>
  );
}
