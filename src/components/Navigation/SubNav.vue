<template>
  <div class="w-full h-16 bg-white border-b border-solid border-brand-gray-1">
    <div class="flex items-center h-full px-8">
      <div v-if="onJobResultsPage" data-test="job-count">
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
        <span
          ><span class="text-brand-green-1"></span>
          {{ FILTER_JOB_BY_ORGANIZATIONS.length }} jobs matched</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";

export default {
  name: "Subnav",
  setup() {
    const store = useStore();
    const route = useRoute();

    const FILTER_JOB_BY_ORGANIZATIONS = computed(
      () => store.getters.FILTER_JOB_BY_ORGANIZATIONS
    );

    const onJobResultsPage = computed(() => route.name === "JobResults");

    return { onJobResultsPage, FILTER_JOB_BY_ORGANIZATIONS };
  },
};
</script>
