package com.example.spring.event;

import org.springframework.context.event.EventListener;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;

import net.javaguides.springboot.service.UserEvent;
@Component
public class UserEventListener{
     
     @Async
    @EventListener
    public void handler(UserEvent event) {
         
        System.out.println("Auditing the event "+event.getId());
    }
}
