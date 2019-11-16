public class Surgeon extends Doctor {
    private boolean operating ;

    public Surgeon(String specialization, boolean operating) {
        super(specialization);
        this.operating = operating;
    }

    public Surgeon( String name,int NumId, String specialization) {
        super(name, NumId, specialization);
    }

    public Surgeon( String name,int NumId, String specialization, boolean operating) {
        super(name, NumId, specialization);
        this.operating = operating;
    }

    public boolean isOperating() {
        return operating;
    }

    public void setOperating(boolean operating) {
        this.operating = operating;
    }
    
    public String toString() {
    	return name + " " + NumId + " " + specialization + " Operating: " + operating + " ";
    }
    
    @Override
    public void work(){
    	super.work();
    	if (operating == true) {
    		System.out.print(" " + this.getName() + " is operating now.");
    	}
    	else {
    		System.out.print(" " + this.getName() + " is not operating now.");
    	}
    }
}
