import NoPermissionSVG from '@/assets/images/no-permission.svg'

const NoPermission = () => {
  return (
    <div className='flex justify-center'>
        <img className='h-screen' src={NoPermissionSVG} />
    </div>
  )
}

export default NoPermission
