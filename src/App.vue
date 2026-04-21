<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import {
  BriefcaseBusiness,
  CalendarCheck,
  CalendarDays,
  ChevronDown,
  CircleDollarSign,
  Clock3,
  Facebook,
  Instagram,
  Linkedin,
} from 'lucide-vue-next'

import brandLogo from './assets/brand-1.svg'
import { siteContent } from './data/siteContent'

const openServices = ref([0])
const openFaq = ref(0)
const isLanguageMenuOpen = ref(false)
const selectedLanguage = ref('ro')
const activeProjectCategory = ref('All projects')
const experienceTimeline = ref(null)
const languageMenu = ref(null)
const timelineProgress = ref(0)
const currentYear = computed(() => new Date().getFullYear())
const languageOptions = [
  {
    code: 'ro',
    shortLabel: 'Ro',
    label: 'Romana',
  },
  {
    code: 'en',
    shortLabel: 'En',
    label: 'English',
  },
  {
    code: 'it',
    shortLabel: 'It',
    label: 'Italiana',
  },
]
const currentLanguage = computed(() =>
  languageOptions.find((language) => language.code === selectedLanguage.value),
)
const socialIcons = {
  Facebook,
  Freelancehunt: BriefcaseBusiness,
  Instagram,
  LinkedIn: Linkedin,
}
const filteredProjects = computed(() => {
  if (activeProjectCategory.value === 'All projects') {
    return siteContent.projects
  }

  return siteContent.projects.filter((project) =>
    project.categories.includes(activeProjectCategory.value),
  )
})
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
  const totalItems = siteContent.experience.length

  if (totalItems <= 1) {
    return timelineProgress.value > 0
  }

  return timelineProgress.value >= index / (totalItems - 1) - 0.08
}

function isServiceOpen(index) {
  return openServices.value.includes(index)
}

function toggleService(index) {
  openServices.value = isServiceOpen(index)
    ? openServices.value.filter((serviceIndex) => serviceIndex !== index)
    : [...openServices.value, index]
}

function setProjectCategory(category) {
  activeProjectCategory.value = category
}

function toggleFaq(index) {
  openFaq.value = openFaq.value === index ? -1 : index
}

function toggleLanguageMenu() {
  isLanguageMenuOpen.value = !isLanguageMenuOpen.value
}

function selectLanguage(languageCode) {
  selectedLanguage.value = languageCode
  isLanguageMenuOpen.value = false
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
  updateTimelineProgress()
  document.addEventListener('click', closeLanguageMenu)
  document.addEventListener('keydown', closeLanguageMenuOnEscape)
  window.addEventListener('scroll', requestTimelineProgressUpdate, { passive: true })
  window.addEventListener('resize', requestTimelineProgressUpdate)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', closeLanguageMenu)
  document.removeEventListener('keydown', closeLanguageMenuOnEscape)
  window.removeEventListener('scroll', requestTimelineProgressUpdate)
  window.removeEventListener('resize', requestTimelineProgressUpdate)

  if (timelineAnimationFrame) {
    window.cancelAnimationFrame(timelineAnimationFrame)
  }
})
</script>

<template>
  <div class="min-h-screen bg-surface text-ink">
    <div class="mx-auto max-w-page px-4 py-3 sm:px-5 lg:px-6">
      <div class="grid gap-8 xl:grid-cols-[398px_minmax(0,1fr)] xl:gap-[70px]">
        <aside class="xl:sticky xl:top-5 xl:h-fit">
          <section class="rounded-[28px] bg-charcoal p-3.5 text-white">
            <img
              :src="siteContent.profile.avatar"
              :alt="siteContent.profile.name"
              class="h-[342px] w-full rounded-[18px] object-cover object-top sm:h-[432px]"
            >

            <div class="space-y-6 px-3 pb-2 pt-5.5 sm:px-3.5">
              <div class="space-y-3">
                <p class="text-[14px] font-semibold tracking-[-0.025em] text-white/92">
                  {{ siteContent.profile.eyebrow }}
                </p>
                <h1 class="font-display text-[37px] leading-[0.98] font-semibold tracking-[-0.045em] sm:text-[43px]">
                  {{ siteContent.profile.name }}
                </h1>
                <p class="max-w-[235px] text-[15px] leading-[1.35] font-semibold text-white/78">
                  {{ siteContent.profile.role }}
                  <br>
                  {{ siteContent.profile.location }}
                </p>
              </div>

              <div class="space-y-2">
                <div class="flex items-center gap-2.5 text-[14px] font-semibold">
                  <span class="tracking-[0.2em] text-white">*****</span>
                  <span>{{ siteContent.profile.rating }}</span>
                </div>
                <p class="max-w-[270px] text-[13px] leading-6 text-white/68">
                  {{ siteContent.profile.trust }}
                </p>
              </div>

              <a
                :href="`mailto:${siteContent.profile.email}`"
                class="inline-flex w-full items-center justify-center gap-3 rounded-[18px] bg-muted-button px-5 py-3.5 text-[14px] font-semibold text-white transition hover:bg-[#606060] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <span>Contact with me</span>
                <span aria-hidden="true">-></span>
              </a>
            </div>
          </section>
        </aside>

        <main>
          <header class="flex items-start justify-between gap-6">
            <nav
              class="grid flex-1 gap-x-16 gap-y-1.5 text-[13px] font-semibold tracking-[-0.02em] sm:grid-cols-2 lg:max-w-[690px] lg:text-[15px]"
              aria-label="Primary navigation"
            >
              <a
                v-for="item in siteContent.navigation"
                :key="item"
                href="#services"
                class="flex items-center gap-3 transition hover:text-black/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
              >
                <span class="text-[22px] leading-none font-normal text-black/14" aria-hidden="true">+</span>
                <span>{{ item }}</span>
              </a>
            </nav>

            <div ref="languageMenu" class="relative shrink-0">
              <button
                type="button"
                class="grid h-[58px] w-[58px] place-items-center rounded-[18px] bg-black text-white transition hover:bg-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
                :aria-expanded="isLanguageMenuOpen"
                aria-haspopup="listbox"
                aria-label="Select language"
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
                  aria-label="Language options"
                >
                  <button
                    v-for="language in languageOptions"
                    :key="language.code"
                    type="button"
                    class="flex w-full items-center justify-between rounded-[13px] px-3 py-2.5 text-left text-[13px] font-semibold transition hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    :class="selectedLanguage === language.code ? 'bg-black text-white hover:bg-black' : 'text-black'"
                    role="option"
                    :aria-selected="selectedLanguage === language.code"
                    @click="selectLanguage(language.code)"
                  >
                    <span>{{ language.label }}</span>
                    <span class="text-[11px] uppercase opacity-60">{{ language.shortLabel }}</span>
                  </button>
                </div>
              </Transition>
            </div>
          </header>

          <section id="overview" class="pt-24 lg:pt-[150px]">
            <div class="max-w-[760px] space-y-5">
              <h2 class="font-display text-fluid-hero leading-[0.92] font-semibold tracking-[-0.055em] text-black">
                {{ siteContent.hero.title }}
              </h2>
              <p class="max-w-[700px] text-[15px] leading-[1.5] text-black/88 sm:text-[16px]">
                {{ siteContent.hero.description }}
              </p>
              <div class="flex flex-wrap gap-3 pt-3">
                <a
                  :href="`mailto:${siteContent.profile.email}`"
                  class="btn-primary"
                >
                  <span>Book a free call</span>
                  <span aria-hidden="true">-></span>
                </a>
              </div>
            </div>

            <dl class="mt-24 grid gap-7 sm:grid-cols-2 xl:mt-[150px] xl:grid-cols-4 xl:gap-6">
              <div
                v-for="metric in siteContent.metrics"
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

          <section id="work" class="section-space">
            <div class="space-y-5">
              <h2 class="section-title max-w-[560px]">
                Take a look at my works
              </h2>
              <p class="max-w-[760px] text-[15px] leading-[1.6] text-black/78 sm:text-[16px]">
                A summary of my experience across websites, product interfaces, dashboards, and production-ready web applications.
              </p>
            </div>

            <div class="mt-8 flex flex-wrap gap-3">
              <button
                v-for="category in siteContent.projectCategories"
                :key="category"
                type="button"
                :class="activeProjectCategory === category ? 'border-black bg-black text-white' : 'border-gray-200 bg-white text-black hover:border-black/20'"
                class="rounded-[14px] border px-4 py-2.5 text-[13px] font-medium tracking-[-0.015em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black sm:px-5"
                @click="setProjectCategory(category)"
              >
                {{ category }}
              </button>
            </div>

            <div class="mt-10 grid gap-x-6 gap-y-12 lg:mt-12 lg:grid-cols-2">
              <article
                v-for="project in filteredProjects"
                :key="project.title"
              >
                <a
                  :href="project.href"
                  target="_blank"
                  rel="noreferrer"
                  class="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
                >
                  <div class="overflow-hidden rounded-media bg-gray-100">
                    <img
                      :src="project.image"
                      :alt="`${project.title} project preview`"
                      class="h-[300px] w-full object-cover transition duration-700 group-hover:scale-[1.025] sm:h-[380px] lg:h-[430px]"
                    >
                  </div>
                  <div class="mt-4 flex items-start justify-between gap-5">
                    <div class="space-y-1">
                      <h3 class="text-[24px] font-semibold tracking-[-0.04em] text-black sm:text-[28px]">
                        {{ project.title }}
                      </h3>
                      <p class="flex flex-wrap items-center gap-2 text-[15px] text-black/78">
                        <template
                          v-for="(category, categoryIndex) in project.categories"
                          :key="category"
                        >
                          <span>{{ category }}</span>
                          <span
                            v-if="categoryIndex < project.categories.length - 1"
                            class="h-[3px] w-[3px] rounded-full bg-black"
                            aria-hidden="true"
                          />
                        </template>
                      </p>
                    </div>
                    <p class="pt-1 text-[20px] font-semibold tracking-[-0.04em] text-black sm:text-[24px]">
                      {{ project.year }}
                    </p>
                  </div>
                </a>
              </article>
            </div>
          </section>

          <section id="services" class="pt-22 lg:pt-28">
            <div class="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div class="space-y-2">
                <h2 class="section-title max-w-[560px]">
                  How can I help you
                </h2>
              </div>
              <a :href="`mailto:${siteContent.profile.email}`" class="btn-primary self-start lg:mt-5">
                <span>Book a free call</span>
                <span aria-hidden="true">-></span>
              </a>
            </div>

            <div class="mt-8 space-y-2.5">
              <button
                v-for="(service, index) in siteContent.services"
                :key="service.title"
                type="button"
                :aria-expanded="isServiceOpen(index)"
                :class="isServiceOpen(index) ? 'border-charcoal bg-charcoal text-white shadow-[0_18px_40px_rgba(17,17,17,0.05)]' : 'border-gray-200 bg-white text-black hover:bg-gray-100'"
                class="grid w-full gap-4 rounded-[22px] border px-5 py-4 text-left transition-[background-color,border-color,box-shadow,color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-6 lg:min-h-[82px] lg:grid-cols-[300px_minmax(0,1fr)] lg:items-start lg:justify-between lg:gap-20 lg:px-6 lg:py-5 xl:gap-28"
                @click="toggleService(index)"
              >
                <h3 class="font-display text-[22px] leading-[1.04] font-semibold tracking-[-0.045em] sm:text-[26px]">
                  {{ service.title }}
                </h3>
                <div class="space-y-3 lg:min-w-0">
                  <div class="flex flex-wrap gap-1.5 lg:justify-between xl:justify-start xl:gap-2">
                    <span
                      v-for="tag in service.tags"
                      :key="tag"
                      :class="isServiceOpen(index) ? 'bg-white/10 text-white' : 'bg-gray-100 text-black'"
                      class="rounded-full px-3 py-1.5 text-[12px] font-semibold tracking-[-0.02em] transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    >
                      + {{ tag }}
                    </span>
                  </div>
                  <Transition name="service-panel">
                    <div
                      v-if="isServiceOpen(index)"
                      class="overflow-hidden"
                    >
                      <p class="max-w-[690px] text-[14px] leading-[1.55] text-white/78">
                        {{ service.description }}
                      </p>
                    </div>
                  </Transition>
                </div>
              </button>
            </div>
          </section>

          <section id="experience" class="section-space">
            <div class="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div class="space-y-3">
                <h2 class="section-title max-w-[560px]">
                  Experience in my career
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
                <article
                  v-for="(job, index) in siteContent.experience"
                  :key="job.company + job.period"
                  class="relative rounded-[24px] border border-gray-200 bg-white px-5 py-5 transition duration-300 hover:border-black/20 hover:shadow-[0_18px_44px_rgba(17,17,17,0.04)] sm:px-6 lg:min-h-[150px]"
                >
                  <span
                    class="absolute -left-[45px] top-7 hidden h-4 w-4 rounded-full border-[3px] bg-white transition duration-300 lg:block"
                    :class="isTimelineMarkerActive(index) ? 'border-black shadow-[0_0_0_6px_rgba(17,17,17,0.05)]' : 'border-gray-300 shadow-[0_0_0_5px_rgba(17,17,17,0.03)]'"
                    aria-hidden="true"
                  />

                  <div class="grid h-full gap-6 lg:grid-cols-[minmax(0,1fr)_230px] lg:items-start">
                    <div class="max-w-[560px] space-y-3">
                      <h3 class="font-display text-[24px] leading-[1.05] font-semibold tracking-[-0.045em] text-black sm:text-[28px]">
                        {{ job.role }}
                      </h3>
                      <p class="text-[14px] leading-[1.45] text-black/86">
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
                      <div class="flex items-center gap-2 opacity-70 grayscale">
                        <img
                          :src="brandLogo"
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
              </div>
            </div>
          </section>

          <section id="faq" class="section-space">
            <div class="max-w-[620px]">
              <h2 class="section-title">
                Frequently asked questions
              </h2>
            </div>

            <div class="mx-auto mt-10 max-w-[1040px] space-y-2.5">
              <article
                v-for="(faq, index) in siteContent.faqs"
                :key="faq.question"
                class="overflow-hidden rounded-[20px] border border-gray-200 bg-white transition duration-300 hover:border-black/16"
              >
                <button
                  type="button"
                  class="flex w-full items-center justify-between gap-5 px-5 py-4 text-left text-[17px] font-semibold tracking-[-0.035em] text-black transition hover:text-black/65 sm:px-6 lg:px-7"
                  :aria-expanded="openFaq === index"
                  @click="toggleFaq(index)"
                >
                  <span>{{ faq.question }}</span>
                  <span class="text-[24px] leading-none font-normal" aria-hidden="true">
                    {{ openFaq === index ? '-' : '+' }}
                  </span>
                </button>
                <Transition name="faq-panel">
                  <div
                    v-if="openFaq === index"
                    class="overflow-hidden"
                  >
                    <p class="max-w-[820px] px-5 pb-5 text-[14px] leading-[1.55] text-black/66 sm:px-6 lg:px-7">
                      {{ faq.answer }}
                    </p>
                  </div>
                </Transition>
              </article>
            </div>
          </section>

          <section id="contact" class="mt-24 border-t border-gray-200 py-14 lg:mt-32 lg:py-16">
            <div class="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start lg:gap-20">
              <div>
                <h2 class="section-title max-w-[680px]">
                  Have any project idea in your mind
                </h2>
                <p class="mt-7 max-w-[640px] text-[15px] leading-[1.6] text-black/78 sm:text-[16px]">
                  Share your project details and I will help you get started with a practical technical plan.
                </p>
                <a :href="`mailto:${siteContent.profile.email}`" class="btn-primary mt-10">
                  <span>Book a free call</span>
                  <span aria-hidden="true">-></span>
                </a>

                <div class="mt-18 flex flex-wrap gap-x-7 gap-y-3 text-[13px] font-semibold tracking-[-0.02em] text-black/88 lg:mt-20">
                  <span class="inline-flex items-center gap-2.5">
                    <Clock3 :size="15" :stroke-width="1.5" />
                    Quick 24-hour response
                  </span>
                  <span class="inline-flex items-center gap-2.5">
                    <CircleDollarSign :size="15" :stroke-width="1.5" />

                    Transparent pricing
                  </span>
                  <span class="inline-flex items-center gap-2.5">
                    <CalendarCheck :size="15" :stroke-width="1.5" />
                    Easy Scheduling
                  </span>
                </div>
              </div>

              <div class="lg:pt-5">
                <h3 class="text-[12px] font-medium tracking-[-0.03em] text-black">Follow Me</h3>
                <div class="mt-4 flex flex-wrap gap-7">
                  <a
                    v-for="social in siteContent.socials"
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

            <footer class="mt-24 grid gap-4 border-t border-gray-200 pt-7 text-[14px] text-black/54  lg:mt-12">
              <p class="sm:text-center">
                Copyright {{ currentYear }} Ciubari Maxim, All rights reserved
              </p>
            </footer>
          </section>
        </main>
      </div>
    </div>
  </div>
</template>
