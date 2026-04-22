<script setup>
import { computed } from 'vue'

import ProfileSidebar from '../components/layout/ProfileSidebar.vue'
import SiteFooter from '../components/layout/SiteFooter.vue'
import SiteHeader from '../components/layout/SiteHeader.vue'
import ContactSection from '../components/sections/ContactSection.vue'
import ExperienceSection from '../components/sections/ExperienceSection.vue'
import FaqSection from '../components/sections/FaqSection.vue'
import HeroSection from '../components/sections/HeroSection.vue'
import ProjectsSection from '../components/sections/ProjectsSection.vue'
import ServicesSection from '../components/sections/ServicesSection.vue'
import { availableLocales, defaultLocale, siteContentByLocale } from '../data/siteContent'

const localeCookie = useCookie('portfolio-locale', {
  default: () => defaultLocale,
  maxAge: 60 * 60 * 24 * 365,
  sameSite: 'lax',
})
const enabledLocaleCodes = availableLocales
  .filter((locale) => !locale.disabled)
  .map((locale) => locale.code)

if (!enabledLocaleCodes.includes(localeCookie.value)) {
  localeCookie.value = defaultLocale
}

const selectedLocale = computed({
  get: () => localeCookie.value,
  set: (locale) => {
    localeCookie.value = enabledLocaleCodes.includes(locale) ? locale : defaultLocale
  },
})
const siteContent = computed(() =>
  siteContentByLocale[selectedLocale.value] ?? siteContentByLocale[defaultLocale],
)
const cleanRole = computed(() => siteContent.value.profile.role.replace(/\.$/, ''))

useSeoMeta({
  title: () => `${siteContent.value.profile.name} | ${cleanRole.value}`,
  description: () => siteContent.value.hero.description,
  ogTitle: () => `${siteContent.value.profile.name} | ${cleanRole.value}`,
  ogDescription: () => siteContent.value.hero.description,
  ogImage: () => siteContent.value.profile.avatar,
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: () => `${siteContent.value.profile.name} | ${cleanRole.value}`,
  twitterDescription: () => siteContent.value.hero.description,
  twitterImage: () => siteContent.value.profile.avatar,
})

useHead(() => ({
  htmlAttrs: {
    lang: selectedLocale.value,
  },
  link: [
    {
      rel: 'canonical',
      href: 'https://maximciubari.netlify.app/',
    },
  ],
}))
</script>

<template>
  <div class="min-h-screen bg-surface text-ink">
    <div class="mx-auto max-w-page px-4 py-3 sm:px-5 lg:px-6">
      <div class="grid gap-8 xl:grid-cols-[398px_minmax(0,1fr)] xl:gap-[70px]">
        <ProfileSidebar :profile="siteContent.profile" />

        <main>
          <SiteHeader
            v-model:locale="selectedLocale"
            :language-labels="siteContent.header"
            :language-options="availableLocales"
            :navigation="siteContent.navigation"
          />
          <HeroSection
            :email="siteContent.profile.email"
            :hero="siteContent.hero"
            :metrics="siteContent.metrics"
          />
          <ProjectsSection
            :categories="siteContent.projectCategories"
            :content="siteContent.projectsSection"
            :projects="siteContent.projects"
          />
          <ServicesSection
            :content="siteContent.servicesSection"
            :email="siteContent.profile.email"
            :services="siteContent.services"
          />
          <ExperienceSection
            :content="siteContent.experienceSection"
            :experience="siteContent.experience"
          />
          <FaqSection
            :content="siteContent.faqSection"
            :faqs="siteContent.faqs"
          />
          <ContactSection
            :content="siteContent.contactSection"
            :profile="siteContent.profile"
            :socials="siteContent.socials"
          >
            <SiteFooter
              :owner-name="siteContent.profile.name"
              :rights-label="siteContent.footer.rights"
            />
          </ContactSection>
        </main>
      </div>
    </div>
  </div>
</template>
