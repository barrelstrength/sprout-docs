<template>
    <div class="info-hud">
        <VDropdown :triggers="['hover']" :distance="6">
            <svg class="info-circle" viewBox="0 0 512 512">
                <path
                    d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
                ></path>
            </svg>
            <template #popper>
                <slot></slot>
            </template>
        </VDropdown>
    </div>
</template>

<script>
  import { Dropdown } from 'floating-vue'
  import 'floating-vue/dist/style.css'

  export default {
      components: { 'VDropdown': Dropdown },
  }
</script>

<style>
    /* https://github.com/craftcms/cms/blob/develop/lib/craftcms-sass/_mixins.scss */

    .info-hud {
        display: inline-block;
    }

    .info-hud .v-popper {
        color: #b8c2cc;
        display: inline-block;
        line-height: 0;

        /* & > span {
          outline: none;
        } */
    }

    .info-hud .v-popper:hover,
    .info-hud .v-popper.open {
        cursor: pointer;
        color: var(--vp-c-brand-1);
    }

    .v-popper__inner {
        max-width: 250px;
    }

    .info-circle {
        fill: currentColor;
        width: 18px;
        height: 18px;
        top: -1px;
        position: relative;
        display: inline-block;
        vertical-align: middle;
    }

    /* https://github.com/craftcms/cms/blob/37e3e20d9c8096d5489e16ebe0f9a46ae3eb5808/src/web/assets/pluginstore/src/sass/_tooltip.scss */

    .v-popper__inner {
        user-select: none;
        pointer-events: none;
        border-radius: 3px;
        display: block !important;
        z-index: 10000;
        box-shadow: 0 25px 80px rgba(0, 0, 0, 0.4);
        padding: 12px;
        font-size: 14px;
    }

    .v-popper__inner .v-popper__arrow-container {
        width: 0;
        height: 0;
        border-style: solid;
        position: absolute;
        margin: 12px;
        border-color: #fff;
    }

    .v-popper__inner[x-placement^="top"] {
        margin-bottom: 12px;
    }

    .v-popper__inner[x-placement^="top"] .v-popper__arrow-container {
        border-width: 12px 12px 0 12px;
        border-left-color: transparent !important;
        border-right-color: transparent !important;
        border-bottom-color: transparent !important;
        bottom: -12px;
        left: calc(50% - 12px);
        margin-top: 0;
        margin-bottom: 0;
    }

    .v-popper__inner[x-placement^="bottom"] {
        margin-top: 12px;
    }

    .v-popper__inner[x-placement^="bottom"] .v-popper__arrow-container {
        border-width: 0 12px 12px 12px;
        border-left-color: transparent !important;
        border-right-color: transparent !important;
        border-top-color: transparent !important;
        top: -12px;
        left: calc(50% - 12px);
        margin-top: 0;
        margin-bottom: 0;
    }

    .v-popper__inner[x-placement^="right"] {
        margin-left: 12px;
    }

    .v-popper__inner[x-placement^="right"] .v-popper__arrow-container {
        border-width: 12px 12px 12px 0;
        border-left-color: transparent !important;
        border-top-color: transparent !important;
        border-bottom-color: transparent !important;
        left: -12px;
        top: calc(50% - 12px);
        margin-left: 0;
        margin-right: 0;
    }

    .v-popper__inner[x-placement^="left"] {
        margin-right: 12px;
    }

    .v-popper__inner[x-placement^="left"] .v-popper__arrow-container {
        border-width: 12px 0 12px 12px;
        border-top-color: transparent !important;
        border-right-color: transparent !important;
        border-bottom-color: transparent !important;
        right: -12px;
        top: calc(50% - 12px);
        margin-left: 0;
        margin-right: 0;
    }

    .v-popper__inner[aria-hidden="true"] {
        visibility: hidden;
        opacity: 0;
        transition: opacity 0.15s, visibility 0.15s;
    }

    .v-popper__inner[aria-hidden="false"] {
        visibility: visible;
        opacity: 1;
        transition: opacity 0.15s;
    }


   /**
     Updates tooltip colors
    .v-popper--theme-dropdown .v-popper__inner {
        background-color: var(--vp-c-brand-1) !important;
        border: transparent !important;
        color: white;
    }

    .v-popper--theme-dropdown .v-popper__arrow-inner {
        border-color: var(--vp-c-brand-1) !important;
    }

    .v-popper--theme-dropdown .v-popper__arrow-outer {
        border-bottom-color: var(--vp-c-brand-1) !important;
    }

    :root.dark .v-popper--theme-dropdown .v-popper__inner {
        background-color: var(--vp-c-yellow-1) !important;
        border: transparent !important;
    }

    :root.dark .v-popper--theme-dropdown .v-popper__arrow-inner {
        border-color: var(--vp-c-yellow-1) !important;
    }

    :root.dark .v-popper--theme-dropdown .v-popper__arrow-outer {
        border-bottom-color: var(--vp-c-yellow-1) !important;
    }
   */

</style>