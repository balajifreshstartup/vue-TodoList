<template>
  <section class="vh-100" style="background-color: #e2d5de">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-xl-10">
          <div class="card" style="border-radius: 15px">
            <div class="card-body p-5">
              <AddTodo />
              <TodoList v-bind:todolists="todoLists" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import AddTodo from "./components/AddTodo.vue";
  import TodoList from "./components/TodoList.vue";

  export default {
    name: "App",
    components: {
      AddTodo,
      TodoList,
    },
    data() {
      return {
        
      }
    },
    computed: {
      todoLists() {
        return this.$store.state.todolists;
      },
    },
  };
</script>

<style></style>
