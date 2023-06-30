import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'

export type NeedlePieChartProps = {
  value: number
}

type DataItem = {
  name: string
  value: number
  color: string
}

const meterConfig = [
  { name: 'Critical', value: 60, color: 'rgba(155,7,19,0.75)' },
  { name: 'Warning', value: 30, color: 'rgba(255,217,74,0.75)' },
  { name: 'Good', value: 10, color: 'rgba(3,159,3,0.75)' },
]
const RADIAN = Math.PI / 180
const cx = 190
const cy = 180
const innerRadius = 50
const outerRadius = 160

const needle = (
  value: number,
  data: DataItem[],
  cx: number,
  cy: number,
  innerRadius: number,
  outerRadius: number,
  color: string,
) => {
  let total = 0
  data.forEach((v) => {
    total += v.value
  })
  const ang = 180.0 * (1 - value / total)
  const length = (innerRadius + 2 * outerRadius) / 3
  const sin = Math.sin(-RADIAN * ang)
  const cos = Math.cos(-RADIAN * ang)
  const r = 5
  const x0 = cx + 5
  const y0 = cy + 5
  const xba = x0 + r * sin
  const yba = y0 - r * cos
  const xbb = x0 - r * sin
  const ybb = y0 + r * cos
  const xp = x0 + length * cos
  const yp = y0 + length * sin

  return [
    <circle key={'circle'} cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
    <path key={'path'} d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`} stroke="#none" fill={color} />,
  ]
}

const NeedlePieChart = (props: NeedlePieChartProps) => {
  return (
    <ResponsiveContainer>
      <PieChart>
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={meterConfig}
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          fill="#8884d8"
          stroke="none"
        >
          {meterConfig.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        {needle(props.value, meterConfig, cx, cy, innerRadius, outerRadius, '#ffffff')}
      </PieChart>
    </ResponsiveContainer>
  )
}

export default NeedlePieChart
