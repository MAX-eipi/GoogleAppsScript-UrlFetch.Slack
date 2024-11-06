/* eslint @typescript-eslint/camelcase: off */

class SlackCompositionObjectFactory {
    public static plainText(text: string, emoji?: boolean): UrlFetch_Slack.CompositionObjects.Text {
        const ret: UrlFetch_Slack.CompositionObjects.Text = {
            type: 'plain_text',
            text: text,
        };
        if (emoji) ret.emoji = emoji;
        return ret;
    }

    public static markdownText(text: string, verbatim?: boolean): UrlFetch_Slack.CompositionObjects.Text {
        const ret: UrlFetch_Slack.CompositionObjects.Text = {
            type: 'mrkdwn',
            text: text,
        };
        if (verbatim) ret.verbatim = verbatim;
        return ret;
    }

    public static confirmationDialog(
        title: UrlFetch_Slack.CompositionObjects.Text,
        text: UrlFetch_Slack.CompositionObjects.Text,
        confirm: UrlFetch_Slack.CompositionObjects.Text,
        deny: UrlFetch_Slack.CompositionObjects.Text,
        style?: string
    ): UrlFetch_Slack.CompositionObjects.ConfirmationDialog {
        const ret: UrlFetch_Slack.CompositionObjects.ConfirmationDialog = {
            title: title,
            text: text,
            confirm: confirm,
            deny: deny,
        };
        if (style) ret.style = style;
        return ret;
    }

    public static option(
        text: UrlFetch_Slack.CompositionObjects.Text,
        value: string, description?: UrlFetch_Slack.CompositionObjects.Text,
        url?: string
    ): UrlFetch_Slack.CompositionObjects.Option {
        const ret: UrlFetch_Slack.CompositionObjects.Option = {
            text: text,
            value: value,
        };
        if (description) ret.description = description;
        if (url) ret.url = url;
        return ret;
    }

    public static optionGroup(
        label: UrlFetch_Slack.CompositionObjects.Text,
        options: UrlFetch_Slack.CompositionObjects.Option[]
    ): UrlFetch_Slack.CompositionObjects.OptionGroup {
        return {
            label: label,
            options: options,
        };
    }

    public static filter(
        include?: string[],
        excludeExternalSharedChannels?: boolean,
        excludeBotUsers?: boolean
    ): UrlFetch_Slack.CompositionObjects.Filter {
        const ret: UrlFetch_Slack.CompositionObjects.Filter = {};
        if (include) ret.include = include;
        if (excludeExternalSharedChannels) ret.exclude_external_shared_channels = excludeExternalSharedChannels;
        if (excludeBotUsers) ret.exclude_bot_users = excludeBotUsers;
        return ret;
    }
}
