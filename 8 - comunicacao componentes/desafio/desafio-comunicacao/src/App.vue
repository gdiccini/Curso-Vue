<template>
  <div class="main-container">
    <List  @selectPerson="person = $event"/>
    <InfoBox :person="person"/>
  </div>
</template>

<script>
import List from '@/components/List.vue';
import InfoBox from '@/components/InfoBox.vue';

export default {
  data() {
    return {
      person: { id: '', name: '', age: '' }
    }
  },
  components: {
    List,
    InfoBox,
  }
}
</script>

<style lang="scss">
.main-container {
  display: flex;
  justify-content: space-between;
}
</style>
