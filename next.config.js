/* eslint-disable */
const withLess = require('@zeit/next-less');
const withTypescript = require('@zeit/next-typescript');
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
const withProgressBar = require('next-progressbar');
const withWorkers = require('@zeit/next-workers');

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
	require.extensions['.less'] = (file) => {};
}

module.exports = withWorkers(
	withProgressBar(
		withBundleAnalyzer(
			withTypescript(
				withLess({
					progressBar: {
						profile: true
					},
					analyzeServer: [ 'server', 'both' ].includes(process.env.BUNDLE_ANALYZE),
					analyzeBrowser: [ 'browser', 'both' ].includes(process.env.BUNDLE_ANALYZE),
					lessLoaderOptions: {
						javascriptEnabled: true
					},
					bundleAnalyzerConfig: {
						server: {
							analyzerMode: 'static',
							reportFilename: '../bundles/server.html'
						},
						browser: {
							analyzerMode: 'static',
							reportFilename: '../bundles/client.html'
						}
					},
					// workerLoaderOptions: { inline: true },
					webpack(config) {
						return config;
					}
				})
			)
		)
	)
);
