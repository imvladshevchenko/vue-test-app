<template>
  <v-container fluid>
    <v-textarea
      class="textarea"
      clear-icon="mdi-close-circle"
      label="Text"
      v-model="value"
      placeholder="Enter your text"
    ></v-textarea>
    <v-btn @click="newPost()">
      Post
    </v-btn>
  </v-container>
</template>

<script>

export default {
  name: "CreatePost",
  data() {
    return {
      value: '',
    };
  },
  methods: {
    newPost() {
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'test',
          body: this.value,
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
          .then((response) => response.json())
          .then((json) => console.log(json));
    },
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.theme--light.v-btn.v-btn--has-bg {
  background-color: yellow;
}
.textarea {
  max-width: 50%;
  margin: auto;
}
</style>