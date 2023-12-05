import { SVGProps } from 'react'

export const SvgArrow: React.FC = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox='0 0 10 12' xmlns='http://www.w3.org/2000/svg'>
    <path d='M5 0.046875L4.64062 0.390625L0.390625 4.64062L1.10938 5.35938L4.5 1.96875V12H5.5V1.96875L8.89062 5.35938L9.60938 4.64062L5.35938 0.390625L5 0.046875Z' />{' '}
  </svg>
)
