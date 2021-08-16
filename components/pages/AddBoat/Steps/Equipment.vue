<template>
  <add-boat-content
    ref="content"
    title="Ekipman"
    class="equipment"
    @next="$refs.content.next()"
  >
    <div v-for="(inventory, index) in equipments" :key="index" class="mb-4">
      <span class="font-weight-semibold text-night-blue pb-4 d-block">{{
        $t(inventory.title)
      }}</span>
      <div class="row">
        <div
          v-for="(item, index) in inventory.data"
          :key="index"
          class="col-lg-4 mb-3"
        >
          <m-checkbox
            variant="classic"
            class="f-14"
            :value="isSelected(item.id)"
            :disabled="loadingQueue.includes(item.id)"
            @click="onSelect(item)"
          >
            {{ item.name }}
          </m-checkbox>
        </div>
      </div>
    </div>
  </add-boat-content>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      equipments: [],
      selectedEquipments: [],
      loadingQueue: [],
    }
  },
  computed: {
    ...mapGetters({
      getTransactionId: 'add-boat/getTransactionId',
    }),
  },
  created() {
    this.getEquipments()
    this.getSelectedEquipments()
  },
  methods: {
    async getEquipments() {
      const res = await this.$repositories.boat.equipment.getEquipmentsAsGroup()
      this.equipments = res.data
    },
    async getSelectedEquipments() {
      const res = await this.$repositories.boat.equipment.getEquipments(
        this.getTransactionId
      )
      if (!res.data) return false
      this.selectedEquipments = res.data
    },
    async onSelect(item) {
      // find added item if it exists

      if (this.loadingQueue.includes(item.id)) return false

      const index = this.selectedEquipments.findIndex(
        (v) => v.inventory?.id == item.id
      )
      const a = this.loadingQueue.push(item.id) - 1

      if (index != -1) {
        await this.$repositories.boat.equipment.deleteEquipment(
          this.selectedEquipments[index].id,
          this.getTransactionId
        )
        this.selectedEquipments = this.selectedEquipments.filter(
          (v) => v.inventory.id != item.id
        )
      } else {
        const res = await this.$repositories.boat.equipment.newEquipment(
          item.id,
          this.getTransactionId
        )
        if (!res.data && !res.data.id) return false
        this.selectedEquipments.push({
          id: res.data.id,
          inventory: item,
        })
      }
      this.loadingQueue.splice(a, 1)
    },
    isSelected(id) {
      return !!this.selectedEquipments.find((v) => v.inventory.id == id)?.id
    },
  },
}
</script>
