/* eslint @typescript-eslint/camelcase: off */

class SlackBlockFactory {
    public static section(text: UrlFetch_Slack.CompositionObjects.Text, options: UrlFetch_Slack.Blocks.SectionOptions = {}): UrlFetch_Slack.Blocks.Section {
        const ret: UrlFetch_Slack.Blocks.Section = {
            type: 'section',
            text: text,
        };
        this.copyValue(options, ret, [
            'block_id',
            'fields',
            'accessory',
        ]);
        return ret;
    }

    public static divider(options: UrlFetch_Slack.Blocks.DividerOptions = {}): UrlFetch_Slack.Blocks.Divider {
        const ret: UrlFetch_Slack.Blocks.Divider = {
            type: 'divider',
        };
        this.copyValue(options, ret, [
            'block_id',
        ]);
        return ret;
    }

    public static image(imageUrl: string, altText: string, options: UrlFetch_Slack.Blocks.ImageOptions = {}): UrlFetch_Slack.Blocks.Image {
        const ret: UrlFetch_Slack.Blocks.Image = {
            type: 'image',
            image_url: imageUrl,
            alt_text: altText,
        };
        this.copyValue(options, ret, [
            'block_id',
            'title',
        ]);
        return ret;
    }

    public static action(
        elements: (UrlFetch_Slack.BlockElements.Button | UrlFetch_Slack.BlockElements.SelectMenu | UrlFetch_Slack.BlockElements.OverflowMenu | UrlFetch_Slack.BlockElements.DatePicker)[],
        options: UrlFetch_Slack.Blocks.ActionOptions = {}): UrlFetch_Slack.Blocks.Action {
        const ret: UrlFetch_Slack.Blocks.Action = {
            type: 'actions',
            elements: elements,
        };
        this.copyValue(options, ret, [
            'block_id',
        ]);
        return ret;
    }

    public static context(
        elements: (UrlFetch_Slack.BlockElements.Image[] | UrlFetch_Slack.CompositionObjects.Text)[],
        options: UrlFetch_Slack.Blocks.ContextOptions = {}): UrlFetch_Slack.Blocks.Context {
        const ret: UrlFetch_Slack.Blocks.Context = {
            type: 'context',
            elements: elements,
        };
        this.copyValue(options, ret, [
            'block_id',
        ]);
        return ret;
    }

    public static input(
        label: UrlFetch_Slack.CompositionObjects.Text,
        element: UrlFetch_Slack.BlockElements.PlainTextInput | UrlFetch_Slack.BlockElements.SelectMenu | UrlFetch_Slack.BlockElements.MultiSelectMenu | UrlFetch_Slack.BlockElements.DatePicker,
        options: UrlFetch_Slack.Blocks.InputOptions = {}): UrlFetch_Slack.Blocks.Input {
        const ret: UrlFetch_Slack.Blocks.Input = {
            type: 'input',
            label: label,
            element: element,
        };
        this.copyValue(options, ret, [
            'block_id',
            'hint',
            'optional',
        ]);
        return ret;
    }

    public static file(externalId: string, source: string, options: UrlFetch_Slack.Blocks.FileOptions = {}): UrlFetch_Slack.Blocks.File {
        const ret: UrlFetch_Slack.Blocks.File = {
            type: 'file',
            external_id: externalId,
            source: source,
        };
        this.copyValue(options, ret, [
            'block_id',
        ]);
        return ret;
    }

    private static copyValue<TOptions extends UrlFetch_Slack.Blocks.BlockOptions>(src: TOptions, dist: TOptions, propertyNames: string[]): void {
        if (src) {
            for (const prop of propertyNames) {
                if (prop in src) {
                    dist[prop] = src[prop];
                }
            }
        }
    }
}
