import DefaultTheme from 'vitepress/theme';
import './styles/vars.css'
import '@waline/client/dist/waline.css';
import Layout from './CustomizedLayout.vue';
export default {
  ...DefaultTheme,
  Layout
  // enhanceApp({ app }) {
  //   app.component('Layout', Layout)
  // },
}