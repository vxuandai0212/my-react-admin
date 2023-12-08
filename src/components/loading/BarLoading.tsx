import './BarLoading.css'

export const BarLoading: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`jumpy-bars ${className}`}>
      <div className='bar' id='bar1'></div>
      <div className='bar' id='bar2'></div>
      <div className='bar' id='bar3'></div>
      <div className='bar' id='bar4'></div>
      <div className='bar' id='bar5'></div>
      <div className='bar' id='bar6'></div>
      <div className='bar' id='bar7'></div>
    </div>
  )
}
