<template>
  <table class="multiple-header-rows">
    <tbody>
    <fragment v-for="(feature, index) in features" :key="index">
      <tr v-if="feature.category" class="category">
        <th class="feature">{{ feature.category }}</th>
        <th class="edition">Lite</th>
        <th class="edition">Pro</th>
      </tr>
      <tr
          v-for="(item, index2) in feature.items"
          :key="index2"
          :class="{'shade': index2 % 2 === 0 }"
          v-if="!item.hide"
      >
        <td>
          <span>{{ item.name }}</span>
          <info-hud v-if="item.info" class="info"
          ><span class="smaller">{{ item.info }}</span></info-hud
          >
        </td>
        <td class="support">
          <check-mark v-if="item.lite" label="supported in Lite" />
        </td>
        <td class="support">
          <check-mark v-if="item.pro" label="supported in Pro" />
        </td>
      </tr>
    </fragment>
    </tbody >
  </table>
</template>

<script>
import CheckMark from "./CheckMark";
import InfoHud from "./InfoHud";
import {Fragment} from "vue-fragment";

export default {
  components: { Fragment, CheckMark, InfoHud },
  props: {
    featureList: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      features: []
    };
  },
  mounted() {
    let self = this;
    fetch(self.featureList)
        .then(response => response.json())
        .then(data => self.features = data);
  }
};
</script>

<style>
table {
  display: table;
  border: 0;
  width: 100%;
  position: relative;
  overflow: visible;
  margin-bottom:3em;
}

td,
tr {
  border: 0;
}

.edition {
  width: 15%;
}

.support {
  position: relative;
  overflow: visible;
  font-weight: bold;
}

.info {
  margin-left: 0.75rem;
}

.smaller {
  font-size: 0.9rem;
  line-height: 1.25rem;
}
</style>
