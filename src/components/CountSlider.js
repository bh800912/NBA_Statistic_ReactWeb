import React from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';

export class CountSlider extends React.Component {

    state = {
        value:2
    }

    onChange = (value) => {
        this.setState({value});
        console.log(this);
        this.props.onChange(value);
    }

    render(){
        const {value} =this.state;
        return(
            <Row>
                <Col offset={4} span={12}>
                    <Slider min={1} max={20}
                            onChange={this.onChange}
                            value={value} />
                </Col>
                <Col span={4}>
                    <InputNumber
                        min={2}
                        max={20}
                        style={{ marginLeft: 16 }}
                        value={value}
                        onChange={this.onChange}
                    />
                </Col>
            </Row>
        );
    }
}
