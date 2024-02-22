import React, {useState} from "react";
import {FlatList, SafeAreaView} from "react-native";
import {ScreenProps} from "../../Types/MainTypes";
import dayjs from "dayjs";
import useSWR from "swr";
import {getNewsApi} from "../../api/news";
import NewsBlock from "../../Components/NewsBlock";
import {NewsListStyle} from "../../Styles/NewsListStyle";
import NewsListInput from "../../Components/NewsListInput";
import {BrandSortList, PopularitySortList} from "../../Constance/News";

const NewsList : React.FC<ScreenProps> = ({navigation, route}) => {

    const [sortType, setSortType] = useState('apple');
    const [popularity, setPopularity] = useState('everything');

    const dateToRequest = dayjs().subtract(1, 'week').format('YYYY-MM-DD')

    const { data } = useSWR('news' + dateToRequest + sortType + popularity, () => getNewsApi(dateToRequest, sortType, popularity))


    return (
        <SafeAreaView style={NewsListStyle.container}>
            <NewsListInput items={BrandSortList} value={sortType} setValue={setSortType}/>
            <NewsListInput items={PopularitySortList} value={popularity} setValue={setPopularity}/>
            <FlatList data={data?.articles} renderItem={({item}) => <NewsBlock navigation={navigation} item={item}/>} />
        </SafeAreaView>
    )
}

export default NewsList
