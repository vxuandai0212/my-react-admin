import { SVGProps } from 'react'

export const SvgHamburger: React.FC = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox='0 0 12 10' xmlns='http://www.w3.org/2000/svg'>
    <path d='M0 0.5V1.5H12V0.5H0ZM0 4.5V5.5H12V4.5H0ZM0 8.5V9.5H12V8.5H0Z' />
  </svg>
)
