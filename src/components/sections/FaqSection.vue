<script setup>
import { ref } from 'vue'

import FaqAccordionItem from '../ui/FaqAccordionItem.vue'

defineProps({
  content: {
    type: Object,
    required: true,
  },
  faqs: {
    type: Array,
    required: true,
  },
})

const openFaq = ref(0)

function toggleFaq(index) {
  openFaq.value = openFaq.value === index ? -1 : index
}
</script>

<template>
  <section id="faq" class="section-space">
    <div class="max-w-[620px]">
      <h2 class="section-title">
        {{ content.title }}
      </h2>
    </div>

    <div class="mx-auto mt-10 max-w-[1040px] space-y-2.5">
      <FaqAccordionItem
        v-for="(faq, index) in faqs"
        :key="faq.question"
        :faq="faq"
        :is-open="openFaq === index"
        @toggle="toggleFaq(index)"
      />
    </div>
  </section>
</template>
