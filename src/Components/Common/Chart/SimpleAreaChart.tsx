import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

export type AreaChartProps = {
  id: string
  data: {}[]
  areaDataKey: string
  xAxisKey: string
  color: string
}

const SimpleAreaChart = (props: AreaChartProps) => {
  return (
    <ResponsiveContainer width={'100%'} height={'100%'}>
      <AreaChart data={props.data} margin={{ top: 15, right: 0, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id={props.id} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={props.color} stopOpacity={0.3} />
            <stop offset="95%" stopColor={props.color} stopOpacity={0.0} />
          </linearGradient>
        </defs>
        <XAxis dataKey={props.xAxisKey} fontSize={12} tickSize={3} />
        <YAxis fontSize={12} tickSize={3} />
        <Area
          type="monotone"
          dataKey={props.areaDataKey}
          stroke={props.color}
          fillOpacity={1}
          fill={`url(#${props.id})`}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default SimpleAreaChart
