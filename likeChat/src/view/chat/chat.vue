<template>
  <div id="chat">
    chat
  </div>
</template>

<script>
export default {
  name: "chat",
  mounted() {
      this.getUserInfo(1)
  },
  methods: {
      getUserInfo(id) {
          this.$ajax(this.$api.GetUserInfo,{
              params: {
                  id: id
              }
          })
      }
  }
};
</script>

<style lang="scss">

</style>
