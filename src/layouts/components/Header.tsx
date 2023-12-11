import AddButton from '@/components/button/AddButton'
import HamburgerMenu from '@/components/button/HamburgerMenu'
import IconButton from '@/components/button/IconButton'
import LangButton from '@/components/button/LangButton'
import SimpleSearch from '@/components/search/SimpleSearch'
import { useScreen } from '@/hooks'
import { useCurrentPath } from '@/hooks/use-current-path'
import { usePermission } from '@/hooks/use-permission'
import { toggleSiderCollapse } from '@/store/slices/app'
import { useAppDispatch } from '@/store/store'
import { useTranslation } from 'react-i18next'

interface Props {
  className?: string
}

const Header: React.FC<Props> = ({ className }) => {
  const { t } = useTranslation()
  const { isMobile } = useScreen()
  const dispatch = useAppDispatch()

  const { hasPermission } = usePermission()
  // const { headerTitle } = useCurrentPath()

  return (
    <div className={`flex justify-between items-center height-84 ${className}`}>
      <div className='flex items-center'>
        {!isMobile ? (
          <IconButton
            iconFillColor='primary-grey'
            icon='hamburger'
            onClick={() => {
              dispatch(toggleSiderCollapse())
            }}
          />
        ) : (
          <HamburgerMenu />
        )}
        <div className='ml-20 color-primary-dark font-size-20 font-700 line-height-32 cursor-default'>
          {/* {headerTitle && t(headerTitle)} */}
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
