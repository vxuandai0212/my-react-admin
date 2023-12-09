import IconButton from '@/components/button/IconButton'
import ProgressCard from '@/components/card/ProgressCard'
import { BarLoading } from '@/components/loading/BarLoading'
import SimpleTab from '@/components/tab/SimpleTab'
import Table from '@/components/table/Table'
import { useLoading, useScreen } from '@/hooks'
import Header from '@/layouts/components/Header'
import { fetchAllInvoice } from '@/service'
import { Modal, Pagination } from 'antd'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next'
import InvoiceDetail from './components/Detail'
import Avatar from '@/assets/images/avatar.png'
import Company from '@/assets/images/company.png'
import './index.css'

const InvoiceList = () => {
  const { isNotPC } = useScreen()

  const [showModal, setShowModal] = useState<boolean>(false)

  const headers: Table.Header[] = [
    {
      key: 'number',
      label: 'page.invoice.table.header.number',
      type: 'icon-text',
      style: 'bold',
      width: 25,
    },
    {
      key: 'date',
      label: 'page.invoice.table.header.date',
      type: 'text',
      format: {
        type: 'datetime',
        value: 'DD MMM YYYY',
      },
      width: 15,
    },
    {
      key: 'customer',
      label: 'page.invoice.table.header.customer',
      type: 'image-text',
      width: 25,
    },
    {
      key: 'status',
      label: 'page.invoice.table.header.status',
      type: 'tag',
      width: 20,
      align: 'center',
    },
    {
      key: 'amount',
      label: 'page.invoice.table.header.amount',
      type: 'text',
      style: 'bold',
      format: {
        type: 'currency',
        value: {
          locale: 'en-US',
          style: 'currency',
          currency: 'USD',
        },
      },
      width: 20,
    },
  ]

  const progressCards: Card.ProgressCard[] = [
    {
      label: 'page.invoice.progress.all',
      description: 'page.invoice.progress.duration.week',
      value: 1.345,
      progressColor: 'primary',
      trend: 'up',
      percent: 80,
    },
    {
      label: 'page.invoice.progress.scheduled',
      description: 'page.invoice.progress.duration.month',
      value: 3.82,
      progressColor: 'warning',
      trend: 'down',
      percent: 60,
    },
    {
      label: 'page.invoice.progress.unpaid',
      description: 'page.invoice.progress.duration.week',
      valuePrefix: '$',
      value: 4690,
      progressColor: 'danger',
      trend: 'up',
      percent: 30,
    },
    {
      label: 'page.invoice.progress.paid',
      description: 'page.invoice.progress.duration.month',
      valuePrefix: '$',
      value: 3820,
      progressColor: 'success',
      trend: 'down',
      percent: 85,
    },
  ]

  function handleCreateInvoice(v: any) {
    console.log('Create invoice: ' + v.id)
  }

  function handleEditInvoice(v: any) {
    setShowModal(true)
    console.log('Edit invoice: ' + v.id)
  }

  function handleDeleteInvoice(v: any) {
    console.log('Delete invoice: ' + v.id)
  }

  function handleRetryInvoice(v: any) {
    console.log('Retry invoice: ' + v.id)
  }

  const STATUS_MAP = {
    1: { value: 'page.invoice.status.paid', type: 'primary' },
    2: { value: 'page.invoice.status.scheduled', type: 'success' },
    3: { value: 'page.invoice.status.unpaid', type: 'warning' },
    4: { value: 'page.invoice.status.pending', type: 'danger' },
    5: { value: 'page.invoice.status.processing', type: 'info' },
    6: { value: 'page.invoice.status.finished', type: 'default' },
  }

  const tabs: Tab.SimpleTabItem[] = [
    {
      label: 'page.invoice.tab.all',
      value: 'all',
    },
    {
      label: 'page.invoice.status.pending',
      value: 4,
    },
    {
      label: 'page.invoice.tab.scheduled',
      value: 2,
    },
    {
      label: 'page.invoice.tab.paid',
      value: 1,
    },
  ]

  const COMMAND_MAP: any = {
    4: [
      {
        label: 'page.invoice.command.retry',
        key: 'invoice:retry',
        type: 'warning',
      },
    ],
    5: [
      {
        label: 'page.invoice.command.edit',
        key: 'invoice:edit',
      },
      {
        label: 'page.invoice.command.delete',
        key: 'invoice:delete',
        type: 'danger',
      },
    ],
    6: [
      {
        label: 'page.invoice.command.view',
        key: 'invoice:view',
      },
      {
        label: 'page.invoice.command.edit',
        key: 'invoice:edit',
      },
      {
        label: 'page.invoice.command.delete',
        key: 'invoice:delete',
        type: 'danger',
      },
    ],
  }

  const [table, setTable] = useState<{
    filter: {
      status: ApiInvoice.Invoice['status'] | 'all'
      page: number
      limit: number
    }
    total: number
    items: any[]
  }>({
    filter: {
      status: 'all',
      page: 1,
      limit: 10,
    },
    total: 0,
    items: [],
  })

  function changeStatus(v: ApiInvoice.Invoice['status']) {
    setTable((state) => ({
      ...state,
      filter: {
        ...state.filter,
        status: v,
        page: 1,
        limit: 10,
      },
    }))
    getData()
  }

  function handlePageChange(v: number) {
    setTable((state) => ({
      ...state,
      filter: {
        ...state.filter,
        page: v,
      },
    }))
    getData()
  }

  function handlePageSizeChange(v: number) {
    setTable((state) => ({
      ...state,
      filter: {
        ...state.filter,
        limit: v,
      },
    }))
    getData()
  }

  const { loading, startLoading, endLoading } = useLoading(false)

  function setData(data: ApiInvoice.GetAllInvoice) {
    const { total, items } = data
    table.total = total
    table.items = items.map((i) => {
      return {
        id: i.id,
        number: { icon: '', text: i.code },
        date: i.createdAt,
        customer: {
          image: Avatar,
          text: i.customerName,
        },
        status: STATUS_MAP[i.status],
        amount: i.amount,
        commands: COMMAND_MAP[i.status],
      }
    })
  }

  async function getData() {
    startLoading()
    const { data } = await fetchAllInvoice({ ...table.filter })
    if (data) {
      setTimeout(() => {
        setData(data)
        endLoading()
      }, 1000)
    }
  }

  function init() {
    getData()
  }

  useEffect(() => {
    init()
  }, [])

  const handleCommand = (args: any) => {
    if (args.key === 'page.invoice.command.edit') {
      handleEditInvoice(args.value)
    }
  }

  const { t } = useTranslation()

  const siderEl = document.getElementById('sider')

  const siderRender = (
    <>
      <div className='flex p-24-28-23-28 justify-between border-bottom-1 border-bottom-solid border-bottom-color-outline'>
        <div className='flex gap-12'>
          <img src={Company} alt='Company avatar' />
          <div>
            <div className='color-primary-dark font-size-14 font-700 line-height-21 cursor-default'>
              WHITEUI.STORE LLC
            </div>
            <div className='color-primary-grey font-size-12 font-400 line-height-18 cursor-default'>
              8484 Ross Wells
            </div>
          </div>
        </div>
        <IconButton icon='caret-down' />
      </div>
      <div className='h-full p-0-21-28-30 overflow-y-no-scrollbar'>
        <div className='color-primary-dark font-size-16 font-700 line-height-24'>
          {t('page.invoice.progress.title')}
        </div>
        <div className='color-primary-grey font-size-14 font-400 line-height-21'>
          {t('page.invoice.progress.description')}
        </div>
        <div className='mt-20 grid grid-cols-4 gap-6'>
          {progressCards.map((item) => (
            <ProgressCard
              key={item.label}
              className='2xl:col-span-4 <2xl:col-span-2 <md:col-span-4'
              backgroundColor='background-1'
              {...item}
            />
          ))}
        </div>
      </div>
    </>
  )

  return (
    <div className='flex grow shrink'>
      <div className='2xl:basis-1/4 basis-0 overflow-hidden grow-0 shrink-0 h-screen flex flex-col gap-28 background-color-white'>
        {isNotPC ? siderEl && createPortal(siderRender, siderEl) : siderRender}
      </div>
      <div className='p-0-28-27-28 basis-3/4 grow shrink overflow-hidden flex flex-col h-screen'>
        <Header
          className='basis-84px grow-0 shrink-0 overflow-hidden'
          routeName='routes.invoice.list'
        />
        <div className='flex flex-col gap-20 overflow-y-no-scrollbar'>
          <div
            className='2xl:hidden flex flex-col gap-28 background-color-white rounded-12'
            id='sider'
          ></div>
          <div className='flex flex-col grow-0 shrink-0 p-20-0-25-0 gap-25 rounded-12 background-color-white'>
            <div className='p-0-25-0-25'>
              <SimpleTab
                onChooseTab={changeStatus}
                tabs={tabs}
                activeTab={table.filter.status}
              />
            </div>
            <div className='overflow-x-no-scrollbar'>
              <div className='flex flex-col gap-36 h-full min-w-1000px'>
                {!loading ? (
                  <Table
                    headers={headers}
                    data={table.items}
                    handleCommand={handleCommand}
                  />
                ) : (
                  <div className='flex justify-center items-center h-full'>
                    <BarLoading />
                  </div>
                )}

                <div className='flex justify-end p-0-25-0-25 basis-34px grow-0 shrink-0 overflow-hidden'>
                  <Pagination
                    current={table.filter.page}
                    pageSize={table.filter.limit}
                    pageSizeOptions={[10, 20, 30, 50]}
                    total={table.total}
                    showSizeChanger={false}
                    onChange={handlePageChange}
                  />
                </div>
              </div>
            </div>
            <Modal
              open={showModal}
              centered
              width='auto'
              footer={<div />}
              closeIcon={null}
              onCancel={(e) => setShowModal(false)}
            >
              <div
                className='rounded-4 background-color-white width-1079 height-814 overflow-hidden'
                style={{
                  boxShadow: `0px 6px 16px 0px rgba(153, 155, 168, 0.1)`,
                }}
              >
                <InvoiceDetail />
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InvoiceList
