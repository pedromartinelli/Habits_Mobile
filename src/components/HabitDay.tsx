import { TouchableOpacity, Dimensions, View } from "react-native";

const week_days = 7
const screen_horizontal_padding = (32 * 2) / 5

export const day_margin_between = 8
export const day_size = (Dimensions.get('screen').width / week_days) - (screen_horizontal_padding + 5)

export function HabitDay() {
  return (
    <View className="flex-row">

      <TouchableOpacity
        className="bg-zinc-900 border-2 rounded-lg border-zinc-800 m-1"
        style={{ width: day_size, height: day_size }}
        activeOpacity={0.7}
      />
    </View >
  );
}