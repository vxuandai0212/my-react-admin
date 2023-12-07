import NotFoundSVG from '@/assets/images/not-found.svg'

const NotFound = () => {
  return (
    <div className='flex justify-center'>
        <img className='h-screen' src={NotFoundSVG} />
    </div>
  )
}

export default NotFound
