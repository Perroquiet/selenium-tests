module.exports = {

  before : function(browser) {
    console.log('Setting up...');

    
  },

  after : function(browser) {
    console.log('Closing down...');
    browser.end();
  },

  beforeEach : function(browser) {
    browser.useCss();
  },

  // afterEach : function(browser) {

  // },

  'Step 1: Check for email validity failure' : function (browser) {
    var registration = this.client.globals.registration;

    browser
      .url(this.client.globals.baseUrl + registration.url)
      .waitForElementVisible('body', 1000)
      .setValue(registration.emailField, registration.testEmail)
      .click(registration.passwordField)
      .waitForElementVisible('div.has-error', 1000)
      .getText("div.has-error span.help-block", function(result) {
        this.assert.equal(result.value, "Invalid email");
      })
      ;
  },

  'Step 2: Check for password length failure' : function (browser) {
    var registration = this.client.globals.registration;
    
    browser
      .useXpath()
      .url(this.client.globals.baseUrl + registration.url)
      .waitForElementVisible('//body', 1000)
      .setValue('//*[@id="at-field-password"]', registration.testPasswordLength)
      .click('//button[@type="submit"]')
      .waitForElementVisible('//div[contains(@class,"has-error")]', 1000)
      .getText('//*[@id="at-field-password"][1]/following-sibling::span[1]', function (result) {
        this.assert.equal(result.value, 'Minimum required length: 6');
      })
      // Another method of getting the sibling using XPATH
      // '//*[@id="at-field-password"]/ancestor::*[contains(@class,"has-error")][1]/span[contains(@class, "help-block")]'
      ;
  },

  'Step 3: Check for password match failure' : function (browser) {
    browser
      .url(this.client.launchUrl + '/accounts/register')
      .setValue('#at-field-email', 'jit_test_reg@acomsys.net')
      .setValue('#at-field-password', '1234567')
      .setValue('#at-field-password_again', '1234566')
      .click('button[type="submit"]')
      .waitForElementVisible('div.has-error', 1000)
      .getText('div.has-error span.help-block', function(result) {
        this.assert.equal(result.value, "Passwords don't match");
      })
      ;
  },

  'Step 4: Test successful registration' : function (browser) {
    var registration = this.client.globals.registration;

    browser
      .url(this.client.launchUrl + '/accounts/register')
      .setValue('#at-field-email', registration.email)
      .setValue('#at-field-password', registration.password)
      .setValue('#at-field-password_again', registration.password)
      .click('button[type="submit"]')
      .waitForElementVisible('ul>li>a', 1000)
      .getText('ul>li>a', function (result) {
        this.assert.equal(result.value, "Home");
      })
      ;
  },
  
  'Step 5: Test successful logout' : function (browser) {
    browser
      .pause(5000)
      .useXpath()
      .waitForElementVisible('//*[@id="dashboard-logout"]/span', 1000)
      .click('//*[@id="dashboard-logout"]/span')
      .waitForElementVisible('/html/body/nav/div/div/div[1]/span', 1000)
      ;
  },
  
  'Step 6: Forgot Password failure' : function (browser) {
    var registration = this.client.globals.registration;
    
    browser
      .url(this.client.launchUrl + '/accounts/password/forgot')
      .waitForElementVisible('body', 1000)
      .setValue(registration.emailField, 'justarondomemail@mail.com')
      .click('button[type="submit"]')
      .useXpath()
      .assert.elementPresent('//*[@id="content"]/div/div/div/div/div[2]/p')
      ;
  }, 
  
  'Step 7: Forgot Password success' : function (browser) {
     var registration = this.client.globals.registration;

     browser
       .url(this.client.launchUrl + '/accounts/password/forgot')
       .waitForElementVisible('body', 1000)
       .setValue(registration.emailField, registration.email)
       .click('button[type="submit"]')
       .useXpath()
       .assert.elementNotPresent('//*[@id="content"]/div/div/div/div/div[2]/p')
       ;
  }

};