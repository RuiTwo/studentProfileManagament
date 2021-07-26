<template>
  <div id="app">
    <el-menu
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :default-active="activeIndex"
      style="height:800px;width:200px"
      router
    >
      <nar-bar :navMenus="menuData"></nar-bar>
    </el-menu>
    <router-view></router-view>
  </div>
</template>
<script>
import narBar from "./components/narBar.vue";
import admisBasicData from "./views/dataCollect/admisBasicData.vue";
export default {
  data() {
    return {
      activeIndex: "dataCollect",
      menuData: [
        {
          entity: {
            id: 1,
            name: "dataCollect",
            alias: "数据采集",
            icon: "el-icon-s-data",
          },
          childs: [
            {
              entity: {
                id: 11,
                name: "admisBasic",
                alias: "入学基础数据",
                value: { path: "/admisbasic" },
                icon: "",
              },
            },
            {
              entity: {
                id: 12,
                name: "classSignIn",
                alias: "上课签到统计",
                value: { path: "/classsignin" },
                icon: "",
              },
            },
            {
              entity: {
                id: 13,
                name: "resultStatistics",
                alias: "成绩统计数据",
                value: { path: "/resultstatistics" },
                icon: "",
              },
            },
            {
              entity: {
                id: 14,
                name: "dailyActivitiy",
                alias: "日常活动",
                value: { path: "/dailyactivitiy" },
                icon: "",
              },
            },
            {
              entity: {
                id: 15,
                name: "questSurvey",
                alias: "小问卷调查",
                value: { path: "/questsurvey" },
                icon: "",
              },
            },
          ],
        },
        {
          entity: {
            id: 2,
            name: "studentTrack",
            alias: "学生跟踪管理",
            icon: "el-icon-menu",
          },
          childs: [
            {
              entity: {
                id: 21,
                name: "imgAnalysis",
                alias: "学生画像分析",
                value: { path: "/imganalysis" },
                icon: "",
              },
            },
            {
              entity: {
                id: 22,
                name: "abnornmalWarning",
                alias: "学生心理异常预警",
                value: { path: "/abnornmalwarning" },
                icon: "",
              },
            },
            {
              entity: {
                id: 23,
                name: "studentGrowing",
                alias: "学生成长",
                value: { path: "/studentGrowing" },
                icon: "",
              },
            },
            {
              entity: {
                id: 24,
                name: "studentRecent",
                alias: "学生近况与关怀",
                value: { path: "/studentrecent" },
                icon: "",
              },
            },
            {
              entity: {
                id: 25,
                name: "studentRecommend",
                alias: "学生评价",
                value: { path: "/studentrecommend" },
                icon: "",
              },
            },
          ],
        },
        {
          entity: {
            id: 3,
            name: "userManage",
            alias: "用户管理",
            icon: "el-icon-user-solid",
          },

          childs: [
            {
              entity: {
                id: 31,
                name: "roleManagement",
                alias: "角色管理",
                value: { path: "/rolemanagement" },
                icon: "",
              },
            },
            {
              entity: {
                id: 32,
                name: "userManagement",
                alias: "用户管理",
                value: { path: "/usermanagement" },
                icon: "",
              },
            },
            {
              entity: {
                id: 33,
                name: "studPareManagement",
                alias: "学生和家长管理",
                value: { path: "/studparemanagement" },
                icon: "",
              },
            },
          ],
        },
        {
          entity: {
            id: 4,
            name: "basicInfo",
            alias: "基础信息",
            value: { path: "/basciInfo" },
            icon: "el-icon-tickets",
          },
        },
      ],
    };
  },
  components: {
    narBar,
    admisBasicData,
  },
};
</script>
<style>
@import url("./assets/css/normalize.css");
#app{
  display: flex;
}
</style>
