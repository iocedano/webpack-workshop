const { merge } = require('webpack-merge');

const loadPresets = (env = { presets: [] }) => {
  const { presets } = env;
  const mergeablePresets = [].concat(...[presets]).filter(Boolean);
  const mergedConfig = mergeablePresets.map(presetName =>
    require(`./presets/${presetName}.js`)
  );

  return merge({}, ...mergedConfig);
};

module.exports = loadPresets;