<script setup>
import { computed } from 'vue'

defineProps({
  ownerName: {
    type: String,
    required: true,
  },
  rightsLabel: {
    type: String,
    required: true,
  },
})

const currentYear = computed(() => new Date().getFullYear())
</script>

<template>
  <footer class="mt-24 grid gap-4 border-t border-gray-200 pt-7 text-[14px] text-black/54 lg:mt-12">
    <p class="sm:text-center">
      Copyright {{ currentYear }} {{ ownerName }}, {{ rightsLabel }}
    </p>
  </footer>
</template>
