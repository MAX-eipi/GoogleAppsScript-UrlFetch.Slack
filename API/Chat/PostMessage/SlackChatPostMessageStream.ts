class SlackChatPostMessageStream implements UrlFetch.ConcreteStream<UrlFetch_Slack.ChatPostMessageRequest, UrlFetch_Slack.ChatPostMessageResponse> {
    private readonly methodUrl = 'https://slack.com/api/chat.postMessage';
    private readonly method = 'post';

    constructor(readonly request: UrlFetch_Slack.ChatPostMessageRequest) { }

    private _error = '';
    public get error(): string {
        return this._error;
    }

    public get hasError(): boolean {
        return this._error ? true : false;
    }

    // eslint-disable-next-line @typescript-eslint/camelcase
    private getHeader(request: UrlFetch_Slack.ChatPostMessageRequest): GoogleAppsScript.URL_Fetch.HttpHeaders {
        return {
            'content-type': 'application/json; charset=utf-8',
            'authorization': `Bearer ${request.token}`
        };
    }
    // eslint-disable-next-line @typescript-eslint/camelcase
    public getRawRequest(): GoogleAppsScript.URL_Fetch.URLFetchRequest {
        return {
            url: this.methodUrl,
            headers: this.getHeader(this.request),
            method: this.method,
            payload: JSON.stringify(this.request),
            muteHttpExceptions: true,
        };
    }

    // eslint-disable-next-line @typescript-eslint/camelcase
    public setRawResponse(response: GoogleAppsScript.URL_Fetch.HTTPResponse): void {
        this._response = JSON.parse(response.getContentText());
        if (this._response.error) {
            this._error = this._response.error;
        }
    }

    private _response: UrlFetch_Slack.ChatPostMessageResponse = null;
    public get response(): UrlFetch_Slack.ChatPostMessageResponse {
        return this._response;
    }
}
