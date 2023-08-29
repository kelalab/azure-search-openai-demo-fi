import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "Missä tilanteissa samassa asunnossa asuvat eivät kuulu samaan ruokakuntaan?",
        value: "Missä tilanteissa samassa asunnossa asuvat eivät kuulu samaan ruokakuntaan?"
    },
    {
        text: "Pitääkö yleinen asumistuki lakkauttaa ruokakunnalta, jonka ainoa jäsen kuolee?",
        value: "Pitääkö yleinen asumistuki lakkauttaa yhden hengen ruokakunnalta, jos ruokakunnan ainoa jäsen kuolee?"
    },
    {
        text: "Tarvitseeko alle 18-vuotiaan lapsen tuloja huomioida toimeentulotuessa? ",
        value: "tarvitseeko alle 18-vuotiaan lapsen tuloja huomioida toimeentulotuessa?"
    }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
