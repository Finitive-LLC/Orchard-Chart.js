const gulp = require('gulp');
const del = require('del');
const copyAssets = require('../../Utilities/Lombiq.Gulp.Extensions/Tasks/copy-assets');

const nodeModulesBasePath = './node_modules/';
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

gulp.task('copy:assets', () => copyAssets(assets, './wwwroot/vendors/'));
gulp.task('clean:assets', () => del('./wwwroot/vendors/'));

gulp.task('default', gulp.series('copy:assets'));
gulp.task('clean', gulp.series('clean:assets'));

