var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

var baseUrl = 'http://jit1.acomsys.net';

driver.get(baseUrl + "/accounts/register");
driver.findElement(By.id("at-field-email")).clear();
driver.findElement(By.id("at-field-email")).sendKeys("test_jit4@mailinator.com");
driver.findElement(By.id("at-field-password")).clear();
driver.findElement(By.id("at-field-password")).sendKeys("test_jit4@mailinator.com");
driver.findElement(By.id("at-field-password_again")).clear();
driver.findElement(By.id("at-field-password_again")).sendKeys("test_jit4@mailinator.com");
driver.findElement(By.id("at-btn")).click();

// driver.get('http://www.google.com/ncr');
// driver.findElement(By.name('q')).sendKeys('webdriver');
// driver.findElement(By.name('btnG')).click();
// driver.wait(until.titleIs('webdriver - Google Search'), 1000);
driver.quit();