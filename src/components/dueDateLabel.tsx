import * as React from 'react';
import * as Theme from './theme';

export interface Props {
    dueDate?: Date;
    now: Date;
    done: boolean;
}

const getDaysBetween = function(now: Date, dueDate: Date): number {
    const msToStartOfToday = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
    const msToStartOfDueDate = Date.UTC(dueDate.getFullYear(), dueDate.getMonth(), dueDate.getDate());

    const msInADay = 1000 * 60 * 60 * 24;
    return Math.floor((msToStartOfDueDate - msToStartOfToday) / msInADay);
};

const getLabelText = function(now: Date, dueDate: Date, daysBetween: number): string {
    if (daysBetween < 0) {
        return 'Overdue';
    } else if (daysBetween === 0) {
        return 'Due Today';
    } else if (daysBetween === 1) {
        return 'Due Tomorrow';
    } else {
        return 'Due ' + now.toLocaleDateString('en-US');
    }
};

export class Component extends React.Component<Props, {}> {
    render() {
        let dueLabel = null;

        if (!this.props.done && this.props.dueDate) {     

            const days = getDaysBetween(this.props.now, this.props.dueDate as Date);
            const urgent = days <= 1;    
            const style = 
                urgent ? 
                Theme.highPriorityLabelStyle : 
                Theme.normalPriorityLabelStyle;
        
            const text = getLabelText(this.props.now, this.props.dueDate as Date, days);
            dueLabel = <span className="item-label medium-priority" style={style}>{text}</span>;
        }

        return dueLabel;
    }
}
