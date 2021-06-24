<template>
  <div class="home">
    <Post v-for="posts in postList" :key="posts.id" :posts="posts" class="post"/>
  </div>
</template>

<script>
import Post from "@/components/Post";

export default {
  name: "Home",
  components: {
    Post,
  },
  data() {
    return {
      postList: [],
    }
  },
  mounted() {
    this.getPosts()
  },
  methods: {
   async getPosts() {
       await fetch('https://jsonplaceholder.typicode.com/posts')
           .then(response => response.json())
           .then(response => { this.postList = response})
    }
  }
};
</script>


<style scoped lang="scss">
.home {
  display: flex;
  flex-wrap: wrap;
  justify-content:  center;
}
.post {
  margin-right: 15px;
  margin-bottom: 15px;
}
</style>