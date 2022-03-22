<script lang="ts">
  import { API, graphqlOperation } from 'aws-amplify'
  import { listEntities as ListEntitiesQuery } from '../graphql/queries'
  export default {
    data() {
      return {
        entities: [],
      }
    },
    async created() {
      const entitiesData = await this.getEntities()
      this.entities = entitiesData.data.listEntities.items
    },
    methods: {
      getEntities: async () =>
        await API.graphql(graphqlOperation(ListEntitiesQuery)),
    },
  }
</script>

<template>
  <div>
    <ul>
      <li v-for="entity in entities" v-bind:key="entity">
        {{ entity.title }} | {{ entity.type }}
      </li>
    </ul>
  </div>
</template>
