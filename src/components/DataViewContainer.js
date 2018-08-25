import React from 'react';
import { ShotChart} from "./ShotChart.js";
import { Slider, InputNumber, Row, Col } from 'antd';
import { Radio } from 'antd';
import { Switch, Icon } from 'antd';

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
                <Row>
                    <Col offset={4} span={12}>
                        <Slider min={1} max={20} onChange={this.onCountSliderChange} value={minCount} />
                    </Col>
                    <Col span={4}>
                        <InputNumber
                            min={2}
                            max={20}
                            style={{ marginLeft: 16 }}
                            value={minCount}
                            onChange={this.onCountSliderChange}
                        />
                    </Col>
                </Row>

                <RadioGroup onChange={this.onChartTypeChange} value={this.state.chartType}>
                    <Radio value='hexbin'>Hexbin</Radio>
                    <Radio value='scatter'>Scatter</Radio>
                </RadioGroup>
                <Switch checkedChildren="on" unCheckedChildren="off" defaultChecked onChange={this.onTooltipChange}/>

            </div>
        );
    }
}