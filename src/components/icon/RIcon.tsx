import { SvgAdd, SvgArrow, SvgAttach, SvgBill, SvgBusiness, SvgCalendar, SvgCaretDown, SvgCart, SvgCompany, SvgContact, SvgCreate, SvgDashboard, SvgDate, SvgDelete, SvgDescription, SvgDiamond, SvgDropbox, SvgEmail, SvgEmoticon, SvgFacebook, SvgFile, SvgFrom, SvgFullname, SvgGoogle, SvgHamburger, SvgHelp, SvgHour, SvgInvoice, SvgKanban, SvgKeyboard, SvgLanguage, SvgLaptop, SvgMessage, SvgMoney, SvgNotification, SvgOval, SvgPassword, SvgPhone, SvgProduct, SvgProject, SvgRate, SvgReport, SvgSave, SvgSearch, SvgTask, SvgThreeDot, SvgTick, SvgTwitter, SvgUpload } from '@/components/svg'
import { SVGProps } from 'react'

const ICON: {
  [key in LocalIcon]: React.FC<SVGProps<SVGSVGElement>>
} = {
  add: SvgAdd,
  arrow: SvgArrow,
  attach: SvgAttach,
  bill: SvgBill,
  business: SvgBusiness,
  calendar: SvgCalendar,
  'caret-down': SvgCaretDown,
  cart: SvgCart,
  company: SvgCompany,
  contact: SvgContact,
  create: SvgCreate,
  dashboard: SvgDashboard,
  date: SvgDate,
  delete: SvgDelete,
  description: SvgDescription,
  diamond: SvgDiamond,
  dropbox: SvgDropbox,
  email: SvgEmail,
  emoticon: SvgEmoticon,
  facebook: SvgFacebook,
  file: SvgFile,
  from: SvgFrom,
  fullname: SvgFullname,
  google: SvgGoogle,
  hamburger: SvgHamburger,
  help: SvgHelp,
  hour: SvgHour,
  invoice: SvgInvoice,
  kanban: SvgKanban,
  keyboard: SvgKeyboard,
  language: SvgLanguage,
  laptop: SvgLaptop,
  message: SvgMessage,
  money: SvgMoney,
  notification: SvgNotification,
  oval: SvgOval,
  password: SvgPassword,
  phone: SvgPhone,
  product: SvgProduct,
  project: SvgProject,
  rate: SvgRate,
  report: SvgReport,
  save: SvgSave,
  search: SvgSearch,
  task: SvgTask,
  'three-dot': SvgThreeDot,
  tick: SvgTick,
  twitter: SvgTwitter,
  upload: SvgUpload
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
