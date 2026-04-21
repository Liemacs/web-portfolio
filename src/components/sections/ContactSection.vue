<script setup>
import {
  CalendarCheck,
  CircleDollarSign,
  Clock3,
  Facebook,
  Instagram,
  Linkedin,
} from 'lucide-vue-next'

import ArrowLink from '../ui/ArrowLink.vue'

defineProps({
  content: {
    type: Object,
    required: true,
  },
  profile: {
    type: Object,
    required: true,
  },
  socials: {
    type: Array,
    required: true,
  },
})

const socialIcons = {
  Facebook,
  Instagram,
  LinkedIn: Linkedin,
}

const highlightIcons = {
  clock: Clock3,
  pricing: CircleDollarSign,
  schedule: CalendarCheck,
}
</script>

<template>
  <section id="contact" class="mt-24 border-t border-gray-200 py-14 lg:mt-32 lg:py-16">
    <div class="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start lg:gap-20">
      <div>
        <h2 class="section-title max-w-[680px]">
          {{ content.title }}
        </h2>
        <p class="mt-7 max-w-[640px] text-[15px] leading-[1.6] text-black/78 sm:text-[16px]">
          {{ content.description }}
        </p>
        <ArrowLink
          :href="`mailto:${profile.email}`"
          class="mt-10"
          :label="content.ctaLabel"
        />

        <div class="mt-18 flex flex-wrap gap-x-7 gap-y-3 text-[13px] font-semibold tracking-[-0.02em] text-black/88 lg:mt-20">
          <span
            v-for="highlight in content.highlights"
            :key="highlight.label"
            class="inline-flex items-center gap-2.5"
          >
            <component
              :is="highlightIcons[highlight.icon]"
              :size="15"
              :stroke-width="1.5"
              aria-hidden="true"
            />
            {{ highlight.label }}
          </span>
        </div>
      </div>

      <div class="lg:pt-5">
        <h3 class="text-[12px] font-medium tracking-[-0.03em] text-black">{{ content.socialTitle }}</h3>
        <div class="mt-4 flex flex-wrap gap-7">
          <a
            v-for="social in socials"
            :key="social.label"
            :href="social.href"
            target="_blank"
            rel="noreferrer"
            class="grid h-8 min-w-8 place-items-center transition hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
            :aria-label="social.label"
          >
            <component
              :is="socialIcons[social.label]"
              :size="25"
              :stroke-width="1.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </div>

    <slot />
  </section>
</template>
