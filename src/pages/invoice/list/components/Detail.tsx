import RIcon from '@/components/icon/RIcon'
import RTag from '@/components/tag/RTag'
import { useDatetime } from '@/hooks'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import EmojiPicker from 'emoji-picker-react'
import PrimaryButton from '@/components/button/PrimaryButton'
import Avatar from '@/assets/images/avatar.png'
import useClick from '@/hooks/use-click'

const InvoiceDetail: React.FC = () => {
  const { t } = useTranslation()
  const { datetime } = useDatetime()
  const sampleDate1 = datetime(1683533878000).format('DD MMM YYYY')
  const sampleDate2 = datetime(1694161078000).format('DD MMM YYYY')

  const chatContainerRef: any = useRef(null)
  const commentInputRef: any = useRef(null)
  const [chatListHeight, setChatListHeight] = useState<number>(570)
  const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false)
  const emojiPickerRef = useRef<any>(null!)
  const emojiIconRef = useRef<any>(null!)
  useEffect(() => {
    chatContainerRef.current.scrollTo(0, chatContainerRef.current.scrollHeight)
  })

  const { el } = useClick()

  useEffect(() => {
    if (
      el &&
      !emojiPickerRef.current.contains(el) &&
      !emojiIconRef.current.contains(el) &&
      showEmojiPicker
    ) {
      setShowEmojiPicker(false)
    }
  }, [el])

  function growHeight(el: any) {
    const newChatListHeight = 590 - el.offsetHeight
    if (newChatListHeight !== chatListHeight) {
      setChatListHeight(newChatListHeight)
      commentInputRef.current.scrollTo(0, commentInputRef.current.scrollHeight)
    }
  }

  function onSelectEmoji(emoji: any) {
    commentInputRef.current.innerHTML += emoji.emoji
  }

  function onClickEmotionPicker() {
    setShowEmojiPicker(true)
  }
  return (
    <div className={`flex flex-col`}>
      <div className='flex basis-50px p-0-30-0-29 items-center justify-between'>
        <div className='flex items-center color-primary-grey font-size-14 font-700 line-height-21 height-36'>
          {t('page.invoice.detail.label')} #AA-04-19-1890
        </div>
        <RIcon width='12' height='2' icon='three-dot' />
      </div>
      <div className='flex <lg:flex-col'>
        <div className='basis-3/5 <lg:basis-1 p-10-30-83-29'>
          <div>
            <div className='flex <md:flex-col <md:items-start <md:gap-10 justify-between items-center md:height-52'>
              <div className='flex gap-14 items-center'>
                <div className='flex items-center justify-center background-color-background-light'>
                  <RIcon
                    icon='dropbox'
                    className='fill-primary width-18 height-18'
                  />
                </div>
                <div className='color-primary-dark font-size-20 font-700 line-height-32'>
                  Dropbox Inc.
                </div>
                <div className='color-primary-grey font-size-14 font-400 line-height-21'>
                  13 Nov 2019
                </div>
              </div>
              <RTag
                className='p-11-28-10-28'
                label='page.invoice.status.paid'
                type='success'
              />
            </div>
            <div className='mt-30 pb-27 border-bottom-1 border-bottom-solid border-bottom-color-EEE flex justify-between'>
              <div>
                <div className='color-primary-grey font-size-12 font-700 line-height-18'>
                  {t('page.invoice.detail.description.from')}:
                </div>
                <div className='mt-26 color-primary-grey font-14 font-700 line-height-21'>
                  WhiteOnWhite
                </div>
                <div className='mt-20 flex flex-col items-left gap-5'>
                  <div className='color-primary-dark font-size-14 font-400 line-height-21'>
                    The Business Centre
                  </div>
                  <div className='color-primary-dark font-size-14 font-400 line-height-21'>
                    61 Wellfield Road
                  </div>
                  <div className='color-primary-dark font-size-14 font-400 line-height-21'>
                    Roath
                  </div>
                  <div className='color-primary-dark font-size-14 font-400 line-height-21'>
                    Cardiff
                  </div>
                  <div className='color-primary-dark font-size-14 font-400 line-height-21'>
                    CF24 3DG
                  </div>
                  <div className='color-primary-dark font-size-14 font-400 line-height-21'>
                    mail@wonw.xyz
                  </div>
                  <div className='color-primary-dark font-size-14 font-400 line-height-21'>
                    +1 456–980-3004
                  </div>
                </div>
              </div>
              <div className='text-right'>
                <div className='color-primary-grey font-size-12 font-700 line-height-18'>
                  {t('page.invoice.detail.description.to')}:
                </div>
                <div className='mt-26 color-primary-grey font-14 font-700 line-height-21'>
                  Dropbox Inc.
                </div>
                <div className='mt-20 flex flex-col items-left gap-5'>
                  <div className='color-primary-dark font-size-14 font-400 line-height-21'>
                    3 Edgar Buildings
                  </div>
                  <div className='color-primary-dark font-size-14 font-400 line-height-21'>
                    George Street
                  </div>
                  <div className='color-primary-dark font-size-14 font-400 line-height-21'>
                    Bath
                  </div>
                  <div className='color-primary-dark font-size-14 font-400 line-height-21'>
                    England
                  </div>
                  <div className='color-primary-dark font-size-14 font-400 line-height-21'>
                    BA1 2FJ
                  </div>
                  <div className='color-primary-dark font-size-14 font-400 line-height-21'>
                    mail@dropdox.com
                  </div>
                  <div className='color-primary-dark font-size-14 font-400 line-height-21'>
                    +1 736–140-1003
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-22'>
              <div className='color-primary-dark font-size-18 font-700 line-height-27'>
                {t('page.invoice.detail.description._value')}
              </div>
              <div className='mt-17'>
                <div className='p-0-14-0-14 height-39 rounded-6 flex background-color-background-light items-center color-primary-grey font-size-12 font-700 line-height-18'>
                  <div className='flex-grow'>
                    {t('page.invoice.detail.description.item')}
                  </div>
                  <div className='w%-14'>
                    {t('page.invoice.detail.description.hour')}
                  </div>
                  <div className='w%-14 text-center'>
                    {t('page.invoice.detail.description.rate')}
                  </div>
                  <div className='w%-14 text-right'>
                    {t('page.invoice.detail.description.amount')}
                  </div>
                </div>
                <div className='mt-16 flex flex-col gap-16'>
                  <div className='flex p-0-14-0-14'>
                    <div className='flex-grow'>CRM UI design</div>
                    <div className='w%-14'>356</div>
                    <div className='w%-14 text-center'>$10</div>
                    <div className='w%-14 text-right'>$3560</div>
                  </div>
                  <div className='flex p-0-14-0-14'>
                    <div className='flex-grow'>CRM coding HTML & CSS</div>
                    <div className='w%-14'>420</div>
                    <div className='w%-14 text-center'>$20</div>
                    <div className='w%-14 text-right'>$8400</div>
                  </div>
                </div>
                <div className='flex justify-end p-0-14-0-14'>
                  <div className='mt-30 w%-42 flex flex-col gap-16'>
                    <div className='flex justify-between'>
                      <div className='color-primary-dark font-size-14 font-700 line-height-21'>
                        {t('page.invoice.detail.description.subtotal')}
                      </div>
                      <div className='color-primary-dark font-size-14 font-400 line-height-21'>
                        $11960
                      </div>
                    </div>
                    <div className='flex justify-between'>
                      <div className='color-primary-dark font-size-14 font-700 line-height-21'>
                        {t('page.invoice.detail.description.tax')} 10%
                      </div>
                      <div className='color-primary-dark font-size-14 font-400 line-height-21'>
                        $1196
                      </div>
                    </div>
                    <div className='flex justify-between'>
                      <div className='color-primary-dark font-size-16 font-700 line-height-24'>
                        {t('page.invoice.detail.description.total')}
                      </div>
                      <div className='color-primary-dark font-size-16 font-700 line-height-24'>
                        $13156
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex-grow background-color-FBFBFD flex flex-col justify-between'>
          <div className='p-10-30-30-29'>
            <div className='height-52 flex flex-start items-center'>
              <div className='color-primary-dark font-size-18 font-700 line-height-27'>
                {t('page.invoice.detail.activity')}
              </div>
            </div>
            <div
              className='mt-30 flex flex-col gap-21 transition'
              style={{ overflowY: 'scroll', maxHeight: `${chatListHeight}px` }}
              ref={chatContainerRef}
            >
              <div className='self-start flex-col gap-5'>
                <div className='flex gap-8'>
                  <img
                    className='width-24 height-24 rounded-50 mt-5'
                    src={Avatar}
                    alt='Avatar'
                  />
                  <div className='flex flex-col gap-5'>
                    <div className='rounded-19-19-19-0 p-8-17-6-15 background-color-F6F6F6 color-primary-dark font-size-14 font-400 line-height-21'>
                      Created invoice #AA-04-19-1890
                    </div>
                    <div className='color-primary-grey font-size-12 font-700 line-height-18'>
                      {sampleDate1}
                    </div>
                  </div>
                </div>
              </div>
              <div className='self-start flex-col gap-5'>
                <div className='flex gap-8'>
                  <img
                    className='width-24 height-24 rounded-50 mt-5'
                    src={Avatar}
                    alt='Avatar'
                  />
                  <div className='flex flex-col gap-5'>
                    <div className='rounded-19-19-19-0 p-8-17-6-15 background-color-F6F6F6 color-primary-dark font-size-14 font-400 line-height-21'>
                      Set due date to 13 Nov 2019
                    </div>
                    <div className='color-primary-grey font-size-12 font-700 line-height-18'>
                      {sampleDate1}
                    </div>
                  </div>
                </div>
              </div>
              <div className='self-end flex-col gap-5'>
                <div className='flex gap-8'>
                  <div className='flex flex-col gap-5 items-end'>
                    <div className='rounded-17-17-0-17 p-8-17-6-15 background-color-primary color-white font-size-14 font-400 line-height-21'>
                      Invoice paid
                    </div>
                    <div className='color-primary-grey font-size-12 font-700 line-height-18'>
                      {sampleDate1}
                    </div>
                  </div>
                  <img
                    className='width-24 height-24 rounded-50 mt-5'
                    src={Avatar}
                    alt='Avatar'
                  />
                </div>
              </div>
              <div className='self-start flex-col gap-5'>
                <div className='flex gap-8'>
                  <img
                    className='width-24 height-24 rounded-50 mt-5'
                    src={Avatar}
                    alt='Avatar'
                  />
                  <div className='flex flex-col gap-5'>
                    <div className='rounded-19-19-19-0 p-8-17-6-15 background-color-F6F6F6 color-primary-dark font-size-14 font-400 line-height-21'>
                      Created invoice #AA-04-19-1890
                    </div>
                    <div className='color-primary-grey font-size-12 font-700 line-height-18'>
                      {sampleDate1}
                    </div>
                  </div>
                </div>
              </div>
              <div className='self-start flex-col gap-5'>
                <div className='flex gap-8'>
                  <img
                    className='width-24 height-24 rounded-50 mt-5'
                    src={Avatar}
                    alt='Avatar'
                  />
                  <div className='flex flex-col gap-5'>
                    <div className='rounded-19-19-19-0 p-8-17-6-15 background-color-F6F6F6 color-primary-dark font-size-14 font-400 line-height-21'>
                      Set due date to 13 Nov 2019
                    </div>
                    <div className='color-primary-grey font-size-12 font-700 line-height-18'>
                      {sampleDate1}
                    </div>
                  </div>
                </div>
              </div>
              <div className='self-end flex-col gap-5'>
                <div className='flex gap-8'>
                  <div className='flex flex-col gap-5 items-end'>
                    <div className='rounded-17-17-0-17 p-8-17-6-15 background-color-primary color-white font-size-14 font-400 line-height-21'>
                      Invoice paid
                    </div>
                    <div className='color-primary-grey font-size-12 font-700 line-height-18'>
                      {sampleDate1}
                    </div>
                  </div>
                  <img
                    className='width-24 height-24 rounded-50 mt-5'
                    src={Avatar}
                    alt='Avatar'
                  />
                </div>
              </div>
              <div className='self-start flex-col gap-5'>
                <div className='flex gap-8'>
                  <img
                    className='width-24 height-24 rounded-50 mt-5'
                    src={Avatar}
                    alt='Avatar'
                  />
                  <div className='flex flex-col gap-5'>
                    <div className='rounded-19-19-19-0 p-8-17-6-15 background-color-F6F6F6 color-primary-dark font-size-14 font-400 line-height-21'>
                      Created invoice #AA-04-19-1890
                    </div>
                    <div className='color-primary-grey font-size-12 font-700 line-height-18'>
                      {sampleDate2}
                    </div>
                  </div>
                </div>
              </div>
              <div className='self-start flex-col gap-5'>
                <div className='flex gap-8'>
                  <img
                    className='width-24 height-24 rounded-50 mt-5'
                    src={Avatar}
                    alt='Avatar'
                  />
                  <div className='flex flex-col gap-5'>
                    <div className='rounded-19-19-19-0 p-8-17-6-15 background-color-F6F6F6 color-primary-dark font-size-14 font-400 line-height-21'>
                      Set due date to 13 Nov 2019
                    </div>
                    <div className='color-primary-grey font-size-12 font-700 line-height-18'>
                      {sampleDate2}
                    </div>
                  </div>
                </div>
              </div>
              <div className='self-end flex-col gap-5'>
                <div className='flex gap-8'>
                  <div className='flex flex-col gap-5 items-end'>
                    <div className='rounded-17-17-0-17 p-8-17-6-15 background-color-primary color-white font-size-14 font-400 line-height-21'>
                      Invoice paid
                    </div>
                    <div className='color-primary-grey font-size-12 font-700 line-height-18'>
                      {sampleDate2}
                    </div>
                  </div>
                  <img
                    className='width-24 height-24 rounded-50 mt-5'
                    src={Avatar}
                    alt='Avatar'
                  />
                </div>
              </div>
              <div className='self-start flex-col gap-5'>
                <div className='flex gap-8'>
                  <img
                    className='width-24 height-24 rounded-50 mt-5'
                    src={Avatar}
                    alt='Avatar'
                  />
                  <div className='flex flex-col gap-5'>
                    <div
                      className='rounded-19-19-19-0 p-8-17-6-15 background-color-F6F6F6 color-primary-dark font-size-14 font-400 line-height-21'
                      style={{ maxWidth: '255px' }}
                    >
                      Created invoice #AA-04-19-1890
                    </div>
                    <div className='color-primary-grey font-size-12 font-700 line-height-18'>
                      {sampleDate2}
                    </div>
                  </div>
                </div>
              </div>
              <div className='self-start flex-col gap-5'>
                <div className='flex gap-8'>
                  <img
                    className='width-24 height-24 rounded-50 mt-5'
                    src={Avatar}
                    alt='Avatar'
                  />
                  <div className='flex flex-col gap-5'>
                    <div className='rounded-19-19-19-0 p-8-17-6-15 background-color-F6F6F6 color-primary-dark font-size-14 font-400 line-height-21'>
                      Set due date to 13 Nov 2019
                    </div>
                    <div className='color-primary-grey font-size-12 font-700 line-height-18'>
                      {sampleDate2}
                    </div>
                  </div>
                </div>
              </div>
              <div className='self-end flex-col gap-5'>
                <div className='flex gap-8'>
                  <div className='flex flex-col gap-5 items-end'>
                    <div className='rounded-17-17-0-17 p-8-17-6-15 background-color-primary color-white font-size-14 font-400 line-height-21'>
                      Invoice paid
                    </div>
                    <div className='color-primary-grey font-size-12 font-700 line-height-18'>
                      {sampleDate2}
                    </div>
                  </div>
                  <img
                    className='width-24 height-24 rounded-50 mt-5'
                    src={Avatar}
                    alt='Avatar'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-between background-color-background-light items-center flex-grow'>
            <div
              ref={commentInputRef}
              data-text='Add your comment'
              role='textbox'
              onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                growHeight(e.target)
              }
              style={{
                overflowY: 'auto',
                maxHeight: '100px',
                minHeight: '20px',
              }}
              className='__textarea__ width-212 resize-none color-primary-grey font-size-14 font-700 m-10-10-10-30 transition'
              contentEditable
            ></div>
            <div className='flex gap-11 items-center pr-30'>
              <div className='flex items-center gap-9 relative'>
                <div
                  ref={emojiPickerRef}
                  style={{
                    bottom: '50px',
                    opacity: `${showEmojiPicker ? 1 : 0}`,
                    right: `${showEmojiPicker ? '-108px' : '-1008px'}`,
                    zIndex: `${showEmojiPicker ? 1 : -1}`,
                  }}
                  className='absolute transition'
                >
                  <EmojiPicker
                    previewConfig={{ showPreview: false }}
                    onEmojiClick={onSelectEmoji}
                  />
                </div>

                <div ref={emojiIconRef}>
                  <RIcon
                    width='16'
                    height='16'
                    icon='emoticon'
                    onClick={onClickEmotionPicker}
                    className='fill-primary-grey cursor-pointer'
                  />
                </div>
                <RIcon
                  width='13'
                  height='15'
                  icon='attach'
                  className='fill-primary-grey'
                />
              </div>
              <PrimaryButton className='p-9-33-8-34' label='button.send' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InvoiceDetail
