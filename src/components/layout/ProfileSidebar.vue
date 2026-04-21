<script setup>
import ArrowLink from "../ui/ArrowLink.vue";
import { Download } from "lucide-vue-next";

defineProps({
  profile: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <aside class="xl:sticky xl:top-5 xl:h-fit">
    <section class="rounded-[28px] bg-charcoal p-3.5 text-white">
      <img
        :src="profile.avatar"
        :alt="profile.name"
        class="h-[342px] w-full rounded-[18px] object-cover object-top sm:h-[432px]"
      />

      <div class="space-y-6 px-3 pb-2 pt-5.5 sm:px-3.5">
        <div class="space-y-3">
          <p
            class="text-[14px] font-semibold tracking-[-0.025em] text-white/92"
          >
            {{ profile.eyebrow }}
          </p>
          <h1
            class="font-display text-[37px] leading-[0.98] font-semibold tracking-[-0.045em] sm:text-[43px]"
          >
            {{ profile.name }}
          </h1>
          <!-- <p class="max-w-[235px] text-[15px] leading-[1.35] font-semibold text-white/78">
            {{ profile.role }}
            <br>
            {{ profile.location }}
          </p> -->
        </div>

        <div class="space-y-2">
          <div class="flex items-center gap-2.5 text-[14px] font-semibold">
            <span class="tracking-[0.2em] text-white">*****</span>
            <span>{{ profile.rating }}</span>
          </div>
          <p class="max-w-[270px] text-[13px] leading-6 text-white/68">
            {{ profile.trust }}
          </p>
        </div>
        <div class="flex items-center gap-2">
          <ArrowLink
            :href="`mailto:${profile.email}`"
            :label="profile.contactLabel"
            variant="sidebar"
          />
          <a
            :href="profile.cv"
            download
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download CV"
            title="Download CV"
            class="inline-flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[18px] bg-muted-button text-white transition hover:bg-[#606060] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <Download :stroke-width="1.5" />
          </a>
        </div>
      </div>
    </section>
  </aside>
</template>
