import { ref, onMounted, onBeforeUnmount } from 'vue'

export default function useEventBus() {
  const eventChannel = new BroadcastChannel('custom-event-channel')
  const receivedMessage = ref('')

  const emit = (event: string, data?: any) => {
    eventChannel.postMessage({ event, data })
  }

  const on = (event: string, callback: (data: any) => void) => {
    const listener = (messageEvent: MessageEvent) => {
      if (messageEvent.data.event === event) {
        callback(messageEvent.data.data)
      }
    }
    eventChannel.addEventListener('message', listener)
    onMounted(() => {
      console.log('Component mounted')
    })
    onBeforeUnmount(() => {
      eventChannel.removeEventListener('message', listener)
    })
  }

  return {
    emit,
    on,
    receivedMessage,
  }
}
