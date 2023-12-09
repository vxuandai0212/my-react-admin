import RDatepicker from '@/components/form/RDatepicker'
import RInput from '@/components/form/RInput'
import RSelect from '@/components/form/RSelect'
import RIcon from '@/components/icon/RIcon'
import { UploadProps, message } from 'antd'
import Dragger from 'antd/es/upload/Dragger'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const BillTo: React.FC<{ className: string }> = ({ className }) => {
  const { t } = useTranslation()
  const templateOptions = [
    {
      key: 'Option 1',
      label: 'Option 1',
    },
    {
      key: 'Option 2',
      label: 'Option 2',
    },
    {
      key: 'Option 3',
      label: 'Option 3',
    },
    {
      key: 'Option 4',
      label: 'Option 4',
    },
    {
      key: 'Option 5',
      label: 'Option 5',
    },
    {
      key: 'Option 6',
      label: 'Option 6',
    },
    {
      key: 'Option 7',
      label: 'Option 7',
    },
    {
      key: 'Option 8',
      label: 'Option 8',
    },
    {
      key: 'Option 9',
      label: 'Option 9',
    },
    {
      key: 'Option 10',
      label: 'Option 10',
    },
  ]
  const props: UploadProps = {
    name: 'file',
    multiple: true,
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    onChange(info) {
      const { status } = info.file
      if (status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`)
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`)
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files)
    },
  }

  const initForm = {
    invoiceNumber: '',
    template: '',
    companyName: '',
    date: '',
    businessAddress: '',
    country: '',
    city: '',
    phoneNumber: '',
    email: '',
    taxRate: '',
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
    <div className={`flex flex-col gap-30 ${className}`}>
      <Dragger {...props}>
        <div className='flex justify-center items-center gap-5 height-206'>
          <RIcon icon='upload' className='fill-primary-dark width-18' />
          <div className='color-primary-dark font-size-12 font-900 uppercase'>
            {t('page.invoice.detail.billTo.uploadImage')}
          </div>
        </div>
      </Dragger>
      <div className='grid grid-cols-2 gap-y-22px gap-x-28px'>
        <RInput
          className='col-span-1 <md:col-span-2'
          label='page.invoice.detail.billTo.invoiceNumber.title'
          icon='invoice'
          type='text'
          placeholder='page.invoice.detail.billTo.invoiceNumber.placeholder'
          value={form.invoiceNumber}
          onInput={(v) => handleChange('invoiceNumber', v)}
        />
        <RSelect
          options={templateOptions}
          className='col-span-1 <md:col-span-2'
          label='page.invoice.detail.billTo.template.title'
          icon='caret-down'
          placeholder='page.invoice.detail.billTo.template.placeholder'
          value={form.template}
          onUpdateValue={(v) => handleChange('template', v)}
        />
        <RInput
          className='col-span-1 <md:col-span-2'
          label='page.invoice.detail.billTo.companyName.title'
          icon='company'
          type='text'
          placeholder='page.invoice.detail.billTo.companyName.placeholder'
          value={form.companyName}
          onInput={(v) => handleChange('companyName', v)}
        />
        <RDatepicker
          className='col-span-1 <md:col-span-2'
          label='page.invoice.detail.billTo.date.title'
          placeholder='page.invoice.detail.billTo.date.placeholder'
          type={'date'}
          value={form.date}
          setDatePicker={(v) => handleChange('date', v)}
        />
        <RInput
          className='col-span-2'
          label='page.invoice.detail.billTo.businessAddress.title'
          icon='business'
          type='text'
          placeholder='page.invoice.detail.billTo.businessAddress.placeholder'
          value={form.businessAddress}
          onInput={(v) => handleChange('businessAddress', v)}
        />
        <RSelect
          options={templateOptions}
          className='col-span-1 <md:col-span-2'
          label='page.invoice.detail.billTo.country.title'
          icon='caret-down'
          placeholder='page.invoice.detail.billTo.country.placeholder'
          value={form.country}
          onUpdateValue={(v) => handleChange('country', v)}
        />
        <RSelect
          options={templateOptions}
          className='col-span-1 <md:col-span-2'
          label='page.invoice.detail.billTo.city.title'
          icon='caret-down'
          placeholder='page.invoice.detail.billTo.city.placeholder'
          value={form.city}
          onUpdateValue={(v) => handleChange('city', v)}
        />
        <RInput
          className='col-span-1 <md:col-span-2'
          label='page.invoice.detail.billTo.phoneNumber.title'
          icon='phone'
          type='text'
          placeholder='page.invoice.detail.billTo.phoneNumber.placeholder'
          value={form.phoneNumber}
          onInput={(v) => handleChange('phoneNumber', v)}
        />
        <RInput
          className='col-span-1 <md:col-span-2'
          label='page.invoice.detail.billTo.email.title'
          icon='email'
          type='text'
          placeholder='page.invoice.detail.billTo.email.placeholder'
          value={form.email}
          onInput={(v) => handleChange('email', v)}
        />
        <RInput
          className='col-span-1 <md:col-span-2'
          label='page.invoice.detail.billTo.taxRate.title'
          icon='rate'
          type='text'
          placeholder='page.invoice.detail.billTo.taxRate.placeholder'
          value={form.taxRate}
          onInput={(v) => handleChange('taxRate', v)}
        />
      </div>
    </div>
  )
}

export default BillTo
