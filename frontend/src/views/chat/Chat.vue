<script setup lang='ts'>
import type { Ref } from 'vue'
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute, } from 'vue-router'
import { storeToRefs } from 'pinia'
import { NAutoComplete, NButton, NInput, useDialog, useMessage, NSwitch, NUpload, NModal,  UploadCustomRequestOptions } from 'naive-ui'
import type { UploadFileInfo } from 'naive-ui'
import html2canvas from 'html2canvas'
import { Message, LoadChat, HelloMessage } from './components'
import { useScroll } from './hooks/useScroll'
import { useUsingContext } from './hooks/useUsingContext'
import HeaderComponent from './components/Header/index.vue'
import { SvgIcon } from '@/components/common'
import { useBasicLayout } from '@/hooks/useBasicLayout'
import { useAppStore, useChatStore, usePromptStore, useSettingStore } from '@/store'
import { fetchChatProcess } from '@/api'
import { t } from '@/locales'
import { SelectService, SelectLang, SelectModel, SelectSystemPromt, StepResearch } from '@/views/chat/components/index'
// import Reveal from 'reveal.js';
// import Markdown from 'reveal.js';


// let deck = new Reveal({
//    plugins: [ Markdown ]
// })

// import { VueSpeechRecognition, VueSpeechSynthesis } from 'vue-speech'
// import DoucementOption from '@/views/research/research/DoucementOption.vue'
// let controller = new AbortController();

const dialog = useDialog()
const ms = useMessage()
const chatStore = useChatStore()
const settings = useSettingStore()
const { isMobile } = useBasicLayout()
// const { addChat, updateChat, updateChatSome, getChatByUuidAndIndex } = useChat()
const { scrollRef, scrollToBottom, scrollToBottomIfAtBottom } = useScroll()
const { usingContext, toggleUsingContext } = useUsingContext()
const controller = computed(() => chatStore.controller);
const modelInfo = computed(() => chatStore.currentConversation.modelInfo);
const typeService = computed(() => chatStore.currentConversation.type);
const dataSources = computed(() => chatStore.currentConversation.chat);
const loadingChat = computed(() => chatStore.loadingChat);
const loadingMessage = computed(() => chatStore.loadingMessage);
// const loading = ref<boolean>(chatStore.loadingMessage);
const lang = computed(() => chatStore.currentConversation.lang)
const prompt = ref<string>(chatStore.currentPromptUser)
const imagePath = ref<string>('')
const loadingUploadImage = ref<boolean>(false)
const inputRef = ref<Ref | null>(null)
const promptStore = usePromptStore()
const { promptList: promptTemplate } = storeToRefs<any>(promptStore)
const isWebSearch = ref<boolean>(false)
const   showOptionResearch = ref<boolean>(false)
const message = useMessage()
const folder: string = 'ChatText';
const bucket: string = 'chat-text';
watch(() => chatStore.currentPromptUser, (newText) => {
  prompt.value = newText;
});


// watch(() => chatStore.loadingMessage, (newText) => {
//   loadingMessage.value = newText;
// });
const emit = defineEmits<{
  (e: 'removeImage'): void

}>()

async function handleSubmit() {
  if (typeService.value === 'research1'){
  showOptionResearch.value = true
  } else{
    onConversation()
  }

}
const isStream = computed(() => settings.getIsisStream())
// const isStream = computed(() => {
//   const currentConversation = chatStore.currentConversation;
 
//   if (currentConversation.modelInfo?.isStream) {
//     const languages = currentConversation.modelInfo.languages;
//     // console.log('languages', languages, currentConversation.lang)
//     if (currentConversation.type === 'research'){
//       return true;
//     }
//     if (languages && currentConversation.lang && languages.includes(currentConversation.lang) && currentConversation.type !== 'image') {
//       return true;
//     }
//   }
// })


async function handleChatRequest(
  message: string,
  imageUrl: string,
  index: number,
  parentMessageId?: string,
  isRetry?: boolean
) {
  let lastProcessedIndex = 0;
  if (loadingMessage.value) return;
  if (!message || message.trim() === '') return;
console.log("isStream.value", isStream.value)

  chatStore.loadingMessage = true;

  const promptValue = isRetry ? '' : message;

  // prompt.value = promptValue;

  try {
    const response = await fetchChatProcess({
      conversation_id: chatStore.currentConversation.id,
      parentMessageId: parentMessageId,
      isWebSearch: isWebSearch.value,
      isStream:isStream.value,
      prompt: message,
      image: imageUrl,
      type: typeService.value,
      signal:  controller.value.signal,
      onDownloadProgress: ({ event }) => {
        const xhr = event.target as XMLHttpRequest;
        const { responseText } = xhr;
        const newLines = responseText.split('\n');
        // console.log('JSON Parsing r', newLines)
        let loopCondition = isStream.value ? newLines.length -1  : newLines.length;

        for (let i = lastProcessedIndex; i < loopCondition; i++) {
          const chunk = newLines[i];
          try {
            const data = JSON.parse(chunk);
   console.error(data)
            chatStore.updateMessageTextChat({ error: false, loading: true, index, res: data });
            scrollToBottomIfAtBottom();
          } catch (error: any) {
            chatStore.updateMessageTextChat({ error: true, loading: false, index });
        
          }
        }

        lastProcessedIndex = isStream.value ? newLines.length -1 : newLines.length;
      },
    });

    chatStore.updateMessageTextChat({ error: false, loading: false, index });

  } catch (error: any) {
    if (error.message === 'canceled') {
      chatStore.updateMessageTextChat({ error: false, loading: false, index });
      console.log('Request aborted:', error.message);
    } else {
      chatStore.updateMessageTextChat({ error: true, loading: false, index });
      console.error('Error fetching or processing chat text:', error.message);
    }
  } finally {

    chatStore.loadingMessage = false;
  }
}

async function onConversation(): Promise<void> {
  const message: string = prompt.value;
  const imageUrl: string = imagePath.value;
  chatStore.addMessageChat(message, imageUrl);
  scrollToBottom();
  prompt.value = '';
  imagePath.value = '';
  emit('removeImage')
  const index: number = dataSources.value.length - 1;
 
  await handleChatRequest(message, imageUrl, index);
 
}

async function onRegenerate(item: Chat.Item, index: number): Promise<void> {
  const message: string = item.messageUser.text;
  const imageUrl: string = item.messageUser.imagePath ?? '';
  chatStore.addChildMessage(index);
  await handleChatRequest(message, imageUrl, index, item.messageUser.id);
}

async function onReTry(item: Chat.Item, index: number): Promise<void> {
  const message: string = item.messageUser.text;
  const imageUrl: string = item.messageUser.imagePath ?? '';
  chatStore.updateMessageTextChat({ error: false, loading: true, index });
  prompt.value = '';
  await handleChatRequest(message, imageUrl, index, item.messageUser.id, true);
}





function handleEnter(event: KeyboardEvent) {
  if (!isMobile.value) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      handleSubmit()
    }
  }
  else {
    if (event.key === 'Enter' && event.ctrlKey) {
      event.preventDefault()
      handleSubmit()
    }
  }
}

async function handleStop() {
 
  if (loadingMessage.value) {
    await chatStore.resetController()
  }
}

const searchOptions = computed(() => {
  if (prompt.value.startsWith('/')) {
    return promptTemplate.value.filter((item: { key: string }) => item.key.toLowerCase().includes(prompt.value.substring(1).toLowerCase())).map((obj: { value: any }) => {
      return {
        label: obj.value,
        value: obj.value,
      }
    })
  }
  else {
    return []
  }
})


const renderOption = (option: { label: string }) => {
  for (const i of promptTemplate.value) {
    if (i.value === option.label)
      return [i.key]
  }
  return []
}

const placeholder = computed(() => {
  if (isMobile.value)
    return t('chat.placeholderMobile')
  return t('chat.placeholder')
})

const buttonDisabled = computed(() => {
  return loadingMessage.value || !prompt.value || prompt.value.trim() === '' || loadingUploadImage.value
})

function handleClear() {
  if (loadingMessage.value)
    return

  dialog.warning({
    title: t('chat.clearChat'),
    content: t('chat.clearChatConfirm'),
    positiveText: t('common.yes'),
    negativeText: t('common.no'),
    onPositiveClick: () => {
      // chatStore.clearChatByUuid(uuidN.value)
    },
  })
}

function handleExport() {
  if (loadingMessage.value)
    return

  const d = dialog.warning({
    title: t('chat.exportImage'),
    content: t('chat.exportImageConfirm'),
    positiveText: t('common.yes'),
    negativeText: t('common.no'),
    onPositiveClick: async () => {
      try {
        d.loading = true
        const ele = document.getElementById('image-wrapper')
        const canvas = await html2canvas(ele as HTMLDivElement, {
          useCORS: true,
        })
        const imgUrl = canvas.toDataURL('image/png')
        const tempLink = document.createElement('a')
        tempLink.style.display = 'none'
        tempLink.href = imgUrl
        tempLink.setAttribute('download', 'chat-shot.png')
        if (typeof tempLink.download === 'undefined')
          tempLink.setAttribute('target', '_blank')

        document.body.appendChild(tempLink)
        tempLink.click()
        document.body.removeChild(tempLink)
        window.URL.revokeObjectURL(imgUrl)
        d.loading = false
        ms.success(t('chat.exportSuccess'))
        Promise.resolve()
      }
      catch (error: any) {
        ms.error(t('chat.exportFailed'))
      }
      finally {
        d.loading = false
      }
    },
  })
}

function handleDelete(index: number) {
  if (loadingMessage.value)
    return

  dialog.warning({
    title: t('chat.deleteMessage'),
    content: t('chat.deleteMessageConfirm'),
    positiveText: t('common.yes'),
    negativeText: t('common.no'),
    onPositiveClick: () => {
      // chatStore.deleteChatByUuid(uuidN.value, index)
    },
  })
}




onMounted(() => {
  // deck.initialize();
  // scrollToBottom()
  if (inputRef.value && !isMobile.value)
    inputRef.value?.focus()
})

onUnmounted(async () => {
 await chatStore.resetController()
});

const footerClass = computed(() => {
  let classes = ['']
  if (isMobile.value)
    classes = ['sticky', 'left-0', 'bottom-0', 'right-0', 'mx-2', 'pt-1', 'overflow-hidden']
  return classes
})

const isSpeechRecognitionActive = ref<boolean>(false)
let recognition:any;

function startSpeechRecognition() {
  isSpeechRecognitionActive.value = true;
  recognition = new webkitSpeechRecognition();
  recognition.lang = 'en';

  recognition.onstart = () => {
    console.log('Speech recognition started');
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    console.log('Speech recognition result:', transcript);
    prompt.value += transcript;
  };

  recognition.onend = () => {
    console.log('Speech recognition ended');
    isSpeechRecognitionActive.value = false;
  };

  recognition.onerror = (event) => {
    console.error('Speech recognition error:', event.error);
    isSpeechRecognitionActive.value = false;
  };

  recognition.start();
}

function stopSpeechRecognition() {
  recognition.stop();
}

function toggleSpeechRecognition() {
  if (isSpeechRecognitionActive.value) {
    stopSpeechRecognition();
  } else {
    startSpeechRecognition();
  }
}
watch(() => chatStore.currentConversation.type, () => {
  chatStore.recordState()
});

const uploadListType = ref("text")

async function beforeUpload(data: {
  file: UploadFileInfo;
  fileList: UploadFileInfo[];
}) {
  const allowedImageTypes = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif', 'image/webp'];

  if (data.file.file && allowedImageTypes.includes(data.file.file.type)) {
    uploadListType.value = 'image-card';
    return true;
  }

  uploadListType.value = 'text';
  return false;
}
import { supabase } from '@/utils/supabase';

const customRequest = async ({
  file,
  data: dataParams,
  headers,
  withCredentials,
  action,
  onFinish,
  onError,
  onProgress,
}: UploadCustomRequestOptions) => {
  try {
    if (!dataParams) {

      throw new Error('dataParams is undefined');
    }
    loadingUploadImage.value = true
    const progressEvent = { loaded: 20, total: 100 };
    const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
    onProgress({ percent: percentCompleted });
    console.log("file.id", file)
    const { data, error } = await supabase
      .storage
      .from(dataParams.bucket)
      .upload(`${dataParams.folder}/${file.name}`, file.file!, {
        cacheControl: '3600',
        upsert: false,
      })
    let percent = 10;
    onProgress({ percent: Math.ceil(percent) })
    if (error) {
      if (error.statusCode === "409" && error.error === "Duplicate") {

        imagePath.value = `${dataParams.folder}/${file.name}`

        onFinish()
        console.log("file.id", file)
      } else {
        throw error;
      }
    }
    if (data) {

      imagePath.value = data.path


      onFinish()
      console.log("file.id", file)
    }
    loadingUploadImage.value = false
  }
  catch (error: any) {
    console.log(error)
    message.error(error.message);
    onError();
    loadingUploadImage.value = false
  }

}

async function removeImage(options?: { file: UploadFileInfo, fileList: Array<UploadFileInfo> }): Promise<boolean> {
  const isDelete = ref<boolean>(false);
  let resolveFunction: (value: boolean) => void;

  const deleteDialog = dialog.warning({
    title: t('chat.deleteConfirmation'),
    content: t('chat.deleteConfirmationMessage'),
    positiveText: t('common.yes'),
    negativeText: t('common.no'),
    onPositiveClick: async () => {
      try {
        deleteDialog.loading = true;
        isDelete.value = true;
        imagePath.value = ''
        uploadListType.value = "text";
        message.success(t('chat.deleteSuccess'));
      } catch (error: any) {
        deleteDialog.loading = false;
        isDelete.value = false;
        message.error(t('chat.deleteFailed'));
      } finally {
        deleteDialog.loading = false;
        resolveFunction(isDelete.value);
      }
    },
  });
  return new Promise<boolean>((resolve) => {
    resolveFunction = resolve;
  });
}

function clearInput(){
  return true
}

import baseURL from '@/utils/request/axios'
const maxlength =  computed(() => {
  if (typeService.value === 'image'){
    return 4000
  } else{
    return 8000
  }
})
</script>

<template>
  <div class="flex  flex-col w-full h-full  dark:bg-violet-950 ">
    <HeaderComponent
      :using-context="usingContext"
      @export="handleExport"
      @handle-clear="handleClear"
    />

 
    <main class="flex-1 overflow-hidden">
  
      <div
        id="scrollRef"
        ref="scrollRef"
        class="h-full overflow-hidden overflow-y-auto"
        :class="typeService !== 'research' ? 'px-2 lg:px-44' : 'lg:px-40'"
     
      >
      <!-- <template v-if="showOptionResearch">
    <section >
      <StepResearch/>
    </section>
  </template> -->
  <template v-if="!showOptionResearch">
        <div
          id="image-wrapper"
          class="w-full max-w-screen-xl m-auto dark:bg-violet-950"
          :class="[isMobile ? 'p-2' : 'p-4']"
        >

          <template v-if="loadingChat">

            <div :class="[isMobile ? 'px-2' : '']">
              <LoadChat />
            </div>

          </template>

          <template v-else-if="!dataSources.length ">
        
    <!--   <div class="reveal">
      <div class="slides">
        <section>Slide 1</section>
        <section>Slide 2</section>
      </div>
    </div>  -->

           <HelloMessage />
          </template>
          <!-- <template v-else-if="typeService == 'research'">
          <StepResearch/> && typeService !== 'research'
        </template> -->
          <template v-else>
            <div>
              <!-- <StepResearch/> -->
              <div
                v-for="(item, index) of dataSources"
                class=""
                :class="typeService !== 'research' ? 'bg-blue-100 dark:bg-gray-800 dark:text-white dark:border-[1px]  mb-4 rounded-b-xl   rounded-t-xl' : ''"
              >
             
                <Message
                  :type="typeService"
                  :index="index"
                  :item="item"
                  @regenerate="onRegenerate(item, index)"
                  @retry="onReTry(item, index)"
                  @delete="handleDelete(index)"
                />
              </div>
            </div>
          </template>
        </div>
      </template>
      </div>
    </main>

    <footer
      class="mx-2 lg:mx-44 bg-blue-100 border-0 border-blue-900 dark:bg-blue-950 bg-blue-0 p-2 mb-1 rounded-lg"
      :class="footerClass"
    >


      <template v-if="typeService === 'text' && modelInfo.isWebSearch">
        <div class="flex  justify-end  gap-1">
          <div>{{ t('chat.includeWebSearch') }}</div>
          <NSwitch v-model:value="isWebSearch" />
        </div>
      </template>

      <div
        v-if="!dataSources.length && !loadingChat"
        class=" grid grid-cols-3 gap-1 rounded-lg my-1"
      >
        <SelectService />
        <SelectLang />
        <!-- <SelectModel /> -->
        <template v-if="typeService !== 'image'">
          <SelectModel />
        </template>
        <!-- <div class="col-span-3">
          <SelectSystemPromt />
        </div> -->
      </div>

    

      <div class="flex  items-center gap-1">

        <template v-if="typeService === 'text' && modelInfo.isAllowImage">
          <div>
            <div class="cursor-pointer">
          
              <NUpload
                accept="image/*"
                :max="1"
                path="image"
                :list-type="uploadListType"
                :data="{
                  'folder': folder,
                  'bucket': bucket
                }"
                :custom-request="customRequest"
                @before-upload="beforeUpload"
                @remove="removeImage"
            
               
              >
            
              <SvgIcon
                v-if="uploadListType !== 'image-card'"
                icon="mdi:image-add"
                class="h-5 w-5 md:w-7 md:h-7"
              />
              </NUpload> 
            </div>
          </div>
        </template>
        <!-- <button
              class="rounded-full flex items-center justify-center"
             
              @click="handleSubmit"
            >
          
            </button> -->
        <UploadImage/>

        <div class="w-full">
          <NAutoComplete
            v-model:value="prompt"
            :options="searchOptions"
            :render-label="renderOption"
          >
            <template #default="{ handleInput, handleBlur, handleFocus }">
              <NInput
                ref="inputRef"
                :dir="lang === 'ar' ? 'rtl' : 'ltr'"
                v-model:value="prompt"
                type="textarea"
                :placeholder="placeholder"
                :autosize="{ minRows: 2, maxRows: isMobile ? 4 : 6 }"
                @input="handleInput"
                @focus="handleFocus"
                @blur="handleBlur"
                @keypress="handleEnter"
               
                round
              
                clearable
              />
              <!-- 
               :maxlength="maxlength" 
               show-count -->
            </template>

          </NAutoComplete>
        </div>
     
        <!-- :class="isSpeechRecognitionActive ? 'start-speech' : ''" -->
        <div class="flex flex-col gap-1">

      

          <div class="cursor-pointer">
            <div :class="isSpeechRecognitionActive ? 'start-speech' : ''">
              <button
                v-if="prompt === '' && !loadingMessage"
                class="p-2 rounded-full bg-blue-600 flex items-center justify-center"
                @click="startSpeechRecognition"
              >

                <SvgIcon
                  icon="fluent:mic-32-filled"
                  class="h-5 w-5 text-white"
                />
              </button>
            </div>

            <!-- <VueSpeechRecognition
  lang="String"
  continuous="Boolean"
  interim-results="Boolean"
  max-alternatives="Number"
/> -->


            <button
              v-if="!loadingMessage && prompt !== ''"
              class="p-2 rounded-full bg-blue-600 flex items-center justify-center disabled:bg-blue-100"
              :disabled="buttonDisabled"
              @click="handleSubmit"
            >
              <SvgIcon
                icon="ic:baseline-send"
                class="h-5 w-5 text-white"
              />
            </button>

            <button
              v-if="loadingMessage"
              @click="handleStop"
              class="p-2 rounded-full bg-warning flex items-center justify-center"
            >
              <SvgIcon
                icon="ri:stop-circle-line"
                class="h-5 w-5 text-white"
              />
            </button>
          </div>
        </div>

      </div>
      <!-- <div class="flex justify-center text-xs   items-center">
          {{ t('chat.underChat') }}
        </div> -->


    </footer>
  </div>
</template>
<style scoped>
.start-speech {
  content: '';
  background: #084574;
  border: 5px solid #189BFF;
  border-radius: 50%;

  animation: startSpeech infinite 2s;
}



@keyframes startSpeech {
  0% {
    -webkit-transform: scale(1, 1);
    opacity: 1;
  }

  100% {
    -webkit-transform: scale(1.3, 1.3);
    opacity: 0.4;
  }
}



</style>