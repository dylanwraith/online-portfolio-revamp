package com.personal.opr

import com.personal.opr.models.ContactFormSubmission
import com.slack.api.Slack
import com.slack.api.methods.MethodsClient
import com.slack.api.methods.request.chat.ChatPostMessageRequest
import com.slack.api.methods.response.chat.ChatPostMessageResponse
import lombok.extern.slf4j.Slf4j
import okhttp3.internal.http2.Http2Reader.Companion.logger
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.web.bind.annotation.*

@Slf4j
@SpringBootApplication
class OnlinePortfolioRevampApplication

fun main(args: Array<String>) {
	runApplication<OnlinePortfolioRevampApplication>(*args)
}

val CONTACT_FORM_SUBMISSION_SLACK_CHANNEL_ID: String = "C06REMKJ6VB";

@RestController
class MessageController {
    @GetMapping("/")
    fun index(@RequestParam("name") name: String) = "Hello, $name!"

    @PostMapping("/contact-form")
    fun submitContactForm(@RequestBody contactFormSubmission: ContactFormSubmission) {
        val request = ChatPostMessageRequest.builder()
            .channel(CONTACT_FORM_SUBMISSION_SLACK_CHANNEL_ID)
            .text(contactFormSubmission.text)
            .build()

        val botAuthToken = "bot-auth-token";
        val methods: MethodsClient = Slack.getInstance().methods(botAuthToken);

        logger.info("Submitting request: $request");

        val response: ChatPostMessageResponse = methods.chatPostMessage(request);

        logger.info("Successfully submitted request. Response: $response")
    }
}