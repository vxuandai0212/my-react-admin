import { Popover } from 'antd'
import { TooltipPlacement } from 'antd/es/tooltip'
import { useRef, useState } from 'react'
import RIcon from '../icon/RIcon'
import { useTranslation } from 'react-i18next'
import { localStg } from '@/utils'

interface LangButtonProps {
  placement?: TooltipPlacement
  showButtonLabel?: boolean
}

const LangButton: React.FC<LangButtonProps> = ({
  placement,
  showButtonLabel,
}) => {
  const { t } = useTranslation()
  const [openPopover, setOpenPopover] = useState<boolean>(false)
  const { i18n } = useTranslation()
  const language = useRef<I18nType.LangType>(localStg.get('lang') || 'vi')

  const handleSelect = (key: I18nType.LangType) => {
    i18n.changeLanguage(key)
    language.current = key
    localStg.set('lang', key as I18nType.LangType)
  }

  const content = (
    <div
      style={{
        maxHeight: '265px',
        overflowY: 'auto',
        overflowX: 'hidden',
        width: '150px',
      }}
    >
      <div
        className={
          'w-full cursor-pointer p-12-20-13-17 flex items-center group line-height-24 font-size-14 font-700 hover:background-color-background-extra-light border-bottom-1 border-bottom-solid border-bottom-color-primary-disabled transition'
        }
        onClick={() => {
          setOpenPopover(false)
          handleSelect('vi')
        }}
      >
        <div className={'flex gap-15 items-center'}>
          <div
            className={`group-hover:color-primary ${
              language.current === 'vi' ? 'color-primary' : 'color-primary-dark'
            } font-size-14 font-700 line-height-21 transition`}
          >
            Tiếng Việt
          </div>
        </div>
      </div>
      <div
        className={
          'w-full cursor-pointer p-12-20-13-17 flex items-center justify-between group line-height-24 font-size-14 font-700 hover:background-color-background-extra-light transition'
        }
        onClick={() => {
          setOpenPopover(false)
          handleSelect('en')
        }}
      >
        <div className={'flex gap-15 items-center'}>
          <div
            className={`group-hover:color-primary ${
              language.current === 'en' ? 'color-primary' : 'color-primary-dark'
            } font-size-14 font-700 line-height-21 transition`}
          >
            English
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <Popover
      open={openPopover}
      content={content}
      trigger={'click'}
      onOpenChange={(visible) => setOpenPopover(visible)}
      placement={placement}
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
            className={`width-16 height-16 fill-${
              openPopover ? 'white' : 'primary-grey'
            }`}
            icon='language'
          />
        </div>
        {showButtonLabel ? (
          <div
            className='font-size-14 font-400 line-height-21 lg:hidden'
            style={{
              color: `${
                openPopover ? 'var(--primary)' : 'var(--primary-grey)'
              }`,
            }}
          >
            {t('common.language.change')}
          </div>
        ) : null}
      </div>
    </Popover>
  )
}

export default LangButton
