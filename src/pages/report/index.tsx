import { createPortal } from 'react-dom'
import LatestUpdate from './components/LatestUpdate'
import UpcomingEvent from './components/UpcomingEvent'
import PopularCategory from './components/PopularCategory'
import { useTranslation } from 'react-i18next'
import { useScreen } from '@/hooks'
import Header from '@/layouts/components/Header'
import OverviewStat from './components/OverviewStat'
import Visit from './components/chart/Visit'
import SpreadConsumption from './components/chart/SpreadConsumption'
import RoadTransport from './components/chart/RoadTransport'
import Sale from './components/chart/Sale'
import Smoking from './components/chart/Smoking'
import AirPollutant from './components/chart/AirPollutant'
import Transportation from './components/chart/Transportation'
import Company from '@/assets/images/company.png'

const Report = () => {
  const { t } = useTranslation()
  const { isNotPC } = useScreen()

  const siderEl = document.getElementById('sider')

  const siderRender = (
    <>
      <div className='col-span-3 flex 2xl:flex-col 2xl:gap-5 gap-15 <2xl:items-center 2xl:mt-55 2xl:p-28-23-10-28 p-28-23-28-28 background-color-white rounded-12'>
        <img
          className='2xl:width-98 2xl:height-98 width-40 height-40'
          src={Company}
          alt='Company'
        />
        <div className='flex 2xl:flex-col <md:flex-col <md:items-start <2xl:items-center gap-5'>
          <div
            className='color-primary-dark font-size-22 font-400'
            style={{ letterSpacing: '0.4px' }}
          >
            {t('page.report.welcome')},
          </div>
          <div className='color-primary-dark font-size-26 font-700 line-height-38'>
            WhiteUI.Store
          </div>
        </div>
      </div>
      <LatestUpdate />
      <UpcomingEvent />
      <PopularCategory />
    </>
  )
  return (
    <div className='flex grow'>
      <div className='2xl:basis-1/4 <2xl:basis-0 grow-0 shrink-0 background-color-white h-screen overflow-y-no-scrollbar'>
        <div className='grid grid-cols-3'>
          {isNotPC
            ? siderEl && createPortal(siderRender, siderEl)
            : siderRender}
        </div>
      </div>
      <div className='p-0-28-0-28 grow shrink overflow-hidden flex flex-col h-screen'>
        <Header
          className='basis-84px grow-0 shrink-0 overflow-hidden'
          routeName='routes.report.list'
        />
        <div className='flex flex-col gap-28 overflow-y-no-scrollbar p-0-0-28-0'>
          <div className='grid grid-cols-3 gap-28 2xl:hidden' id='sider'></div>
          <div className='grid grid-cols-3 gap-28'>
            <OverviewStat />
            <Visit className='col-span-2 <lg:col-span-3 flex flex-col gap-28 p-28-0-28-0 background-color-white rounded-12' />
            <SpreadConsumption className='col-span-1 <lg:col-span-3 flex flex-col gap-28 p-28-0-28-0 background-color-white rounded-12' />
            <RoadTransport className='pt-20 gap-20 col-span-1 <lg:col-span-3 flex flex-col background-color-white rounded-12' />
            <Sale className='pt-20 col-span-1 <lg:col-span-3 flex flex-col gap-20 background-color-white rounded-12' />
            <Smoking className='pt-20 col-span-1 <lg:col-span-3 flex flex-col gap-20 background-color-white rounded-12' />
            <AirPollutant className='col-span-2 <lg:col-span-3 flex flex-col gap-28 p-28-0-28-0 background-color-white rounded-12' />
            <Transportation className='col-span-1 <lg:col-span-3 flex flex-col gap-28 p-28-0-28-0 background-color-white rounded-12' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Report
