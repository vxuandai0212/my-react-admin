import IconButton from '@/components/button/IconButton'
import PrimaryButton from '@/components/button/PrimaryButton'
import RestingButton from '@/components/button/RestingButton'
import ProgressCard from '@/components/card/ProgressCard'
import AdvanceTab from '@/components/tab/AdvanceTab'
import { useScreen } from '@/hooks'
import Header from '@/layouts/components/Header'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next'
import BillTo from './components/BillTo'
import Description from './components/Description'
import Company from '@/assets/images/company.png'

const NewInvoice = () => {
  const { isNotPC } = useScreen()

  const topTabs: Tab.AdvanceTabItem[] = [
    {
      key: 'bill',
      label: 'page.invoice.detail.common.tab.billTo.title',
      description: 'page.invoice.detail.common.tab.billTo.description',
      icon: 'bill',
    },
    {
      key: 'from',
      label: 'page.invoice.detail.common.tab.from.title',
      description: 'page.invoice.detail.common.tab.from.description',
      icon: 'from',
    },
    {
      key: 'description',
      label: 'page.invoice.detail.common.tab.description.title',
      description: 'page.invoice.detail.common.tab.description.description',
      icon: 'description',
    },
  ]

  const [activeTab, setActiveTab] = useState('bill')
  const [tabTransitionStage, setTabTransitionStage] = useState<
    'fadeIn' | 'fadeOut'
  >('fadeIn')
  const [chooseActiveTab, setChooseActiveTab] = useState('bill')

  const chooseTab = (v: any) => {
    if (v !== activeTab) {
      setTabTransitionStage('fadeOut')
      setChooseActiveTab(v)
    }
  }

  const bottomTabs: Tab.AdvanceTabItem[] = [
    {
      key: 'save',
      label: 'page.invoice.detail.common.tab.saveAsDraft.title',
      description: 'page.invoice.detail.common.tab.saveAsDraft.description',
      icon: 'save',
    },
    {
      key: 'delete',
      label: 'page.invoice.detail.common.tab.deleteInvoice.title',
      description: 'page.invoice.detail.common.tab.deleteInvoice.description',
      icon: 'delete',
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
    <div className='flex grow'>
      <div className='2xl:basis-1/4 basis-0 grow-0 shrink-0 overflow-hidden background-color-white h-screen flex flex-col gap-28'>
        {isNotPC ? siderEl && createPortal(siderRender, siderEl) : siderRender}
      </div>
      <div className='p-0-28-27-28 basis-3/4 grow shrink overflow-hidden flex flex-col h-screen'>
        <Header
          className='basis-84px grow-0 shrink-0 overflow-hidden'
          routeName='routes.invoice.new'
        />
        <div className='flex flex-col gap-20 overflow-y-no-scrollbar'>
          <div
            className='2xl:hidden flex flex-col gap-28 background-color-white rounded-12'
            id='sider'
          ></div>
          <div className='rounded-12 background-color-white p-24-29-33-26 flex <md:flex-col-reverse gap-31'>
            <div className='flex flex-col gap-97 basis-2/3 <md:basis-1 grow-0 shrink-0'>
              <div
                className={`${tabTransitionStage}`}
                onAnimationEnd={() => {
                  if (tabTransitionStage === 'fadeOut') {
                    setTabTransitionStage('fadeIn')
                    setActiveTab(chooseActiveTab)
                  }
                }}
              >
                {activeTab === 'bill' ? (
                  <BillTo className='flex flex-col gap-11' />
                ) : activeTab === 'description' ? (
                  <Description />
                ) : null}
              </div>
              <div className='flex gap-6'>
                <PrimaryButton
                  className='p-14-47-15-46'
                  label='page.invoice.detail.common.button.saveAndSend'
                  onClick={() => {}}
                />
                <RestingButton
                  className='p-14-43-15-43'
                  label='page.invoice.detail.common.button.cancel'
                  onClick={() =>
                    console.log('page.invoice.detail.common.button.cancel')
                  }
                />
              </div>
            </div>
            <div className='flex flex-col <md:gap-20 grow shrink justify-between h-full'>
              <AdvanceTab
                onChooseTab={(v) => chooseTab(v)}
                active={activeTab}
                tabs={topTabs}
              />
              <AdvanceTab tabs={bottomTabs} onChooseTab={(v) => chooseTab(v)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewInvoice
