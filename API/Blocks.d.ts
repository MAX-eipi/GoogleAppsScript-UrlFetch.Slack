declare namespace UrlFetch_Slack {
    namespace Blocks {
        interface BlockOptions {
            block_id?: string;
        }

        interface Block extends BlockOptions {
            type: string;
        }

        interface SectionOptions extends BlockOptions {
            fields?: UrlFetch_Slack.CompositionObjects.Text[];
            accessory?: Element;
        }

        interface Section extends Block, SectionOptions {
            text: CompositionObjects.Text;
        }

        // eslint-disable-next-line @typescript-eslint/no-empty-interface
        interface DividerOptions extends BlockOptions { }

        interface Divider extends Block, DividerOptions { }

        interface ImageOptions extends BlockOptions {
            title?: UrlFetch_Slack.CompositionObjects.Text;
        }

        interface Image extends Block, ImageOptions {
            image_url: string;
            alt_text: string;
        }

        // eslint-disable-next-line @typescript-eslint/no-empty-interface
        interface ActionOptions extends BlockOptions { }

        interface Action extends Block, ActionOptions {
            elements: (BlockElements.Button | BlockElements.SelectMenu | BlockElements.OverflowMenu | BlockElements.DatePicker)[];
        }

        // eslint-disable-next-line @typescript-eslint/no-empty-interface
        interface ContextOptions extends BlockOptions { }

        interface Context extends Block, ContextOptions {
            elements: (BlockElements.Image[] | UrlFetch_Slack.CompositionObjects.Text)[];
        }

        interface InputOptions extends BlockOptions {
            hint?: UrlFetch_Slack.CompositionObjects.Text;
            optional?: boolean;
        }

        interface Input extends Block, InputOptions {
            label: UrlFetch_Slack.CompositionObjects.Text;
            element: BlockElements.PlainTextInput | BlockElements.SelectMenu | BlockElements.MultiSelectMenu | BlockElements.DatePicker;
        }

        // eslint-disable-next-line @typescript-eslint/no-empty-interface
        interface FileOptions extends BlockOptions { }

        interface File extends Block, FileOptions {
            external_id: string;
            source: string;
        }
    }
}
