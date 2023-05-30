import { createChatBotMessage } from "react-chatbot-kit";
import Overview from "./widgets/Overview";
const name = "SumEnergofaqBot"
const config = {
    lang: "no",
    botName: name,
    initialMessages: [
        createChatBotMessage(`Вітаю у чат боті ${name}. Бот може відповісти на ваші запитання `),
        createChatBotMessage(`Тут ви можете ознайомитись з відповідями, клікнувши на відповідний пункт`, {
            delay: 400,
            widget: "overview"
        }),

    ],
    state: {},
    widgets: [
        {
            widgetName: "overview",
            widgetFunc: (props) => <Overview {...props} />,
            mapStateToProps: ["message"]
        }
    ]
}

export default config;