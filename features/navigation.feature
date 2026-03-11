Feature: BBC Navigation Menu

  Scenario: Verify navigation works on desktop and mobile

    Given I open the BBC News homepage in desktop view
    When I accept cookie message
    Then the top navigation menu should be visible
    And All navigation menu items are visible
    When I click the "Sport" section
    Then I should be navigated to the Sport page

    Given I open the BBC News homepage in mobile view
    When I accept cookie message
    Then the hamburger menu should be visible
    And All burger menu items are visible
    When I open the hamburger menu
    And I click the "Sport" section in hamburger menu
    Then I should be navigated to the Sport page