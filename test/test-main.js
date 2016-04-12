var TEST_REGEXP = /(test\/spec)/i;
var allTestFiles = [];

// Get a list of all the test files to include
Object.keys(window.__karma__.files).forEach(function (file) {
    if (TEST_REGEXP.test(file)) {
        // Normalize paths to RequireJS module names.
        // If you require sub-dependencies of test files to be loaded as-is (requiring file extension)
        // then do not normalize the paths
        var normalizedTestModule = file.replace('^\/base\/', '../');
        allTestFiles.push(normalizedTestModule);
    }
});

require.config({
    // Karma serves files under /base, which is the basePath from your config file
    baseUrl: '/base/test/assets',

    packages: [
        {
            name: 'ioc',
            location: '../../src'
        }
    ],
    // dynamically load all test files
    deps: allTestFiles,

    // we have to kickoff jasmine, as it is asynchronous
    callback: window.__karma__.start,
    paths: {
        jquery: 'https://ss0.bdstatic.com/5a21bjqh_Q23odCf/static/superplus/js/lib/jquery-1.10.2_d88366fd'
    }
});

define.amd.jQuery = true;