import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={116}
    height={64}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M7.318 46.045V56H1.761V32.727h5.375v9.023h.194c.393-1.076 1.037-1.917 1.931-2.523.902-.606 2.004-.909 3.307-.909 1.228 0 2.296.273 3.205.818.909.538 1.613 1.3 2.113 2.284.508.985.758 2.137.75 3.455V56H13.08V45.966c.007-.97-.235-1.727-.728-2.273-.492-.545-1.185-.818-2.08-.818-.583 0-1.098.129-1.545.386-.44.25-.784.61-1.034 1.08-.242.47-.367 1.038-.375 1.704Zm19.708 10.25c-1.114 0-2.103-.185-2.966-.556a4.62 4.62 0 0 1-2.034-1.705c-.493-.765-.74-1.723-.74-2.875 0-.97.171-1.788.512-2.454a4.37 4.37 0 0 1 1.41-1.625 6.63 6.63 0 0 1 2.068-.944c.78-.22 1.613-.367 2.5-.443.992-.09 1.791-.185 2.397-.284.606-.106 1.046-.254 1.319-.443a.956.956 0 0 0 .42-.83v-.056c0-.584-.2-1.035-.602-1.353-.402-.318-.944-.477-1.625-.477-.735 0-1.326.16-1.773.477a2.103 2.103 0 0 0-.852 1.319l-5.125-.182a6.06 6.06 0 0 1 1.17-2.841c.636-.841 1.508-1.5 2.614-1.978 1.113-.484 2.45-.727 4.011-.727 1.114 0 2.14.133 3.08.398.94.258 1.757.636 2.454 1.136a5.137 5.137 0 0 1 1.614 1.819c.386.72.58 1.541.58 2.465V56H32.23v-2.432h-.136c-.31.591-.709 1.091-1.193 1.5a4.755 4.755 0 0 1-1.694.92c-.644.205-1.37.307-2.181.307Zm1.715-3.636c.599 0 1.137-.121 1.614-.364a2.983 2.983 0 0 0 1.16-1c.287-.431.431-.931.431-1.5v-1.659c-.16.084-.352.16-.58.228-.22.068-.462.132-.727.193-.265.06-.538.113-.818.159-.28.045-.55.087-.807.125a5.02 5.02 0 0 0-1.34.386 2.117 2.117 0 0 0-.842.682 1.67 1.67 0 0 0-.284.977c0 .576.205 1.015.614 1.319.417.303.943.454 1.58.454ZM40.855 56V32.727h5.557v8.807h.114c.227-.53.549-1.042.965-1.534a4.848 4.848 0 0 1 1.614-1.205c.66-.318 1.447-.477 2.364-.477 1.212 0 2.344.318 3.398.955 1.06.636 1.916 1.617 2.568 2.943.651 1.326.977 3.015.977 5.068 0 1.977-.315 3.633-.943 4.966-.622 1.333-1.462 2.333-2.523 3-1.053.667-2.224 1-3.511 1-.88 0-1.64-.144-2.284-.432a4.97 4.97 0 0 1-1.625-1.136 5.458 5.458 0 0 1-1-1.512h-.17V56h-5.5Zm5.443-8.727c0 .94.125 1.757.375 2.454.258.697.625 1.239 1.103 1.625.484.38 1.064.569 1.738.569.682 0 1.262-.19 1.739-.569.477-.386.837-.928 1.08-1.625.25-.697.374-1.515.374-2.454 0-.94-.125-1.754-.375-2.444-.242-.689-.602-1.223-1.08-1.602-.469-.378-1.048-.568-1.738-.568-.682 0-1.261.186-1.738.557-.478.371-.845.901-1.103 1.59-.25.69-.375 1.512-.375 2.467ZM61.324 56V38.545h5.557V56h-5.557Zm2.784-19.489c-.78 0-1.45-.257-2.011-.772-.561-.523-.841-1.152-.841-1.887 0-.727.28-1.348.84-1.863a2.847 2.847 0 0 1 2.012-.785c.788 0 1.458.262 2.011.785.56.515.841 1.136.841 1.863 0 .735-.28 1.364-.84 1.887-.554.515-1.224.772-2.012.772Zm16.162 2.034v4.091H69.259v-4.09h11.01Zm-8.705-4.181h5.557V50.51c0 .341.053.618.16.83a.993.993 0 0 0 .488.443c.212.083.466.125.761.125.212 0 .436-.019.67-.057.243-.045.425-.083.546-.113l.841 4.011c-.265.076-.64.17-1.125.284a9.345 9.345 0 0 1-1.716.216c-1.303.06-2.42-.09-3.352-.455-.924-.37-1.633-.947-2.125-1.727-.485-.78-.72-1.761-.705-2.943V34.364Zm26.56 9.511-5.102.136a1.902 1.902 0 0 0-.432-.966 2.323 2.323 0 0 0-.92-.67c-.372-.167-.804-.25-1.296-.25-.644 0-1.193.129-1.648.386-.447.258-.666.606-.659 1.046-.007.34.129.636.41.886.287.25.799.45 1.533.602l3.364.637c1.742.333 3.038.886 3.886 1.659.856.773 1.288 1.795 1.296 3.068-.008 1.197-.364 2.239-1.068 3.125-.697.886-1.652 1.576-2.864 2.068-1.212.485-2.599.728-4.16.728-2.492 0-4.457-.512-5.897-1.535-1.432-1.03-2.25-2.409-2.454-4.136l5.488-.136c.121.636.436 1.12.944 1.454.507.334 1.155.5 1.943.5.712 0 1.291-.132 1.738-.397.447-.266.674-.618.682-1.057-.008-.394-.182-.709-.523-.944-.34-.242-.875-.431-1.602-.568l-3.045-.58c-1.75-.317-3.053-.904-3.91-1.76-.855-.864-1.28-1.963-1.272-3.296-.008-1.167.303-2.163.932-2.989.628-.833 1.522-1.47 2.681-1.909 1.16-.44 2.527-.659 4.103-.659 2.363 0 4.227.496 5.59 1.489 1.364.985 2.118 2.34 2.262 4.068Z"
      fill="#fff"
    />
    <Rect
      x={0.5}
      y={0.5}
      width={15}
      height={15}
      rx={3.5}
      fill="#18181B"
      stroke="#27272A"
    />
    <Rect
      x={20.5}
      y={0.5}
      width={15}
      height={15}
      rx={3.5}
      fill="#4C1D95"
      stroke="#6D28D9"
    />
    <Rect
      x={40.5}
      y={0.5}
      width={15}
      height={15}
      rx={3.5}
      fill="#5B21B6"
      stroke="#7C3AED"
    />
    <Rect
      x={60.5}
      y={0.5}
      width={15}
      height={15}
      rx={3.5}
      fill="#6D28D9"
      stroke="#8B5CF6"
    />
    <Rect
      x={80.5}
      y={0.5}
      width={15}
      height={15}
      rx={3.5}
      fill="#7C3AED"
      stroke="#A78BFA"
    />
    <Rect
      x={100.5}
      y={0.5}
      width={15}
      height={15}
      rx={3.5}
      fill="#8B5CF6"
      stroke="#C4B5FD"
    />
  </Svg>
)

export default SvgComponent
