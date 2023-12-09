import { RefObject, useEffect, useState } from 'react'

type AnyEvent = MouseEvent | TouchEvent

interface UseClickOutsideReturnVal {
  isClickOutsided: boolean
}

function useClickOutside<T extends HTMLElement = HTMLElement>(
  refs: RefObject<T>[]
): UseClickOutsideReturnVal {
  const [isClickOutsided, setIsClickOutsided] = useState<boolean>(true)
  const isClickInsidePredicate = (ref: RefObject<T>, event: AnyEvent) => {
    const el = ref?.current
    return !el || el.contains(event.target as Node)
  }

  useEffect(() => {
    const listener = (event: AnyEvent) => {
      const bool = refs.every((item) => !isClickInsidePredicate(item, event))
      setIsClickOutsided(bool)
    }

    document.addEventListener(`mousedown`, listener)
    document.addEventListener(`touchstart`, listener)

    return () => {
      document.removeEventListener(`mousedown`, listener)
      document.removeEventListener(`touchstart`, listener)
    }
  }, [refs])

  return { isClickOutsided }
}

export { useClickOutside }
