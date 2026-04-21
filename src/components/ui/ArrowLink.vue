<script setup>
const props = defineProps({
  href: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  rel: {
    type: String,
    default: undefined,
  },
  target: {
    type: String,
    default: undefined,
  },
  variant: {
    type: String,
    default: 'primary',
  },
})

const variantClasses = {
  primary: 'btn-primary',
  sidebar: 'inline-flex w-full items-center justify-center gap-3 rounded-[18px] bg-muted-button px-5 py-3.5 text-[14px] font-semibold text-white transition hover:bg-[#606060] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white',
}
</script>

<template>
  <a
    :href="href"
    :rel="rel"
    :target="target"
    :class="variantClasses[props.variant] ?? variantClasses.primary"
  >
    <span>{{ label }}</span>
    <span aria-hidden="true">-></span>
  </a>
</template>
