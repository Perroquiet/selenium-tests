import junit.framework.Test;
import junit.framework.TestSuite;

public class RegisterAccountSuite {

  public static Test suite() {
    TestSuite suite = new TestSuite();
    suite.addTestSuite(Test login.class);
    return suite;
  }

  public static void main(String[] args) {
    junit.textui.TestRunner.run(suite());
  }
}
