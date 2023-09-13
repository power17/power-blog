<template>
  <el-container>
    <el-aside width="200px">
      <el-menu
        height="100%"
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        text-color="#fff"
        :default-active="router.currentRoute.value.path"
        router>
        <el-sub-menu :index="String(index)" v-for="(menu, index) in menus" :key="index">
          <template #title>
            <el-icon>
              <component :is="menu.icon"></component>
            </el-icon>
            <span>{{ menu.title }}</span>
          </template>
          <el-menu-item-group>
            <router-link :to="menuItem.link" v-for="(menuItem, index) in menu.children" :key="index">
              <el-menu-item :index="menuItem.link"> {{ menuItem.title }}</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>
<script setup>
import { Location, Aim } from '@element-plus/icons-vue';
import router from './router';
const menus = [
  {
    title: '算法篇',
    icon: Location,
    link: '',
    children: [
      {
        icon: '',
        link: '/',
        title: '05-数组',
      },
      {
        icon: '',
        link: '/06-07-LinkedList',
        title: '06-07-链表',
      },
    ],
  },
  {
    title: 'vue学习',
    icon: Aim,
    link: '',
    children: [
      {
        icon: '',
        link: '/vueUsage',
        title: '01-基础用法',
      },
    ],
  },
  {
    title: '数据库',
    icon: Aim,
    link: '',
    children: [
      {
        icon: '',
        link: '/21dayMysql',
        title: '21天mysql',
      },
    ],
  },
];
</script>
