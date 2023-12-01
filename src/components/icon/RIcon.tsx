import { SvgAdd, SvgEmail, SvgOval, SvgTick } from '@/components/svg'
import { SVGProps } from 'react'

const ICON: {
  [key in LocalIcon]: React.FC<SVGProps<SVGSVGElement>>
} = {
  add: SvgAdd,
  tick: SvgTick,
  email: SvgEmail,
  oval: SvgOval
}

const RIcon: React.FC<{
  icon: LocalIcon
  className?: string
  width?: string
  height?: string
  fill?: string
}> = ({ icon = 'add', className, width, height, fill }) => {
  const Icon = ICON[icon]
  return (
    <Icon className={className} width={width} height={height} fill={fill} />
  )
}

export default RIcon
