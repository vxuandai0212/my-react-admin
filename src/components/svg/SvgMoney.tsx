import { SVGProps } from 'react'

export const SvgMoney: React.FC = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox='0 0 17 12' xmlns='http://www.w3.org/2000/svg'>
    <path d='M12.2424 0.625C11.5745 0.648438 10.8948 0.748047 10.2034 0.923828C9.79321 1.01758 9.20728 1.19922 8.44556 1.46875L8.42798 1.48633C7.61938 1.75586 7.00415 1.94336 6.58228 2.04883C5.86743 2.22461 5.15845 2.3125 4.45532 2.3125C3.40063 2.33594 2.33423 2.16016 1.2561 1.78516L0.517822 1.52148V11.1367L0.886963 11.2773C1.87134 11.6172 2.86743 11.8105 3.87524 11.8574C4.02759 11.8691 4.17993 11.875 4.33228 11.875C5.08228 11.875 5.84399 11.7812 6.61743 11.5938C7.07446 11.4883 7.72485 11.2891 8.5686 10.9961H8.58618C9.45337 10.6914 10.1213 10.4863 10.5901 10.3809C11.3518 10.2168 12.1077 10.1523 12.8577 10.1875C13.7483 10.2227 14.6331 10.3984 15.512 10.7148L16.2678 10.9785V1.36328L15.8987 1.22266C14.926 0.871094 13.9299 0.677734 12.9104 0.642578C12.6995 0.630859 12.4768 0.625 12.2424 0.625ZM12.2776 1.75C12.4768 1.73828 12.6702 1.73828 12.8577 1.75C13.0569 1.76172 13.2737 1.7793 13.5081 1.80273C13.5784 2.10742 13.7366 2.36523 13.9827 2.57617C14.2405 2.77539 14.5334 2.875 14.8616 2.875C14.9553 2.875 15.0491 2.86328 15.1428 2.83984V7.97266C15.0491 7.94922 14.9553 7.9375 14.8616 7.9375C14.5217 7.9375 14.217 8.04883 13.9475 8.27148C13.6897 8.49414 13.5315 8.76953 13.4729 9.09766C13.2971 9.08594 13.1096 9.07422 12.9104 9.0625C12.0667 9.02734 11.217 9.10352 10.3616 9.29102C9.83423 9.4082 9.11938 9.625 8.21704 9.94141C7.33813 10.2461 6.67017 10.4453 6.21313 10.5391C5.4397 10.7148 4.67798 10.7852 3.92798 10.75C3.72876 10.7383 3.51196 10.7207 3.27759 10.6973C3.20728 10.3809 3.04321 10.123 2.7854 9.92383C2.53931 9.72461 2.2522 9.625 1.92407 9.625C1.83032 9.625 1.73657 9.63672 1.64282 9.66016V4.52734C1.73657 4.55078 1.83032 4.5625 1.92407 4.5625C2.27563 4.5625 2.58032 4.45117 2.83813 4.22852C3.09595 4.00586 3.25415 3.72461 3.31274 3.38477C3.73462 3.43164 4.11548 3.44922 4.45532 3.4375C5.2522 3.42578 6.04321 3.32617 6.82837 3.13867C7.2854 3.0332 7.93579 2.83398 8.77954 2.54102H8.79712C9.51196 2.2832 10.0627 2.10742 10.4495 2.01367C11.0706 1.84961 11.6799 1.76172 12.2776 1.75ZM8.39282 3.4375C7.98267 3.4375 7.60181 3.56641 7.25024 3.82422C6.9104 4.07031 6.64087 4.41016 6.44165 4.84375C6.24243 5.27734 6.14282 5.74609 6.14282 6.25C6.14282 6.75391 6.24243 7.22266 6.44165 7.65625C6.64087 8.08984 6.9104 8.43555 7.25024 8.69336C7.60181 8.93945 7.98267 9.0625 8.39282 9.0625C8.80298 9.0625 9.17798 8.93945 9.51782 8.69336C9.86938 8.43555 10.1448 8.08984 10.344 7.65625C10.5432 7.22266 10.6428 6.75391 10.6428 6.25C10.6428 5.74609 10.5432 5.27734 10.344 4.84375C10.1448 4.41016 9.86938 4.07031 9.51782 3.82422C9.17798 3.56641 8.80298 3.4375 8.39282 3.4375ZM8.39282 4.5625C8.69751 4.5625 8.96118 4.73242 9.18384 5.07227C9.40649 5.40039 9.51782 5.79297 9.51782 6.25C9.51782 6.70703 9.40649 7.10547 9.18384 7.44531C8.96118 7.77344 8.69751 7.9375 8.39282 7.9375C8.08813 7.9375 7.82446 7.77344 7.60181 7.44531C7.37915 7.10547 7.26782 6.70703 7.26782 6.25C7.26782 5.79297 7.37915 5.40039 7.60181 5.07227C7.82446 4.73242 8.08813 4.5625 8.39282 4.5625ZM12.6116 4.5625C12.3772 4.5625 12.178 4.64453 12.0139 4.80859C11.8499 4.97266 11.7678 5.17188 11.7678 5.40625C11.7678 5.64062 11.8499 5.83984 12.0139 6.00391C12.178 6.16797 12.3772 6.25 12.6116 6.25C12.8459 6.25 13.0452 6.16797 13.2092 6.00391C13.3733 5.83984 13.4553 5.64062 13.4553 5.40625C13.4553 5.17188 13.3733 4.97266 13.2092 4.80859C13.0452 4.64453 12.8459 4.5625 12.6116 4.5625ZM4.17407 6.25C3.9397 6.25 3.74048 6.33203 3.57642 6.49609C3.41235 6.66016 3.33032 6.85938 3.33032 7.09375C3.33032 7.32812 3.41235 7.52734 3.57642 7.69141C3.74048 7.85547 3.9397 7.9375 4.17407 7.9375C4.40845 7.9375 4.60767 7.85547 4.77173 7.69141C4.93579 7.52734 5.01782 7.32812 5.01782 7.09375C5.01782 6.85938 4.93579 6.66016 4.77173 6.49609C4.60767 6.33203 4.40845 6.25 4.17407 6.25Z' />
  </svg>
)