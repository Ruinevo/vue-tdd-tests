<template>
  <div class="search-form">
    <input class="search-form__input" type="text" v-model="searchValue" />
    <button class="search-form__submit" @click="$emit('search', searchValue)">Поиск</button>
  </div>
</template>

<script>
export default {
  name: 'VUserSearchForm',
  data: () => ({
    searchValue: ''
  })
}
</script>
