import { MutableRefObject, RefObject, useEffect, useRef } from 'react'

type AnyEvent = MouseEvent | TouchEvent

interface UseClickOutsideReturnVal {
  isClickOutsided: MutableRefObject<boolean>
}

function useClickOutside<T extends HTMLElement = HTMLElement>(
  refs: RefObject<T>[]
): UseClickOutsideReturnVal {
  const isClickOutsided = useRef(false)
  const isClickInsidePredicate = (ref: RefObject<T>, event: AnyEvent) => {
    const el = ref?.current
    return !el || el.contains(event.target as Node)
  }

  useEffect(() => {
    const listener = (event: AnyEvent) => {
      isClickOutsided.current = refs.every(
        (item) => !isClickInsidePredicate(item, event)
      )
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
