declare namespace UrlFetch_Slack {
    namespace BlockElements {

        // eslint-disable-next-line @typescript-eslint/no-empty-interface
        interface ElementOptions { }

        interface Element extends ElementOptions {
            type: string;
        }

        interface ButtonOptions extends ElementOptions {
            url?: string;
            value?: string;
            style?: string;
            confirm?: CompositionObjects.ConfirmationDialog;
        }

        interface Button extends Element, ButtonOptions {
            text: CompositionObjects.Text;
            action_id: string;
        }

        interface CheckboxGroupsOptions extends ElementOptions {
            initial_options?: CompositionObjects.Option[];
            confirm?: CompositionObjects.ConfirmationDialog;
        }

        interface CheckboxGroups extends Element, CheckboxGroupsOptions {
            action_id: string;
            options: CompositionObjects.Option[];
        }

        interface DatePickerOptions extends ElementOptions {
            placeholder?: CompositionObjects.Text;
            initial_date?: string;
            confirm?: CompositionObjects.ConfirmationDialog;
        }

        interface DatePicker extends Element, DatePickerOptions {
            action_id: string;
        }

        // eslint-disable-next-line @typescript-eslint/no-empty-interface
        interface ImageOptions extends ElementOptions { }

        interface Image extends Element {
            image_url: string;
            alt_text: string;
        }

        // eslint-disable-next-line @typescript-eslint/no-empty-interface
        interface MultiSelectMenu extends Element { }

        interface MultiSelectMenuWithStaticOptionsOptions extends ElementOptions {
            option_groups?: CompositionObjects.OptionGroup[];
            initial_options?: CompositionObjects.Option[] | CompositionObjects.OptionGroup[];
            confirm?: CompositionObjects.ConfirmationDialog;
            max_selected_items?: number;
        }

        interface MultiSelectMenuWithStaticOptions
            extends MultiSelectMenu, MultiSelectMenuWithStaticOptionsOptions {
            placeholder: CompositionObjects.Text;
            action_id: string;
            options: CompositionObjects.Option[];
        }

        interface MultiSelectMenuWithExternalDataSourceOptions extends ElementOptions {
            min_quest_length?: number;
            initial_options?: CompositionObjects.Option[] | CompositionObjects.OptionGroup[];
            confirm?: CompositionObjects.ConfirmationDialog;
            max_selected_items?: number;
        }

        interface MultiSelectMenuWithExternalDataSource
            extends MultiSelectMenu, MultiSelectMenuWithExternalDataSourceOptions {
            placeholder: CompositionObjects.Text;
            action_id: string;
        }

        interface MultiSelectMenuWithUserListOptions extends ElementOptions {
            initial_users?: string[];
            confirm?: CompositionObjects.ConfirmationDialog;
            max_selected_items?: number;
        }

        interface MultiSelectMenuWithUserList
            extends MultiSelectMenu, MultiSelectMenuWithUserListOptions {
            placeholder: CompositionObjects.Text;
            action_id: string;
        }

        interface MultiSelectMenuWithConversationsListOptions extends ElementOptions {
            initial_conversations?: string[];
            default_to_current_conversation?: boolean;
            confirm?: CompositionObjects.ConfirmationDialog;
            max_selected_items?: number;
            filter?: CompositionObjects.Filter;
        }

        interface MultiSelectMenuWithConversationsList
            extends MultiSelectMenu, MultiSelectMenuWithConversationsListOptions {
            placeholder: CompositionObjects.Text;
            action_id: string;
        }

        interface MultiSelectMenuWithChannelsListOptions extends ElementOptions {
            initial_channels?: string;
            confirm?: CompositionObjects.ConfirmationDialog;
            max_selected_items?: number;
        }

        interface MultiSelectMenuWithChannelsList
            extends MultiSelectMenu, MultiSelectMenuWithChannelsListOptions {
            placeholder: CompositionObjects.Text;
            action_id: string;
        }

        interface OverflowMenuOptions extends ElementOptions {
            confirm?: CompositionObjects.ConfirmationDialog;
        }

        interface OverflowMenu extends Element, OverflowMenuOptions {
            action_id: string;
            options: CompositionObjects.Option[];
        }

        interface PlainTextInputOptions extends ElementOptions {
            placeholder?: CompositionObjects.Text;
            initial_value?: string;
            multiline?: boolean;
            min_length?: number;
            max_length?: number;
        }

        interface PlainTextInput extends Element, PlainTextInputOptions {
            action_id: string;
        }

        interface RadioButtonGroupOptions extends ElementOptions {
            initial_option?: CompositionObjects.Option;
            confirm?: CompositionObjects.ConfirmationDialog;
        }

        interface RadioButtonGroup extends Element, RadioButtonGroupOptions {
            action_id: string;
            options: CompositionObjects.Option[];
        }

        // eslint-disable-next-line @typescript-eslint/no-empty-interface
        interface SelectMenu extends Element { }

        interface SelectMenuWithStaticOptionsOptions extends ElementOptions {
            option_groups?: CompositionObjects.OptionGroup[];
            initial_option?: CompositionObjects.Option | CompositionObjects.OptionGroup;
            confirm?: CompositionObjects.ConfirmationDialog;
        }

        interface SelectMenuWithStaticOptions extends SelectMenu, SelectMenuWithStaticOptionsOptions {
            placeholder: CompositionObjects.Text;
            action_id: string;
            options: CompositionObjects.Option[];
        }

        interface SelectMenuWithExternalDataSourceOptions extends ElementOptions {
            initial_option?: CompositionObjects.Option | CompositionObjects.OptionGroup;
            min_query_length?: number;
            confirm?: CompositionObjects.ConfirmationDialog;
        }

        interface SelectMenuWithExternalDataSource
            extends SelectMenu, SelectMenuWithExternalDataSourceOptions {
            placeholder: CompositionObjects.Text;
            action_id: string;
        }

        interface SelectMenuWithUserListOptions extends ElementOptions {
            initial_user?: string;
            confirm?: CompositionObjects.ConfirmationDialog;
        }

        interface SelectMenuWithUserList extends SelectMenu, SelectMenuWithUserListOptions {
            placeholder: CompositionObjects.Text;
            action_id: string;
        }

        interface SelectMenuWithConversationsListOptions extends ElementOptions {
            initial_conversation?: string;
            default_to_current_conversation?: boolean;
            confirm?: CompositionObjects.ConfirmationDialog;
            response_url_enabled?: boolean;
            filter?: CompositionObjects.Filter;
        }

        interface SelectMenuWithConversationsList
            extends SelectMenu, SelectMenuWithConversationsListOptions {
            placeholder: CompositionObjects.Text;
            action_id: string;
        }

        interface SelectMenuWithChannelsListOptions extends ElementOptions {
            initial_channel?: string;
            confirm?: CompositionObjects.ConfirmationDialog;
            response_url_enabled?: boolean;
        }

        interface SelectMenuWithChannelsList extends SelectMenu, SelectMenuWithChannelsListOptions {
            placeholder: CompositionObjects.Text;
            action_id: string;
        }

        interface AttachmentOptions {
            blocks?: Blocks.Block[];
            color?: string;
        }

        // eslint-disable-next-line @typescript-eslint/no-empty-interface
        interface Attachment extends AttachmentOptions { }
    }
}
