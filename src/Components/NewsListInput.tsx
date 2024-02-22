import React from "react";
import RNPickerSelect from 'react-native-picker-select';
import {Text, View} from "react-native";
import {SortList} from "../Constance/News";
import {NewsListStyle} from "../Styles/NewsListStyle";

const NewsListInput = ({value = '', setValue = () => {}, items = []}) => {
    return (
        <View style={NewsListStyle.pickerContainer}>
        <RNPickerSelect
            value={value}
            onValueChange={(v) => {
                setValue(v);
            }}
            placeholder={{}}
            items={items}>
            <Text>{items?.find(e => e.value === value)?.label}</Text>
        </RNPickerSelect>
        </View>
    )
}

export default NewsListInput;
