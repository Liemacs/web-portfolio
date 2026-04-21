<script setup>
import { computed, ref } from 'vue'

import { siteContent } from './data/siteContent'

const openServices = ref([0])
const openFaq = ref(0)
const activeProjectCategory = ref('All projects')
const currentYear = computed(() => new Date().getFullYear())
const filteredProjects = computed(() => {
  if (activeProjectCategory.value === 'All projects') {
    return siteContent.projects
  }

  return siteContent.projects.filter((project) =>
    project.categories.includes(activeProjectCategory.value),
  )
})

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

            <button
              type="button"
              class="grid h-[58px] w-[58px] shrink-0 place-items-center rounded-[18px] bg-black text-white transition hover:bg-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
              aria-label="Open menu"
            >
              <span class="flex flex-col gap-1.5" aria-hidden="true">
                <span class="block h-[2px] w-6 rounded-full bg-white" />
                <span class="block h-[2px] w-6 rounded-full bg-white" />
                <span class="block h-[2px] w-6 rounded-full bg-white" />
              </span>
            </button>
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
              <p class="eyebrow">Recent Projects</p>
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
                <p class="eyebrow">Services</p>
                <h2 class="font-display text-[clamp(2.15rem,4vw,3.55rem)] leading-[0.98] font-semibold tracking-[-0.055em] text-black">
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
                class="grid w-full gap-4 rounded-[22px] border px-5 py-4 text-left transition-[background-color,border-color,box-shadow,color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-6 lg:min-h-[82px] lg:grid-cols-[280px_minmax(0,1fr)] lg:items-center lg:justify-between lg:gap-12 lg:px-6 lg:py-4"
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

          <section id="experience" class="section-space border-t border-gray-200">
            <div class="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div class="space-y-3">
                <p class="eyebrow">Experience</p>
                <h2 class="section-title max-w-[560px]">
                  Experience in my career
                </h2>
              </div>
              <a :href="siteContent.profile.cv" target="_blank" rel="noreferrer" class="btn-secondary self-start">
                <span>Download CV</span>
                <span aria-hidden="true">-></span>
              </a>
            </div>

            <div class="relative mt-10 space-y-3 pl-0 lg:pl-10">
              <div class="absolute left-3 top-0 hidden h-full w-px bg-black/16 lg:block" />
              <article
                v-for="job in siteContent.experience"
                :key="job.company + job.period"
                class="relative rounded-card border border-gray-200 bg-white px-6 py-6 sm:px-7 lg:ml-6"
              >
                <span class="absolute -left-[43px] top-8 hidden h-4 w-4 rounded-full border-[3px] border-black bg-white lg:block" />
                <div class="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                  <div class="max-w-[720px] space-y-3">
                    <p class="text-[12px] font-semibold uppercase tracking-[0.2em] text-black/40">
                      {{ job.company }}
                    </p>
                    <h3 class="font-display text-[26px] leading-none font-semibold tracking-[-0.04em] text-black sm:text-[32px]">
                      {{ job.role }}
                    </h3>
                    <p class="text-[15px] font-semibold text-black/70">
                      {{ job.focus }}
                    </p>
                    <p class="text-[15px] leading-[1.6] text-black/78">
                      {{ job.details }}
                    </p>
                  </div>
                  <p class="rounded-full bg-gray-100 px-4 py-2.5 text-[14px] font-semibold text-black/70">
                    {{ job.period }}
                  </p>
                </div>
              </article>
            </div>
          </section>

          <section id="faq" class="section-space">
            <div class="space-y-3">
              <p class="eyebrow">FAQ</p>
              <h2 class="section-title max-w-[620px]">
                Frequently asked questions
              </h2>
            </div>

            <div class="mt-8 space-y-3">
              <article
                v-for="(faq, index) in siteContent.faqs"
                :key="faq.question"
                class="rounded-card border border-gray-200 bg-white"
              >
                <button
                  type="button"
                  class="flex w-full items-center justify-between gap-5 px-6 py-5 text-left text-[18px] font-semibold tracking-[-0.035em] text-black transition hover:text-black/65 sm:px-7"
                  :aria-expanded="openFaq === index"
                  @click="toggleFaq(index)"
                >
                  <span>{{ faq.question }}</span>
                  <span class="text-[28px] leading-none font-normal" aria-hidden="true">
                    {{ openFaq === index ? '-' : '+' }}
                  </span>
                </button>
                <p
                  v-if="openFaq === index"
                  class="max-w-[760px] px-6 pb-6 text-[15px] leading-[1.6] text-black/72 sm:px-7"
                >
                  {{ faq.answer }}
                </p>
              </article>
            </div>
          </section>

          <section id="contact" class="border-t border-gray-200 py-14 lg:py-16">
            <div class="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
              <div class="space-y-6">
                <h2 class="section-title max-w-[650px]">
                  Have any project idea in your mind
                </h2>
                <p class="max-w-[620px] text-[15px] leading-[1.6] text-black/78 sm:text-[16px]">
                  Share your project details and I will help you get started with a practical technical plan.
                </p>
                <a :href="`mailto:${siteContent.profile.email}`" class="btn-primary">
                  <span>Book a free call</span>
                  <span aria-hidden="true">-></span>
                </a>
              </div>

              <div class="space-y-8">
                <div class="space-y-4">
                  <h3 class="text-[16px] font-semibold tracking-[-0.03em]">Follow Me</h3>
                  <div class="flex flex-wrap gap-3">
                    <a
                      v-for="social in siteContent.socials"
                      :key="social.label"
                      :href="social.href"
                      target="_blank"
                      rel="noreferrer"
                      class="rounded-full border border-gray-200 px-4 py-2 text-[13px] font-semibold text-black/58 transition hover:border-black hover:text-black"
                    >
                      {{ social.label }}
                    </a>
                  </div>
                </div>
                <div class="rounded-card border border-gray-200 bg-white p-5">
                  <h3 class="text-[16px] font-semibold tracking-[-0.03em]">Contact</h3>
                  <div class="mt-4 space-y-2 text-[15px] leading-6 text-black/72">
                    <a :href="`mailto:${siteContent.profile.email}`" class="block hover:text-black">
                      {{ siteContent.profile.email }}
                    </a>
                    <a :href="`tel:${siteContent.profile.phone.replaceAll(' ', '')}`" class="block hover:text-black">
                      {{ siteContent.profile.phone }}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <footer class="mt-16 flex flex-col gap-4 border-t border-gray-200 pt-6 text-[14px] text-black/48 sm:flex-row sm:items-center sm:justify-between">
              <p>Copyright {{ currentYear }} Ciubari Maxim. All rights reserved.</p>
              <a href="#overview" class="font-semibold text-black transition hover:text-black/60">
                Back to top
              </a>
            </footer>
          </section>
        </main>
      </div>
    </div>
  </div>
</template>
