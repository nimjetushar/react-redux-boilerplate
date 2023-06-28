<template>
  <div>
    <h3>{{ careCategoryName }} Json Config</h3>
    <Table
      :value="gridData"
      :columns="gridColumns"
    />
  </div>
</template>

<script>

import Table from '../components/table/Table.vue'
import tableMockData from '../mock/table.json'

export default {
  components: {
    Table
  },
  props: {
    careCategoryName: {
      type: String,
      default: 'Table Component'
    }
  },
  data: function () {
    let tableData = []

    for (const key in tableMockData) {
      tableData.push(tableMockData[key])
    }
    tableData = tableData.sort((a, b) => {
      return (a.order > b.order) ? 1 : -1
    })

    return {
      gridColumns: [
        {
          name: 'Name',
          field: 'displayableName'
        },
        {
          name: 'Order',
          field: 'order',
          editable: false
        },
        {
          name: 'Primary',
          field: 'isPrimary'
        },
        {
          name: 'Prescription Data',
          field: 'isPrescriptionData'
        }
      ],
      gridData: tableData
    }
  }
}
</script>
