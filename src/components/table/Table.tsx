import { useDatetime, useNumber } from '@/hooks'
import { useTranslation } from 'react-i18next'
import RTag from '../tag/RTag'
import RIcon from '../icon/RIcon'
import IconButton from '../button/IconButton'
import { useState } from 'react'
import { Popover } from 'antd'
import Avatar from '@/assets/images/avatar.png'

interface Props {
  headers: Array<Table.Header>
  data: Array<any>
  handleCommand: (args: any) => void
}

const Table: React.FC<Props> = ({ headers, data, handleCommand }) => {
  const { t } = useTranslation()
  function isRenderCommandDropdown(item: any) {
    return item.commands && item.commands.length > 0
  }

  function getWidth(key: any) {
    if (!isShowField(key)) return
    const width = headers.filter((item) => item.key === key)[0].width
    return `${width}%`
  }

  function isMatchType(key: any, matchType: any) {
    if (!isShowField(key)) return
    const type = headers.filter((item) => item.key === key)[0].type
    return type === matchType
  }

  function getFontStyle(key: any) {
    if (!isShowField(key)) return
    const fontStyle = headers.filter((item) => item.key === key)[0].style
    if (fontStyle === 'italic') return 'italic'
    return
  }

  function getFontWeight(key: any) {
    if (!isShowField(key)) return
    const fontWeight = headers.filter((item) => item.key === key)[0].style
    if (fontWeight === 'bold') return '700'
    else return '400'
  }

  function getJustifyContent(key: any) {
    if (!isShowField(key)) return
    const align = headers.filter((item) => item.key === key)[0].align
    return align ? align : 'left'
  }

  const { datetime } = useDatetime()
  const { moneyFormat } = useNumber()

  function getFormatText(key: any, value: any) {
    if (!isShowField(key)) return
    const format = headers.filter((item) => item.key === key)[0].format
    if (format) {
      if (format.type === 'datetime') {
        return datetime(value).format(format.value)
      } else if (format.type === 'currency') {
        return moneyFormat(format.value.style, format.value.currency, value)
      } else {
        return value
      }
    } else {
      return value
    }
  }

  function isShowField(key: any) {
    return headers.filter((item) => item.key === key).length > 0
  }

  const renderHeader = headers.map((item) => {
    return (
      <div
        key={item.label}
        className='color-primary-grey font-size-12 font-700 line-height-18'
        style={{
          width: `${item.width}%`,
          textAlign: item.align ? item.align : 'left',
        }}
      >
        {t(item.label)}
      </div>
    )
  })

  const renderTableCell = (key: any, value: any) => {
    if (isShowField(key)) {
      if (isMatchType(key, 'tag')) {
        return <RTag label={value.value} type={value.type} />
      } else if (isMatchType(key, 'icon-text')) {
        return (
          <>
            <div
              className='width-52 height-52 rounded-8 flex justify-center items-center'
              style={{
                background: `linear-gradient(
                      0deg,
                      rgba(94, 129, 244, 0.1) 0%,
                      rgba(94, 129, 244, 0.1) 100%
                    ),
                    #fff`,
              }}
            >
              <RIcon
                className='fill-#5e81f4'
                width='18px'
                height='18px'
                icon='bill'
              />
            </div>
            <div className='ml-20'>{getFormatText(key, value.text)}</div>
          </>
        )
      } else if (isMatchType(key, 'image-text')) {
        return (
          <>
            <img
              className='width-36 height-36 rounded-6'
              src={Avatar}
              alt='image'
            />
            <div className='ml-12'>{getFormatText(key, value.text)}</div>
          </>
        )
      } else {
        return <>{getFormatText(key, value)}</>
      }
    }
    return null
  }

  const hasCommand = () => {
    const r =
      data &&
      data.filter((item) => item.commands && item.commands.length > 0).length >
        0
    return r
  }

  const [selectedId, setSelectedId] = useState<any>()

  function dropdownClick(v: any) {
    setSelectedId(v)
  }

  const [openPopover, setOpenPopover] = useState<boolean>(false)

  const renderTableRow = (item: any) => {
    const data: any = []
    Object.keys(item).forEach((key) => {
      const value = item[key]
      const rowData = (
        <div
          key={key}
          className='color-primary-dark font-size-16 line-height-24 flex items-center cursor-default'
          style={{
            width: getWidth(key),
            justifyContent: getJustifyContent(key),
            fontStyle: getFontStyle(key),
            fontWeight: getFontWeight(key),
          }}
        >
          {renderTableCell(key, value)}
        </div>
      )
      data.push(rowData)
    })
    return data
  }
  const renderTableBody = data.map((item) => {
    const content = item.commands
      ? item.commands.map((command: any) => {
          const color =
            command.type === 'warning'
              ? 'warning'
              : command.type === 'danger'
              ? 'danger'
              : 'primary-dark'
          return (
            <div
              key={command.label}
              style={{ color: `var(--${color}` }}
              className='cursor-pointer p-12-20-13-17 font-size-14 font-700 hover:color-primary hover:background-color-background-extra-light transition'
              onClick={() => {
                setOpenPopover(false)
                setSelectedId(null)
                handleCommand({
                  key: command.label,
                  value: item.id,
                })
              }}
            >
              {t(command.label)}
            </div>
          )
        })
      : null
    return (
      <div
        key={item.id}
        className='border-1 border-solid border-color-resting-outline rounded-12 flex basis-88px grow-0 shrink-0 items-center m-0-25-0-25 p-0-0-0-20 hover:background-color-background-extra-light transition'
      >
        {renderTableRow(item)}
        {hasCommand() ? (
          <div className='width-80 cursor-pointer'>
            {isRenderCommandDropdown(item) ? (
              <Popover
                open={openPopover && selectedId === item.id}
                content={content}
                trigger={'click'}
                onOpenChange={(visible) => setOpenPopover(visible)}
              >
                <div>
                  <IconButton
                    className='border-1 border-solid border-color-resting-outline rounded-8'
                    icon='three-dot'
                    iconFillColor='primary-grey'
                    iconBackgroundColor='white'
                    onClick={() => dropdownClick(item.id)}
                  />
                </div>
              </Popover>
            ) : null}
          </div>
        ) : null}
      </div>
    )
  })
  return (
    <div className='flex flex-col gap-22 grow shrink'>
      <div className='flex basis-48px grow-0 shrink-0 overflow-hidden p-14-25-0-45 background-color-FBFBFD cursor-default'>
        {renderHeader}
        {hasCommand() ? <div className='width-80'></div> : ''}
      </div>
      <div className='flex flex-col h-full overflow-y-no-scrollbar gap-7'>
        {data && renderTableBody}
      </div>
    </div>
  )
}

export default Table
