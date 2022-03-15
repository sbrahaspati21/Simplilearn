package program.jav.thread;

public class sleep_threading extends Thread{  
	
	 public void run(){  
	  for(int i=1;i<5;i++){  
	    try{
	    		Thread.sleep(2000);  // 2000 miliseconds = 2 secs
	    	}
	    catch(InterruptedException e)
	    {
	    	System.out.println(e);
	    }  
	    System.out.println(Thread.currentThread().getName()+ "  :"+ i);  
	  }  
	 }  
	 
	 public static void main(String args[]){  
	  sleep_threading t1=new sleep_threading();  
	  t1.setName("Java");
	  t1.setPriority(MAX_PRIORITY); 
	  
	  sleep_threading t2=new sleep_threading();  
	  t2.setName("Python");
	  
	  sleep_threading t3=new sleep_threading(); 
	  t3.setName("Oracle");
	  
	  sleep_threading t4=new sleep_threading(); 
	  t4.setName("C++");
	   
	  t1.start();  
	  t2.start();  
	  t3.start();
	  t4.start();
	  
	  System.out.println(t1.getState());
	  System.out.println(t3.getState());
	  System.out.println(t2.getState());
	 }  
	}  