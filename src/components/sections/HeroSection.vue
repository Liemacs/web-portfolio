<script setup>
import ArrowLink from '../ui/ArrowLink.vue'

defineProps({
  email: {
    type: String,
    required: true,
  },
  hero: {
    type: Object,
    required: true,
  },
  metrics: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <section id="overview" class="pt-24 lg:pt-[150px]">
    <div class="max-w-[760px] space-y-5">
      <h2 class="font-display text-fluid-hero leading-[0.92] font-semibold tracking-[-0.055em] text-black">
        {{ hero.title }}
      </h2>
      <p class="max-w-[700px] text-[15px] leading-[1.5] text-black/88 sm:text-[16px]">
        {{ hero.description }}
      </p>
      <div class="flex flex-wrap gap-3 pt-3">
        <ArrowLink
          :href="`mailto:${email}`"
          :label="hero.ctaLabel"
        />
      </div>
    </div>

    <dl class="mt-24 grid gap-7 sm:grid-cols-2 xl:mt-[150px] xl:grid-cols-4 xl:gap-6">
      <div
        v-for="metric in metrics"
        :key="metric.label"
        class="space-y-1.5"
      >
        <dt class="font-display text-[38px] leading-none font-semibold tracking-[-0.045em] text-black sm:text-[46px]">
          {{ metric.value }}
        </dt>
        <dd class="text-[14px] font-semibold tracking-[-0.02em] text-black">
          {{ metric.label }}
        </dd>
      </div>
    </dl>
  </section>
</template>
