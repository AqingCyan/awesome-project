<template>
  <div class="app-notification">
    <transition-group name="app-notification-message">
      <AppNotificationMessage
        v-for="message in messages"
        :key="message.id"
        :message="message"
      />
    </transition-group>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import AppNotificationMessage from './components/app-notification-message';

export default defineComponent({
  name: 'AppNotification',

  /**
   * 属性
   */
  props: {},

  /**
   * 数据
   */
  data() {
    return {};
  },

  /**
   * 计算属性
   */
  computed: {
    ...mapGetters({
      messages: 'notification/message',
    }),
  },

  /**
   * 组件
   */
  components: {
    AppNotificationMessage,
  },
});
</script>

<style scoped>
.app-notification {
  position: fixed;
  bottom: 64px;
  right: 64px;
}
</style>
