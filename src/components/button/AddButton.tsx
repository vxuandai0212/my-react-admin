import { Popover } from 'antd'
import RIcon from '../icon/RIcon'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import IconButton from './IconButton'
import { useNavigate } from 'react-router-dom'

const AddButton: React.FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const content = (
    <div style={{ maxHeight: '265px', overflowY: 'auto', width: '285px', overflowX: 'hidden' }}>
      <div
        className={
          'w-full cursor-pointer p-12-20-13-17 flex items-center group line-height-24 font-size-14 font-700 hover:background-color-background-extra-light border-bottom-1 border-bottom-solid border-bottom-color-primary-disabled transition'
        }
        onClick={() => {
          setOpenPopover(false)
          navigate('/invoice/new')
        }}
      >
        <div className={'flex gap-15 items-center'}>
          <IconButton
            icon={'keyboard'}
            iconFillColor={'primary'}
            iconBackgroundColor={'primary-resting'}
          />
          <div
            className={
              'group-hover:color-primary color-primary-dark font-size-14 font-700 line-height-21 transition'
            }
          >
            {t('common.header.create.project')}
          </div>
        </div>
      </div>
      <div
        className={
          'w-full cursor-pointer p-12-20-13-17 flex items-center justify-between group line-height-24 font-size-14 font-700 hover:background-color-background-extra-light border-bottom-1 border-bottom-solid border-bottom-color-primary-disabled transition'
        }
        onClick={() => {
          setOpenPopover(false)
          navigate('/invoice/new')
        }}
      >
        <div className={'flex gap-15 items-center'}>
          <IconButton
            icon={'phone'}
            iconFillColor={'primary'}
            iconBackgroundColor={'primary-resting'}
          />
          <div
            className={
              'group-hover:color-primary color-primary-dark font-size-14 font-700 line-height-21 transition'
            }
          >
            {t('common.header.create.task')}
          </div>
        </div>
      </div>
      <div
        className={
          'w-full cursor-pointer p-12-20-13-17 flex items-center justify-between group line-height-24 font-size-14 font-700 hover:background-color-background-extra-light border-bottom-1 border-bottom-solid border-bottom-color-primary-disabled transition'
        }
        onClick={() => {
          setOpenPopover(false)
          navigate('/invoice/new')
        }}
      >
        <div className={'flex gap-15 items-center'}>
          <IconButton
            icon={'cart'}
            iconFillColor={'primary'}
            iconBackgroundColor={'primary-resting'}
          />
          <div
            className={
              'group-hover:color-primary color-primary-dark font-size-14 font-700 line-height-21 transition'
            }
          >
            {t('common.header.create.contact')}
          </div>
        </div>
      </div>
      <div
        className={
          'w-full cursor-pointer p-12-20-13-17 flex items-center justify-between group line-height-24 font-size-14 font-700 hover:background-color-background-extra-light border-bottom-1 border-bottom-solid border-bottom-color-primary-disabled transition'
        }
        onClick={() => {
          setOpenPopover(false)
          navigate('/invoice/new')
        }}
      >
        <div className={'flex gap-15 items-center'}>
          <IconButton
            icon={'business'}
            iconFillColor={'primary'}
            iconBackgroundColor={'primary-resting'}
          />
          <div
            className={
              'group-hover:color-primary color-primary-dark font-size-14 font-700 line-height-21 transition'
            }
          >
            {t('common.header.create.event')}
          </div>
        </div>
      </div>
      <div
        className={
          'w-full cursor-pointer p-12-20-13-17 flex items-center justify-between group line-height-24 font-size-14 font-700 hover:background-color-background-extra-light border-bottom-1 border-bottom-solid border-bottom-color-primary-disabled transition'
        }
        onClick={() => {
          setOpenPopover(false)
          navigate('/invoice/new')
        }}
      >
        <div className={'flex gap-15 items-center'}>
          <IconButton
            icon={'money'}
            iconFillColor={'primary'}
            iconBackgroundColor={'primary-resting'}
          />
          <div
            className={
              'group-hover:color-primary color-primary-dark font-size-14 font-700 line-height-21 transition'
            }
          >
            {t('common.header.create.product')}
          </div>
        </div>
      </div>
      <div
        className={
          'w-full cursor-pointer p-12-20-13-17 flex items-center justify-between group line-height-24 font-size-14 font-700 hover:background-color-background-extra-light transition'
        }
        onClick={() => {
          setOpenPopover(false)
          navigate('/invoice/new')
        }}
      >
        <div className={'flex gap-15 items-center'}>
          <IconButton
            icon={'laptop'}
            iconFillColor={'primary'}
            iconBackgroundColor={'primary-resting'}
          />
          <div
            className={
              'group-hover:color-primary color-primary-dark font-size-14 font-700 line-height-21 transition'
            }
          >
            {t('common.header.create.invoice')}
          </div>
        </div>
      </div>
    </div>
  )

  const [openPopover, setOpenPopover] = useState<boolean>(false)

  return (
    <Popover
      open={openPopover}
      content={content}
      trigger={'click'}
      onOpenChange={(visible) => setOpenPopover(visible)}
    >
      <div
        className='cursor-pointer flex items-center justify-center width-36 height-36 rounded-6'
        style={{
          backgroundColor: `${
            openPopover ? 'var(--primary)' : 'var(--background-3)'
          }`,
        }}
      >
        <RIcon
          className={`width-16 height-16' fill-${openPopover ? 'white' : 'primary-grey'}`}
          icon='add'
        />
      </div>
    </Popover>
  )
}

export default AddButton
