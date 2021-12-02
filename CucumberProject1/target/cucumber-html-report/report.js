$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/Login.feature");
formatter.feature({
  "name": "Post feature of facebook",
  "description": "\tThis will test the post functionality at the user wall",
  "keyword": "Feature"
});
formatter.background({
  "name": "Common step",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User launch chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.LoginSteps.user_launch_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"https://opensource-demo.orangehrmlive.com/index.php/auth/login\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.LoginSteps.user_opens_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Successful Login with valid page",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User enters username as \"Admin\" and password as \"admin123\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.LoginSteps.user_enters_username_as_and_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.LoginSteps.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page URL Should be \"https://opensource-demo.orangehrmlive.com/index.php/dashboard\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.LoginSteps.page_URL_Should_be(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat pageObjects.LoginPage.validCredentialsCheck(LoginPage.java:83)\r\n\tat stepDefinitions.LoginSteps.page_URL_Should_be(LoginSteps.java:71)\r\n\tat ✽.Page URL Should be \"https://opensource-demo.orangehrmlive.com/index.php/dashboard\"(file:///C:/Sept20_2021/CucumberProject1/Features/Login.feature:11)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click on logout button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.LogoutSteps.click_on_logout_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.LogoutSteps.close_Browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "Common step",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User launch chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.LoginSteps.user_launch_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"https://opensource-demo.orangehrmlive.com/index.php/auth/login\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.LoginSteps.user_opens_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with Invalid Credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User enters username as \"Admin\" and password as \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.LoginSteps.user_enters_username_as_and_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.LoginSteps.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error message should displayed \"Invalid credentials\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.LoginSteps.error_message_should_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.LogoutSteps.close_Browser()"
});
formatter.result({
  "status": "passed"
});
});