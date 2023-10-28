<template>
  <div class="column">
    <div class="column_wrapper">
      <span class="top">
        <h4>{{ column.title }}</h4>
      </span>
      <div
        class="drop_zone"
        @drop="onDrop($event, column._id)"
        @dragover.prevent
      >
        <template v-for="task in getTasksArray" :key="task._id">
          <template v-if="task.idColumn == column._id">
            <TaskCard
              :task="task"
              class="draggable"
              draggable="true"
              @dragstart="startDrag($event, task)"
              @dragover="overDrag($event, task)"
              @dragleave="leaveDrag($event, task)"
              @dragend="endDrag($event, task)"
            />
            <div
              class="false_draggable"
              @dragover="overDrag($event, task)"
              @dragleave="leaveDrag($event, task)"
            ></div>
          </template>
        </template>
      </div>
      <span class="bottom">
        <TaskButton />
      </span>
    </div>
  </div>
</template>

<script>
import TaskCard from "@/components/TaskColums/Molecules/TaskCard.vue";
import TaskCardFalse from "@/components/TaskColums/Molecules/TaskCardFalse.vue";
import TaskButton from "../Atoms/TaskButton.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "task-column",
  components: {
    TaskCard,
    TaskButton,
    TaskCardFalse,
  },
  props: {
    column: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      EndDragElementId: null,
      sizeFalseBlock: 0,
    };
  },
  computed: {
    ...mapGetters(["getTasksArray"]),
  },
  methods: {
    ...mapMutations(["changeIdColumn", "deleteTask", "innerTask"]),
    startDrag(event, task) {
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("_id", task._id);
      this.sizeFalseBlock = event.clientHeight + 10;

      console.log(this.sizeFalseBlock);

      event.target.classList.add("draggableEl");
    },
    onDrop(event, idColumn) {
      let idElementInnerAfter = this.checkClass(event);
      let dragElementId = event.dataTransfer.getData("_id");

      this.changeIdColumn({ _id: dragElementId, idColumn: idColumn });

      const dropElement = this.getTasksArray.find(
        (task) => task._id == dragElementId
      );
      this.deleteTask({ _id: dragElementId });

      this.innerTask({ task: dropElement, index: idElementInnerAfter });
      this.EndDragElementId = null;
    },
    overDrag(event, task) {
      let element = event.target.closest(".draggable");
      this.EndDragElementId = task._id;
      if (element == null) {
        // if()
        element = event.target;
        element.classList.add("false_draggable_over");
        element.style.height = `${this.sizeFalseBlock}px`;
        return;
      }

      let eventY = event.clientY;
      let elementRect = element.getBoundingClientRect();

      let elementStartY = elementRect.y;
      let elementEndY = elementStartY + elementRect.height;

      if (Math.abs(eventY - elementStartY) > Math.abs(eventY - elementEndY)) {
        element.classList.remove("shadow_top");
        element.classList.add("shadow_bottom");
      } else {
        element.classList.remove("shadow_bottom");
        element.classList.add("shadow_top");
      }
    },
    leaveDrag(event, task) {
      let element = event.target.closest(".draggable");
      console.log(event.target);
      if (element == null) {
        element = event.target;
        element.classList.remove("false_draggable_over");
        element.style.height = `10px`;
        return;
      }
      element.classList.remove("shadow_top");
      element.classList.remove("shadow_bottom");
      this.EndDragElementId = null;
    },
    endDrag(event, task) {
      event.target.classList.remove("draggableEl");
      event.target.classList.remove("shadow_top");
      event.target.classList.remove("shadow_bottom");
      this.dragElementId = "";
    },
    checkClass(event) {
      if (event.target.closest(".draggable") || ".false_draggable") {
        let element = event.target;
        if (event.target.closest(".draggable")) {
          element = event.target.closest(".draggable");
        }
        let idElementInnerAfter = this.getTasksArray.findIndex(
          (task) => task._id === this.EndDragElementId
        );
        if (element.classList.contains("shadow_bottom")) {
          element.classList.remove("shadow_bottom");
          return idElementInnerAfter;
        } else if (element.classList.contains("shadow_top")) {
          element.classList.remove("shadow_top");
          return --idElementInnerAfter;
        }
        element.classList.remove("false_draggable_over");
        element.style.height = `10px`;
        return idElementInnerAfter;
      }
    },
  },
};
</script>

<style lang="scss">
.column {
  position: relative;

  display: scroll;
  flex-direction: column;

  max-height: 20vw;
  .column_wrapper {
    position: relative;

    display: scroll;
    flex-direction: column;

    border-radius: 15px;
    background-color: #f0f0f0;

    width: 20vw;
    height: auto;

    padding: 7px;
  }

  h4 {
    margin: 10px 0;
  }
}

.draggableEl {
  opacity: 0.5;
}
.shadow_bottom {
  box-shadow: 0 2px 3px red;
}
.shadow_top {
  box-shadow: 0 -2px 3px red;
}

.card_false {
  position: relative;
  border-radius: 15px;
  background-color: #ffffff;
  border: 1px solid #242222;
  min-height: 10px;
  width: auto;
  margin-bottom: 10px;
}
.false_draggable {
  position: relative;
  min-height: 10px;
}
.false_draggable_over {
  position: relative;
  min-height: 60px;
}
</style>
