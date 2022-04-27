const gulp = require('gulp');
const all = require('gulp-all');

const copyAssets = function (assets, destination) {
    return all(assets.map((asset) => gulp.src(asset.path).pipe(gulp.dest(destination + '/' + asset.name))));
};

const nodeModulesBasePath = './node_modules/';
const distBasePath = './wwwroot/vendors/';
const assets = [
    {
        name: 'chart.js',
        path: nodeModulesBasePath + 'chart.js/dist/**',
    },
    {
        name: 'chartjs-plugin-annotation',
        path: nodeModulesBasePath + 'chartjs-plugin-annotation/chart*.js',
    },
    {
        name: 'chartjs-plugin-datalabels',
        path: nodeModulesBasePath + 'chartjs-plugin-datalabels/dist/**',
    },
];

gulp.task('copy:vendor-assets', () => copyAssets(assets, distBasePath));
gulp.task('clean:vendor-assets', () => copyAssets.clean(distBasePath));

gulp.task('default', gulp.series('copy:vendor-assets'));
gulp.task('clean', gulp.series('clean:vendor-assets'));

