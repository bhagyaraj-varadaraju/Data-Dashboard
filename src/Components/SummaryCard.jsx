import '../App.css'

function SummaryCard({ title, value}) {

  return (
    <div className="SummaryCard">
        <h2>{value}</h2>
        <h3>{title}</h3>
    </div>
  )
}

export default SummaryCard
