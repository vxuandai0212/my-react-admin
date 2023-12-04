import { SVGProps } from 'react'

export const SvgOval: React.FC = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z'
    />
  </svg>
)
