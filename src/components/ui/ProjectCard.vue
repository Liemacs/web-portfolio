<script setup>
const props = defineProps({
  categoryLabels: {
    type: Object,
    required: true,
  },
  imageAltLabel: {
    type: String,
    required: true,
  },
  project: {
    type: Object,
    required: true,
  },
});

const baseStatusClasses =
  "absolute z-20 mx-4 my-4 inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur-md";

function isInDevelopment(status) {
  return status?.trim().toLowerCase() === "în dezvoltare";
}

function getStatusClasses(status) {
  if (isInDevelopment(status)) {
    return `${baseStatusClasses} border-amber-300/35 bg-amber-500/20 text-amber-50`;
  }

  return `${baseStatusClasses} border-white/25 bg-black/55 text-white`;
}
</script>

<template>
  <article class="relative">
    <a
      :href="project.partnerLink"
      v-if="project.partner"
      target="_blank"
      rel="noreferrer"
      class="absolute right-4 top-4 z-20 inline-flex max-w-[calc(100%-2rem)] items-center gap-1.5 rounded-full bg-black/70 px-3 py-1.5 text-[11px] font-semibold tracking-[0.01em] text-white backdrop-blur-md transition hover:bg-black/82 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      <span class="text-white/70">În parteneriat cu</span>
      <span class="truncate">{{ project.partner }}</span>
    </a>
    <a
      :href="project.href"
      target="_blank"
      rel="noreferrer"
      class="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
    >
      <div class="overflow-hidden rounded-media bg-gray-100 relative;">
        <span
          v-if="project.status?.trim()"
          :class="getStatusClasses(project.status)"
        >
          {{ project.status.trim() }}
        </span>
        <img
          :src="project.image"
          :alt="`${project.title} ${imageAltLabel}`"
          class="h-[300px] w-full object-cover transition duration-700 group-hover:scale-[1.025] sm:h-[380px] lg:h-[430px]"
        />
      </div>
      <div class="mt-4 flex items-start justify-between gap-5">
        <div class="space-y-1">
          <h3
            class="text-[24px] font-semibold tracking-[-0.04em] text-black sm:text-[28px]"
          >
            {{ project.title }}
          </h3>
          <p
            class="flex flex-wrap items-center gap-2 text-[15px] text-black/78"
          >
            <template
              v-for="(category, categoryIndex) in project.categories"
              :key="category"
            >
              <span>{{ categoryLabels[category] ?? category }}</span>
              <span
                v-if="categoryIndex < project.categories.length - 1"
                class="h-[3px] w-[3px] rounded-full bg-black"
                aria-hidden="true"
              />
            </template>
          </p>
        </div>
        <p
          class="pt-1 text-[20px] font-semibold tracking-[-0.04em] text-black sm:text-[24px]"
        >
          {{ project.year }}
        </p>
      </div>
    </a>
  </article>
</template>
