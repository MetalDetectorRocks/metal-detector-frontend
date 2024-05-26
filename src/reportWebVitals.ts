import { onCLS, onFID, onFCP, onLCP, onTTFB, MetricType } from 'web-vitals'

const reportWebVitals = () => {
  const reportMetric = (metric: MetricType) => {
    console.log(`Received ${metric.name} metric: ${metric.value}`)
  }

  onCLS(reportMetric)
  onFID(reportMetric)
  onFCP(reportMetric)
  onLCP(reportMetric)
  onTTFB(reportMetric)
}

export default reportWebVitals
