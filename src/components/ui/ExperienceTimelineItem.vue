<script setup>
import { BriefcaseBusiness, CalendarDays } from 'lucide-vue-next'

defineProps({
  isActive: {
    type: Boolean,
    required: true,
  },
  job: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="group relative rounded-[24px] border border-gray-200 bg-white px-5 py-5 transition duration-300 hover:border-black/20 hover:shadow-[0_18px_44px_rgba(17,17,17,0.04)] sm:px-6 lg:min-h-[150px]">
    <span
      class="absolute -left-[45px] top-7 hidden h-4 w-4 rounded-full border-[3px] bg-white transition duration-300 lg:block"
      :class="isActive ? 'border-black shadow-[0_0_0_6px_rgba(17,17,17,0.05)]' : 'border-gray-300 shadow-[0_0_0_5px_rgba(17,17,17,0.03)]'"
      aria-hidden="true"
    />

    <div class="grid h-full gap-6 lg:grid-cols-[minmax(0,1fr)_230px] lg:items-start">
      <div class="max-w-[560px] space-y-3">
        
        <h3 class="font-display text-[24px] leading-[1.05] font-semibold tracking-[-0.045em] text-black sm:text-[28px]">
          {{ job.role }}
        </h3>
        <p class="text-[16px] font-medium leading-[1.45] text-black/86">
          {{ job.company }}
        </p>
        <p class="whitespace-pre-wrap text-[14px] leading-[1.45] text-black/86">
          {{ job.details }}
        </p>
        <div class="flex flex-wrap gap-2 pt-1">
          <span
            v-for="skill in job.skills"
            :key="skill"
            class="rounded-full bg-gray-100 px-3 py-1 text-[12px] font-semibold text-black/76"
          >
            {{ skill }}
          </span>
        </div>
      </div>

      <div class="flex h-full flex-col gap-8 lg:items-end lg:justify-between">
        <div class="flex items-center gap-2 opacity-70 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0 group-focus-within:opacity-100 group-focus-within:grayscale-0">
          <img
            :src="job.brandLogo"
            alt=""
            class="h-7 w-auto max-w-[126px] object-contain"
          >
        </div>
        <div class="flex flex-nowrap justify-end gap-2">
          <p class="inline-flex w-fit shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-gray-100 px-3.5 py-1.5 text-[12px] font-semibold text-black/76">
            <CalendarDays :size="14" :stroke-width="1" aria-hidden="true" />
            {{ job.period }}
          </p>
          <p class="inline-flex w-fit shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-gray-100 px-3.5 py-1.5 text-[12px] font-semibold text-black/76">
            <BriefcaseBusiness :size="14" :stroke-width="1" aria-hidden="true" />
            {{ job.type }}
          </p>
        </div>
      </div>
    </div>
  </article>
</template>
