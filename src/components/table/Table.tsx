import { useDatetime, useNumber } from '@/hooks'
import { useTranslation } from 'react-i18next'
import RTag from '../tag/RTag'
import RIcon from '../icon/RIcon'
import IconButton from '../button/IconButton'
import { useState } from 'react'

interface Format {
  type: 'datetime' | 'currency'
  value: any
}

interface Header {
  key?: string
  label: string
  type: 'text' | 'tag' | 'icon-text' | 'image-text'
  format?: Format
  style?: 'italic' | 'bold'
  align?: 'left' | 'center' | 'right'
  showLabel?: boolean
  width?: number
}

interface Props {
  headers: Array<Header>
  data: Array<any>
  total: number
}

const Table: React.FC<Props> = ({ headers, data, total }) => {
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
  const {moneyFormat} = useNumber()
  
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
                className="width-52 height-52 rounded-8 flex justify-center items-center"
                style={{
                  background: `linear-gradient(
                      0deg,
                      rgba(94, 129, 244, 0.1) 0%,
                      rgba(94, 129, 244, 0.1) 100%
                    ),
                    #fff`
                  }}
              >
                <RIcon
                  width='18px'
                  height='18px'
                  fill='#5e81f4'
                  icon="bill"
                />
              </div>
              <div className="ml-20">{ getFormatText(key, value.text) }</div>
              </>
        )
      } else if (isMatchType(key, 'image-text')) {
        return (
          <>
           <img
                className="width-36 height-36 rounded-6"
                src={'@/assets/images/avatar.png'}
                alt="image"
              />
              <div className="ml-12">{ getFormatText(key, value.text) }</div>
          </>
        )
      } else {
        <>{ getFormatText(key, value) }</>
      }
    }
    return null
  }

  const hasCommand = () => {
    const r =
      data &&
      data.filter((item) => item.commands && item.commands.length > 0)
        .length > 0
    return r
  }

  const [selectedId, setSelectedId] = useState()

  function dropdownClick(v: any) {
    setSelectedId(v)
  }

  const renderTableRow = (row: any, item: any) => {
    const data = []
    Object.keys(row).forEach((key, index) => {
      const value = row[key]
      const rowData = (
        <>
          <div
            className="color-primary-dark font-size-16 line-height-24 flex items-center cursor-default"
            style={{
              width: getWidth(key),
              justifyContent: getJustifyContent(key),
              fontStyle: getFontStyle(key),
              fontWeight: getFontWeight(key),
            }}
          >
            {renderTableCell(key, value)}
          </div>
          {
            hasCommand() ?
            (
              <div className="width-80 cursor-pointer">
              <n-dropdown
                v-if="isRenderCommandDropdown(item)"
                trigger="click"
                :options="item.commands"
                size="large"
                :show="selectedId === item.id"
                :on-clickoutside="dropdownOnClickOutside"
                :render-option="render"
              >
                <IconButton
                  className="border-1 border-solid border-color-resting-outline rounded-8"
                  icon="three-dot"
                  icon-fill-color="primary-grey"
                  icon-background-color="white"
                  onClick={() => dropdownClick(item.id)}
                />
              </n-dropdown>
            </div>
            ) :
            null
          }
      </>
      )
    })
  }
  const renderTableBody = data.map((item) => {
    return (
      <div className='border-1 border-solid border-color-resting-outline rounded-12 flex basis-88px grow-0 shrink-0 items-center m-0-25-0-25 p-0-0-0-20 hover:background-color-background-extra-light transition'></div>
    )
  })
  return (
    <div className='flex flex-col gap-22 grow shrink'>
      <div className='flex basis-48px grow-0 shrink-0 overflow-hidden p-14-25-0-45 background-color-FBFBFD cursor-default'>
        {renderHeader}
        <div v-if='hasCommand' className='width-80'></div>
      </div>
      <div className='flex flex-col h-full overflow-y-no-scrollbar gap-7'>
        {renderTableBody}
      </div>
    </div>
  )
}
