import RIcon from '@/components/icon/RIcon'

interface Props {
  className?: string
  icon: LocalIcon
  iconFillColor?: Color
  iconBackgroundColor?: Color
  onClick?: () => void
}

const IconButton: React.FC<Props> = ({
  className,
  icon,
  iconFillColor = 'primary-grey',
  iconBackgroundColor = 'background-3',
  onClick
}) => {
  return (
    <div
      style={{ background: `var(--${iconBackgroundColor})` }}
      className={`flex justify-center items-center width-36 height-36 rounded-6 cursor-pointer ${className}`}
      onClick={onClick}
    >
      <RIcon
        fill={`var(--${iconFillColor})`}
        className='width-16 height-16'
        icon={icon}
      />
    </div>
  )
}

export default IconButton
