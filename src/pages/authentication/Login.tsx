import LangButton from '@/components/button/LangButton'
import PrimaryButton from '@/components/button/PrimaryButton'
import RestingButton from '@/components/button/RestingButton'
import RCheckbox from '@/components/form/RCheckbox'
import RInput from '@/components/form/RInput'
import RIcon from '@/components/icon/RIcon'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import LoginSVG from '@/assets/images/login.svg'
import { useNavigate } from 'react-router-dom'

const Login: React.FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const rules: any = {
    email: [
      {
        required: true,
        trigger: ['blur', 'input'],
        message: 'page.login.error.email.required',
      },
    ],
    password: [
      {
        required: true,
        trigger: ['blur', 'change'],
        message: 'page.login.error.password.required',
      },
    ],
  }

  const [checkboxValue, setCheckboxValue] = useState<number[]>([1])

  const checkboxOptions: RCheckboxOptions[] = [
    {
      key: 1,
      value: 1,
      label: 'page.login.form.rememberLogin.label',
    },
  ]

  function handleCheckboxValue(v: any) {
    if (checkboxValue.indexOf(v) === -1) {
      const newArr: number[] = [...checkboxValue, v]
      setCheckboxValue(newArr)
    } else {
      const newArr = checkboxValue.filter((i) => i !== v)
      setCheckboxValue(newArr)
    }
  }

  const icons: LocalIcon[] = ['twitter', 'google', 'facebook']

  return (
    <div className='flex background-color-3061EA w-screen h-screen overflow-y-no-scrollbar <2xl:landscape:h-auto'>
      <div className='background-color-white grow shrink rounded-0-16-16-0 <lg:portrait:rounded-0 flex flex-col items-center justify-between gap-50'>
        <div className='2xl:mt-108 xl:mt-55 lg:mt-40 <md:portrait:mt-20 <lg:landscape:mt-30 width-406 <md:portrait:width-306'>
          <div className='color-primary-dark font-size-32 font-700 line-height-42 cursor-default whitespace-pre-line'>
            {t('page.login.welcome')}
          </div>
          <div className='mt-11 color-primary-grey font-size-14 font-400 line-height-21 cursor-default'>
            {t('page.login.welcomeDescription')}
          </div>
          <div className='mt-62 width-361 <md:portrait:width-290'>
            <div className='flex flex-col gap-5'>
              <RInput
                label='page.login.form.email.label'
                value={email}
                rules={rules.email}
                onInput={setEmail}
                icon='email'
                placeholder='page.login.form.email.placeholder'
                type='text'
              />
              <RInput
                label='page.login.form.password.label'
                value={password}
                rules={rules.password}
                onInput={setPassword}
                icon='password'
                placeholder='page.login.form.password.placeholder'
                type='password'
              />
            </div>
            <div className='flex justify-between items-center mt-13'>
              <RCheckbox
                value={checkboxValue}
                options={checkboxOptions}
                updateValue={handleCheckboxValue}
              />
              <div className='cursor-pointer color-primary hover:color-primary-hover font-size-14 font-700'>
                {t('page.login.form.recoverPassword.label')}
              </div>
            </div>
            <div className='flex gap-9 mt-38'>
              <PrimaryButton
                className='h-46px basis-1/2 grow-0 shrink-0 overflow-hidden flex items-center justify-center'
                label='button.login'
              />
              <RestingButton
                className='h-46px basis-1/2 grow-0 shrink-0 overflow-hidden flex items-center justify-center'
                label='button.signup'
                onClick={(() => navigate('/signup'))}
              />
            </div>
            <div className='mt-77 flex gap-13 items-center'>
              <div className='flex flex-row gap-6 justify-left'>
                {icons.map((icon) => {
                  return (
                    <div
                      key={icon}
                      className='group border border-solid border-color-resting-outline hover:border-color-primary rounded-8 width-46 height-46 flex justify-center items-center cursor-pointer transition'
                    >
                      <RIcon
                        icon={icon}
                        height='14px'
                        className='fill-primary-grey group-hover:fill-primary-dark transition'
                      />
                    </div>
                  )
                })}
              </div>
              <div className='color-primary-grey font-size-14 font-400 line-height-21 cursor-default'>
                {t('page.login.loginWith')}
              </div>
            </div>
          </div>
        </div>
        <div className='self-start m-0-0-30-30'>
          <LangButton placement='right' show-button-label />
        </div>
      </div>
      <div
        className='basis-9/20 <lg:portrait:basis-0'
        style={{
          background: `radial-gradient(
          98.58% 98.58% at 57.43% 48.15%,
          #5e81f4 0%,
          #1b51e5 100%
        )`,
        }}
      >
        <img
          className='h-full w-full'
          src={LoginSVG}
        />
      </div>
    </div>
  )
}

export default Login
