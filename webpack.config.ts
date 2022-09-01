import { Configuration } from 'webpack';
import { resolve } from 'node:path';

let config: Configuration = {
  mode: (process.env.NODE_ENV || 'none') as any,
  target: 'node',
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    symlinks: false,
  },

  output: {
    path: resolve(__dirname, './dist'),
    filename: '[name].js',
    library: {
      type: 'commonjs2',
    },
    clean: true,
  },
  experiments: {},
  module: {
    noParse: /\/native-require.js$/,
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          compilerOptions: {
            sourceMap: false,
          },
          onlyCompileBundledFiles: true,
          configFile: resolve(__dirname, './tsconfig.json'),
        },
      },
      {
        test: /\.node$/,
        loader: 'node-loader',
        options: { name: '[name]-[contenthash].[ext]' },
      },
    ],
    parser: {
      javascript: {
        commonjsMagicComments: true,
      },
    },
  },
};

export default config;
