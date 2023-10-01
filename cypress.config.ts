import { defineConfig } from "cypress";

export default defineConfig({
  video: true,
  videoCompression: true,
})

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const options = {
        outputRoot: config.projectRoot + '/logs/',
        outputTarget: {
          'out.txt': 'txt',
          'out.json': 'json',
        }
      };
    
      require('cypress-terminal-report/src/installLogsPrinter')(on, options);
    }
  }
});
