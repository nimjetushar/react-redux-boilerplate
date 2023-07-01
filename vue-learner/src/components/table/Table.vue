<template>
  <div id='table-component'>
    <button v-on:click="saveOrder">Update</button>
    <button v-on:click="convertTableEditable">Edit Table</button>
    <table>
      <thead>
        <tr>
          <th v-for='(col, index) in tableColumns' :key="index">
            {{ col.name }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='(item, index) in tableData' :key="index">
          <td v-for='(col, idx) in tableColumns' :key="idx">
            <div v-if="!col.editable">{{item[col.field]}}</div>
            <div v-if="col.editable" class="editable-ele">
              <input type="text" v-model="item[col.field]" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  template: '#table-component',
  name: 'Table',
  props: {
    value: {
      type: Array,
      required: true
    },
    columns: {
      type: Array,
      required: true
    }
  },
  data: function () {
    return {
      tableData: this.value,
      tableColumns: this.columns
    }
  },
  methods: {
    saveOrder: function () {
      const sortedData = this.value.sort((a, b) => {
        return (a.order > b.order) ? 1 : -1
      })

      this.tableData = [].concat(sortedData)
    },
    convertTableEditable: function () {
      const columns = this.tableColumns
      for (let i = 0; i < columns.length; i++) {
        const item = columns[i]
        if (item.field === 'order') {
          item.editable = !item.editable
          break
        }
      }
      this.tableColumns = [].concat(columns)
    }
  }
}
</script>

<style lang="sass" scoped>
  @import './table.style.scss'
</style>
