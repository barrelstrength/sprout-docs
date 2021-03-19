<template>
    <table>
        <tbody>
        <fragment v-for="(feature, index) in features" :key="index">
            <tr v-if="feature.category" class="category">
                <td class="feature">
                    <b>{{ feature.category }}</b>
                </td>
                <td class="edition">Lite</td>
                <td class="edition">Pro</td>
            </tr>
            <tr v-for="item in feature.items" :key="item.name">
                <td>
                    <span>{{ item.name }}</span>
                    <info-hud v-if="item.info" class="info"
                    ><span class="smaller">{{ item.info }}</span></info-hud
                    >
                </td>
                <td class="support">
                    <check-mark v-if="item.lite" label="supported in Commerce Lite" />
                </td>
                <td class="support">
                    <check-mark v-if="item.pro" label="supported in Commerce Pro" />
                </td>
            </tr>
        </fragment>
        </tbody>
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
      },
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
    }

    td,
    tr {
        border: 0;
    }

    .category {
        border-top: 0;
        font-weight: bold;
    }

    .category .feature {
        font-size: 1.25rem;
        padding-left: 0;
    }

    .category td {
        padding-top: 2rem;
        border: 0;
    }

    .edition {
        width: 15%;
        text-align: left;
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