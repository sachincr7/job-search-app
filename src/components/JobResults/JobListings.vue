<template>
  <main class="flex-auto p-8 bg-brand-gray-2">
    <ol>
      <job-listing v-for="job in displayedJobs" :key="job.id" :job="job" />
    </ol>
    <div class="mt-8 mx-auto">
      <div class="flex flex-row flex-nowrap">
        <p class="text-sm flex-grow">Page {{ currentPage }}</p>
        <div class="flex items-center justify-center">
          <router-link
            v-if="previousPage"
            :to="{ name: 'JobResults', query: { page: previousPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            >Previous</router-link
          >
          <router-link
            v-if="nextPage"
            :to="{ name: 'JobResults', query: { page: nextPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            >Next</router-link
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import JobListing from "./JobListing.vue";
import { mapState } from "vuex";
import { FETCH_JOBS } from "@/store";

export default {
  name: "JobListings",
  components: { JobListing },

  computed: {
    currentPage() {
      console.log(this.$jobs);
      const pageString = this.$route.query.page || "1";
      return Number.parseInt(pageString);
    },
    previousPage() {
      const previousPage = this.currentPage - 1;
      const firstPage = 1;
      return previousPage >= firstPage ? previousPage : undefined;
    },
    nextPage() {
      const nextPage = this.currentPage + 1;
      const maxPage = this.jobs.length / 10;
      return nextPage <= maxPage ? nextPage : undefined;
    },
    displayedJobs() {
      const pageString = this.currentPage; // "1"
      const pageNumber = Number.parseInt(pageString); // 1
      const firstIndex = (pageNumber - 1) * 10;
      const lastIndex = pageNumber * 10;
      return this.jobs.slice(firstIndex, lastIndex);
    },
    ...mapState(["jobs"]),
  },

  async mounted() {
    console.log("jobs", this.jobs);
    this.$store.dispatch(FETCH_JOBS);
  },
};
</script>
