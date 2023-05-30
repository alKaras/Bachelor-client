class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
    }
    handleOptions = (options) => {
        const message = this.createChatBotMessage(
            "Як я можу вам допомогти. Нижче наведено пункти в яких можливо знайти відповіді на ваші запитання",
            {
                widget: "overview",
                loading: true,
                terminateLoading: true,
                ...options
            }
        );

        this.addMessageToState(message);
    };

    handleUnits = () => {
        const message = this.createChatBotMessage(
            "Щоб передати показники вам потрібно \n 1. Зареєструватися в системі/Увійти у кабінет\n 2. Перейти на сторінку 'Передати показники'\n 3. У формі передати показники" 
        );

        this.addMessageToState(message);
    }

    handleServices = () => {
        const message = this.createChatBotMessage(
            "Наша компанія надає наступні послуги: \n 1.Встановлення та налаштування сонячних панелей \n 2. Підключення та налаштування лічильників \n 3. Відключення лічильника"
        );
        this.addMessageToState(message);
    }

    handleCabinet = () => {
        const message = this.createChatBotMessage(
            "Кабінет - це місце, де ви можете передавати та відслідковувати свої показники, замовляти послуги та переглядати замовлені послуги, розраховувати очікувану вартість за спожиту електроенергію"
        );
        this.addMessageToState(message);
    }

    addMessageToState = (message) => {
        this.setState((state) => ({
            ...state,
            messages: [...state.messages, message]
        }));
    };

}

export default ActionProvider;