import { Popover } from 'antd'
import { useState } from 'react'
import RIcon from '../icon/RIcon'
import { useTranslation } from 'react-i18next'
import { useAppSelector } from '@/store/store'
import { useRoute } from '@/hooks/use-route'
import { useNavigate } from 'react-router-dom'

const HamburgerMenu: React.FC = () => {
  const navigate = useNavigate()
  const menus = useAppSelector(
    (state) => state.auth.userInfo.authorizedFirstLevelRoutes
  )
  const { t } = useTranslation()
  const [openPopover, setOpenPopover] = useState<boolean>(false)
  const { activeMenu } = useRoute()
  const renderContent = menus!.map((item, index: number) => {
    const { name, i18nTitle } = item
    return (
      <div
        key={name}
        className={`w-full cursor-pointer p-12-20-13-17 flex items-center group line-height-24 font-size-14 font-700 hover:background-color-background-extra-light ${
          index !== menus!.length - 1
            ? 'border-bottom-1 border-bottom-solid border-bottom-color-primary-disabled'
            : ''
        } transition`}
        onClick={() => {
          setOpenPopover(false)
          navigate(item.path)
        }}
      >
        <div className={'flex gap-15 items-center'}>
          <div
            className={`group-hover:color-primary ${
              item.activeMenu === activeMenu
                ? 'color-primary'
                : 'color-primary-dark'
            } font-size-14 font-700 line-height-21 transition`}
          >
            {t(i18nTitle)}
          </div>
        </div>
      </div>
    )
  })
  const content = (
    <div
      style={{
        maxHeight: '265px',
        overflowY: 'auto',
        overflowX: 'hidden',
        width: '150px',
      }}
    >
      {renderContent}
    </div>
  )

  return (
    <Popover
      open={openPopover}
      content={content}
      trigger={'click'}
      onOpenChange={(visible) => setOpenPopover(visible)}
    >
      <div className='flex items-center gap-10 cursor-pointer'>
        <div
          className='flex items-center justify-center width-36 height-36 rounded-6'
          style={{
            backgroundColor: `${
              openPopover ? 'var(--primary)' : 'var(--background-3)'
            }`,
          }}
        >
          <RIcon
            className={`width-16 height-16 ${
              openPopover ? 'fill-white' : 'fill-primary-grey'
            }`}
            icon='hamburger'
          />
        </div>
      </div>
    </Popover>
  )
}

export default HamburgerMenu
