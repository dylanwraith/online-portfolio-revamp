package com.personal.opr.controllers

import com.personal.opr.models.ContactFormSubmission
import com.personal.opr.slack.SlackClient
import org.springframework.web.bind.annotation.*

@RestController
class ContactFormController(val slackClient: SlackClient) {

    @PostMapping("/contact-form")
    fun submitContactForm(@RequestBody contactFormSubmission: ContactFormSubmission) {
        slackClient.sendBotMessageToContactFormSubmissionChannel(contactFormSubmission.text);
    }

}