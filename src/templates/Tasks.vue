<template>
  <Layout>
    <div class="container" style="grid-column: 2 / span 1;">
      <div class="taskPage">
        <div class="taskPage__img" 
            :style="{ 'background-image': 'url(' + $page.task.image + ')' }"></div>
        <div class="container container--task">
            <g-link to="/todos" class="back"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-left" class="svg-inline--fa fa-arrow-left fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path></svg>Back</g-link>
            <h1 class="taskPage__title">{{$page.task.title}}</h1>
            <p>{{$page.task.author}}</p>
            <p>{{$page.task.date}}</p>
            <div v-html="$page.task.content"></div>
        </div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query ($path: String!) {
  task: tasks (path: $path) {
    title
    content
    author
    image
  }
}
</page-query>
<script>
export default {
  components: {},
  metaInfo() {
    return {
      title: this.$page.task.title
    };
  }
};
</script>
<style>
.container--task {
  margin-top: -140px;
  background-color: #fff;
  border-radius: 8px;
  padding: 30px 60px;
  margin-bottom: 100px;
}
@media screen and (max-width: 992px) {
  .container--task {
    padding: 15px 20px;
  }
}
.taskPage__img {
  width: 100%;
  height: 400px;
  background-size: cover;
  background-position: center;
}
.back {
  display: flex;
  align-items: center;
  color: #333;
  text-decoration: none;
}
.svg-inline--fa{
  width: 20px;
  margin-right: 15px;
  color: #333;
}
</style>