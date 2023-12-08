import RInput from '@/components/form/RInput'
import RIcon from '@/components/icon/RIcon'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const Description = () => {
  const { t } = useTranslation()
  const initForm = {
    itemDescription: '',
    hour: '',
    rate: '',
  }

  type Form = typeof initForm
  type FormField = keyof Form

  const [form, setForm] = useState<Form>(initForm)
  const handleChange = (field: FormField, value: any) => {
    setForm((prevState) => ({
      ...prevState,
      [field as FormField]: value,
    }))
  }
  return (
    <div className='flex flex-col gap-51'>
      <div className='flex flex-col gap-28'>
        <div className='flex flex-col gap-28'>
          <div className='flex flex-col gap-28'>
            <div className='flex p-0-18-0-18 justify-between items-center background-color-FBFBFD rounded-8 height-50'>
              <div>{t('page.invoice.detail.descriptionSection.item')}</div>
              <div className='flex gap-7'>
                <RIcon className='fill-primary-dark height-15' icon='delete' />
                <div className='uppercase color-primary-dark font-size-12 font-900'>
                  {t('page.invoice.detail.descriptionSection.remove')}
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-12'>
              <RInput
                className='flex-grow'
                label='page.invoice.detail.descriptionSection.itemDescription.title'
                icon='cart'
                placeholder='page.invoice.detail.descriptionSection.itemDescription.placeholder'
                value={form.itemDescription}
                onInput={(v) => handleChange('itemDescription', v)}
              />
              <div className='flex gap-30'>
                <RInput
                  className='flex-grow'
                  label='page.invoice.detail.descriptionSection.hour.title'
                  icon='hour'
                  placeholder='page.invoice.detail.descriptionSection.hour.placeholder'
                  value={form.hour}
                  onInput={(v) => handleChange('hour', v)}
                />
                <RInput
                  className='flex-grow'
                  label='page.invoice.detail.descriptionSection.rate.title'
                  icon='money'
                  placeholder='page.invoice.detail.descriptionSection.rate.placeholder'
                  value={form.rate}
                  onInput={(v) => handleChange('rate', v)}
                />
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-28'>
            <div className='flex p-0-18-0-18 justify-between items-center background-color-FBFBFD rounded-8 height-50'>
              <div>{t('page.invoice.detail.descriptionSection.item')}</div>
              <div className='flex gap-7'>
                <RIcon className='fill-primary-dark height-15' icon='delete' />
                <div className='uppercase color-primary-dark font-size-12 font-900'>
                  {t('page.invoice.detail.descriptionSection.remove')}
                </div>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-y-12px gap-x-30px'>
              <RInput
                className='col-span-2'
                label='page.invoice.detail.descriptionSection.itemDescription.title'
                icon='cart'
                placeholder='page.invoice.detail.descriptionSection.itemDescription.placeholder'
                value={form.itemDescription}
                onInput={(v) => handleChange('itemDescription', v)}
              />
              <RInput
                className='col-span-1 <md:col-span-2'
                label='page.invoice.detail.descriptionSection.hour.title'
                icon='hour'
                placeholder='page.invoice.detail.descriptionSection.hour.placeholder'
                value={form.hour}
                onInput={(v) => handleChange('hour', v)}
              />
              <RInput
                className='col-span-1 <md:col-span-2'
                label='page.invoice.detail.descriptionSection.rate.title'
                icon='money'
                placeholder='page.invoice.detail.descriptionSection.rate.placeholder'
                value={form.rate}
                onInput={(v) => handleChange('rate', v)}
              />
            </div>
          </div>
        </div>
        <div className='flex gap-2 items-center'>
          <RIcon className='fill-primary-dark width-18' icon='add' />
          <div className='uppercase color-primary-dark font-size-12 font-900'>
            {t('page.invoice.detail.descriptionSection.addNewItem')}
          </div>
        </div>
      </div>
      <div className='flex justify-end'>
        <div className='flex flex-col width-208'>
          <div className='flex flex-col gap-26'>
            <div className='flex flex-col gap-16'>
              <div className='flex justify-between items-center'>
                <div className='color-primary-dark font-size-14 font-700 line-height-21'>
                  {t('page.invoice.detail.descriptionSection.subTotal')}
                </div>
                <div className='color-primary-dark font-size-14 font-400 line-height-21'>
                  $11960
                </div>
              </div>
              <div className='flex justify-between items-center'>
                <div className='color-primary-dark font-size-14 font-700 line-height-21'>
                  {t('page.invoice.detail.descriptionSection.tax')} 10%
                </div>
                <div className='color-primary-dark font-size-14 font-400 line-height-21'>
                  $1196
                </div>
              </div>
            </div>
            <div className='flex justify-between items-center'>
              <div className='color-primary-dark font-size-16 font-700 line-height-24'>
                {t('page.invoice.detail.descriptionSection.total')}
              </div>
              <div className='color-primary-dark font-size-16 font-700 line-height-24'>
                $13156
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Description
