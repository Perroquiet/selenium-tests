module.exports = {

  before : function(browser) {
    console.log('Setting up...');
  },

  after : function(browser) {
    console.log('Closing down...');
    browser.end();
  },

  beforeEach : function(browser) {
    browser.useXpath();
  },

//  afterEach : function(browser) {
//
//  },

	'Step 1: Test successful login' : function (browser) {
    var registration = this.client.globals.registration;
    
    browser
      .url(this.client.globals.baseUrl)
      .waitForElementPresent('//*[@id="bs-example-navbar-collapse-8"]/ul[2]/li[1]/a', 1000, false)
      .pause(1000)
      .click('//*[@id="bs-example-navbar-collapse-8"]/ul[2]/li[1]/a')
      .pause(1000)
      .setValue('//*[@id="at-field-email"]', registration.email)
      .setValue('//*[@id="at-field-password"]', registration.password)
      .click('//*[@id="at-btn"]')
      .waitForElementPresent('//*[@id="title-bar"]/div/div/a', 1000, false)
      ;
  },
  
  'Step 2: Test Admin User List' : function (browser) {
    browser
      .moveToElement('//*[@id="bs-sidebar-navbar-collapse-1"]/ul/li[4]/a/span[2]', 0, 0)
      .pause(1000)
      .waitForElementVisible('//*[@id="bs-sidebar-navbar-collapse-1"]/ul/li[4]', 1000, false)
      .click('//*[@id="bs-sidebar-navbar-collapse-1"]/ul/li[4]/a')
      .pause(1000)
      .waitForElementVisible('//*[@id="bs-sidebar-navbar-collapse-1"]/ul/li[4]/ul/li', 1000, false)
      .click('//*[@id="bs-sidebar-navbar-collapse-1"]/ul/li[4]/ul/li/a')
      .pause(1000)
      .waitForElementVisible('//*[@id="DataTables_Table_0"]', 1000, false)
      ;
  },
  
  'Step 2: Test Admin View Subscriptions' : function (browser) {
    browser
      .moveToElement('//*[@id="bs-sidebar-navbar-collapse-1"]/ul/li[4]/a/span[2]', 0, 0)
      .pause(1000)
      .waitForElementVisible('//*[@id="bs-sidebar-navbar-collapse-1"]/ul/li[5]', 1000, false)
      .click('//*[@id="bs-sidebar-navbar-collapse-1"]/ul/li[5]/a')
      .pause(1000)
      .waitForElementVisible('//*[@id="bs-sidebar-navbar-collapse-1"]/ul/li[5]/ul/li', 1000, false)
      .click('//*[@id="bs-sidebar-navbar-collapse-1"]/ul/li[5]/ul/li/a')
      .pause(1000)
      .waitForElementVisible('//*[@id="DataTables_Table_1"]', 1000, false)
      .pause(5000)
      ;
  },
  
  'Step 3: Test Admin Add Subscriptions' : function (browser) {
    var url = this.client.launchUrl + '/';
    
    browser
      .execute(function(url) {
        window.open(url);
      }, [url], function(result) {
        
      }).pause(3000)
      
      
      .windowHandles(function(result) {
      	console.log(result);
        browser
          .assert.equal(result.value.length, 2, 'There should be two windows open.');
           // Login First to new Window
          browser
            .switchWindow(result.value[1])
            .waitForElementPresent('//*[@id="bs-example-navbar-collapse-8"]/ul[2]/li[1]/a', 3000, false)
            .pause(1000)
            .click('//*[@id="bs-example-navbar-collapse-8"]/ul[2]/li[1]/a')    
            .pause(5000)
            .moveToElement('//*[@id="bs-sidebar-navbar-collapse-1"]/ul/li[4]/a/span[2]', 0, 0)
            .pause(1000)
            .waitForElementVisible('//*[@id="bs-sidebar-navbar-collapse-1"]/ul/li[5]', 1000, false)
            .click('//*[@id="bs-sidebar-navbar-collapse-1"]/ul/li[5]/a')
            .pause(1000)
            .waitForElementVisible('//*[@id="bs-sidebar-navbar-collapse-1"]/ul/li[5]/ul/li[2]/a', 1000, false)
            .click('//*[@id="bs-sidebar-navbar-collapse-1"]/ul/li[5]/ul/li[2]/a')
            .pause(1000)
            .waitForElementVisible('//*[@name="name"]', 1000, false)
            .setValue('//*[@name="name"]', 'Adolpo')
            .setValue('//*[@name="description"]', 'Dolpo is Dolpo')
            .click('//*[@id="insertSubscriptionCollectionItem"]/button')
            
            .switchWindow(result.value[0])
            .waitForElementVisible('//*[@id="DataTables_Table_1"]/tbody/*[1]/*[1]', 3000, false)
            .getText('//*[@id="DataTables_Table_1"]/tbody/*[1]/*[1]', function (result) {
              this.assert.equal(result.value, 'Adolpo');
            })
            ;
      })
      ;
  },
}