
<template>
  <div>
    <VUserSearchForm @search="search" />
    <VUserProfile :user="user" />
  </div>
</template>

<script>
import VUserProfile from '@/components/VUserProfile'
import VUserSearchForm from '@/components/VUserSearchForm'
import { mapState } from 'vuex';

export default {
  name: 'UserView',
  components: {
    VUserSearchForm,
    VUserProfile
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    search (userName) {
      this.$store.dispatch('searchUser', { userName })
    }
  }
};
</script>
