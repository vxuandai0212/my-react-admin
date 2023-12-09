import calendar from '@/router/modules/calendar'
import contact from '@/router/modules/contact'
import dashboard from '@/router/modules/dashboard'
import fileBrowser from '@/router/modules/file-browser'
import helpCenter from '@/router/modules/help-center'
import invoice from '@/router/modules/invoice'
import kanban from '@/router/modules/kanban'
import message from '@/router/modules/message'
import notification from '@/router/modules/notification'
import product from '@/router/modules/product'
import project from '@/router/modules/project'
import report from '@/router/modules/report'
import task from '@/router/modules/task'
import { sortRoutes, transformAuthRouteToMenu } from '@/utils/router/menu'
import { Popover } from 'antd'
import { useState } from 'react'
import RIcon from '../icon/RIcon'
import { useTranslation } from 'react-i18next'

const routes = [
  calendar,
  contact,
  dashboard,
  fileBrowser,
  helpCenter,
  invoice,
  kanban,
  message,
  notification,
  product,
  project,
  report,
  task,
]

const menus = transformAuthRouteToMenu(sortRoutes(routes))

const HamburgerMenu: React.FC = () => {
  const { t } = useTranslation()
  const [openPopover, setOpenPopover] = useState<boolean>(false)
  const current = 'dashboard'
  const renderContent = menus.map((item: any, index: number) => {
    const { key, i18nTitle } = item
    return (
      <div
        key={key}
        className={`w-full cursor-pointer p-12-20-13-17 flex items-center group line-height-24 font-size-14 font-700 hover:background-color-background-extra-light ${
          index !== menus.length - 1
            ? 'border-bottom-1 border-bottom-solid border-bottom-color-primary-disabled'
            : ''
        } transition`}
        onClick={() => {
          setOpenPopover(false)
          // routerPush({ name: key })
        }}
      >
        <div className={'flex gap-15 items-center'}>
          <div
            className={`group-hover:color-primary ${
              key === current ? 'color-primary' : 'color-primary-dark'
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
            className={`width-16 height-16 ${openPopover ? 'fill-white' : 'fill-primary-grey'}`}
            icon='hamburger'
          />
        </div>
      </div>
    </Popover>
  )
}

export default HamburgerMenu
