import * as React from "react";
import * as Theme from "./theme";

export interface IProps {
    startDate?: Date;
    now: Date;
    done: boolean;
}

const getDaysBetween = (now: Date, dueDate: Date): number => {
    const msToStartOfToday = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
    const msToStartOfDueDate = Date.UTC(dueDate.getFullYear(), dueDate.getMonth(), dueDate.getDate());

    const msInADay = 1000 * 60 * 60 * 24;
    return Math.floor((msToStartOfDueDate - msToStartOfToday) / msInADay);
};

const getLabelText = (now: Date, startDate: Date, daysBetween: number): string => {
    if (daysBetween <= 0) {
        return "Do Today";
    } else if (daysBetween === 1) {
        return "Do Tomorrow";
    } else {
        return "Do " + now.toLocaleDateString("en-US");
    }
};

export class Component extends React.Component<IProps, {}> {
    public render() {
        let startLabel = null;

        if (!this.props.done && this.props.startDate) {

            const days = getDaysBetween(this.props.now, this.props.startDate as Date);
            const urgent = days <= 0;
            const style =
                urgent ?
                Theme.highPriorityLabelStyle :
                Theme.normalPriorityLabelStyle;

            const text = getLabelText(this.props.now, this.props.startDate as Date, days);
            startLabel = <span className="item-label" style={style}>{text}</span>;
        }

        return startLabel;
    }
}
