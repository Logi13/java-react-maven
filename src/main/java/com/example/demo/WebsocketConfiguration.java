// package com.example.demo;

// import org.springframework.messaging.simp.config.MessageBrokerRegistry;
// import org.springframework.stereotype.Component;
// import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
// import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
// import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

// @Component
// @EnableWebSocketMessageBroker
// public class WebsocketConfiguration implements WebSocketMessageBrokerConfigurer {
    
//     static final String MESSAGE_PREFIX = "/topic";

//     @Override
//     public void registerStompEndpoints(StompEndpointRegistry registry) {
//         registry.addEndpoint("/payroll").withSockJS();
//     }
// }
