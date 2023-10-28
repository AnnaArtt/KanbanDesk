<template>
  <div class="kanban_desk">
    <template v-for="column in getColumnsArray" :key="column._id">
      <TaskColumn :column="column" />
    </template>
  </div>
</template>

<script>
import TaskColumn from "@/components/TaskColums/Organisms/TaskColumn.vue";
import TaskCardFalse from "@/components/TaskColums/Molecules/TaskCardFalse.vue";
import { mapGetters } from "vuex";
export default {
  name: "kanban-desk",
  components: {
    TaskColumn,
    TaskCardFalse,
  },
  computed: {
    ...mapGetters(["getColumnsArray"]),
  },
};
</script>

<style scoped lang="scss">
.kanban_desk {
  display: flex;
  justify-content: space-around;
  width: 100%;
}
</style>
