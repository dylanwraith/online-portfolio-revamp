package com.personal.opr.slack

import com.personal.opr.data.SlackConf
import com.slack.api.Slack
import com.slack.api.methods.request.chat.ChatPostMessageRequest
import okhttp3.internal.http2.Http2Reader.Companion.logger
import org.springframework.stereotype.Service

@Service
class SlackClient(val slackConf: SlackConf) {

    private val botClient = Slack.getInstance().methods(slackConf.slackBotToken)

    fun sendBotMessageToContactFormSubmissionChannel(text: String) {
        sendBotMessageToChannel(slackConf.contactFormSubmissionSlackChannelId, text)
    }

    private fun sendBotMessageToChannel(channelId: String, text: String) {
        logger.info("Sending bot message \"$text\" to Slack.")

        val request = ChatPostMessageRequest.builder()
            .channel(channelId)
            .text(text)
            .build()

        botClient?.chatPostMessage(request);
    }

}