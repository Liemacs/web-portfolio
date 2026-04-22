<script setup>
import { computed, ref, watch } from 'vue'

import ProjectCard from '../ui/ProjectCard.vue'

const props = defineProps({
  categories: {
    type: Array,
    required: true,
  },
  content: {
    type: Object,
    required: true,
  },
  projects: {
    type: Array,
    required: true,
  },
})

const activeProjectCategory = ref(props.categories[0]?.id ?? 'all')
const categoryLabels = computed(() =>
  Object.fromEntries(props.categories.map((category) => [category.id, category.label])),
)
const orderedProjects = computed(() =>
  [...props.projects].sort((firstProject, secondProject) => {
    const firstOrder = Number.isFinite(firstProject.order) ? firstProject.order : Number.MIN_SAFE_INTEGER
    const secondOrder = Number.isFinite(secondProject.order) ? secondProject.order : Number.MIN_SAFE_INTEGER

    return secondOrder - firstOrder
  }),
)
const filteredProjects = computed(() => {
  if (activeProjectCategory.value === 'all') {
    return orderedProjects.value
  }

  return orderedProjects.value.filter((project) =>
    project.categories.includes(activeProjectCategory.value),
  )
})

watch(
  () => props.categories,
  (categories) => {
    if (!categories.some((category) => category.id === activeProjectCategory.value)) {
      activeProjectCategory.value = categories[0]?.id ?? 'all'
    }
  },
)

function setProjectCategory(category) {
  if (activeProjectCategory.value === category.id) {
    return
  }

  activeProjectCategory.value = category.id
}

</script>

<template>
  <section id="work" class="section-space">
    <div class="space-y-5">
      <h2 class="section-title max-w-[560px]">
        {{ content.title }}
      </h2>
      <p class="max-w-[760px] text-[15px] leading-[1.6] text-black/78 sm:text-[16px]">
        {{ content.description }}
      </p>
    </div>

    <div class="mt-8 flex flex-wrap gap-3">
      <button
        v-for="category in categories"
        :key="category.id"
        type="button"
        :class="activeProjectCategory === category.id ? 'border-black bg-black text-white' : 'border-gray-200 bg-white text-black hover:border-black/20'"
        class="rounded-[14px] border px-4 py-2.5 text-[13px] font-medium tracking-[-0.015em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black sm:px-5"
        @click="setProjectCategory(category)"
      >
        {{ category.label }}
      </button>
    </div>

    <TransitionGroup
      name="project-card"
      tag="div"
      class="relative mt-10 grid gap-x-6 gap-y-12 lg:mt-12 lg:grid-cols-2"
    >
      <ProjectCard
        v-for="project in filteredProjects"
        :key="project.id"
        :category-labels="categoryLabels"
        :image-alt-label="content.imageAltLabel"
        :project="project"
      />
    </TransitionGroup>
  </section>
</template>
