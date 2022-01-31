const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./config/webpack/common');
const loadPresets = require('./config/webpack/loadPreset');

const getModeConfig = mode => require(`./config/webpack/${mode}.js`);

const ROOT_PATH =  path.resolve(__dirname);

module.exports = ({ mode = 'development', presets }) => {
  const options = { root: ROOT_PATH };
  const modeConfig = getModeConfig(mode)(options);

  return merge(
    commonConfig(options),
    getModeConfig(mode)(options), 
    loadPresets({ presets }));
};
