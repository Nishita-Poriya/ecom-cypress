const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default


const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");

const {
  preprocessor,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

//Define config because you don't want to write more code inside the configuration file. So write it here and simply call this function name inside this async fun

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", preprocessor(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({

  defaultCommandTimeout: 6000,
  reporter: 'cypress-mochawesome-reporter',


env:{
  url : "https://rahulshettyacademy.com/"
},

retries: {
  runMode: 1,
  //openMode: 0,
  },

projectId:"k9j9sv",

  e2e: {
    specPattern: 'cypress/integration/**/*.js', // Adjust if needed

    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());

        // Configure Mochawesome reporter
        const mochawesome = require('mochawesome');
        on('after:run', async () => {
          const merge = require('mochawesome-merge');
          const reportGenerator = require('mochawesome-report-generator');
          
          // Merge JSON reports
          const jsonReports = path.join(config.reportsFolder, '**/*.json');
          const report = await merge(jsonReports);
          await reportGenerator.create(report, { reportDir: path.join(config.reportsFolder, 'cucumber-reports') });
          const reportGeneratorPath = path.join(__dirname, 'cucumber-html-report.js');
          require(reportGeneratorPath);
        });
      },
    },
    screenshotsFolder: 'cypress/screenshots',
   // supportFile: false, // Set to `false` if not used
   


  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    reportFilename: 'results',
    quiet: true,
    overwrite: false,
    html: false,
    json: true,
  },
});
