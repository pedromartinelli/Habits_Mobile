import { TouchableOpacity, TouchableOpacityProps, Dimensions, View } from "react-native";
import clsx from "clsx";
import dayjs from "dayjs";

const week_days = 7
const screen_horizontal_padding = (32 * 2) / 5

export const day_margin_between = 8
export const day_size = (Dimensions.get('screen').width / week_days) - (screen_horizontal_padding + 5)

interface Props extends TouchableOpacityProps {
  date: Date
  completed?: number
  amount?: number
}

export function HabitDay({ completed = 0, amount = 0, date, ...rest }: Props) {

  const completedPercentage = amount > 0 ? Math.round((completed / amount) * 100) : 0
  const today = dayjs().startOf('day').toDate()
  const isCurrentDay = dayjs(date).isSame(today)

  return (
    <View className="flex-row">
      <TouchableOpacity
        className={clsx("border-2 rounded-lg m-1", {
          'bg-zinc-900 border-zinc-800': completedPercentage === 0,
          'bg-violet-900 border-violet-700': completedPercentage > 0 && completedPercentage < 20,
          'bg-violet-800 border-violet-600': completedPercentage >= 20 && completedPercentage < 40,
          'bg-violet-700 border-violet-500': completedPercentage >= 40 && completedPercentage < 60,
          'bg-violet-600 border-violet-500': completedPercentage >= 60 && completedPercentage < 80,
          'bg-violet-500 border-violet-400': completedPercentage >= 80,
          'border-zinc-600 border-3': isCurrentDay
        })}
        style={{ width: day_size, height: day_size }}
        activeOpacity={0.7}
        {...rest}
      />
    </View >
  );
}