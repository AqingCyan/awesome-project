<template>
  <div>Hello World</div>
  <AppLogo size="64" />
  <AppIcon size="30" name="comment" />
</template>

<script>
import AppLogo from '@/app/components/app-logo';
import AppIcon from '@/app/components/app-icon';
export default {
  name: 'appHome',
  components: {
    AppLogo,
    AppIcon,
  },
};
</script>

<style scoped></style>
