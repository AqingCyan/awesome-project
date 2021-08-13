<template>
  <h3>{{ name }}</h3>
  <div v-for="(post, index) in postList" :key="post.id">
    {{ index + 1 }} {{ post.content }} - <small>{{ post.author }}</small>
  </div>
  {{ processStatus }}
  <button v-on:click="resetName">重置</button>
  <button @click="setName">设置</button>
  <div class="menu">
    <div :class="{ active: false }"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Hello World',
      postList: [
        {
          id: 1,
          content: '故人西辞黄鹤楼，烟花三月下扬州',
          author: '李白',
        },
        {
          id: 2,
          content: '好雨知时节，当春乃发生',
          author: '杜甫',
        },
        {
          id: 3,
          content: '浔阳江头夜送客，枫叶荻花秋瑟瑟',
          author: '白居易',
        },
      ],
    };
  },

  computed: {
    processStatus() {
      return this.name === 'Hello World' ? '初始化...' : '成功设置了数据';
    },
  },

  watch: {
    name(newName, oldName) {
      console.log(`name 发生了变化：${oldName} -> ${newName}`);
    },
  },

  created() {
    console.log('App is created');

    this.setName();
  },

  methods: {
    setName() {
      setTimeout(() => {
        this.name = 'Hello Cyan';
      }, 3000);
    },
    resetName() {
      this.name = 'Hello World';
    },
  },
};
</script>

<style scoped>
button {
  margin: 4px;
}
</style>
