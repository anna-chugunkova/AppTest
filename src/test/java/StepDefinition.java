import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

/**
 * Created by chugunkova_a on 17/12/2016.
 */
public class StepDefinition {
    @Given("^I navigated to the website$")
    public void I_navigated_to_the_website() throws Throwable {
        System.out.println("I navigate");
    }

    @When("^I click enabled$")
    public void I_click_enabled() throws Throwable {
        // Express the Regexp above with the code you wish you had
        System.out.println("I enable");
    }

    @And("^I click somewhere else$")
    public void I_click_somewhere_else() throws Throwable {
        System.out.println("I proof");
    }
}
