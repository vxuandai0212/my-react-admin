import RIcon from '@/components/icon/RIcon'

interface Props {
  icon: LocalIcon
  iconFillColor?: Color
  iconBackgroundColor?: Color
}

const IconButton: React.FC<Props> = ({
  icon,
  iconFillColor = 'primary-grey',
  iconBackgroundColor = 'background-3',
}) => {
  return (
    <div
      style={{ background: `var(--${iconBackgroundColor})` }}
      className='flex justify-center items-center width-36 height-36 rounded-6 cursor-pointer'
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
