public class HospitalEmployee {
    protected int NumId;
    protected String name;


    public HospitalEmployee() {
    }

    public HospitalEmployee( String name, int NumId) {
        this.NumId = NumId;
        this.name = name;
    }

    public int getNumId() {
        return NumId;
    }

    public void setNumId(int NumId) {
        this.NumId = NumId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String toString() {
        return name + " " + NumId + " ";
    }
    
    public void work(){
        System.out.print("\n" + this.getName()+" works for the hospital.");
    }

}
