import { useScreen } from '@/hooks'
import { useAppDispatch, useAppSelector } from '@/store/store'
import { Outlet, useNavigate } from 'react-router-dom'
import SvgLogo from '@/assets/images/logo.svg'
import RIcon from '@/components/icon/RIcon'
import { useTranslation } from 'react-i18next'
import { Popover } from 'antd'
import { useState } from 'react'
import Avatar from '@/assets/images/avatar.png'
import { resetAuthStore } from '@/store/slices/auth'
import { useRoute } from '@/hooks/use-route'

const BasicLayout: React.FC = () => {
  const { isMobile } = useScreen()

  const navigate = useNavigate()

  const haveNotification = 'message'

  const app = useAppSelector((state) => state.app)

  const { activeMenu } = useRoute()

  const collapsed = app.siderCollapse

  const menus = useAppSelector(
    (state) => state.auth.userInfo.authorizedFirstLevelRoutes
  )

  const { t } = useTranslation()

  const [openPopover, setOpenPopover] = useState<boolean>(false)

  const dispatch = useAppDispatch()

  const content = (
    <div
      style={{
        maxHeight: '265px',
        overflowY: 'auto',
        width: '140px',
        overflowX: 'hidden',
      }}
    >
      <div
        style={{ color: 'var(--primary-dark)' }}
        className={
          'cursor-pointer p-5-20-7-17 font-size-14 font-700 hover:color-primary hover:background-color-background-extra-light transition'
        }
        onClick={() => {
          setOpenPopover(false)
          dispatch(resetAuthStore())
        }}
      >
        {t('common.logout.title')}
      </div>
    </div>
  )

  const renderMenus = menus?.map((item) => {
    return (
      <div
        key={item.name}
        className='p-8-0-8-19 group flex jusity-between cursor-pointer'
      >
        <div
          className={`group-hover:background-color-info flex items-center transition mr-19 rounded-4 relative ${
            item.activeMenu === activeMenu
              ? 'background-color-primary-resting'
              : 'background-color-white'
          } ${collapsed ? 'gap-0' : 'gap-15 grow'}`}
          onClick={() => navigate(item.path)}
        >
          {item.activeMenu === haveNotification ? (
            <div className='background-color-danger absolute width-12 height-12 left-26 top-11 rounded-50 border-color-white border-2'></div>
          ) : null}
          <div className='width-48 flex justify-center'>
            <RIcon
              width={`${item.icon?.width}px`}
              height={`${item.icon?.height}px`}
              className={`group-hover:fill-white transition ${
                item.activeMenu === activeMenu
                  ? 'fill-primary'
                  : 'fill-primary-grey'
              }`}
              icon={item.icon!.name}
            />
          </div>
          <span
            className={`group-hover:color-white font-size-14 font-700 line-height-21 overflow-hidden truncate transition ${
              item.activeMenu === activeMenu
                ? 'color-primary-dark'
                : 'color-primary-grey'
            } ${collapsed ? 'width-0' : ''}`}
          >
            {t(item.i18nTitle)}
          </span>
        </div>
        <div
          className={`width-2 height-48 rounded-1 transition ${
            item.activeMenu === activeMenu
              ? 'background-color-primary'
              : 'background-color-white'
          }`}
        ></div>
      </div>
    )
  })

  return (
    <div className='background-color-background-light flex h-screen overflow-hidden'>
      {!isMobile ? (
        <div
          className={`pb-10 background-color-white border-right-1 border-right-color-outline border-right-solid transition flex flex-col grow-0 shrink-0 overflow-hidden ${
            collapsed ? 'basis-89px' : 'basis-242px'
          }`}
        >
          <div className='flex flex-col gap-38 h-screen'>
            <div className='flex flex-col gap-22 grow shink overflow-hidden'>
              <div className='basis-56px grow-0 shrink-0 pt-26 pl-29 flex gap-23 items-center cursor-pointer'>
                <img src={SvgLogo} />
                <span
                  className={`color-primary font-size-20 font-900 overflow-hidden transition ${
                    collapsed ? 'width-0' : ''
                  }`}
                >
                  betaCRM
                </span>
              </div>
              <div className='grow shink overflow-y-no-scrollbar'>
                {renderMenus}
              </div>
            </div>
            <Popover
              open={openPopover}
              content={content}
              trigger={'click'}
              onOpenChange={(visible) => setOpenPopover(visible)}
            >
              <div className='p-8-0-18-19 flex basis-56px grow-0 shrink-0 items-center gap-15 cursor-pointer relative'>
                <img
                  className='width-30 height-30 rounded-5 m-0-9-0-9'
                  src={Avatar}
                  alt='Avatar'
                />
                <div className='absolute width-12 height-12 left-51 bottom-14 background-color-success rounded-50 border-color-white border-2'></div>
                {!collapsed ? (
                  <span className='font-size-14 font-700 line-height-21 color-primary-grey truncate transition'>
                    John Doe
                  </span>
                ) : (
                  ''
                )}
              </div>
            </Popover>
          </div>
        </div>
      ) : null}
      <Outlet />
    </div>
  )
}

export default BasicLayout
