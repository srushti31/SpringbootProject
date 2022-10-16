package net.javaguides.springboot.service;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;
@Component
public class UserEventListener{
     
     
    @EventListener
    public void handler(UserEvent event) {
         
        System.out.println("Auditing the event");
    }
}