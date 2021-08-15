<template>
  <h3>{{ item.title }}</h3>
  - <small>{{ item.user.name }}</small>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    item: Object,
  },
});
</script>

<style scoped></style>
