import { useEffect, useRef, useState } from 'react'
import RIcon from '../icon/RIcon'
import { useTranslation } from 'react-i18next'
import { useClickOutside } from '@/hooks'

const SimpleSearch: React.FC = () => {
  const { t } = useTranslation()
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

  const { isClickOutsided } = useClickOutside([simpleSearchContainerRef])

  useEffect(() => {
    setShowInput(!isClickOutsided)
  }, [isClickOutsided])

  const checkShowDropdown = (v: string) => {
    if (v === 'result') {
      setShowDropdown(true)
    } else {
      setShowDropdown(false)
    }
  }

  return (
    <div
      ref={simpleSearchContainerRef}
      style={{
        background: `${showInput ? 'white' : 'rgba(129, 129, 165, 0.1)'}`,
        boxShadow: `${
          showInput ? '0px 6px 20px 0px rgba(153, 155, 168, 0.1)' : ''
        }`,
      }}
      className='flex items-center height-36 rounded-6 <md:hidden cursor-pointer relative transition'
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
          checkShowDropdown(e.target.value)
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
          className={`width-16 height-16 ${
            showInput ? 'fill-primary' : 'fill-primary-grey'
          }`}
          icon='search'
        />
      </div>
    </div>
  )
}

export default SimpleSearch
