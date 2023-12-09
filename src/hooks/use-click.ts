import { useEffect, useState } from 'react'

export default function useClick() {
  const [el, setEl] = useState<any>()

  useEffect(() => {
    document.addEventListener('click', (e) => setEl(e.target), false)

    return () => {
      document.removeEventListener('click', (e) => setEl(e.target), false)
    }
  }, [])

  return {
    el,
  }
}
