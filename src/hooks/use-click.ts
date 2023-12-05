import { useRef } from 'react'

export default function useClick() {
  const el = useRef<EventTarget | null>(null)

  document.addEventListener('click', (e) => (el.current = e.target), false)

  return {
    el,
  }
}
