<script setup>
defineProps({
  faq: {
    type: Object,
    required: true,
  },
  isOpen: {
    type: Boolean,
    required: true,
  },
})

defineEmits(['toggle'])
</script>

<template>
  <article class="overflow-hidden rounded-[20px] border border-gray-200 bg-white transition duration-300 hover:border-black/16">
    <button
      type="button"
      class="flex w-full items-center justify-between gap-5 px-5 py-4 text-left text-[17px] font-semibold tracking-[-0.035em] text-black transition hover:text-black/65 sm:px-6 lg:px-7"
      :aria-expanded="isOpen"
      @click="$emit('toggle')"
    >
      <span>{{ faq.question }}</span>
      <span class="text-[24px] leading-none font-normal" aria-hidden="true">
        {{ isOpen ? '-' : '+' }}
      </span>
    </button>
    <Transition name="faq-panel">
      <div
        v-if="isOpen"
        class="overflow-hidden"
      >
        <p class="max-w-[820px] px-5 pb-5 text-[14px] leading-[1.55] text-black/66 sm:px-6 lg:px-7">
          {{ faq.answer }}
        </p>
      </div>
    </Transition>
  </article>
</template>
