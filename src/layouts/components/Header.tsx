import AddButton from '@/components/button/AddButton'
import HamburgerMenu from '@/components/button/HamburgerMenu'
import IconButton from '@/components/button/IconButton'
import LangButton from '@/components/button/LangButton'
import SimpleSearch from '@/components/search/SimpleSearch'
import { useScreen } from '@/hooks'
import { usePermission } from '@/hooks/use-permission'
import { toggleSiderCollapse } from '@/store/slices/app'
import { useAppDispatch } from '@/store/store'
import { useTranslation } from 'react-i18next'

interface Props {
  routeName: I18nType.I18nKey
  className?: string
}

const Header: React.FC<Props> = ({ routeName, className }) => {
  const { t } = useTranslation()
  const { isMobile } = useScreen()
  const dispatch = useAppDispatch()

  const { hasPermission } = usePermission()

  return (
    <div className={`flex justify-between items-center height-84 ${className}`}>
      <div className='flex items-center'>
        {!isMobile ? (
          <IconButton
            icon='hamburger'
            onClick={() => {dispatch(toggleSiderCollapse()); console.log('click hamburger')}}
          />
        ) : (
          <HamburgerMenu />
        )}
        <div className='ml-20 color-primary-dark font-size-20 font-700 line-height-32 cursor-default'>
          {t(routeName)}
        </div>
      </div>
      <div className='flex items-center justify-end gap-6'>
        <SimpleSearch />
        {hasPermission(['admin', 'super']) ? <AddButton /> : null}
        <LangButton />
      </div>
    </div>
  )
}

export default Header
