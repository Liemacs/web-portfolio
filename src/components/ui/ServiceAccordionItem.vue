<script setup>
defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  service: {
    type: Object,
    required: true,
  },
})

defineEmits(['toggle'])
</script>

<template>
  <button
    type="button"
    :aria-expanded="isOpen"
    :class="isOpen ? 'border-charcoal bg-charcoal text-white shadow-[0_18px_40px_rgba(17,17,17,0.05)]' : 'border-gray-200 bg-white text-black hover:bg-gray-100'"
    class="grid w-full gap-4 rounded-[22px] border px-5 py-4 text-left transition-[background-color,border-color,box-shadow,color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-6 lg:min-h-[82px] lg:grid-cols-[300px_minmax(0,1fr)] lg:items-start lg:justify-between lg:gap-20 lg:px-6 lg:py-5 xl:gap-28"
    @click="$emit('toggle')"
  >
    <h3 class="font-display text-[22px] leading-[1.04] font-semibold tracking-[-0.045em] sm:text-[26px]">
      {{ service.title }}
    </h3>
    <div class="space-y-3 lg:min-w-0">
      <div class="flex flex-wrap gap-1.5 lg:justify-between xl:justify-start xl:gap-2">
        <span
          v-for="tag in service.tags"
          :key="tag"
          :class="isOpen ? 'bg-white/10 text-white' : 'bg-gray-100 text-black'"
          class="rounded-full px-3 py-1.5 text-[12px] font-semibold tracking-[-0.02em] transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        >
          + {{ tag }}
        </span>
      </div>
      <Transition name="service-panel">
        <div
          v-if="isOpen"
          class="overflow-hidden"
        >
          <p class="max-w-[690px] text-[14px] leading-[1.55] text-white/78">
            {{ service.description }}
          </p>
        </div>
      </Transition>
    </div>
  </button>
</template>
