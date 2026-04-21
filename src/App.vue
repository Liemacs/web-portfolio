<script setup>
import { computed, ref, watch } from 'vue'

import ProfileSidebar from './components/layout/ProfileSidebar.vue'
import SiteFooter from './components/layout/SiteFooter.vue'
import SiteHeader from './components/layout/SiteHeader.vue'
import ContactSection from './components/sections/ContactSection.vue'
import ExperienceSection from './components/sections/ExperienceSection.vue'
import FaqSection from './components/sections/FaqSection.vue'
import HeroSection from './components/sections/HeroSection.vue'
import ProjectsSection from './components/sections/ProjectsSection.vue'
import ServicesSection from './components/sections/ServicesSection.vue'
import { availableLocales, defaultLocale, siteContentByLocale } from './data/siteContent'

const localeStorageKey = 'portfolio-locale'
const enabledLocaleCodes = availableLocales
  .filter((locale) => !locale.disabled)
  .map((locale) => locale.code)

function getInitialLocale() {
  const storedLocale = window.localStorage.getItem(localeStorageKey)

  if (enabledLocaleCodes.includes(storedLocale)) {
    return storedLocale
  }

  return defaultLocale
}

const selectedLocale = ref(getInitialLocale())
const siteContent = computed(() =>
  siteContentByLocale[selectedLocale.value] ?? siteContentByLocale[defaultLocale],
)

watch(selectedLocale, (locale) => {
  if (enabledLocaleCodes.includes(locale)) {
    window.localStorage.setItem(localeStorageKey, locale)
  }
})
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
