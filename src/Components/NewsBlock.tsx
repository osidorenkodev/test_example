import React from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";
import {NewsListStyle} from "../Styles/NewsListStyle";
import {NewsBlockProps, NewsItemProps} from "../Types/MainTypes";

const NewsBlock : React.FC<NewsBlockProps> = ({item, navigation}) => {

    const {urlToImage, title, description, url} : NewsItemProps = item

    const onPress = () => {
        navigation.navigate('DetailNews', {webviewUri: url})
    }
    return (
        <TouchableOpacity onPress={onPress} style={NewsListStyle.NewsContainer}>
            <Image style={NewsListStyle.NewsImage} source={{uri: urlToImage}}/>
            <Text style={NewsListStyle.title}>{title}</Text>
            <Text>{description}</Text>
        </TouchableOpacity>
    )
}

export default NewsBlock;
