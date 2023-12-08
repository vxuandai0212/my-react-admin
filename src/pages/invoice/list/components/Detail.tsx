import { useClickOutside, useDatetime } from "@/hooks"
import { useEffect, useRef, useState } from "react"

const InvoiceDetail = () => {
  const { datetime } = useDatetime()
const sampleDate1 = datetime(1683533878000).format('DD MMM YYYY')
const sampleDate2 = datetime(1694161078000).format('DD MMM YYYY')

const chatContainerRef: any = useRef(null)
const commentInputRef: any = useRef(null)
const chatListHeight = useRef(570)
const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false)
const emojiPickerRef = useRef()
const emojiIconRef = useRef()
useEffect(() => {
  chatContainerRef.value.scrollTo(0, chatContainerRef.value.scrollHeight)
})

const isClickOutsided = useClickOutside([])
  

const { el } = useClick()

watch(el, (newValue) => {
  if (!showEmojiPicker.value) return
  const emojiPickerEl: any = emojiPickerRef.value.$el
  const emojiIconEl: any = emojiIconRef.value.$el
  if (!emojiPickerEl) return
  if (
    showEmojiPicker.value &&
    !emojiPickerEl.contains(newValue) &&
    !emojiIconEl.contains(newValue)
  ) {
    showEmojiPicker.value = false
  }
})

function growHeight(el: any) {
  const newChatListHeight = 590 - el.target.offsetHeight
  if (newChatListHeight !== chatListHeight.value) {
    chatListHeight.value = newChatListHeight
    commentInputRef.value.scrollTo(0, commentInputRef.value.scrollHeight)
  }
}

function onSelectEmoji(emoji: any) {
  commentInputRef.value.innerHTML += emoji.i
}

function onClickEmotionPicker() {
  showEmojiPicker.value = true
}
  return (

  )
}