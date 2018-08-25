import React from 'react';
import { ShotChart} from "./ShotChart.js";
import { Radio, Switch } from 'antd';
import {CountSlider} from "./CountSlider";
import _ from 'lodash';

const RadioGroup = Radio.Group;

export class DataViewContainer extends React.Component {
    state = {
        minCount: 2,
        chartType: 'hexbin',
        displayToolTips: true
    }

    onCountSliderChange = (value) => {
        this.setState({
            minCount: value,
        });
    }

    onChartTypeChange =(e) => {
        this.setState ({
            chartType: e.target.value
        });
    }

    onTooltipChange = (checked) => {
        this.setState ({
            displayToolTips : checked
        });
    }
    render(){
        const { minCount, chartType, displayToolTips } = this.state;

        return (
            <div className='data-view'>
                <ShotChart playerId={this.props.playerId}
                            minCount={minCount}
                           displayToolTips={displayToolTips}
                           chartType={chartType}
                />

                <CountSlider onChange={_.debounce(this.onCountSliderChange, 500)}/>

                <RadioGroup onChange={this.onChartTypeChange} value={this.state.chartType}>
                    <Radio value='hexbin'>Hexbin</Radio>
                    <Radio value='scatter'>Scatter</Radio>
                </RadioGroup>
                <Switch checkedChildren="on" unCheckedChildren="off" defaultChecked onChange={this.onTooltipChange}/>

            </div>
        );
    }
}