<script setup>
import { computed, ref, watch } from "vue";
import { ChevronLeft, ChevronRight } from "lucide-vue-next";

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

const activeImageIndex = ref(0);
const baseStatusClasses =
  "absolute z-20 mx-4 my-4 inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur-md";
const projectImages = computed(() =>
  props.project.images?.length ? props.project.images : [props.project.image],
);
const hasMultipleImages = computed(() => projectImages.value.length > 1);
const imageTrackStyle = computed(() => ({
  transform: `translateX(-${activeImageIndex.value * 100}%)`,
}));

function isInDevelopment(status) {
  return status?.trim().toLowerCase() === "în dezvoltare";
}

function getStatusClasses(status) {
  if (isInDevelopment(status)) {
    return `${baseStatusClasses} border-amber-300/35 bg-amber-500/20 text-amber-50`;
  }

  return `${baseStatusClasses} border-white/25 bg-black/55 text-white`;
}

function showPreviousImage() {
  activeImageIndex.value =
    (activeImageIndex.value - 1 + projectImages.value.length) %
    projectImages.value.length;
}

function showNextImage() {
  activeImageIndex.value = (activeImageIndex.value + 1) % projectImages.value.length;
}

watch(
  () => props.project.title,
  () => {
    activeImageIndex.value = 0;
  },
);
</script>

<template>
  <article class="group relative">
    <div class="relative overflow-hidden rounded-media bg-gray-100">
      <a
        v-if="project.partner"
        :href="project.partnerLink"
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
        class="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
      >
        <span
          v-if="project.status?.trim()"
          :class="getStatusClasses(project.status)"
        >
          {{ project.status.trim() }}
        </span>
        <div
          class="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
          :style="imageTrackStyle"
        >
          <img
            v-for="(image, imageIndex) in projectImages"
            :key="image"
            :src="image"
            :alt="`${project.title} ${imageAltLabel} ${imageIndex + 1}`"
            class="h-[300px] w-full shrink-0 object-cover sm:h-[380px] lg:h-[430px]"
          />
        </div>
      </a>

      <div
        v-if="hasMultipleImages"
        class="absolute bottom-4 right-4 z-20 flex gap-2 opacity-0 translate-y-2 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100"
      >
        <button
          type="button"
          class="grid h-10 w-10 place-items-center rounded-xl bg-black/72 text-white backdrop-blur-md transition hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          :aria-label="`Previous image for ${project.title}`"
          @click="showPreviousImage"
        >
          <ChevronLeft :size="19" :stroke-width="2.2" aria-hidden="true" />
        </button>
        <button
          type="button"
          class="grid h-10 w-10 place-items-center rounded-xl bg-black/72 text-white backdrop-blur-md transition hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          :aria-label="`Next image for ${project.title}`"
          @click="showNextImage"
        >
          <ChevronRight :size="19" :stroke-width="2.2" aria-hidden="true" />
        </button>
      </div>
    </div>

    <a
      :href="project.href"
      target="_blank"
      rel="noreferrer"
      class="mt-4 flex items-start justify-between gap-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
    >
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
    </a>
  </article>
</template>
