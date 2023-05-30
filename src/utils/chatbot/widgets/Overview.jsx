import Options from './Options'

export default function GeneralOptions(props) {
    const options = [
        {
            name: "Як передати показники",
            handler: props.actionProvider.handleUnits,
            id: 1,
        },
        {
            name: "Які послуги надає компанія",
            handler: props.actionProvider.handleServices,
            id: 2,
        },
        {
            name: "Що таке кабінет",
            handler: props.actionProvider.handleCabinet,
            id: 3,
        }
    ];
    return (<Options options={options} title="Варіанти" {...props} />)
}