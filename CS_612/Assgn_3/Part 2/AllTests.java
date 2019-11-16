package testing;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

@RunWith(Suite.class)
@SuiteClasses({ countTest.class, dividenegTest.class, divideposTest.class, squareTest.class })
public class AllTests {

}
