import { SvgAdd, SvgBusiness, SvgCart, SvgEmail, SvgKeyboard, SvgLaptop, SvgMoney, SvgOval, SvgPhone, SvgTick } from '@/components/svg'
import { SVGProps } from 'react'

const ICON: {
  [key in LocalIcon]: React.FC<SVGProps<SVGSVGElement>>
} = {
  add: SvgAdd,
  tick: SvgTick,
  email: SvgEmail,
  oval: SvgOval,
  keyboard: SvgKeyboard,
  phone: SvgPhone,
  cart: SvgCart,
  business: SvgBusiness,
  money: SvgMoney,
  laptop: SvgLaptop
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
