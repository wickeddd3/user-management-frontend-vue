import camelCase from 'lodash/camelCase';

const modules = {};
const requireModules = require.context(
  '@/store/modules',
  true,
  /[a-z]\w+\.js$/,
);

requireModules.keys().forEach(fileName => {
  const componentConfig = requireModules(fileName);

  const namespace = componentConfig.default.name || camelCase(
    fileName
      .split('/')
      .pop()
      .replace(/\.[^/.]+$/, '')
      .replace(/^\.\/(.*)\.\w+$/, '$1'),
  );

  modules[namespace] = requireModules(fileName).default || requireModules(fileName);
});

export default modules;
