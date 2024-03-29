package com.personal.opr

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.context.annotation.Configuration
import org.springframework.web.servlet.config.annotation.CorsRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer

// OPR-25: This is meant to be a short workaround to disable CORS. Ideally we'd have CORS enabled, but that work has
// been split to a separate ticket. In the meantime, our site is susceptible to malicious attackers.
@Configuration
class WebConfiguration: WebMvcConfigurer {
    override fun addCorsMappings(registry: CorsRegistry) {
        registry.addMapping("/**").allowedMethods("*")
    }
}

@SpringBootApplication
class OnlinePortfolioRevampApplication

