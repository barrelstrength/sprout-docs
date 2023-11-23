<template>

    <!--<template v-for="(feature, index) in features" :key="index">-->
    <!--    <span v-text="feature.category" />-->
    <!--</template>-->
    <table class="multiple-header-rows">
        <tbody>
        <template v-for="(feature, index) in features" :key="index">
            <tr v-if="feature.category" class="category">
                <th class="feature" v-text="feature.category"></th>
                <th class="edition">Lite</th>
                <th class="edition">Pro</th>
            </tr>
            <tr v-for="(item, index2) in feature.items"
                :key="index2"
                :class="{'shade': index2 % 2 === 0 }"
            >
                <template v-if="item.hide !== true">
                    <td>
                        <span v-text="item.name"></span>
                        <info-hud v-if="item.info" class="info">
                            <span class="smaller tooltip-box" v-text="item.info"></span>
                        </info-hud>
                    </td>
                    <td class="support">
                        <check-mark v-if="item.lite" label="supported in Lite"/>
                    </td>
                    <td class="support">
                        <check-mark v-if="item.pro" label="supported in Pro"/>
                    </td>
                </template>
            </tr>
        </template>
        </tbody>
    </table>
</template>

<script>
import CheckMark from './CheckMark.vue';
import InfoHud from './InfoHud.vue';
// import {Fragment} from "vue-fragment";

export default {
    components: {CheckMark, InfoHud},
    props: {
        featureList: {
            type: String,
            required: false,
        },
    },
    data() {
        return {
            features: [],
        };
    },
    mounted() {
        let self = this;
        fetch(self.featureList)
            .then(response => response.json())
            .then(data => self.features = data);
        // .then(data => console.log(self.featureList, data));
    },
};
</script>

<style>
table {
    display: table !important;
    border: 0;
    width: 100%;
    position: relative;
    overflow: visible;
    margin-bottom: 3em;
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

table.multiple-header-rows tr {
    border: 0;
}
table.multiple-header-rows tr:nth-child(2n) {
    background-color: transparent;
}
table.multiple-header-rows tr.shade {
    background-color: #f1f5f8;
}
:root.dark table.multiple-header-rows tr.shade {
    background-color: var(--vp-c-bg-soft);
}
// .vp-doc th, .vp-doc td
table.multiple-header-rows tr th,
table.multiple-header-rows tr td {
    border: none;
    text-align: left;
}
.vp-doc table.multiple-header-rows tr:not(:first-child) th {
    padding-top: 2em;
}
.vp-doc table.multiple-header-rows tr.category th,
.vp-doc table.multiple-header-rows tr.category td {
    font-size: 16px;
    font-weight: 700;
}
:root.dark .vp-doc table.multiple-header-rows tr.category th,
:root.dark .vp-doc table.multiple-header-rows tr.category td {
    color: #fff;
}
.vp-doc table.multiple-header-rows th,
.vp-doc table.multiple-header-rows td {
    background: none;
    border: 0;
}
</style>


