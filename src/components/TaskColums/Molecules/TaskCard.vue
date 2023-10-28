<template>
  <div class="card">
    <p class="title">
      {{ task.titleTask }}
    </p>
    <div class="wrapper-button">
      <EditButton />
      <DescriptionButton />
    </div>
  </div>
</template>

<script>
import EditButton from "@/components/TaskColums/Atoms/EditButton.vue";
import DescriptionButton from "../Atoms/DescriptionButton.vue";
export default {
  name: "task-card",
  components: {
    EditButton,
    DescriptionButton,
  },
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  // width: 95%;

  border-radius: 15px;
  background-color: #ffffff;

  min-height: 40px;

  padding: 10px;
  // margin-bottom: 10px;

  .title {
    position: relative;
    margin-bottom: 10px;

    font-size: 12px;
    text-align: left;

    pointer-events: none;
  }

  .wrapper-button {
    display: flex;
    justify-content: space-between;

    width: 100%;

    pointer-events: none;
  }
}
</style>
