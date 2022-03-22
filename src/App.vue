<script lang="ts">
  import EntitiesList from '@/components/EntitiesList.vue'

  export default {
    name: 'App',
    components: {
      EntitiesList,
    },
  }
</script>
<template>
  <img alt="Vue logo" src="@/assets/logo.png" />
  <Suspense>
    <template #fallback>
      <div>loading</div>
    </template>
    <EntitiesList />
  </Suspense>
</template>
