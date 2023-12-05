import { Popover } from 'antd'
import { useEffect, useRef, useState } from 'react'
import RIcon from '../icon/RIcon'
import { useTranslation } from 'react-i18next'
import useClick from '@/hooks/use-click'

const SimpleSearch: React.FC = () => {
  const { t } = useTranslation()
  const content = (
    <div
      style={{
        maxHeight: '265px',
        overflowY: 'auto',
        overflowX: 'hidden',
        width: '454px',
      }}
    >
      <div
        className={
          'w-full cursor-default p-12-20-13-17 flex items-center justify-between'
        }
      >
        <div
          className={'color-primary-dark font-size-14 font-700 line-height-21'}
        >
          No item found!
        </div>
      </div>
    </div>
  )

  const inputRef = useRef<HTMLInputElement>(null!)
  const [inputWidth, setInputWidth] = useState<number>()
  const simpleSearchContainerRef = useRef<HTMLDivElement>(null)
  const [inputValue, setInputValue] = useState<any>()
  const [showInput, setShowInput] = useState<boolean>(false)
  const [showDropdown, setShowDropdown] = useState<boolean>(false)

  useEffect(() => {
    if (showInput) {
      setInputWidth(400)
    } else {
      setInputWidth(0)
    }
  }, [showInput])

  const { el } = useClick()

  useEffect(() => {
    console.log(el.current)
    const simpleSearchContainerEl: any = simpleSearchContainerRef.current
    if (!showInput) return
    if (!simpleSearchContainerEl) return
    if (showInput && !simpleSearchContainerEl.contains(el.current)) {
      setShowInput(false)
    }
  }, [el.current])

  return (
    <Popover
      open={showDropdown}
      content={content}
      trigger={'click'}
      onOpenChange={(visible) => setShowDropdown(visible)}
    >
      <div
        ref={simpleSearchContainerRef}
        style={{
          background: `${showInput ? 'white' : 'rgba(129, 129, 165, 0.1)'}`,
          boxShadow: `${
            showInput ? '0px 6px 20px 0px rgba(153, 155, 168, 0.1)' : ''
          }`,
        }}
        className='flex items-center height-36 rounded-6 <md:hidden cursor-pointer transition'
      >
        <input
          ref={inputRef}
          className='border-none color-primary-dark font-size-14 font-400 line-height-21 transition'
          style={{
            width: `${inputWidth}px`,
            marginLeft: `${showInput ? '18px' : '0'}`,
          }}
          type='text'
          placeholder={t('common.header.search.placeholder')}
          value={inputValue}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            setShowDropdown(true)
            setInputValue(e.target.value)
          }}
        />
        <div
          className='flex items-center justify-center width-36'
          onClick={() => {
            setShowInput(true)
            inputRef.current.focus()
          }}
        >
          <RIcon
            className='width-16 height-16'
            fill={showInput ? 'fill-primary' : 'fill-primary-grey'}
            icon='search'
          />
        </div>
      </div>
    </Popover>
  )
}

export default SimpleSearch
