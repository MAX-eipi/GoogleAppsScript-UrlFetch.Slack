declare namespace UrlFetch_Slack {
    namespace CompositionObjects {
        interface Text {
            type: string;
            text: string;
            emoji?: boolean;
            verbatim?: boolean;
        }

        interface ConfirmationDialog {
            title: Text;
            text: Text;
            confirm: Text;
            deny: Text;
            style?: string;
        }

        interface Option {
            text: Text;
            value: string;
            description?: Text;
            url?: string;
        }

        interface OptionGroup {
            label: Text;
            options: Option[];
        }

        interface Filter {
            include?: string[];
            exclude_external_shared_channels?: boolean;
            exclude_bot_users?: boolean;
        }
    }
}
