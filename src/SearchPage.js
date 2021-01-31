import React from 'react';
import "./SearchPage.css";
import ChannelRow from "./ChannelRow";
import VideosRow from "./VideosRow"
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined"

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__Filter">
                <TuneOutlinedIcon/>
                <h2>Filter</h2>
            </div>
            <hr/>
            <ChannelRow
            image="https://yt3.ggpht.com/ytc/AAUvwnjDB5-qt37CZd146IgGbiNGdxWlAEpGdsmJkVvxRQ=s88-c-k-c0x00ffffff-no-rj"
            channel="Study Geek"
            verified
            subs="4.87k"
            noOfVideos={50}
            description="Study Geek Provides You Quality Videos for IIT JEE MAINS, IIT JEE ADVANCE, NEET, AIIMS, CBSE, CLASS 11 and Class 12, Board Exams for all the subjects like MATHS , PHYSICS , CHEMISTRY , BIOLOGY , ENGLISH , COMPUTER SCIENCE  etc of Class 11 to Class 12 level education and we also covers some of very good Competitive exams like  IIT JEE, NEET, AIIMS, UPTU , SSC , NDA , UPSC , IAS , BSC, BA for all engineering and medical entrance exams only on Study Geek."           
            />
            <hr/>
            <h4>Latest from Study Geek</h4>
            <br/>

            <VideosRow
            title="UPTU Entrance Exam Chemistry Important Question Paper with Solutions For UPTU 2020 By Study Geek"
            views="978,670 views"
            subs="4.87k"
            timestamp="Sep 20, 2020"
            description="Study Geek Provides You Quality Videos for IIT JEE MAINS, IIT JEE ADVANCE, NEET, AIIMS, CBSE, CLASS 11 and Class 12"
            channelImage="https://yt3.ggpht.com/ytc/AAUvwnjDB5-qt37CZd146IgGbiNGdxWlAEpGdsmJkVvxRQ=s88-c-k-c0x00ffffff-no-rj"
            channel="Study Geek"
            image="https://i.ytimg.com/vi/TG1YrSQYLRw/hqdefault.jpg?sqp=-oaymwEZCOADEI4CSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA88Sqs4g7ElCPwncWUTc3GSqcmDQ"
            />
            
        </div>
    )
}

export default SearchPage
