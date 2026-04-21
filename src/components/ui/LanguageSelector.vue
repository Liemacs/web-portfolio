<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { ChevronDown } from 'lucide-vue-next'

const props = defineProps({
  buttonLabel: {
    type: String,
    default: 'Select language',
  },
  initialLanguage: {
    type: String,
    default: 'ro',
  },
  modelValue: {
    type: String,
    default: '',
  },
  options: {
    type: Array,
    default: () => [
      {
        code: 'ro',
        shortLabel: 'Ro',
        label: 'Română',
      },
      {
        code: 'en',
        shortLabel: 'En',
        label: 'English',
      },
      {
        code: 'it',
        shortLabel: 'It',
        label: 'Italiană',
        disabled: true,
      },
    ],
  },
  optionsLabel: {
    type: String,
    default: 'Language options',
  },
})

const emit = defineEmits(['change', 'update:modelValue'])

const languageMenu = ref(null)
const isLanguageMenuOpen = ref(false)
const selectedLanguage = ref(props.modelValue || props.initialLanguage)
const currentLanguage = computed(() =>
  props.options.find((language) => language.code === selectedLanguage.value) ?? props.options[0],
)

watch(
  () => props.modelValue,
  (languageCode) => {
    if (languageCode) {
      selectedLanguage.value = languageCode
    }
  },
)

function toggleLanguageMenu() {
  isLanguageMenuOpen.value = !isLanguageMenuOpen.value
}

function selectLanguage(language) {
  if (language.disabled) {
    return
  }

  selectedLanguage.value = language.code
  isLanguageMenuOpen.value = false
  emit('update:modelValue', language.code)
  emit('change', language.code)
}

function closeLanguageMenu(event) {
  if (!languageMenu.value?.contains(event.target)) {
    isLanguageMenuOpen.value = false
  }
}

function closeLanguageMenuOnEscape(event) {
  if (event.key === 'Escape') {
    isLanguageMenuOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', closeLanguageMenu)
  document.addEventListener('keydown', closeLanguageMenuOnEscape)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', closeLanguageMenu)
  document.removeEventListener('keydown', closeLanguageMenuOnEscape)
})
</script>

<template>
  <div ref="languageMenu" class="relative shrink-0">
    <button
      type="button"
      class="grid h-[58px] w-[58px] place-items-center rounded-[18px] bg-black text-white transition hover:bg-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
      :aria-expanded="isLanguageMenuOpen"
      aria-haspopup="listbox"
      :aria-label="buttonLabel"
      @click.stop="toggleLanguageMenu"
    >
      <span class="flex items-center gap-0.5 text-[14px] font-semibold leading-none" aria-hidden="true">
        {{ currentLanguage.shortLabel }}
        <ChevronDown
          class="h-3.5 w-3.5 transition"
          :class="isLanguageMenuOpen ? 'rotate-180' : ''"
          stroke-width="2.4"
        />
      </span>
    </button>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-1 opacity-0"
    >
      <div
        v-if="isLanguageMenuOpen"
        class="absolute right-0 top-[68px] z-20 w-[148px] overflow-hidden rounded-[18px] border border-black/8 bg-white p-1.5 text-black shadow-[0_18px_40px_rgba(17,17,17,0.14)]"
        role="listbox"
        :aria-label="optionsLabel"
      >
        <button
          v-for="language in options"
          :key="language.code"
          type="button"
          class="flex w-full items-center justify-between rounded-[13px] px-3 py-2.5 text-left text-[13px] font-semibold transition hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          :class="[
            selectedLanguage === language.code ? 'bg-black text-white hover:bg-black' : 'text-black',
            language.disabled ? 'cursor-not-allowed opacity-50 hover:bg-transparent' : '',
          ]"
          :disabled="language.disabled"
          role="option"
          :aria-selected="selectedLanguage === language.code"
          @click="selectLanguage(language)"
        >
          <span>{{ language.label }}</span>
          <span class="text-[11px] uppercase opacity-60">{{ language.shortLabel }}</span>
        </button>
      </div>
    </Transition>
  </div>
</template>
