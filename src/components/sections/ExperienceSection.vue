<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

import ExperienceTimelineItem from '../ui/ExperienceTimelineItem.vue'

const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
  experience: {
    type: Array,
    required: true,
  },
})

const experienceTimeline = ref(null)
const timelineProgress = ref(0)
let timelineAnimationFrame = 0

function clampProgress(value) {
  return Math.min(Math.max(value, 0), 1)
}

function updateTimelineProgress() {
  if (!experienceTimeline.value) {
    return
  }

  const rect = experienceTimeline.value.getBoundingClientRect()
  const viewportAnchor = window.innerHeight * 0.58
  const scrollDistance = Math.max(rect.height - 120, 1)
  timelineProgress.value = clampProgress((viewportAnchor - rect.top) / scrollDistance)
}

function requestTimelineProgressUpdate() {
  if (timelineAnimationFrame) {
    return
  }

  timelineAnimationFrame = window.requestAnimationFrame(() => {
    updateTimelineProgress()
    timelineAnimationFrame = 0
  })
}

function isTimelineMarkerActive(index) {
  const totalItems = props.experience.length

  if (totalItems <= 1) {
    return timelineProgress.value > 0
  }

  return timelineProgress.value >= index / (totalItems - 1) - 0.08
}

onMounted(() => {
  updateTimelineProgress()
  window.addEventListener('scroll', requestTimelineProgressUpdate, { passive: true })
  window.addEventListener('resize', requestTimelineProgressUpdate)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', requestTimelineProgressUpdate)
  window.removeEventListener('resize', requestTimelineProgressUpdate)

  if (timelineAnimationFrame) {
    window.cancelAnimationFrame(timelineAnimationFrame)
  }
})
</script>

<template>
  <section id="experience" class="section-space">
    <div class="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
      <div class="space-y-3">
        <h2 class="section-title max-w-[560px]">
          {{ content.title }}
        </h2>
      </div>
    </div>

    <div
      ref="experienceTimeline"
      class="relative mt-10 lg:grid lg:grid-cols-[34px_minmax(0,1fr)] lg:gap-5"
    >
      <div class="pointer-events-none absolute bottom-8 left-[16px] top-8 hidden w-px overflow-hidden bg-black/12 lg:block" aria-hidden="true">
        <div
          class="h-full w-px origin-top bg-black transition-transform duration-200 ease-out"
          :style="{ transform: `scaleY(${timelineProgress})` }"
        />
      </div>

      <div class="hidden lg:block" aria-hidden="true" />

      <div class="space-y-3">
        <ExperienceTimelineItem
          v-for="(job, index) in experience"
          :key="job.company + job.period"
          :is-active="isTimelineMarkerActive(index)"
          :job="job"
        />
      </div>
    </div>
  </section>
</template>
