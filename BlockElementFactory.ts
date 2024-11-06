/* eslint @typescript-eslint/camelcase: off */
class SlackBlockElementFactory {
    public static button(
        text: UrlFetch_Slack.CompositionObjects.Text,
        actionId: string,
        options: UrlFetch_Slack.BlockElements.ButtonOptions = {}
    ): UrlFetch_Slack.BlockElements.Button {
        const ret: UrlFetch_Slack.BlockElements.Button = {
            type: 'button',
            text: text,
            action_id: actionId,
        };
        this.copyValue(options, ret, [
            'url',
            'value',
            'style',
            'confirm',
        ]);
        return ret;
    }

    public static checkboxGroups(
        actionId: string,
        options: UrlFetch_Slack.CompositionObjects.Option[],
        extraOptions: UrlFetch_Slack.BlockElements.CheckboxGroupsOptions = {}
    ): UrlFetch_Slack.BlockElements.CheckboxGroups {
        const ret: UrlFetch_Slack.BlockElements.CheckboxGroups = {
            type: 'checkboxes',
            action_id: actionId,
            options: options,
        };
        this.copyValue(extraOptions, ret, [
            'initial_options',
            'confirm',
        ]);
        return ret;
    }

    public static datePicker(actionId: string, options: UrlFetch_Slack.BlockElements.DatePickerOptions = {}): UrlFetch_Slack.BlockElements.DatePicker {
        const ret: UrlFetch_Slack.BlockElements.DatePicker = {
            type: 'datepicker',
            action_id: actionId,
        };
        this.copyValue(options, ret, [
            'placeholder',
            'initial_date',
            'confirm',
        ]);
        return ret;
    }

    public static image(imageUrl: string, altText: string): UrlFetch_Slack.BlockElements.Image {
        return {
            type: 'image',
            image_url: imageUrl,
            alt_text: altText,
        };
    }

    public static multiSelectMenuWithStaticOptions(
        placeholder: UrlFetch_Slack.CompositionObjects.Text,
        actionId: string,
        options: UrlFetch_Slack.CompositionObjects.Option[],
        extraOptions: UrlFetch_Slack.BlockElements.MultiSelectMenuWithStaticOptionsOptions = {}
    ): UrlFetch_Slack.BlockElements.MultiSelectMenuWithStaticOptions {
        const ret: UrlFetch_Slack.BlockElements.MultiSelectMenuWithStaticOptions = {
            type: 'multi_static_select',
            placeholder: placeholder,
            action_id: actionId,
            options: options,
        };
        this.copyValue(extraOptions, ret, [
            'option_groups',
            'initial_options',
            'confirm',
            'max_selected_items',
        ]);
        return ret;
    }

    public static multiSelectMenuWithExternalDataSource(
        placeholder: UrlFetch_Slack.CompositionObjects.Text,
        actionId: string,
        options: UrlFetch_Slack.BlockElements.MultiSelectMenuWithExternalDataSourceOptions = {}
    ): UrlFetch_Slack.BlockElements.MultiSelectMenuWithExternalDataSource {
        const ret: UrlFetch_Slack.BlockElements.MultiSelectMenuWithExternalDataSource = {
            type: 'multi_external_select',
            placeholder: placeholder,
            action_id: actionId,
        };
        this.copyValue(options, ret, [
            'min_quest_length',
            'initial_options',
            'confirm',
            'max_selected_items',
        ]);
        return ret;
    }

    public static multiSelectMenuWithUserList(
        placeholder: UrlFetch_Slack.CompositionObjects.Text,
        actionId: string,
        options: UrlFetch_Slack.BlockElements.MultiSelectMenuWithUserListOptions = {}
    ): UrlFetch_Slack.BlockElements.MultiSelectMenuWithUserList {
        const ret: UrlFetch_Slack.BlockElements.MultiSelectMenuWithUserList = {
            type: 'multi_users_select',
            placeholder: placeholder,
            action_id: actionId,
        };
        this.copyValue(options, ret, [
            'initial_users',
            'confirm',
            'max_selected_items',
        ]);
        return ret;
    }

    public static multiSelectMenuWithConversationsList(
        placeholder: UrlFetch_Slack.CompositionObjects.Text,
        actionId: string,
        options: UrlFetch_Slack.BlockElements.MultiSelectMenuWithConversationsListOptions
    ): UrlFetch_Slack.BlockElements.MultiSelectMenuWithConversationsList {
        const ret: UrlFetch_Slack.BlockElements.MultiSelectMenuWithConversationsList = {
            type: 'multi_conversations_select',
            placeholder: placeholder,
            action_id: actionId,
        };
        this.copyValue(options, ret, [
            'initial_conversations',
            'default_to_current_conversation',
            'confirm',
            'max_selected_items',
            'filter',
        ]);
        return ret;
    }

    public static multiSelectMenuWithChannelsList(
        placeholder: UrlFetch_Slack.CompositionObjects.Text,
        actionId: string,
        options: UrlFetch_Slack.BlockElements.MultiSelectMenuWithChannelsListOptions = {}
    ): UrlFetch_Slack.BlockElements.MultiSelectMenuWithChannelsList {
        const ret: UrlFetch_Slack.BlockElements.MultiSelectMenuWithChannelsList = {
            type: 'multi_channels_select',
            placeholder: placeholder,
            action_id: actionId,
        };
        this.copyValue(options, ret, [
            'initial_channels',
            'confirm',
            'max_selected_items',
        ]);
        return ret;
    }

    public static overflowMenu(
        actionId: string,
        options: UrlFetch_Slack.CompositionObjects.Option[],
        extraOptions: UrlFetch_Slack.BlockElements.OverflowMenuOptions = {}
    ): UrlFetch_Slack.BlockElements.OverflowMenu {
        const ret: UrlFetch_Slack.BlockElements.OverflowMenu = {
            type: 'overflow',
            action_id: actionId,
            options: options,
        };
        this.copyValue(extraOptions, ret, [
            'confirm',
        ]);
        return ret;
    }

    public static plainTextInput(
        actionId: string,
        options: UrlFetch_Slack.BlockElements.PlainTextInputOptions = {}
    ): UrlFetch_Slack.BlockElements.PlainTextInput {
        const ret: UrlFetch_Slack.BlockElements.PlainTextInput = {
            type: 'plain_text_input',
            action_id: actionId,
        };
        this.copyValue(options, ret, [
            'placeholder',
            'initial_value',
            'multiline',
            'min_length',
            'max_length',
        ]);
        return ret;
    }

    public static radioButtonGroup(
        actionId: string,
        options: UrlFetch_Slack.CompositionObjects.Option[],
        extraOptions: UrlFetch_Slack.BlockElements.RadioButtonGroupOptions = {}
    ): UrlFetch_Slack.BlockElements.RadioButtonGroup {
        const ret: UrlFetch_Slack.BlockElements.RadioButtonGroup = {
            type: 'radio_buttons',
            action_id: actionId,
            options: options,
        };
        this.copyValue(extraOptions, ret, [
            'initial_option',
            'confirm',
        ]);
        return ret;
    }

    public static selectMenuWithStaticOptions(
        placeholder: UrlFetch_Slack.CompositionObjects.Text,
        actionId: string,
        options: UrlFetch_Slack.CompositionObjects.Option[],
        extraOptions: UrlFetch_Slack.BlockElements.SelectMenuWithStaticOptionsOptions = {}
    ): UrlFetch_Slack.BlockElements.SelectMenuWithStaticOptions {
        const ret: UrlFetch_Slack.BlockElements.SelectMenuWithStaticOptions = {
            type: 'static_select',
            placeholder: placeholder,
            action_id: actionId,
            options: options,
        };
        this.copyValue(extraOptions, ret, [
            'option_groups',
            'initial_option',
            'confirm',
        ]);
        return ret;
    }

    public static selectMenuWithExternalDataSource(
        placeholder: UrlFetch_Slack.CompositionObjects.Text,
        actionId: string,
        options: UrlFetch_Slack.BlockElements.SelectMenuWithExternalDataSourceOptions = {}
    ): UrlFetch_Slack.BlockElements.SelectMenuWithExternalDataSource {
        const ret: UrlFetch_Slack.BlockElements.SelectMenuWithExternalDataSource = {
            type: 'external_select',
            placeholder: placeholder,
            action_id: actionId,
        };
        this.copyValue(options, ret, [
            'initial_option',
            'min_query_length',
            'confirm,'
        ]);
        return ret;
    }

    public static selectMenuWithUserList(
        placeholder: UrlFetch_Slack.CompositionObjects.Text,
        actionId: string,
        options: UrlFetch_Slack.BlockElements.SelectMenuWithUserListOptions = {}
    ): UrlFetch_Slack.BlockElements.SelectMenuWithUserList {
        const ret: UrlFetch_Slack.BlockElements.SelectMenuWithUserList = {
            type: 'users_select',
            placeholder: placeholder,
            action_id: actionId,
        };
        this.copyValue(options, ret, [
            'initial_user',
            'confirm',
        ]);
        return ret;
    }

    public static selectMenuWithConversationsList(
        placeholder: UrlFetch_Slack.CompositionObjects.Text,
        actionId: string,
        options: UrlFetch_Slack.BlockElements.SelectMenuWithConversationsListOptions = {}
    ): UrlFetch_Slack.BlockElements.SelectMenuWithConversationsList {
        const ret: UrlFetch_Slack.BlockElements.SelectMenuWithConversationsList = {
            type: 'conversations_select',
            placeholder: placeholder,
            action_id: actionId,
        };
        this.copyValue(options, ret, [
            'initial_conversation',
            'default_to_current_conversation',
            'confirm',
            'response_url_enabled',
            'filter',
        ]);
        return ret;
    }

    public static selectMenuWithChannelsList(
        placeholder: UrlFetch_Slack.CompositionObjects.Text,
        actionId: string,
        options: UrlFetch_Slack.BlockElements.SelectMenuWithChannelsListOptions = {}
    ): UrlFetch_Slack.BlockElements.SelectMenuWithChannelsList {
        const ret: UrlFetch_Slack.BlockElements.SelectMenuWithChannelsList = {
            type: 'channels_select',
            placeholder: placeholder,
            action_id: actionId,
        };
        this.copyValue(options, ret, [
            'initial_channel',
            'confirm',
            'response_url_enabled',
        ]);
        return ret;
    }

    public static attachment(options: UrlFetch_Slack.BlockElements.AttachmentOptions = {}): UrlFetch_Slack.BlockElements.Attachment {
        const ret: UrlFetch_Slack.BlockElements.Attachment = {
        };
        this.copyValue(options, ret, [
            'blocks',
            'color',
        ]);
        return ret;
    }

    private static copyValue<T>(src: T, dist: T, propertyNames: string[]): void {
        if (src) {
            for (const prop of propertyNames) {
                if (prop in src) {
                    dist[prop] = src[prop];
                }
            }
        }
    }
}
