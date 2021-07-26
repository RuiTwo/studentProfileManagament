<template>
  <div id="narBar">
    <template v-for="navMenu in navMenus">
      <!-- 最后一级菜单 -->
      <el-menu-item
        v-if="!navMenu.childs&&navMenu.entity"
        :key="navMenu.entity.id"
        :data="navMenu"
        :index="navMenu.entity.name"
      >
        <i :class="navMenu.entity.icon"></i>
        <span slot="title">{{navMenu.entity.alias}}</span>
      </el-menu-item>

      <!-- 此菜单下还有子菜单 -->
      <el-submenu
        v-if="navMenu.childs&&navMenu.entity"
        :key="navMenu.entity.id"
        :data="navMenu"
        :index="navMenu.entity.name"
      >
        <template slot="title">
          <i :class="navMenu.entity.icon"></i>
          <span> {{navMenu.entity.alias}}</span>
        </template>
        <!-- 递归 -->
        <nar-bar :navMenus="navMenu.childs"></nar-bar>
      </el-submenu>
    </template>
  </div>
</template>

<script>
export default {
  name: "narBar",
  methods: {},
  props: ["navMenus"],
  data() {
    return {};
  },
};
</script>

<style>
</style>