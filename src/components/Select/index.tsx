import { SelectBox } from "./style";

interface Options {
    label: string;
    value: string;
}

export default function Select({ options }: { options: Array<Options> }) {
    return (
        <SelectBox>
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </SelectBox>
    );
}