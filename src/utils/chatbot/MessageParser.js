class MessageParser {
    constructor(actionProvider, state) {
        this.actionProvider = actionProvider;
        this.state = state;
    }

    parse(message) {
        message = message.toLowerCase();

        if (
            message.includes("допомогти") ||
            message.includes("питання")
        ) {
            return this.actionProvider.handleOptions();
        }
        if (
            message.includes("показник") ||
            message.includes("показники")
        ) {
            return this.actionProvider.handleUnits();
        }
        if (
            message.includes("послуги")
        ) {
            return this.actionProvider.handleServices();
        }
        if (message.includes("кабінет")){
            return this.actionProvider.handleCabinet();
        }
        return this.actionProvider.handleOptions();
    }
}

export default MessageParser;