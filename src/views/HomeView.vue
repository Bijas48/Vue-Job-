<script setup>
import HeroCom from '@/components/Hero-com.vue'
import HomeCardCom from '@/components/HomeCard-com.vue'
import JobListingCom from '@/components/JobListing-com.vue'
</script>

<template>
  <HeroCom />
  <HomeCardCom />
  <JobListingCom :limit="3" :show-button="true" />
</template>
