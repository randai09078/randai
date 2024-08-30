<script setup lang="ts">
import { NConfigProvider } from 'naive-ui'
import { NaiveProvider } from '@/components/common'
import { useTheme } from '@/hooks/useTheme'
import { useLanguage } from '@/hooks/useLanguage'
import { onMounted } from 'vue'

const { theme, themeOverrides } = useTheme()
const { language } = useLanguage()

onMounted(() => {
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.text = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': 'Randai',
    'description': 'Engage in conversations with AI-powered chatbots. Free and No Ads.',
    'url': 'https://randai.app',
    'logo': 'https://randai.app/assets/logo-d5785398.png',
    'potentialAction': {
      '@type': 'SearchAction',
      'target': {
        '@type': 'EntryPoint',
        'urlTemplate': 'https://query.randai.app/search?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  })
  document.head.appendChild(script)
})
</script>

<template>
  <NConfigProvider
    class="h-full"
    :theme="theme"
    :theme-overrides="themeOverrides"
    :locale="language"
  >
    <NaiveProvider>
      <RouterView />
    </NaiveProvider>
  </NConfigProvider>
</template>