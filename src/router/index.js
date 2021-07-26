import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const admisBasicData = () => import('../views/dataCollect/admisBasicData');
const classSignIn = () => import('../views/dataCollect/classSignIn');
const dailyActivitiy = () => import('../views/dataCollect/dailyActivitiy');
const questSurvey = () => import('../views/dataCollect/questSurvey');
const resultStatistics = () => import('../views/dataCollect/resultStatistics');

const imgAnalysis = () => import('../views/studentTrack/imgAnalysis');
const abnornmalWarning = () => import('../views/studentTrack/abnornmalWarning');
const studentGrowing = () => import('../views/studentTrack/studentGrowing');
const studentRecent = () => import('../views/studentTrack/studentRecent');
const studentRecommend = () => import('../views/studentTrack/studentRecommend');

const roleManagement = () => import('../views/userManage/roleManagement');
const userManagement = () => import('../views/userManage/userManagement');
const studPareManagement = () => import('../views/userManage/studPareManagement');

const basicInfo = () => import('../views/basicInfo/basicInfo');
const routes = [
  {
    path: '/admisbasic',
    name: 'admisBasic',
    component: admisBasicData,
  },
  {
    path: '/classsignin',
    name: 'classSignIn',
    component: classSignIn,
  },
  {
    path: '/resultstatistics',
    name: 'resultStatistics',
    component: resultStatistics,
  },
  {
    path: '/dailyactivitiy',
    name: 'dailyActivitiy',
    component: dailyActivitiy,
  },
  {
    path: '/questsurvey',
    name: 'questSurvey',
    component: questSurvey,
  },
  {
    path: '/imganalysis',
    name: 'imgAnalysis',
    component: imgAnalysis,
  },
  {
    path: '/abnornmalwarning',
    name: 'abnornmalWarning',
    component: abnornmalWarning,
  },
  {
    path: '/studentgrowing',
    name: 'studentGrowing',
    component: studentGrowing,
  },
  {
    path: '/studentrecent',
    name: 'studentRecent',
    component: studentRecent,
  },
  {
    path: '/studentrecommend',
    name: 'studentRecommend',
    component: studentRecommend,
  },
  {
    path: '/rolemanagement',
    name: 'roleManagement',
    component: roleManagement,
  },
  {
    path: '/usermanagement',
    name: 'userManagement',
    component: userManagement,
  },
  {
    path: '/studparemanagement',
    name: 'studPareManagement',
    component: studPareManagement,
  },
  {
    path: '/basicInfo',
    name: 'basicInfo',
    component: basicInfo,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
