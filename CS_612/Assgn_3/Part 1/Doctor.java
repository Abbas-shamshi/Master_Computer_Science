public class Doctor extends HospitalEmployee {
    String specialization;


    public Doctor(String specialization) {
        this.specialization = specialization;
    }

    public Doctor(String name, int NumId, String specialization) {
        super(name,NumId);
        this.specialization = specialization;
    }

    public String getspecialization() {
        return specialization;
    }

    public void setspecialization(String specialization) {
        this.specialization = specialization;
    }
    
    public String toString() {
        return name + " " + NumId + " " + specialization + " ";
    }
    
    @Override
    public void work(){
    	super.work();
        System.out.print(" " + this.getName() + " is a(n) " + this.getspecialization() +  " doctor.");
    }
}
