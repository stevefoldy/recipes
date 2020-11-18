import NodeHotLoaderWebpackPlugin from 'node-hot-loader/NodeHotLoaderWebpackPlugin';
 
// Webpack configuration
export default {
  plugins: [
    // All options are optional
    new NodeHotLoaderWebpackPlugin({
      force, // boolean. true - always launch entries, false (by default) - launch entries only in watch mode.
      fork, // boolean | string[]. For example ['--key', 'key value'].
      args, // string[]. For example ['--arg1', 'arg2'].
      autoRestart, // boolean
      logLevel, // string
    }),
  ],
  output: {
    // Webpack can't find hot-update if output file is not directly in output.path.
    // For example, filename: 'js/[name].js' will not work.
    // However, I have no many tests for that.
    filename: '[name].js',
  }
};