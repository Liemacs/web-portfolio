<script setup>
import { ref } from 'vue'

import ArrowLink from '../ui/ArrowLink.vue'
import ServiceAccordionItem from '../ui/ServiceAccordionItem.vue'

defineProps({
  content: {
    type: Object,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  services: {
    type: Array,
    required: true,
  },
})

const openServices = ref([0])

function isServiceOpen(index) {
  return openServices.value.includes(index)
}

function toggleService(index) {
  openServices.value = isServiceOpen(index)
    ? openServices.value.filter((serviceIndex) => serviceIndex !== index)
    : [...openServices.value, index]
}
</script>

<template>
  <section id="services" class="pt-22 lg:pt-28">
    <div class="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
      <div class="space-y-2">
        <h2 class="section-title max-w-[560px]">
          {{ content.title }}
        </h2>
      </div>
      <ArrowLink
        :href="`mailto:${email}`"
        class="self-start lg:mt-5"
        :label="content.ctaLabel"
      />
    </div>

    <div class="mt-8 space-y-2.5">
      <ServiceAccordionItem
        v-for="(service, index) in services"
        :key="service.title"
        :is-open="isServiceOpen(index)"
        :service="service"
        @toggle="toggleService(index)"
      />
    </div>
  </section>
</template>
