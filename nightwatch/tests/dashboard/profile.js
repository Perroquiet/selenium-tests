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
  
  'Step 2: Test Personal Profile' : function (browser) {
    browser
      .moveToElement('//*[@id="bs-sidebar-navbar-collapse-1"]/ul/li[2]/a/span[2]', 0, 0)
      .pause(1000)
      .click('//*[@id="bs-sidebar-navbar-collapse-1"]/ul/li[2]/a')
      .pause(1000)
      .waitForElementVisible('//*[@id="bs-sidebar-navbar-collapse-1"]/ul/li[2]/ul/li[3]', 1000, false)
      .click('//*[@id="bs-sidebar-navbar-collapse-1"]/ul/li[2]/ul/li[3]/a')
      .waitForElementVisible('//*[@name="profile.firstName"]', 1000, false)
      .clearValue('//*[@name="profile.firstName"]')
      .setValue('//*[@name="profile.firstName"]', 'Jitty')
      .clearValue('//*[@name="profile.middleName"]')
      .setValue('//*[@name="profile.middleName"]', 'Middle')
      .clearValue('//*[@name="profile.lastName"]')
      .setValue('//*[@name="profile.lastName"]', 'Lastly')
      .clearValue('//*[@name="profile.birthday"]')
      .setValue('//*[@name="profile.birthday"]', '10//01/2015')
      .clearValue('//*[@name="profile.gender"]')
      .click('//*[@name="profile.gender"]')
      .pause(2000)
      .click('//*[@name="profile.gender"]/option[2]')
      .keys(["\uE006"])
      .pause(2000)
      .click('//*[@id="updateCurrentUserProfileForm"]/button')
      .pause(3000)
      ;
  },
  
  'Step 3: Test Personal Work' : function (browser) {
    browser
      .moveToElement('//*[@id="bs-sidebar-navbar-collapse-1"]/ul/li[2]/a/span[2]', 0, 0)
      .pause(1000)
      .click('//*[@id="bs-sidebar-navbar-collapse-1"]/ul/li[2]/a')
      .pause(1000)
      .waitForElementVisible('//*[@id="bs-sidebar-navbar-collapse-1"]/ul/li[2]/ul/li[4]', 1000, false)
      .click('//*[@id="bs-sidebar-navbar-collapse-1"]/ul/li[2]/ul/li[4]/a')
      .waitForElementVisible('//*[@name="profile.organization"]', 1000, false)
      .clearValue('//*[@name="profile.organization"]')
      .setValue('//*[@name="profile.organization"]', 'Acomsys')
      .clearValue('//*[@name="profile.website"]')
      .setValue('//*[@name="profile.website"]', 'http://www.acomsys.net')
      .click('//*[@id="updateCurrentUserProfileForm"]/button')
      .pause(3000)
      ;
  },
  
  'Step 4: Test Personal Contact' : function (browser) {
    browser
      .moveToElement('//*[@id="bs-sidebar-navbar-collapse-1"]/ul/li[2]/a/span[2]', 0, 0)
      .pause(1000)
      .click('//*[@id="bs-sidebar-navbar-collapse-1"]/ul/li[2]/a')
      .pause(1000)
      .waitForElementVisible('//*[@id="bs-sidebar-navbar-collapse-1"]/ul/li[2]/ul/li[5]', 1000, false)
      .click('//*[@id="bs-sidebar-navbar-collapse-1"]/ul/li[2]/ul/li[5]/a')
      .waitForElementVisible('//*[@name="profile.country"]', 1000, false)
      .clearValue('//*[@name="profile.country"]')
      .click('//*[@name="profile.country"]')
      .pause(2000)
      .click('//*[@name="profile.country"]/option[2]')
      .keys(["\uE006"])
      .pause(2000)
      .click('//*[@id="updateCurrentUserProfileForm"]/button')
      .pause(3000)
      ;
  },
  
  'Step 5: Test Personal Bio' : function (browser) {
    browser
      .moveToElement('//*[@id="bs-sidebar-navbar-collapse-1"]/ul/li[2]/a/span[2]', 0, 0)
      .pause(1000)
      .click('//*[@id="bs-sidebar-navbar-collapse-1"]/ul/li[2]/a')
      .pause(1000)
      .waitForElementVisible('//*[@id="bs-sidebar-navbar-collapse-1"]/ul/li[2]/ul/li[6]', 1000, false)
      .click('//*[@id="bs-sidebar-navbar-collapse-1"]/ul/li[2]/ul/li[6]/a')
      .waitForElementVisible('//*[@name="profile.bio"]', 1000, false)
      .clearValue('//*[@name="profile.bio"]')
      .click('//*[@name="profile.bio"]')
      .setValue('//*[@name="profile.bio"]', 'The Greatest of them all')
      .pause(1000)
      .click('//*[@id="updateCurrentUserProfileForm"]/button')
      .pause(3000)
  }
};