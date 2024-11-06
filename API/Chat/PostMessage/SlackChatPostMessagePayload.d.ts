declare namespace UrlFetch_Slack {
    interface ChatPostMessageRequest extends UrlFetch.Request {
        token: string;
        channel: string;
        text: string;
        as_suser?: boolean;
        attachments?: BlockElements.Attachment[];
        blocks?: (Blocks.Block | Blocks.Section)[];
        icon_emobj?: string;
        icon_url?: string;
        link_names?: boolean;
        mrkdwn?: boolean;
        parse?: string;
        reply_broadcast?: boolean;
        thread_ts?: string;
        unfurl_links?: boolean;
        unfurl_media?: boolean;
        username?: boolean;
    }

    interface ChatPostMessageResponse extends UrlFetch.Response {
        readonly ok: boolean;
        readonly error?: string;
        readonly channel?: string;
        readonly ts?: string;
        readonly message?: Record<string, unknown>;
    }
}
