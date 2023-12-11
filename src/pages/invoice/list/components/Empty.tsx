import NoInvoiceSVG from '@/assets/images/no-invoice.svg'
import PrimaryButton from '@/components/button/PrimaryButton'

const InvoiceEmpty = () => {
  return (
    <div className='flex flex-col items-center mt-137'>
      <img className='width-590px height-377px' src={NoInvoiceSVG} />
      <div className='color-primary-dark font-size-32 font-700 line-height-42 mt-30 cursor-default'>
        No invoices found?
      </div>
      <div className='width-371 break-words color-primary-grey font-size-14 font-400 line-height-21 mt-13 text-center cursor-default'>
        Try to create more new invoices, send these documents and wait for a
        payment
      </div>
      <PrimaryButton
        label='common.header.create.invoice'
        className='p-14-44-15-44 mt-21'
        onClick={() => {}}
      />
    </div>
  )
}

export default InvoiceEmpty
