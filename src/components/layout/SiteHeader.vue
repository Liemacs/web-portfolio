<script setup>
import LanguageSelector from '../ui/LanguageSelector.vue'

defineProps({
  languageLabels: {
    type: Object,
    required: true,
  },
  languageOptions: {
    type: Array,
    required: true,
  },
  locale: {
    type: String,
    required: true,
  },
  navigation: {
    type: Array,
    required: true,
  },
})

defineEmits(['update:locale'])
</script>

<template>
  <header class="flex items-start justify-between gap-6">
    <nav
      class="grid flex-1 gap-x-16 gap-y-1.5 text-[13px] font-semibold tracking-[-0.02em] sm:grid-cols-2 lg:max-w-[690px] lg:text-[15px]"
      aria-label="Primary navigation"
    >
      <a
        v-for="item in navigation"
        :key="item"
        href="#services"
        class="flex items-center gap-3 transition hover:text-black/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
      >
        <span class="text-[22px] leading-none font-normal text-black/14" aria-hidden="true">+</span>
        <span>{{ item }}</span>
      </a>
    </nav>

    <LanguageSelector
      :button-label="languageLabels.languageButtonLabel"
      :model-value="locale"
      :options="languageOptions"
      :options-label="languageLabels.languageOptionsLabel"
      @update:model-value="$emit('update:locale', $event)"
    />
  </header>
</template>
