package com.personal.opr.data

import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Service

@Service
class SlackConf {
    @Value("\${slack.bot.token}")
    val slackBotToken = ""

    @Value("\${slack.channel-id.contact-form-submission}")
    val contactFormSubmissionSlackChannelId = ""
}