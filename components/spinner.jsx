import { ActivityIndicator, View } from "react-native";

export default function Spinner({otherClassNames, size="large"}) {
  return (
    <View className="min-h-[62px]">
      <ActivityIndicator size={size} color="#FF9C01" className={otherClassNames} />
    </View>
  )
}